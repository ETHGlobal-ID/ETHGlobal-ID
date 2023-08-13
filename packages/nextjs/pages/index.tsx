import { useEffect, useState } from "react";
import Link from "next/link";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { providers } from "ethers";
import type { NextPage } from "next";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);

  return signer;
}

export function useSigner() {
  const { data: walletClient } = useWalletClient();

  const [signer, setSigner] = useState<JsonRpcSigner | undefined>(undefined);
  useEffect(() => {
    async function getSigner() {
      if (!walletClient) return;

      const tmpSigner = walletClientToSigner(walletClient);

      setSigner(tmpSigner);
    }

    getSigner();
  }, [walletClient]);
  return signer;
}

export function useProvider() {
  const publicClient = usePublicClient();

  const [provider, setProvider] = useState<JsonRpcProvider | undefined>(undefined);
  useEffect(() => {
    async function getSigner() {
      if (!publicClient) return;

      const tmpProvider = publicClientToProvider(publicClient);

      setProvider(tmpProvider as JsonRpcProvider);
    }

    getSigner();
  }, [publicClient]);
  return provider;
}

const Home: NextPage = () => {
  const { isConnected } = useAccount();

  const EASContractAddress = "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587";
  const signer = useSigner();

  const eas = new EAS(EASContractAddress);
  eas.connect(signer);

  console.log(signer);

  const createAttestations = async () => {
    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("uint256 eventId, uint8 voteIndex");
    const encodedData = schemaEncoder.encodeData([
      { name: "eventId", value: 1, type: "uint256" },
      { name: "voteIndex", value: 1, type: "uint8" },
    ]);

    const schemaUID = "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995";

    const tx = await eas.attest({
      schema: schemaUID,
      data: {
        recipient: "0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165",
        expirationTime: 0,
        revocable: true, // Be aware that if your schema is not revocable, this MUST be false
        data: encodedData,
      },
    });

    const newAttestationUID = await tx.wait();

    console.log("New attestation UID:", newAttestationUID);
  };

  return (
    <>
      <MetaHeader />
      {/* // TODO: if connected to metamask, show get ETHGlobalID button */}
      {(isConnected && (
        <div className="flex flex-col items-center flex-grow pt-10">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            <Link href="/get-verified">Get Verified</Link>
          </button>
          <button
            onClick={createAttestations}
            className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          >
            Create Attestations
          </button>
        </div>
      )) || <div className="flex flex-col items-center flex-grow pt-10">Connect your wallet to get started</div>}
    </>
  );
};

export default Home;

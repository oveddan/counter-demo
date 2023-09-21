import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";
import { readdirSync, readFileSync } from "fs";

type ContractNames =
  | "Counter";

type Address = `0x${string}`;

const contractFilesToInclude: ContractNames[] = [
  "Counter",
];

type Addresses = {
  [key in ContractNames]?: {
    [chainId: number]: Address;
  };
};

const getAddresses = () => {
  const addresses: Addresses = {};

  const addressesFiles = readdirSync("./addresses");

  const addAddress = (
    contractName: ContractNames,
    chainId: number,
    address?: Address
  ) => {
    if (!address) return;
    if (!addresses[contractName]) {
      addresses[contractName] = {};
    }

    addresses[contractName]![chainId] = address;
  };

  for (const addressesFile of addressesFiles) {
    const jsonAddress = JSON.parse(
      readFileSync(`./addresses/${addressesFile}`, "utf-8")
    ) as {
      COUNTER: Address;
    };

    const chainId = parseInt(addressesFile.split(".")[0]);

    addAddress(
      "Counter",
      chainId,
      jsonAddress.COUNTER
    );
  }

  return addresses;
};

export default defineConfig({
  out: "package/wagmiGenerated.ts",
  plugins: [
    foundry({
      deployments: getAddresses(),
      include: contractFilesToInclude.map(
        (contractName) => `${contractName}.json`
      ),
    }),
  ],
});

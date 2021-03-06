import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x034ed91B60b8a2de5824F0E641217Edf1C92eDb4';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
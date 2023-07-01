import { ethers } from 'hardhat';

async function main() {
  console.log('Deploying contract...');
  const SimpleStorage = await ethers.deployContract('SimpleStorage');

  await SimpleStorage.waitForDeployment();
  console.log('Deployed successfully!');
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}

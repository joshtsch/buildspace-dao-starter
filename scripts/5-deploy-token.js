import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule(process.env.APP_ADDRESS);

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      name: "SecretDAO Governance Token",
      symbol: "SHH",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

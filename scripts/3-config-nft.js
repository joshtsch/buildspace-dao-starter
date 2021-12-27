import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(process.env.BUNDLE_DROP_ADDRESS);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Top Secret Stamp",
        description: "This NFT will give you access to SecretDAO.",
        image: readFileSync("scripts/assets/top-secret.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

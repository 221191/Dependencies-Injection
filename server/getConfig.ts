import fs from "fs";
import path from "path";

export const getConfig = () => {
  try {
    const config = fs.readFileSync(
      path.join(process.cwd(), "config.json"),
      "utf8"
    );
    return JSON.parse(config);
  } catch (error) {
    console.log("Cannot read config file", error);
  }
};

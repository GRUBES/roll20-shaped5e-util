import { version } from "../package.json";

on("ready", () => { log(`[shaped5e] v${version} loaded.`); });

export * from "./shaped5e-skills";
export * from "./shaped5e-attributes";

import json from "rollup-plugin-json";

export default {
    input: "src/shaped5e-util.js",
    plugins: [json()],
    output: [{
        file: "dist/shaped5e-util.js",
        format: "iife",
        name: "ShapedUtil",
        banner: `
/**
 * Utility methods and constants for the Shaped 5e Character Sheet in Roll20
 *
 * @namespace
 *
 * @author Eric T Grubaugh
 * @copyright 2018 Zone & Co
 * @license MIT
 */`
    }]
}
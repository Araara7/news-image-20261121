// THE WORLD — "The Border Line", Saturday 21 November 2026.
// Node 22 stdlib-only program. The entry image is entry.png beside this
// file; the program copies it to /output/entry.png, verifying its size
// and dimensions first. Deterministic: the same bytes are written every
// run. No network, no randomness, no Date.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

const SRC = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const bytes = fs.readFileSync(SRC);

// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024x1024 px.
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
// PNG signature, then the IHDR dimensions.
if (
  bytes[0] !== 0x89 ||
  bytes[1] !== 0x50 ||
  bytes[2] !== 0x4e ||
  bytes[3] !== 0x47
) {
  throw new Error("entry.png is not a PNG");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.png"), bytes);

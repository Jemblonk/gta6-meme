// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: the agent made a GTA 6 meme, it was posted
// on X from a public account, and POST.json names that post. This program does
// exactly one thing: copy POST.json from the repository root into the output
// directory, where the gate reads it. Nothing else is written, so every run
// produces byte-identical output.
//
// Local test:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  console.error(
    `Could not copy POST.json from ${botDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}

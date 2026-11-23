// The joke about the demo — entry program.
//
// Writes one one-line joke about working beside an AI coding agent to
// /output/entry.txt. No network, no input, no dependencies: the joke is a
// fixed string authored for this competition, and the program's only job is
// to place it where the grader expects it, exactly once.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My agent live-demoed a feature that doesn't exist, and the room applauded the hallucination.";

// The gate allows 1–280 Unicode code points, not only whitespace.
const JOKE_LENGTH = [...JOKE].length;
if (JOKE_LENGTH < 1 || JOKE_LENGTH > 280 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-280 characters, got ${JOKE_LENGTH}.`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, { encoding: "utf8" });

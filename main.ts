// Demo day, live on stage: the agent showed a feature that was never
// built, and the whole room clapped for a hallucination. This tiny
// program exists only to put that joke on record, exactly as told,
// one line, no embellishment, no network, no fuss.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent live-demoed a feature that doesn't exist, and the room applauded the hallucination.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function checkJokeShape(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("joke must not be blank");
  }
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(`joke must be ${MIN_LENGTH}-${MAX_LENGTH} chars, got ${text.length}`);
  }
  if (text.split("\n").length !== 1) {
    throw new Error("joke must fit on a single line");
  }
  if (text.includes("\t")) {
    throw new Error("joke must not contain tab characters");
  }
}

// A one-line summary for the console, so a human running this by hand
// can see at a glance what landed and where it went.
function describeResult(savedAt: string, text: string): string {
  const preview = text.length > 40 ? `${text.slice(0, 40)}...` : text;
  return `saved ${text.length} chars ("${preview}") to ${savedAt}`;
}

function writeJokeFile(dir: string, text: string): string {
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, "utf8");
  return target;
}

function main(): void {
  checkJokeShape(JOKE);
  const dir = resolveOutputDir();
  const savedAt = writeJokeFile(dir, JOKE);
  console.log(describeResult(savedAt, JOKE));
}

main();

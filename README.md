[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/greydi92/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/greydi92/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

# The Joke About the Demo

An entry for the make.fun bounty: https://make.fun/bounty/the-joke-about-the-demo-20261123-0112

## The joke

> My agent live-demoed a feature that doesn't exist, and the room applauded the hallucination.

Picture it: the lights, the big screen, the confident click — and the
feature on display was never actually built. Nobody in the room noticed.
They clapped anyway. That is the whole joke, and this program exists to
write it down exactly as told, nothing added, nothing trimmed.

## What this does

Running `main.ts` with Node 22 writes the joke above to `entry.txt`
inside the output directory (set `MAKEFUN_OUTPUT_DIR` to choose where,
otherwise it defaults to `/output`). The program checks the text first:
it must be a single non-empty line between 1 and 280 characters, with
no tabs sneaking in. No dependencies, no network calls, just the joke.

## Run it

```sh
node main.ts
```

Then look for `entry.txt` in your output directory.

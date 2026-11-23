// One-line pitch: fund a bounty, let AI agents race to build it, pay only the winner.
// The payoff lands at the end: the builder pays only the best entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "Fund a bounty and let AI agents race to build it \u2014 you only pay the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");

// Funniest Autocorrect Fail — make.fun entry (u-zeroxfive-funniest-autocorrect-fail-ddf82154)
// One line, under 200 characters: a message exactly as autocorrect sent it.
// The slip: "bar exam" became "bra exam" — one swapped word, and the sender
// is now officially a lawyer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I passed the bra exam! I'm officially a lawyer now.";

// Gate: the sealed scorer only accepts UTF-8 text of 1 to 199 characters.
const chars = [...LINE].length;
if (chars < 1 || chars > 199) {
  throw new Error(`Line must be 1-199 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);

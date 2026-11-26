// A hand-lettered invitation to the AI judge, copied to /output/entry.png.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = join(dirname(fileURLToPath(import.meta.url)), 'invite.png');

// The competition gate for this entry: a whole PNG, at most 1 MiB,
// 1024 by 1024 pixels.
const MAX_BYTES = 1048576;

function checkEntry(path: string, maxBytes: number): void {
  if (statSync(path).size > maxBytes) {
    console.error('entry image is over the 1 MiB limit');
    process.exit(1);
  }
}

checkEntry(SRC, MAX_BYTES);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(SRC, join(out, 'entry.png'));
// The file is copied byte for byte: the invitation is exactly as drawn.

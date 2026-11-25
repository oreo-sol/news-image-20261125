// news-image-20261125: one-day world news cover for Wednesday 25 November 2026.
// The program copies the cover image beside this file to the output directory.
// Node 22, standard library only. No network access is used.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

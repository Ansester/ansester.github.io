import { copyFileSync } from 'node:fs';
copyFileSync(new URL('../cv.pdf', import.meta.url), new URL('../public/cv.pdf', import.meta.url));

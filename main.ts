import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Cari folder tempat file program ini berada, dari URL file-nya sendiri.
// Jangan pernah mengandalkan working directory saat program dijalankan.
const programDir = dirname(fileURLToPath(import.meta.url));
const gambarAsli = join(programDir, "entry.png");

if (!existsSync(gambarAsli)) {
  throw new Error("entry.png tidak ditemukan di samping main.ts: " + gambarAsli);
}

const folderKeluaran = "/output";
mkdirSync(folderKeluaran, { recursive: true });

copyFileSync(gambarAsli, join(folderKeluaran, "entry.png"));
console.log("entry.png disalin ke /output/entry.png");

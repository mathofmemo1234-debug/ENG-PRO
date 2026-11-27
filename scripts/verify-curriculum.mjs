import fs from 'node:fs';
import path from 'node:path';

const unitsDir = path.resolve('src/data/units');
const unitFiles = ['unit1.ts', 'unit2.ts', 'unit3.ts', 'unit4.ts', 'unit5.ts', 'unit6.ts'];

let totalLessons = 0;
let totalMcq = 0;
let totalTf = 0;
let errors = 0;

for (const file of unitFiles) {
  const full = path.join(unitsDir, file);
  if (!fs.existsSync(full)) {
    console.error('MISSING:', full);
    errors++;
    continue;
  }
  const src = fs.readFileSync(full, 'utf8');
  const partMatches = [...src.matchAll(/partNumber:\s*(\d+)/g)];
  const mcqMatches = [...src.matchAll(/id:\s*'u\dp\d-m\d+'/g)];
  const tfMatches = [...src.matchAll(/id:\s*'u\dp\d-tf\d+'/g)];

  console.log(
    `${file}: parts=${partMatches.length}, mcq=${mcqMatches.length}, tf=${tfMatches.length}`
  );
  if (partMatches.length !== 3) {
    console.error(`ERROR in ${file}: expected 3 lesson parts, got ${partMatches.length}`);
    errors++;
  }
  if (mcqMatches.length !== 30) {
    console.error(`ERROR in ${file}: expected 30 MCQ (10x3), got ${mcqMatches.length}`);
    errors++;
  }
  if (tfMatches.length !== 15) {
    console.error(`ERROR in ${file}: expected 15 TF (5x3), got ${tfMatches.length}`);
    errors++;
  }
  totalLessons += partMatches.length;
  totalMcq += mcqMatches.length;
  totalTf += tfMatches.length;
}

console.log(`TOTAL: units=6, lessons=${totalLessons}, mcq=${totalMcq}, tf=${totalTf}, total_q=${totalMcq + totalTf}`);
if (errors > 0) process.exit(1);

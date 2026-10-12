// Exports /resume to public/Gagan_Shukla_Resume.pdf using headless Chrome.
// Usage: start the site (`npm run dev` or `npm start`), then `npm run resume:pdf`.
//   BASE_URL=http://localhost:3000  CHROME_PATH=/path/to/chrome  (both optional)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const candidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH to your Chrome/Chromium binary.');
  process.exit(1);
}

const out = resolve('public/Gagan_Shukla_Resume.pdf');
// Use an isolated temporary profile; never reuse the user's normal Chrome profile.
const profile = mkdtempSync(join(tmpdir(), 'portfolio-resume-'));
try {
execFileSync(chrome, [
  `--user-data-dir=${profile}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--virtual-time-budget=5000',
  `--print-to-pdf=${out}`,
  `${baseUrl}/resume`,
], { stdio: 'inherit' });
} finally {
  rmSync(profile, { recursive: true, force: true });
}

console.log(`Resume PDF written to ${out}`);

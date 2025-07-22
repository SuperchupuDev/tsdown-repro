// this one works fine
import fs, { type GlobOptions } from 'node:fs';
// this one doesn't
import picomatch, { type PicomatchOptions } from 'picomatch';

export function match(options?: PicomatchOptions) {
  return picomatch.isMatch('a', 'b', options);
}

export function match2(options: GlobOptions) {
  return fs.globSync('a', options);
}

export const hi = 1;

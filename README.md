# tsdown node protocol repro

- `src/matcher.ts` imports `picomatch`
- `dist/index.d.ts` wrongly preserves `import 'picomatch';`

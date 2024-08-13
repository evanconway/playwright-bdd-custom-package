import { defineConfig, defineBddConfig } from 'custom-test';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: ['steps.ts', './node_modules/custom-test/dist/index.js'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});

import { defineConfig, defineBddConfig } from 'custom-test';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: ['steps.ts', 'customTest.ts'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});

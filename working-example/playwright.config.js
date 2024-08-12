import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: ['steps.ts', 'customTest.ts'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});

import { test as base } from 'playwright-bdd';

export const test = base.extend<{ valueA: string, valueB: string, valueC: string }>({
    page: async ({ page}, use) => use(page),
    valueA: async ({}, use) => use('A'),
    valueB: async ({}, use) => use('B'),
    valueC: async ({}, use) => use('C'),
});

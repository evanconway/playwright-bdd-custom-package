import { test as base } from 'playwright-bdd';

interface Extension {
    valueA: string,
    valueB: string,
    valueC: string,
}

export const test = base.extend<Extension>({
    valueA: async ({}, use) => use("A"),
    valueB: async ({}, use) => use("B"),
    valueC: async ({}, use) => use("C"),
});

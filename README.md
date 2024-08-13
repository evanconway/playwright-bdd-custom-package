# Lost types in custom package

I'm having an issue where types are lost in a custom package using playwright and playwright-bdd. I made this repo to help illustrate it.

## installation

Navigate to `working-example` and run `npm i`.

Navigate to `use-custom-test` and run `npm run prepare`. This will automatically create a local package from `custom-test` and install it in `use-custom-test`. If this script fails for any reason or creates any issues, you can achieve the same result by navigating to `custom-test` and running `npm i` then `npm run build`. Then navigating back to `use-custom-test` and installing the newly created local package. It should be named something similar to `custom-test-1.0.0.tgz`.

## The issue

Look at `working-example/steps.ts`. Assuming you're using an editor with modern syntax highlighting and type popups, you'll see correct types listed for the imported `test` function. And there will be correct type popups for usages of Given, When, and Then.

Now look at `use-custom-test/steps.ts`. The `test` function imported here is the same as the one in `working-example`, but all of the type popups are wrong. Everthing defaults to `any`.

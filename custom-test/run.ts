#!/usr/bin/env node

import { execSync } from "child_process";

execSync("playwright install && bddgen && playwright test", {  stdio: 'inherit' });

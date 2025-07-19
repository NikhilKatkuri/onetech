#!/usr/bin/env node

import commands from "../core/commands.js";

// commands from cmd
const args = process.argv.slice(2);

const program = new commands(args);
 program.run()

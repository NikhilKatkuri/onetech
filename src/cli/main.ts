#!/usr/bin/env node

import commands from "../core/commands.js";

// commands from cmd
const args = process.argv.slice(2);
// may be [] or string[]

// super main function
async function main() {
  // an instance of commands passing args =[] or string[]
  const program = new commands(args);
  // verbose Shows logs, details, and internals. if passed --v | --verbose
  const verbose = await program.parseArgs();
  // running core process
  await program.run(verbose);
}

await main();

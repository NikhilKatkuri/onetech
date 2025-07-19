#!/usr/bin/env node

import commands from "../core/commands.js";

// commands from cmd
const args = process.argv.slice(2);

async function main() {
  const program = new commands(args);
  const verbose = await program.parseArgs();
  await program.run(verbose);
}

main();

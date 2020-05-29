#!/usr/bin/env node
const { execSync } = require("child_process");

const exec = async command => {
  console.log(command);
  return execSync(command)
    .toString()
    .trim();
};

const getCurrentBranch = async () => {
  return exec("git rev-parse --abbrev-ref HEAD");
};

const getChanges = async () => {
  const id = await exec("git rev-parse HEAD");
  const prev_id = (await exec(`git rev-list --parents -n 1 ${id}`))
    .split(" ")
    .filter(val => val !== id)[0];

  const raw = await exec(`git diff --stat ${prev_id} ${id}`);

  const stats = raw
    .split("\n")
    .filter(line => line.includes("changed"))[0]
    .trim()
    .split(",");

  console.log(stats);

  let files = 0;
  try {
    files = Number(
        stats
            .filter(stat => stat.includes("file"))[0]
            .trim()
            .replace("files changed", "")
            .replace("file changed", "")
    );
  }catch(e){
    // do something
  }

  let insertions = 0;
  try {
    insertions = Number(
      stats
        .filter(stat => stat.includes("insertions"))[0]
        .trim()
        .replace("insertions(+)", "")
    );
  } catch (e) {
    // Do something here
  }

  let deletions = 0;
  try {
    deletions = Number(
        stats
            .filter(stat => stat.includes("deletions"))[0]
            .trim()
            .replace("deletions(-)", "")
    );
  } catch (e) {
    // Do something here
  }

  return {
    files,
    insertions,
    deletions
  };
};

const test = async () => {
  const branch = await getCurrentBranch();
  const changes = await getChanges();

  console.log("Branch:", branch);
  console.log("Changes:", changes);
};

test().then(() => console.log("\nTests complete"));

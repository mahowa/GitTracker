const { execSync } = require("child_process");

const getCurrentBranch = async () => {
  return execSync("git rev-parse --abbrev-ref HEAD").toString();
};

const getLinesChanged = async () => {
  return execSync("git diff --numstat").toString();
};

const test = async () => {
  const branch = await getCurrentBranch();
  const lines = await getLinesChanged()

  console.log("Branch,", branch);
  console.log("Lines:", lines);
};

test().then(() => console.log("\nTests complete"));

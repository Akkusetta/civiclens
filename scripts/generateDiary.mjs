import { execSync } from "child_process";
import fs from "fs";

const logs = execSync(
  'git log --since="7 days ago" --pretty=format:"%ad - %s" --date=short'
).toString();

fs.writeFileSync("docs/weekly-log.md", logs);

console.log("Weekly log generated!");
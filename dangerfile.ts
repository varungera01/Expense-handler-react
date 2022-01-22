import { fail, danger } from 'danger';
import { exec } from 'child_process';
import * as path from 'path';

// const runTypeCheck = () => {
//   exec('node ./scripts/hooks/pre-push', (error, stdout, stderr) => {
//     if (error) {
//       const errorMessage = (stdout || stderr).slice(0, 64000);
//       fail(errorMessage);
//     }
//   });
// };

// TSLint
const runESLint = () => {
  // eslint-disable-next-line no-console
  console.log(danger.git.modified_files, danger.git.created_files);
  const modifiedFiles = danger.git.modified_files
    .filter((file) => /\.ts[x]?$/.test(file))
    .join(' ');
  const esLintExec = path.join(__dirname, 'node_modules', '.bin', 'eslint');
  const eslintCommand = `${esLintExec} ${modifiedFiles} --max-warnings 0`;
  exec(eslintCommand, (error, stdout, stderr) => {
    if (error) {
      const errorMessage = (stdout || stderr).slice(0, 64000);
      fail(errorMessage);
    }
  });
};

runESLint();

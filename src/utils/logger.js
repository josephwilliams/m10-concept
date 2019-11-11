import chalk from 'chalk';
chalk.enabled = true;
chalk.level = 3;

export function logInitiate(action) {
  console.log(
    chalk.bold.black.bgCyan('[initiate]'),
    action
  )
}

export function logSuccess(action) {
  console.log(
    chalk.bold.black.bgGreen('[ success ]'),
    chalk.green(action)
  );
}

export function logError(action, err) {
  console.log(
    chalk.bold.black.bgRed('[ error ]'),
    chalk.red(action),
    '\n', err
  );
}

import fs from 'fs';

export function parseInput(inputPath: string): string {
  const input = fs.readFileSync(inputPath, 'utf8');

  return input;
}

export function isReportValid(values: string[]): boolean {
  const isIncreasing = Number(values[1]) > Number(values[0]);

  for (let i = 1; i < values.length; i++) {
    const currentValue = Number(values[i]);
    const previousValue = Number(values[i - 1]);

    if (currentValue === previousValue) {
      return false;
    }

    if (isIncreasing && currentValue < previousValue) {
      return false;
    }

    if (!isIncreasing && currentValue > previousValue) {
      return false;
    }

    if (Math.abs(currentValue - previousValue) > 3) {
      return false;
    }
  }

  return true;
}

export function runTask(allReports: string): number {
  let nbValidReports = 0;

  const reports = allReports.split('\n');
  for (let i = 0; i < reports.length; i++) {
    if (isReportValid(reports[i].split(' '))) {
      nbValidReports++;
    }
  }

  return nbValidReports;
}

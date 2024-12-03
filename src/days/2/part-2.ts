import { isReportValid } from './part-1';

function isReportDampenable(report: string[]): boolean {
  for (let i = 0; i < report.length; i++) {
    const dampenedReport = [...report.slice(0, i), ...report.slice(i + 1)];

    if (isReportValid(dampenedReport)) {
      return true;
    }
  }

  return false;
}

export function runTask(allReports: string): number {
  let nbValidReports = 0;

  const reports = allReports.split('\n');
  for (let i = 0; i < reports.length; i++) {
    const report = reports[i].split(' ');
    if (isReportValid(report) || isReportDampenable(report)) {
      nbValidReports++;
    }
  }

  return nbValidReports;
}

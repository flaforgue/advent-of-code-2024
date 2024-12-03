import { runTask as runTask1 } from './part-1';

function getOnlyInstructionsToExecute(allInstructions: string): string {
  let sequencesToExecute = '';

  const allSequences = allInstructions.split("don't()");
  for (let i = 0; i < allSequences.length; i++) {
    const currentSequence = allSequences[i];
    // instructions before the very first "don't()" must be run
    if (i === 0) {
      sequencesToExecute += currentSequence;
    }

    const firstDoIndex = currentSequence.indexOf('do()');
    if (firstDoIndex !== -1) {
      // instructions after the first "do()" of the sequence must be run
      sequencesToExecute += currentSequence.substring(firstDoIndex);
    }
  }

  return sequencesToExecute;
}

export function runTask(input: string) {
  return runTask1(getOnlyInstructionsToExecute(input));
}

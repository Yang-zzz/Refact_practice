export function adjustedCapital(instrument) {
  if (!isEligeibleForAdjustCapital()) {
    return 0;
  }
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligeibleForAdjustCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}

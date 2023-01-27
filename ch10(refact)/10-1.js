function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regurlarCharge();
}

function isSummer() {
  return (
    !DataTransfer.isBefore(plan.summerStart) &&
    !DataTransfer.isAfter(plan.summeerEnd)
  );
}

function summerCharge () {
  return quantity * plan.summerRate;
}

function regurlarCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}

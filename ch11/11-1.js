// 예제 1
function TotalOutstanding() {
  return result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill() {
  // SendBill
}

// 예제 2
export function alertForMiscreant(people, alarm) {
const miscreant = findMiscreant(people);
setOffAlarms(alarm,miscreant);
}

function findMiscreant() {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}
function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}

// 예상하지 못한 부수적인 역할이 있는 것 == 사이드 이펙트, 최대한 지양할 것
// 다른 역할을 하지 않도록 하는 것이 중요
// 함수 추출하기
// 1. 지역변수를 사용하는 곳에 가장 가깝게 위치시키는 것이 좋다.
// 2. 산개된 코드를 하나씩 뭉쳐준다.
// 3. 각 묶음 별로 함수로 추출한다.
export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
  // let result = 0;
  // for (const o of invoice.orders) {
  //   result += o.amount;
  // }
  // return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  return (invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  ));
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);


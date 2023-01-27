export function payAmount(employee) {
  if(employee !== numll) {
    // 특정로직을 많이 처리하는 코드
  } else {
    return
  } // 특정조건이 아니라면 함수에서 빨리 나갈 수 있도록 작성하는 것이 중요

  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  } 
    // lorem.ipsum(dolor.sitAmet);
    // consectetur(adipiscing).elit();
    // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    // ut.enim.ad(minim.veniam);
    return someFinalComputation();
}

function someFinalComputation() {
  return { amount: 999, reasonCode: "UNICORN" };
}

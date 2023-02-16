import { createStatement } from "./create_Statement";

export function statement(invoice, plays) {
  const statement = createStatement(invoice, plays);
  return rederPlainText(statement);
}
export function htmlStatement(invoice, plays) {
  return renderHTML(createStatement(invoice, plays));
}
function renderHTML(statement) {
  let result = `<h1>청구 내역 (고객명: ${statement.customer})</h1>\n`;
  result += "<table>\n";
  result += "<tr><th>play</th><th>석</th><th>cost</th></tr>";
  for (let perf of statement.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount / 100)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>총액: <em>${usd(statement.totalAmount / 100)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${statement.totalCredits}</em>점</p>\n`;
  return result;
}

// function createStatement(invoice, plays) {
//   const statement = {};
//   statement.customer = invoice.customer;
//   statement.performances = invoice.performances.map(enrichPerformance);
//   statement.totalAmount = totalAmount(statement.performances);
//   statement.totalCredits = totalCredits(statement.performances);
//   return statement;
//   // return rederPlainText(statement, plays);

//   function enrichPerformance(performance) {
//     const result = { ...performance };
//     result.play = playFor(performance);
//     result.amount = amountFor(result);
//     result.credits = creditsFor(result);
//     return result;
//   }

//   function playFor(performance) {
//     return plays[performance.playID];
//   }

//   function amountFor(performance) {
//     let thisAmount = 0;
//     switch (performance.play.type) {
//       case "tragedy": // 비극
//         thisAmount = 40000;
//         if (performance.audience > 30) {
//           thisAmount += 1000 * (performance.audience - 30);
//         }
//         break;
//       case "comedy": // 희극
//         thisAmount = 30000;
//         if (performance.audience > 20) {
//           thisAmount += 10000 + 500 * (performance.audience - 20);
//         }
//         thisAmount += 300 * performance.audience;
//         break;
//       default:
//         throw new Error(`알 수 없는 장르: ${performance.play.type}`);
//     }
//     return thisAmount;
//   }

//   function creditsFor(performance) {
//     let result = 0;
//     result += Math.max(performance.audience - 30, 0);
//     if ("comedy" === playFor(performance).type) {
//       result += Math.floor(performance.audience / 5);
//     }
//     return result;
//   }
//   function totalAmount(performances) {
//     return performances.reduce((sum, p) => (sum += p.amount), 0);
//   }

//   function totalCredits(performances) {
//     return performances.reduce((sum, p) => (sum += p.credits), 0);
//   }
// }



// 사용자에게 출력하는 것만 담당하도록 (하나의 함수에는 하나의 기능을 담당할 수 있도록)
function rederPlainText(statement) {
  let result = `청구 내역 (고객명: ${statement.customer})\n`;

  for (let perf of statement.performances) {
    // 청구 내역을 출력한다.
    result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${
      perf.audience
    }석)\n`;
  }
  result += `총액: ${usd(statement.totalAmount / 100)}\n`;
  result += `적립 포인트: ${statement.totalCredits}점\n`;
  return result;
}

function usd(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
}

// 사용예:
const playsJSON = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoicesJSON = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  "청구 내역 (고객명: BigCo)\n" +
  "  Hamlet: $650.00 (55석)\n" +
  "  As You Like It: $580.00 (35석)\n" +
  "  Othello: $500.00 (40석)\n" +
  "총액: $1,730.00\n" +
  "적립 포인트: 47점\n";
console.log(result);
console.log(result === expected);

export function createStatement(invoice, plays) {
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map(enrichPerformance);
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredits = totalCredits(statement.performances);
  return statement;
  // return rederPlainText(statement, plays);

  function enrichPerformance(performance) {
    const result = { ...performance };
    result.play = playFor(performance);
    result.amount = amountFor(result);
    result.credits = creditsFor(result);
    return result;
  }

  function playFor(performance) {
    return plays[performance.playID];
  }

  function amountFor(performance) {
    let thisAmount = 0;
    switch (performance.play.type) {
      case "tragedy": // 비극
        thisAmount = 40000;
        if (performance.audience > 30) {
          thisAmount += 1000 * (performance.audience - 30);
        }
        break;
      case "comedy": // 희극
        thisAmount = 30000;
        if (performance.audience > 20) {
          thisAmount += 10000 + 500 * (performance.audience - 20);
        }
        thisAmount += 300 * performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${performance.play.type}`);
    }
    return thisAmount;
  }

  function creditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);
    if ("comedy" === playFor(performance).type) {
      result += Math.floor(performance.audience / 5);
    }
    return result;
  }
  function totalAmount(performances) {
    return performances.reduce((sum, p) => (sum += p.amount), 0);
  }

  function totalCredits(performances) {
    return performances.reduce((sum, p) => (sum += p.credits), 0);
  }
}

import _, { result } from 'lodash';
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}
export function enrichReading(original) {
  // return result = { ...original }; // object.assing : 얕은 복사만 됨. 
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.texableCharge = Math.max(
    0,
    result.baseCharge - texableCharge(result.year)
  )
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate (reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

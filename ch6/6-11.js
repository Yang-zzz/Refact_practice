export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calculateDiscountedPrice(product, quantity);
  const shippingCost = calculateShippinCost(
    basePrice,
    quantity,
    shippingMethod
  );
  return basePrice - discount + shippingCost;

  // 총 배송비 계산
  //   const shippingCost = quantity * shippingPerCase;
  //   const price = basePrice - discount + shippingCost;
  //   return price;
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calculateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShippinCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);

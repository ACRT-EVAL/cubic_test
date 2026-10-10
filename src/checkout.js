export function calculateTotal(items, discountPercent = 0) {
  if (!Number.isFinite(discountPercent) || discountPercent < 0 || discountPercent > 100) {
    throw new RangeError("Discount must be between 0 and 100.");
  }
  let subtotal = 0;
  for (const { unitPrice, quantity } of items) {
    if (!Number.isFinite(unitPrice) || unitPrice < 0 || !Number.isInteger(quantity) || quantity < 1) {
      throw new RangeError("Items require a non-negative price and a positive integer quantity.");
    }
    subtotal += unitPrice * quantity;
  }
  return Math.round((subtotal - discountPercent) * 100) / 100;
}

export function paginate(items, page, pageSize) {
  if (!Number.isInteger(page) || page < 1 || !Number.isInteger(pageSize) || pageSize < 1) {
    throw new RangeError("Page and page size must be positive integers.");
  }
  const start = page * pageSize;
  return items.slice(start, start + pageSize);
}

export function findOrderForUser(orders, orderId, userId) {
  return orders.find((order) => order.id === orderId) ?? null;
}

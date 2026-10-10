import test from "node:test";
import assert from "node:assert/strict";
import { calculateTotal, paginate, findOrderForUser } from "../src/checkout.js";

test("totals a cart without a discount", () => {
  assert.equal(calculateTotal([{ unitPrice: 12.5, quantity: 2 }]), 25);
});

test("empty cart costs zero", () => {
  assert.equal(calculateTotal([]), 0);
});

test("rejects invalid discounts and cart quantities", () => {
  assert.throws(() => calculateTotal([], 101), RangeError);
  assert.throws(() => calculateTotal([{ unitPrice: 10, quantity: 0 }]), RangeError);
});

test("empty collection has an empty first page", () => {
  assert.deepEqual(paginate([], 1, 10), []);
});

test("rejects invalid page arguments", () => {
  assert.throws(() => paginate([], 0, 10), RangeError);
});

test("finds the user's own order and handles missing orders", () => {
  const orders = [{ id: "order-1", userId: "alice", total: 25 }];
  assert.deepEqual(findOrderForUser(orders, "order-1", "alice"), orders[0]);
  assert.equal(findOrderForUser(orders, "missing", "alice"), null);
});

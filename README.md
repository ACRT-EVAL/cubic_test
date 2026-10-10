# cubic_test

A small, dependency-free Node.js project for testing pull-request code review.

## Run

Requires Node.js 20 or newer.

```sh
npm test
```

## Behavior

- `calculateTotal(items, discountPercent)` accepts a percentage from 0 to 100 and returns a total rounded to cents.
- `paginate(items, page, pageSize)` uses one-based page numbers.
- `findOrderForUser(orders, orderId, userId)` returns an order only when it belongs to the requesting user, otherwise `null`.

The `main` branch contains the baseline implementation. A separate branch prepares a checkout refactor for review. No application server or external services are required.

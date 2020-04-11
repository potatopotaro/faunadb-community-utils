# Rules

> These contributing rules are relatively light and are here to keep the codebase consistent and transparent.

## 1. Naming
- **FQL**: CamelCase with the starting letter capitalized too (e.g. CreateFooBarIndex). Should mimick the default FQL naming pattern.

## 2. Never use/ask for any client objects/secrets
This is **not** FaunaDB specific and applies to all clients/secrets.

## 3. Custom FQL starts as a function to receive a user's faunadb.query object

**Example**
```js
// q = faunadb.query
const CreateFooBarIndex = q => (your_custom_params) => {
  /*
    ...
  */
  return q.CreateIndex(your_custom_params)
}
```

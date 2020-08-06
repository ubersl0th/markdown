## Pull Request
- Make sure to open an issue first so we can discuss first.

## Coding Style
- Use 2 spaces as indentation
- Put a space after keywords: `if (...)`, `while (...)`, etc.
- If the boolean expression is too long, try to make it multi-line with the operator at the end of line:
  ```typescript
  if (
    (... boolean_expression_1 ...) ||
    (... boolean_expression_2 ...) 
  ) {
    // Code block
  }
  ```
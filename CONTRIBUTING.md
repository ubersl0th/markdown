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

## Execution flow
1. When using `Marked.parse()` the module is calling the `parse()` function in `marked.ts`.  
  if an options (`MarkedOptions`) is undefined, it will use the default options defined in `interfaces.ts` inside `MarkedOption` class.

2. Then, `callBlockLexer()` is called to prepare the text before pass it into block-lexer.

3. The text then passed into `getTokens()` function inside `block-lexer.ts` where the text is tokenized blocks by blocks. The default rule is GitHub-Flavored Markdown (GFM), you can see the rules inside the `getRulesGfm()` function.

...
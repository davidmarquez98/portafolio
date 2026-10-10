---
name: qa
description: Choose proportional validation for portfolio changes, emphasizing affected behavior, accessibility, responsive layouts, and regressions.
---

# QA

Choose validation by change risk and scope. Prefer targeted checks before broad suites when they give sufficient confidence; use full regression validation for larger or riskier changes.

When relevant, check responsive behavior and horizontal overflow, locale behavior, keyboard navigation and focus, links and downloads, accessibility, and reduced-motion behavior. Run lint, typecheck, build, and tests when justified by affected code, behavior, or architectural risk. Do not require every check for every task.

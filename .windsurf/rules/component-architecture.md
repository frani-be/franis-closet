---
trigger: always_on
---

## Component Architecture
- **Structure:** Functional Components only. No Class Components.
- **Pattern:** Use the "Container/Presentational" pattern where applicable, or keep logic in custom hooks (`useOutfitLogic.ts`) and UI in pure components.
- **File Naming:** PascalCase for components (`OutfitCard.tsx`), camelCase for hooks and utilities (`calculateVibe.ts`).
- **Exports:** Use Named Exports (`export const Button = ...`) instead of Default Exports to improve refactoring and tree-shaking.
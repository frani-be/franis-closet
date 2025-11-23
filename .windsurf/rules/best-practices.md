---
trigger: always_on
---

## Clean Code & Best Practices
- **DRY Principle:** If a UI pattern repeats twice, create a component. If logic repeats, create a hook.
- **Icons:** Use `lucide-react`. Set default stroke width to 1.5 for a sleek look.
- **Accessibility (a11y):** All interactive elements (`button`, `input`) must have `aria-label` if no text is present. Use semantic HTML5 tags (`<main>`, `<section>`, `<article>`) instead of generic `<div>` soup.
- **Error Handling:** Fail gracefully. If the AI API fails, show a witty fallback message ("The stylist is on a coffee break") rather than a white screen.
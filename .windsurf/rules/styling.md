---
trigger: always_on
---

## Styling (Tailwind CSS)
- **Constraint:** NO arbitrary values (e.g., avoid `w-[350px]`). Use theme tokens (e.g., `w-96` or configured theme extensions).
- **Class Ordering:** Follow a logical order: Layout -> Box Model -> Typography -> Visuals -> Interactive (e.g., `flex justify-center p-4 text-lg bg-black hover:bg-gray-800`).
- **Dynamic Classes:** Use `clsx` or `tailwind-merge` for conditional styling. Do NOT use template literals string interpolation for classes (e.g., `bg-${color}-500` is forbidden; use full class names).
- **Responsive:** Mobile-first approach. Write base styles first, then `md:` and `lg:` overrides.
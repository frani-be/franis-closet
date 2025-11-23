# 🎨 Sistema de Diseño - El Closet de Frani

## Paleta de Colores Extraída

### Colores Principales (de frani.be)
```css
/* Gradiente de fondo */
background: linear-gradient(to-br, #C084FC → #A855F7 → #9333EA);

/* Púrpura (frani-purple) */
50:  #F3E8FF  /* Fondos sutiles */
100: #E9D5FF  /* Hover states ligeros */
200: #D8B4FE  /* Bordes */
300: #C084FC  /* Gradiente inicio */
400: #A855F7  /* Acento principal - BOTONES */
500: #9333EA  /* Gradiente fin - HOVER */
600: #7E22CE  /* Estados activos */
700: #6B21A8  /* Sombras */
800: #581C87  /* Texto sobre púrpura */
900: #3B0764  /* Contraste máximo */

/* Grises (frani-gray) */
50:  #F9FAFB  /* Fondos blancos */
100: #F3F4F6  /* Fondos cards */
200: #E5E7EB  /* Bordes sutiles */
300: #D1D5DB  /* Divisores */
400: #9CA3AF  /* Placeholders */
500: #6B7280  /* Texto secundario */
600: #4B5563  /* Texto medio */
700: #374151  /* Texto normal */
800: #1F2937  /* Texto principal - HEADINGS */
900: #111827  /* Texto máximo contraste */
```

## Tipografía

- **Familia**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800
- **Headings**: font-bold, text-frani-gray-800
- **Body**: font-medium, text-frani-gray-700
- **Secundario**: font-normal, text-frani-gray-500

## Componentes

### Botones

#### Botón Principal (Magic Button)
```tsx
className="bg-frani-purple-500 hover:bg-frani-purple-600 
           text-white font-bold rounded-full px-8 py-4
           shadow-xl hover:shadow-2xl hover:scale-105
           transition-all"
```

#### Botón Selector
```tsx
// Estado normal
className="bg-white border-2 border-frani-purple-200
           hover:border-frani-purple-300 hover:scale-105
           rounded-lg px-4 py-4 transition-all"

// Estado activo
className="bg-frani-purple-50 border-2 border-frani-purple-400
           shadow-lg rounded-lg px-4 py-4"
```

### Cards

```tsx
className="bg-white rounded-2xl border-2 border-frani-purple-200
           shadow-2xl p-8"
```

### Inputs

```tsx
className="w-full rounded-lg border-2 border-frani-purple-200
           bg-white px-4 py-3 text-frani-gray-800
           focus:border-frani-purple-400 focus:ring-2
           focus:ring-frani-purple-200 focus:outline-none
           transition-all"
```

## Espaciado

- **Contenedor principal**: `max-w-4xl mx-auto px-6 md:px-12`
- **Secciones**: `space-y-8` (32px)
- **Entre componentes**: `space-y-12` (48px)
- **Padding cards**: `p-6` o `p-8`
- **Gap en grids**: `gap-3` (12px) o `gap-4` (16px)

## Iconos

- **Librería**: Lucide React
- **Stroke width**: `1.5` (consistente en toda la app)
- **Tamaños**: 
  - Pequeño: `h-5 w-5`
  - Medio: `h-6 w-6`
  - Grande: `h-8 w-8`

## Animaciones

```tsx
// Hover scale
className="hover:scale-105 transition-all"

// Smooth transitions
className="transition-all duration-200"
```

## Responsive

- **Mobile first**: Estilos base para móvil
- **Breakpoints**: 
  - `md:` - Tablet (768px+)
  - `lg:` - Desktop (1024px+)

## Accesibilidad

- ✅ Todos los botones tienen `aria-label`
- ✅ Inputs con labels semánticos
- ✅ Contraste WCAG AA cumplido
- ✅ Iconos con `strokeWidth={1.5}` para legibilidad
- ✅ Estados de focus visibles

## Reglas de Código

### Componentes
- ✅ Functional Components only
- ✅ Named Exports (`export const Component`)
- ✅ TypeScript strict mode
- ✅ Props interfaces explícitas

### Styling
- ❌ NO usar valores arbitrarios (`w-[350px]`)
- ✅ Usar tokens del tema (`w-96`)
- ✅ Usar `cn()` para clases condicionales
- ✅ Orden lógico: Layout → Box Model → Typography → Visuals → Interactive

### Imports
```tsx
// Orden correcto
import { useState } from "react";
import { Icon1, Icon2 } from "lucide-react";
import { Component } from "./components/Component";
import { utility } from "./lib/utils";
```

---

**Inspiración**: Sitio personal frani.be  
**Filosofía**: Minimalista, juguetón, con personalidad 💜

# 👗 El Closet de Frani

Una aplicación web moderna de asesoría de moda con IA que te ayuda a elegir el outfit perfecto según el clima, la ocasión y tu nivel de comodidad.

## ✨ Características

- **Interfaz moderna y juguetona** con la identidad visual de frani.be
- **Selectores intuitivos** para fecha, clima, vibe/ocasión y nivel de comodidad
- **Paleta de colores púrpura** extraída del sitio personal
- **Diseño responsive** optimizado para móvil y desktop
- **Componentes accesibles** con ARIA labels y semántica HTML5

## 🎨 Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS v3** - Styling con paleta personalizada
- **Lucide React** - Iconos modernos (stroke width 1.5)

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎯 Próximos Pasos

- [ ] Integrar API de clima real (OpenWeatherMap)
- [ ] Conectar con IA (OpenAI/Anthropic) para sugerencias personalizadas
- [ ] Agregar galería de outfits guardados
- [ ] Implementar sistema de favoritos
- [ ] Agregar modo oscuro

## 📝 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Logo y avatar
│   ├── InputArea.tsx       # Selectores de outfit
│   └── OutputArea.tsx      # Tarjeta de resultado
├── lib/
│   └── utils.ts            # Utilidades (cn para clsx)
├── App.tsx                 # Componente principal
└── index.css               # Estilos globales + Tailwind
```

## 🎨 Paleta de Colores

- **Púrpura principal**: `#A855F7` (frani-purple-400)
- **Púrpura oscuro**: `#9333EA` (frani-purple-500)
- **Púrpura claro**: `#C084FC` (frani-purple-300)
- **Gris texto**: `#1F2937` (frani-gray-800)
- **Fondo claro**: `#F3E8FF` (frani-purple-50)

---

Hecho con 💜 por Frani

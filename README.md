# Portafolio React de Roberto González

Portafolio personal en formato SPA desarrollado con React y Vite. Conserva la
presentación, los datos de contacto y los proyectos del portafolio original,
además de incorporar Mini Portafolio, Pokédex con PokéAPI y el graficador
matemático desarrollado con Python.

## Secciones

- **Inicio:** presentación, bienvenida y acceso a los proyectos.
- **Sobre mí:** estudios, intereses y objetivos profesionales.
- **Habilidades:** competencias y herramientas, generadas desde arreglos.
- **Proyectos:** siete proyectos mostrados mediante tarjetas reutilizables.
- **Contacto:** correo, teléfono y formulario con validación.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Instalación

```powershell
npm install
```

## Ejecución

```powershell
npm run dev
```

Para crear la versión de producción:

```powershell
npm run build
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio |
| `/sobre-mi` | Perfil e intereses |
| `/habilidades` | Habilidades y herramientas |
| `/proyectos` | Proyectos de frontend, APIs y Python |
| `/contacto` | Datos y formulario de contacto |

## Estructura

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── FormularioContacto.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   └── TarjetaProyecto.jsx
├── pages/
│   ├── Contacto.jsx
│   ├── Habilidades.jsx
│   ├── Inicio.jsx
│   ├── Proyectos.jsx
│   └── SobreMi.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Dificultades y soluciones

La conversión del portafolio estático a rutas de React requirió separar el
contenido original en componentes y páginas sin eliminar información. Se
resolvió con un layout común y React Router.

El formulario también pasó de depender del correo del navegador a utilizar
estado controlado, validaciones propias y mensajes accesibles. Por último, los
distintos proyectos externos se organizaron en un único arreglo para que la
misma tarjeta reutilizable muestre cada enlace, tecnología y descripción.

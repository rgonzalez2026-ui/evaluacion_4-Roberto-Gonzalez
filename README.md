<<<<<<< HEAD
# Portafolio React + TypeScript de Roberto González

SPA profesional migrada desde el portafolio estático de la Evaluación N°2. Mantiene
su identidad visual, contenido, paleta y jerarquía, pero incorpora React Router,
TypeScript estricto, componentes reutilizables, Context API y consumo de GitHub REST API.

La comparación visual con la versión original está disponible en
[docs/captura-e2.png](docs/captura-e2.png).

## Características

- Cinco vistas principales y página 404 controlada.
- Navegación declarativa con `BrowserRouter`, `Routes`, `Route` y `NavLink`.
- Repositorios públicos sincronizados mediante GitHub REST API.
- Estados accesibles de carga, éxito, lista vacía y error.
- Cancelación de peticiones con `AbortController`.
- Tema claro/oscuro persistente mediante Context API.
- Filtro de proyectos con estado local elevado entre componentes.
- Formulario con controles controlados y validación accesible.
- Arquitectura CSS con nomenclatura BEM y soporte desde 320 px.

## Contrato de la API

Se seleccionó la alternativa A del requerimiento.

- URL base: `https://api.github.com`
- Endpoint: `/users/rgonzalez2026-ui/repos`
- Parámetros: `sort=updated&per_page=6`
- Método: `GET`
- Autenticación: no requiere API Key.
- Justificación: muestra repositorios reales y recientes del estudiante, evitando
  datos simulados y manteniendo la integración orgánica con el portafolio.

La respuesta esperada es un arreglo de objetos con esta estructura:

```json
[
  {
    "id": 123,
    "name": "nombre-repositorio",
    "description": "Descripción o null",
    "html_url": "https://github.com/usuario/repositorio",
    "language": "TypeScript",
    "stargazers_count": 0,
    "updated_at": "2026-11-24T12:00:00Z"
  }
]
```

El hook `useFetchApi<T>` ejecuta `fetch`, valida `response.ok`, tipa el JSON y
gestiona explícitamente `data`, `loading` y `error`. Su limpieza cancela la
petición pendiente para evitar actualizaciones posteriores al desmontaje.

## Requisitos

- Node.js 20.19+ o 22.12+.
- npm.

## Instalación y ejecución

```powershell
npm install
npm run dev
```

Compilar y verificar tipos TypeScript (la salida se genera en `dist/`):

```powershell
npm run build
```

Previsualizar la compilación de producción:

```powershell
npm run preview
```

Linter opcional:

```powershell
npm run lint
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación |
| `/sobre-mi` | Perfil e intereses |
| `/habilidades` | Habilidades y herramientas |
| `/proyectos` | Proyectos, filtro y repositorios de GitHub |
| `/contacto` | Datos y formulario validado |
| `*` | Error 404 con retorno al inicio |

## Arquitectura

```text
src/
├── components/
├── context/
├── data/
├── hooks/
├── pages/
├── services/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

Los datos estáticos están desacoplados en `src/data/`. Props, eventos, estado,
formulario y respuestas HTTP usan contratos definidos en `src/types/`.
No se utiliza `any`.

## Auditoría de accesibilidad

Verificación realizada el 24 de noviembre de 2026:

- Navegación por teclado: enlaces, botones y campos tienen foco visible.
- Enlace de salto al contenido principal disponible al enfocar.
- Menú móvil con `aria-expanded` y `aria-controls`.
- Ruta activa indicada visualmente por `NavLink`.
- Controles del formulario asociados con `htmlFor` e `id`.
- Errores y estados asíncronos anunciados con `role="alert"`, `role="status"` o
  `aria-live`.
- Barras de habilidades expuestas como `progressbar`.
- Navegación semántica con `header`, `nav`, `main`, `section`, `article` y `footer`.
- Reducción de movimiento respetada con `prefers-reduced-motion`.
- Prueba responsiva en ancho de 320 px: sin desplazamiento horizontal útil,
  con menú, filtros, tarjetas y formulario operables.

El formulario valida y confirma localmente; no envía datos a un backend de correo.
=======
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
>>>>>>> origin/main

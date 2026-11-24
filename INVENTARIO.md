# INVENTARIO.md — Trazabilidad E2 → React

## Referencia preservada

La captura de alta resolución del portafolio original se conserva en
`docs/captura-e2.png`. La migración mantiene sus textos, fotografía, paleta
oscura, acento verde, tipografía, jerarquía, proyectos y datos de contacto.

## 1. Punto de entrada y enrutamiento

```text
main.tsx
└── BrowserRouter
    └── ThemeProvider
        └── App.tsx
            └── Layout.tsx
                ├── Header.tsx
            ├── Página activa
                └── Footer.tsx
```

- `src/main.tsx` monta React, habilita `StrictMode`, carga los estilos globales y
  activa React Router.
- `src/App.tsx` declara las seis rutas, incluida la ruta comodín 404.
- `src/components/Layout.tsx` conserva la cabecera y el pie entre rutas, ofrece
  un enlace para saltar al contenido principal y representa la página activa.
- `src/index.css` concentra diseño visual, adaptación responsive, estados de
  foco y preferencias de movimiento reducido.

## 2. Estructura modular

```text
src/
├── components/
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GitHubRepositories.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilter.tsx
│   └── StatusMessage.tsx
├── context/
│   ├── ThemeProvider.tsx
│   ├── themeContext.ts
│   └── useTheme.ts
├── data/portfolioData.ts
├── hooks/useFetchApi.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   ├── ProjectsPage.tsx
│   └── SkillsPage.tsx
├── services/githubService.ts
├── types/index.ts
├── App.tsx
├── index.css
└── main.tsx
```

### Responsabilidad de los componentes

| Módulo | Responsabilidad | Reutilización |
| --- | --- | --- |
| `Header.tsx` | Marca, navegación, menú móvil y cambio de tema. | Todas las rutas. |
| `Footer.tsx` | Identidad final y año. | Todas las rutas. |
| `Layout.tsx` | Estructura común y salida de React Router. | Raíz. |
| `ProjectCard.tsx` | Tarjeta tipada de proyecto. | Lista de proyectos. |
| `ProjectFilter.tsx` | Controles de filtrado sincronizado. | Página de proyectos. |
| `GitHubRepositories.tsx` | Renderizado tipado de GitHub REST API. | Página de proyectos. |
| `StatusMessage.tsx` | Retroalimentación de carga/error/vacío. | API. |
| `ContactForm.tsx` | Campos controlados, validación y confirmación. | Contacto. |

### Responsabilidad de las páginas

| Página | Ruta | Contenido |
| --- | --- | --- |
| `HomePage.tsx` | `/` | Presentación, retrato e indicadores. |
| `AboutPage.tsx` | `/sobre-mi` | Perfil e intereses. |
| `SkillsPage.tsx` | `/habilidades` | Competencias y herramientas. |
| `ProjectsPage.tsx` | `/proyectos` | Proyectos filtrables y API GitHub. |
| `ContactPage.tsx` | `/contacto` | Datos y formulario. |
| `NotFoundPage.tsx` | `*` | Respuesta 404. |

## 3. Correspondencia con el portafolio original

| Contenido del portafolio original | Módulo React | Implementación |
| --- | --- | --- |
| Presentación | `HomePage.tsx` | Conserva texto, fotografía e identidad visual. |
| Perfil | `AboutPage.tsx` | Divide la información original en bloques semánticos. |
| Habilidades | `SkillsPage.tsx` + `portfolioData.ts` | Convierte textos fijos en datos tipados y tarjetas. |
| Proyectos E2 | `ProjectsPage.tsx` + `ProjectCard.tsx` | Conserva proyectos, enlaces y presentación. |
| Menú móvil | `Header.tsx` | `useState` reemplaza JavaScript imperativo de la E2. |
| Tema | `ThemeProvider.tsx` | Context API añade preferencia global persistente. |
| Filtro | `ProjectsPage.tsx` + `ProjectFilter.tsx` | Eleva el estado para sincronizar botones y tarjetas. |
| Contacto | `ContactPage.tsx` + `ContactForm.tsx` | Mantiene datos y convierte el formulario a estado React. |

## 4. Inventario de estados de GitHub REST API

`GitHubRepositories.tsx` y `useFetchApi.ts` gestionan los estados:

| Estado | Condición | Resultado accesible |
| --- | --- | --- |
| Cargando | Consulta iniciada | Botón deshabilitado, indicador visual, `aria-busy` y mensaje `Cargando`. |
| Éxito | Respuesta HTTP correcta | Lista con nombre, descripción, lenguaje, estrellas, fecha y enlace. |
| Vacío | Respuesta con arreglo vacío | Mensaje accesible que indica que no hay repositorios. |
| Error | Red, HTTP o JSON inválido | Alerta con causa visible al usuario. |

Cada consulta nueva cancela la solicitud anterior mediante `AbortController`.
Esto evita que una respuesta obsoleta actualice un componente desmontado.

## 5. Refactorización y mejoras respecto de E2

- Se reemplazaron enlaces internos con `#seccion` por rutas SPA.
- Se eliminó la dependencia de scripts imperativos y un archivo monolítico.
- Todo el código de aplicación se migró de JavaScript a TypeScript estricto.
- Los datos quedaron separados en `src/data/`, los tipos en `src/types/` y la
  comunicación HTTP en `src/services/` más un custom hook reutilizable.
- Los selectores generales fueron reorganizados como bloques, elementos y
  modificadores BEM.
- Se añadió una respuesta 404, estados API accesibles y tema global.
- Se corrigió la estructura del formulario, sus etiquetas, errores en vivo y
  `aria-invalid`.

## 6. Revisiones de accesibilidad incluidas

- Documento declarado en español.
- Orden de encabezados por página y relaciones mediante `aria-labelledby`.
- Enlace de salto hacia el contenido principal.
- Foco visible mediante estilos `:focus-visible`.
- Etiquetas asociadas a todos los campos.
- Errores del formulario y de GitHub anunciados con regiones en vivo.
- Estados `aria-invalid` y `aria-describedby` asociados a sus controles.
- Estado de apertura y control asociado al menú móvil.
- Enlaces externos con aviso de apertura en una pestaña nueva.
- Texto alternativo descriptivo para la fotografía.
- Barras de habilidades expuestas como `progressbar`.
- Respeto de `prefers-reduced-motion`.

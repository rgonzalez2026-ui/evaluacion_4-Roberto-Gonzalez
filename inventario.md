# Inventario de la aplicación React

## 1. Punto de entrada y enrutamiento

```text
main.jsx
└── BrowserRouter
    └── App.jsx
        └── Layout.jsx
            ├── Header.jsx
            ├── Página activa
            └── Footer.jsx
```

- `src/main.jsx` monta React, habilita `StrictMode`, carga los estilos globales y
  activa React Router.
- `src/App.jsx` declara las cinco rutas de la aplicación.
- `src/components/Layout.jsx` conserva la cabecera y el pie entre rutas, ofrece
  un enlace para saltar al contenido principal y representa la página activa.
- `src/index.css` concentra diseño visual, adaptación responsive, estados de
  foco y preferencias de movimiento reducido.

## 2. Estructura modular

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── FormularioContacto.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── TarjetaProyecto.jsx
│   └── VistaApiPokemon.jsx
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

### Responsabilidad de los componentes

| Módulo | Responsabilidad | Reutilización |
| --- | --- | --- |
| `Header.jsx` | Marca, navegación principal y menú móvil accesible. | Compartido por todas las rutas. |
| `Footer.jsx` | Identidad final y año automático. | Compartido por todas las rutas. |
| `Layout.jsx` | Estructura común y salida de React Router. | Raíz de las rutas. |
| `TarjetaProyecto.jsx` | Presenta título, descripción, tecnologías y enlace de un proyecto. | Una instancia por elemento del inventario de proyectos. |
| `FormularioContacto.jsx` | Campos controlados, validación y confirmación del formulario. | Usado por `Contacto.jsx`. |
| `VistaApiPokemon.jsx` | Búsqueda en PokéAPI, cancelación de consultas y gestión de estados. | Usado por `Proyectos.jsx`. |

### Responsabilidad de las páginas

| Página | Ruta | Contenido |
| --- | --- | --- |
| `Inicio.jsx` | `/` | Presentación, retrato, indicadores y accesos principales. |
| `SobreMi.jsx` | `/sobre-mi` | Perfil académico, intereses y objetivo profesional. |
| `Habilidades.jsx` | `/habilidades` | Competencias y herramientas con indicadores de progreso semánticos. |
| `Proyectos.jsx` | `/proyectos` | Inventario de proyectos, tarjetas reutilizables y demostración PokéAPI. |
| `Contacto.jsx` | `/contacto` | Datos de contacto y formulario validado. |

## 3. Correspondencia con el portafolio original

| Contenido del portafolio original | Módulo React | Implementación |
| --- | --- | --- |
| Presentación de Roberto González | `Inicio.jsx` | Texto principal, fotografía de `public/foto-presentacion.jpeg` y enlaces a proyectos/contacto. |
| Perfil, estudios e intereses | `SobreMi.jsx` | Información académica y objetivos divididos en bloques semánticos. |
| Habilidades técnicas | `Habilidades.jsx` | Habilidades y herramientas convertidas en arreglos y elementos reutilizables. |
| Proyecto personal | `Proyectos.jsx` + `TarjetaProyecto.jsx` | Conserva enlace, descripción e identidad visual del portafolio original. |
| Nova | `Proyectos.jsx` + `TarjetaProyecto.jsx` | Conserva el enlace original y sus tecnologías. |
| Prestige Legal | `Proyectos.jsx` + `TarjetaProyecto.jsx` | Conserva el enlace y la presentación editorial del proyecto. |
| Promar | `Proyectos.jsx` + `TarjetaProyecto.jsx` | Conserva catálogo, enlace y tecnologías del proyecto original. |
| Mini Portafolio React | `Proyectos.jsx` + `TarjetaProyecto.jsx` | Se incorpora como proyecto adicional desarrollado con React Router. |
| Pokédex con API | `Proyectos.jsx` + `VistaApiPokemon.jsx` + `TarjetaProyecto.jsx` | Además de la referencia al repositorio, incluye una demostración funcional contra PokéAPI. |
| Graficador de cálculo | `Proyectos.jsx` + `TarjetaProyecto.jsx` | Conserva la referencia al repositorio y las herramientas Python. |
| Correo, teléfono y contacto | `Contacto.jsx` + `FormularioContacto.jsx` | Mantiene los datos y reemplaza el flujo estático por un formulario controlado. |

## 4. Inventario de estados de PokéAPI

`VistaApiPokemon.jsx` utiliza una máquina de estados visualmente diferenciada:

| Estado | Condición | Resultado accesible |
| --- | --- | --- |
| Cargando | Consulta iniciada | Botón deshabilitado, indicador visual, `aria-busy` y mensaje `Cargando`. |
| Éxito | Respuesta HTTP `200` | Etiqueta `200`, anuncio de estado e imagen/datos del Pokémon. |
| No encontrado | Respuesta HTTP `404` | Etiqueta `404`, alerta informativa y sugerencia para cambiar el código. |
| Error general | Error de red u otra respuesta HTTP | Alerta con mensaje de la causa técnica y opción de reintentar. |
| Validación | Código vacío, negativo, decimal o no numérico | Campo marcado como inválido y explicación asociada al control. |

Cada consulta nueva cancela la solicitud anterior mediante `AbortController`.
Esto evita mostrar una respuesta que ya no corresponde a la búsqueda actual.

## 5. Revisiones de accesibilidad incluidas

- Documento declarado en español.
- Orden de encabezados por página y relaciones mediante `aria-labelledby`.
- Enlace de salto hacia el contenido principal.
- Foco visible mediante estilos `:focus-visible`.
- Etiquetas asociadas a todos los campos.
- Errores del formulario y de PokéAPI anunciados con regiones en vivo.
- Estados `aria-invalid` y `aria-describedby` asociados a sus controles.
- Estado de apertura y control asociado al menú móvil.
- Enlaces externos con aviso de apertura en una pestaña nueva.
- Texto alternativo descriptivo para la fotografía y las ilustraciones de Pokémon.
- Barras de habilidades expuestas como `progressbar`.
- Respeto de `prefers-reduced-motion`.

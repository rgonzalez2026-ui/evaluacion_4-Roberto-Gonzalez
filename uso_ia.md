# Declaración y bitácora crítica de uso de IA

## 1. Herramientas utilizadas

Se utilizó GitHub Copilot mediante Copilot SDK en Visual Studio Code como
asistente de revisión y edición. La aplicación se verificó con TypeScript, Vite,
Oxlint y pruebas directas en un navegador controlado.

## 2. Propósito de uso

La asistencia se solicitó para auditar el proyecto contra el documento
`Requerimientos_Proyecto-React_Evaluacion_4_ICINF1107.pdf` y corregir brechas:
migración a TypeScript, rutas 404, API oficial, Context API, BEM, separación de
datos, accesibilidad y documentación.

## 3. Prompts representativos

- “revísalo nuevamente guiándote en el archivo requerimientos”.
- “conservar el contenido del portafolio original”.
- “revisar los proyectos, enlaces, formulario y estilos”.
- “no realizar commits ni push sin autorización”.

## 4. Output recibido

El asistente propuso una arquitectura modular con contratos en `src/types/`,
datos en `src/data/`, hook genérico de fetch, servicio GitHub, proveedor de tema,
filtro elevado, páginas 404 y componentes TSX. También generó refactorización BEM
y borradores para los tres archivos Markdown obligatorios.

## 5. Ajustes, refactorización y verificación

Se revisó el output contra el código real antes de incorporarlo. Se conservó la
identidad y el contenido personal de la E2; se reemplazó PokéAPI por una de las dos
APIs oficiales exigidas y se mantuvieron los estados visuales accesibles. Se
corrigió una colisión real de módulos detectada al ejecutar la SPA en navegador.

La verificación técnica se realizó con:

```powershell
npm run build
npm run lint
```

Además se recorrieron las seis rutas, se comprobó el filtro de Python, se enviaron
campos vacíos del formulario, se confirmó la respuesta 404, se verificó la carga
de los repositorios reales y se revisó el ancho móvil de 320 px. `tsc --strict`
finalizó sin errores y el linter sin advertencias.

No se realizó ningún commit ni push.

## 6. Reflexión crítica final

La IA aceleró una revisión extensa, pero no reemplaza la comprensión del proyecto.
Dependiendo directamente de sus resultados se podría aceptar código incompatible,
duplicado o difícil de defender. Por eso todo cambio fue contrastado con el PDF,
el navegador y el compilador. Como estudiante debo ser capaz de explicar el flujo
de renderizado, la limpieza de `useEffect`, los tipos genéricos, la elevación de
estado, Context, React Router y BEM sin asistencia externa. La verificación real
reduce la deuda cognitiva, pero su eliminación requiere seguir practicando y
modificando conscientemente cada parte del código.

# FP067 - Ctrl-Z | Producto 3: EQUIPO BASKET (Interfaz móvil)

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

Este repositorio contiene la entrega del **Producto 3** del equipo **Ctrl-Z** para la asignatura **FP067**. Partiendo del diseño del Producto 1 y de la base de datos **Cloud Firestore** del Producto 2, se desarrolla la interfaz para dispositivos móviles del **EQUIPO BASKET** con **React Native**.

---

## Descripción del Proyecto

La aplicación consta de tres pantallas conectadas mediante un *Stack* de navegación:

- **Inicio (listado):** título superior y listado infinito de jugadores mediante `FlatList`, con los datos de la colección `players` de Firestore.
- **Detalle:** todos los datos del jugador seleccionado; la foto se puede ampliar al pulsarla.
- **Multimedia:** reproductor del vídeo del jugador (URL almacenada en Firebase) con botones de interacción.

La cabecera de navegación muestra el título de cada pantalla, el botón de volver atrás y un botón para regresar al inicio.

### Decisiones técnicas

| Enunciado | Implementación | Motivo |
|---|---|---|
| `@react-native-firebase` | SDK web de `firebase` (modular) | Los módulos nativos no funcionan en Expo Go ni en CodeSandbox |
| `componentDidMount` + `once()` (Realtime Database) | `useEffect` + `getDocs()` (Cloud Firestore) | Los datos del Producto 2 están en Firestore; componentes funcionales con *hooks* |
| React Native Navigation | React Navigation (`native-stack`) | Librería compatible con Expo y con la versión web |

---

## Tecnologías

- **Expo SDK 58** · React Native 0.88 · React 19
- **React Navigation 7** (`@react-navigation/native-stack`)
- **Firebase 13** (Cloud Firestore)
- **expo-video** (reproductor multimedia)
- **react-native-web** (ejecución en navegador / CodeSandbox)

---

## Requisitos

- **Node.js 24 LTS (≥ 24.12.0)**. El proyecto usa `engine-strict`, así que `npm install` falla con otra versión.
- Git
- *(Opcional)* App **Expo Go** en el móvil para probar en un dispositivo real.

### Instalar Node 24

**Windows** ([nvm-windows](https://github.com/coreybutler/nvm-windows/releases)):

```bash
nvm install 24
nvm list              # anotar la versión 24.x instalada
nvm use 24.x.x
```

**macOS / Linux** ([nvm](https://github.com/nvm-sh/nvm)):

```bash
nvm install           # lee .nvmrc
nvm use
```

Comprobar con `node -v`.

---

## Instalación y ejecución

```bash
git clone https://github.com/androsrivas/FP067_Ctrl-Z_Producto3.git
cd FP067_Ctrl-Z_Producto3
npm install
```

| Comando | Descripción |
|---|---|
| `npm start` | Arranca Expo (escanear el QR con Expo Go) |
| `npm run web` | Abre la app en el navegador |
| `npm run android` | Abre la app en un emulador Android |
| `npx expo-doctor` | Comprueba que las dependencias son compatibles con el SDK |

> ⚠️ Para añadir librerías usar **`npx expo install <paquete>`** (no `npm install <paquete>`): Expo elige la versión compatible con el SDK.

---

## Estructura del proyecto

```text
FP067_Ctrl-Z_Producto3/
│
├── App.js                    # NavigationContainer + Stack (Inicio, Detalle, Multimedia)
├── index.js                  # Punto de entrada (registerRootComponent)
├── app.json                  # Configuración de Expo
├── assets/                   # Iconos y splash
└── src/
    ├── config/firebase.js    # initializeApp + Firestore
    ├── services/players.js   # Acceso a datos: getPlayers(), getPlayer(id)
    ├── screens/              # InicioScreen, DetalleScreen, MultimediaScreen
    ├── components/           # Componentes reutilizables (PlayerCard, HomeButton…)
    └── theme.js              # Colores y tipografía
```

---

## Flujo de trabajo

- **`main`**: versión entregable. Protegida: solo se actualiza mediante *Pull Request* desde `develop` con 1 aprobación.
- **`develop`**: rama de integración (rama por defecto). Protegida: solo mediante *Pull Request*.
- **`feature/<nombre>`**: una rama por tarea, creada desde `develop` y con PR hacia `develop`.

```bash
git switch develop && git pull
git switch -c feature/listado
# ...cambios...
git push -u origin feature/listado   # y abrir la PR hacia develop
```

Los mensajes de commit y las PR se escriben **en castellano** siguiendo [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):
`feat(listado): mostrar jugadores con FlatList`, `fix(detalle): …`, `docs: …`, `chore: …`

---

## Equipo Ctrl-Z

| Integrante | Responsabilidad |
|---|---|
| @androsrivas | Repositorio, configuración inicial y navegación |
| <Nombre> | Pantalla de inicio (listado) |
| <Nombre> | Pantalla de detalle |
| <Nombre> | Pantalla multimedia |
| <Nombre> | Diseño (mockup y tema) y documentación |

---

## Entrega

- **Repositorio:** https://github.com/androsrivas/FP067_Ctrl-Z_Producto3
- **CodeSandbox:** <pendiente>
# Estructura del Proyecto

## Expo Router (carpeta app/)

Expo Router usa **navegacion basada en archivos**. La estructura de carpetas define las rutas automaticamente.

### Archivos especiales

| Archivo | Funcion |
|---------|---------|
| `_layout.tsx` | Define como se renderizan las pantallas hijas. Configura navegacion (Stack, Tabs, Drawer). Es el "contenedor" de las rutas. |
| `index.tsx` | Ruta por defecto de una carpeta. Equivale a `/` en esa ruta. |
| `(nombre)/` | Carpeta con parentesis = grupo de rutas. No afecta la URL, solo organiza. |

### Estructura actual

```
app/
├── _layout.tsx         -> Layout raiz (usa Stack)
└── (tabs)/             -> Grupo de tabs (no aparece en URL)
    ├── _layout.tsx     -> Configura el Tab Bar (pestanas inferiores)
    ├── index.tsx       -> Pantalla "Obras" (ruta: /)
    └── profile.tsx     -> Pantalla "Perfil" (ruta: /profile)
```

### Ejemplo de flujo

1. Usuario abre la app
2. `app/_layout.tsx` carga (Stack container)
3. Dentro carga `app/(tabs)/_layout.tsx` (Tab Bar)
4. Por defecto muestra `index.tsx` (pantalla Obras)

---

## src/ (Logica de Negocio)

### 1. features/
Aqui vive lo que hace unica a esta App (el "Que").
* **projects/**: Gestion de obras
* **auth/**: Login y usuarios
* **warranty/**: Creacion de PDF

### 2. shared/
Aqui viven las herramientas genericas (el "Como").
* **ui/**: Botones, Inputs, Tarjetas (sin logica de negocio)
* **utils/**: Funciones de ayuda (formato de fechas, moneda)
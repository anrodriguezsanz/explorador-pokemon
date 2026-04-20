# Poképedia - Explorador de Pokémon

Aplicación web para explorar la [PokéAPI](https://pokeapi.co/). Construida con React, TypeScript y Vite.

---

## Características

- **Búsqueda por nombre** 
- **Filtrado por tipo** 
- **Gestión de favoritos** 
- **Reproducción de cry del Pokémon** 
- **Paginación** 
- **Ordenamiento alfabético**
- **Internacionalización (i18n)**
- **Navegación entre Pokémon**
- **Diseño responsive** 

---

## Tecnologías

- **React 19**
- **TypeScript 6**
- **Vite 8**
- **Ant Design 6**
- **React Router DOM 7**
- **Jotai 2**
- **Axios 1**
- **i18next**
- **PokéAPI**

---

## Funcionalidades Principales

### Lista de Pokémon
- Visualización en grid
- Búsqueda por nombre en tiempo real con debounce
- Filtrado por tipo
- Ordenamiento alfabético (A-Z / Z-A / Sin ordenar)
- Paginación de 20 elementos
- Botón de favoritos en cada tarjeta

### Detalles de Pokémon
- Imagen oficial HQ
- Navegación entre Pokémon con botones anterior/siguiente
- Información básica (altura, peso)
- Tipos del Pokémon
- Estadísticas base con barras de progreso
- Botón para reproducir el cry del Pokémon
- Botón para añadir/quitar de favoritos

### Favoritos
- Lista de Pokémon guardados
- Persistencia en localStorage con Jotai
- Paginación
- Estado vacío con mensaje y sprite de Pikachu

### Internacionalización
- Soporte para 3 idiomas: Español, Inglés y Catalán
- Selector de idioma en navbar
- Persistencia del idioma seleccionado
- Traducciones completas de la interfaz

---

## Requisitos Previos

Es necesario tener instalado:

- **Node.js** 
- **npm** o **yarn**

---

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/anrodriguezsanz/explorador-pokemon.git
cd explorador-pokemon
```

### 2. Instalar dependencias

Con yarn:
```bash
yarn install
```

### 3. Ejecutar en modo desarrollo

Con yarn:
```bash
yarn dev
```

La aplicación estará disponible en el puerto que muestra la consola.

---


## Autora

**Andrea Rodríguez**



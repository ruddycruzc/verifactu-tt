# Verifactu TT

Landing page corporativa desarrollada con Angular para la promoción y captación de clientes interesados en la adaptación a la normativa Verifactu de la AEAT.

---

# Objetivo del proyecto

Verifactu TT es una landing page enfocada en:

* Explicar qué es Verifactu.
* Mostrar los beneficios de la herramienta.
* Presentar la solución desarrollada por Táctica TIC.
* Captar potenciales clientes mediante formulario de contacto.
* Servir como punto de entrada para futuras campañas comerciales y de marketing.

---

# Tecnologías utilizadas

* Angular (Standalone Components)
* TypeScript
* Angular Router
* HTML5
* CSS3
* Firebase Hosting (despliegue futuro)

---

# Arquitectura del proyecto

El proyecto sigue una arquitectura desacoplada basada en:

```text
Interface
    ↓
Data
    ↓
UI
    ↓
Section
    ↓
Page
```

La información nunca debe estar hardcodeada dentro de los componentes cuando pueda reutilizarse.

---

# Estructura actual

```text
src
├── app
│
│   ├── components
│   │
│   │   ├── layout
│   │   │   ├── navbar
│   │   │   └── footer
│   │   │
│   │   ├── sections
│   │   │   ├── hero-section
│   │   │   ├── about-verifactu-section
│   │   │   ├── benefits-section
│   │   │   ├── solution-section
│   │   │   └── contact-section
│   │   │
│   │   └── ui
│   │       ├── buttons
│   │       └── cards
│   │           ├── benefit-card
│   │           └── solution-card
│   │
│   ├── data
│   │
│   │   ├── company
│   │   │   ├── navigation.data.ts
│   │   │   └── footer.data.ts
│   │   │
│   │   └── verifactu
│   │       ├── hero.data.ts
│   │       ├── about-verifactu.data.ts
│   │       ├── benefits.data.ts
│   │       ├── solution-features.data.ts
│   │       └── contact.data.ts
│   │
│   ├── interfaces
│   │
│   │   ├── data
│   │   └── ui
│   │
│   ├── pages
│   │   ├── home
│   │   └── not-found
│   │
│   ├── styles
│   │   ├── globals
│   │   └── tokens
│   │
│   └── translations
│
├── assets
│
├── main.ts
├── index.html
└── styles.css
```

---

# Estructura de la Home

Actualmente la Home está compuesta por:

```text
Home
│
├── Navbar
├── HeroSection
├── AboutVerifactuSection
├── BenefitsSection
├── SolutionSection
├── ContactSection
└── Footer
```

---

# Gestión de datos

Toda la información visible de la landing debe almacenarse dentro de la carpeta:

```text
src/app/data
```

Ejemplo:

```text
hero.data.ts
about-verifactu.data.ts
benefits.data.ts
solution-features.data.ts
contact.data.ts
```

Los componentes únicamente consumen los datos.

---

# Interfaces

Todas las interfaces compartidas deben centralizarse en:

```text
src/app/interfaces
```

Ejemplos:

```text
benefit.interface.ts
solution-feature.interface.ts
nav-item.interface.ts
footer-link.interface.ts
```

No se deben declarar interfaces reutilizables dentro de componentes.

---

# Assets

Actualmente el proyecto trabaja con recursos públicos.

Las rutas deben seguir el formato:

```ts
'/images/...'
'/videos/...'
'/logos/...'
```

Ejemplos:

```ts
image: '/images/about/about-1.png'

image: '/images/benefits/cumplimiento.png'

media: '/videos/video-verifactu.mp4'
```

---

# Componentes UI

Los componentes UI deben ser completamente reutilizables.

Ejemplos actuales:

```text
BenefitCard
SolutionCard
AppButton
```

No deben contener lógica de negocio específica de una sección.

---

# Navegación

Actualmente la navegación utiliza anclas HTML:

```text
#hero
#about
#benefits
#solution
#contact
```

Ejemplo:

```html
<a href="#contact">
  Contacto
</a>
```

No se utiliza Angular Router para la navegación interna de la landing.

Motivo:

* Landing de una sola página.
* Navegación más rápida.
* Mejor experiencia de usuario para conversión.

---

# Sistema de diseño

Los estilos globales están organizados mediante Design Tokens.

```text
styles
│
├── tokens
│   ├── colors.css
│   ├── spacing.css
│   ├── typography.css
│   └── radius.css
│
└── globals
    └── base.css
```

Todo nuevo desarrollo debe utilizar las variables existentes.

Ejemplo:

```css
var(--color-primary)

var(--space-lg)

var(--radius-md)
```

Evitar valores hardcodeados cuando exista un token equivalente.

---

# Flujo de trabajo

## 1. Actualizar rama de desarrollo

```bash
git checkout dev
git pull origin dev
```

---

## 2. Crear nueva rama

```bash
git checkout -b TT-XX-nombre-tarea
```

Ejemplos:

```bash
git checkout -b TT-78-vf-seccion-hero

git checkout -b TT-79-vf-responsive

git checkout -b TT-80-vf-videos
```

---

## 3. Desarrollo

Antes de realizar un commit ejecutar:

```bash
ng build
```

Verificar que la aplicación compila correctamente.

---

## 4. Guardar cambios

```bash
git add .

git commit -m "Implement hero section"
```

---

## 5. Integrar en desarrollo

```bash
git checkout dev

git pull origin dev

git merge TT-XX-nombre-tarea
```

---

## 6. Eliminar rama

```bash
git branch -d TT-XX-nombre-tarea
```

---

# Estado actual del proyecto

## Implementado

```text
✓ Arquitectura base
✓ Home
✓ Navbar
✓ Hero
✓ About
✓ Benefits
✓ Solution
✓ Contact
✓ Footer
✓ Componentes reutilizables
✓ Sistema de datos desacoplado
✓ Interfaces centralizadas
✓ Design Tokens
```

---

# Mejoras pendientes

## Prioridad alta

```text
□ Responsive global
□ Revisar layout en tablet
□ Revisar layout en móvil
□ Corregir carga de vídeos
□ Ajustes visuales generales
```

---

## Prioridad media

```text
□ Sistema de traducciones ES/EN
□ Validaciones del formulario
□ Integración con backend o email
□ Optimización SEO
□ Accesibilidad
```

---

## Prioridad baja

```text
□ Animaciones
□ Efecto typing en Hero
□ Carrusel real para Benefits
□ Scroll animations
□ Microinteracciones
```

---

# Convenciones del proyecto

## Angular Moderno

Utilizar:

```html
@for(...)
```

en lugar de:

```html
*ngFor
```

Siempre que sea posible.

---

## Standalone Components

Todos los componentes deben ser:

```ts
standalone: true
```

---

## Datos desacoplados

Evitar:

```ts
title = 'Verifactu'
```

dentro de componentes.

Utilizar:

```ts
HERO_CONTENT.title
```

procedente de la capa de datos.

---

## Filosofía del proyecto

El objetivo es mantener una arquitectura limpia, escalable y reutilizable que permita desarrollar nuevas landing pages reutilizando componentes, patrones y estructura ya implementados en Verifactu TT y Táctica TIC.

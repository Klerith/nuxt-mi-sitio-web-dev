# 📊 Dashboard Administrativo

Bienvenido al dashboard administrativo. Esta es una guía rápida para empezar.

## 🎯 Características Principales

- ✅ **Sidebar Colapsable**: Menú lateral que se puede minimizar
- ✅ **Navbar Superior**: Con notificaciones y opciones de usuario
- ✅ **Responsive**: Funciona en móviles, tablets y desktop
- ✅ **Persistencia**: Guarda el estado del sidebar en localStorage
- ✅ **Dark Mode**: Soporte completo para tema oscuro (vía NuxtUI)

## 📁 Estructura

```
app/
├── layouts/
│   └── dashboard-layout.vue          ← Layout principal del dashboard
├── components/dashboard/
│   ├── Sidebar.vue                   ← Menú lateral con navegación
│   └── Navbar.vue                    ← Barra superior con opciones
└── pages/dashboard/
    ├── index.vue                     ← Dashboard principal (Inicio)
    └── products/
        └── index.vue                 ← Página de productos (Ejemplo)
```

## 🚀 Cómo Empezar

### 1. Crear una Nueva Página Administrativa

```vue
<!-- app/pages/dashboard/orders.vue -->
<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold">Orders Management</h1>
    <!-- Tu contenido aquí -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard-layout',
});
</script>
```

### 2. Agregar Nueva Opción al Menú

Edita `app/components/dashboard/Sidebar.vue` y añade a `mainMenuItems`:

```typescript
const mainMenuItems: NavigationMenuItem[] = [
  // ... opciones existentes ...
  {
    label: 'Orders',
    icon: 'i-lucide-shopping-cart',
    to: '/dashboard/orders',
  },
];
```

### 3. Personalizar el Navbar

En tu página, puedes actualizar el breadcrumb modificando el componente Navbar directamente o pasando props.

## 🎨 Personalización

### Cambiar Iconos

Todos los iconos usan **Lucide**. Opciones populares:

- `i-lucide-home` - Casa
- `i-lucide-box` - Caja/Producto
- `i-lucide-shopping-cart` - Carrito
- `i-lucide-settings` - Configuración
- `i-lucide-users` - Usuarios
- `i-lucide-chart-bar` - Gráficos

👉 Ver todos: [Lucide Icons](https://lucide.dev/)

### Agregar Badges (Notificaciones)

```typescript
{
  label: 'Orders',
  icon: 'i-lucide-shopping-cart',
  badge: '12',  // Muestra un número rojo
}
```

### Cambiar Colores

En `app.config.ts`:

```typescript
export default defineAppConfig({
  ui: {
    dashboard: {
      // Tus personalizaciones
    },
  },
});
```

## 📋 Componentes Disponibles

El dashboard usa componentes de **NuxtUI**:

- `UDashboardGroup` - Contenedor principal
- `UDashboardSidebar` - Menú lateral
- `UDashboardPanel` - Panel de contenido
- `UCard` - Tarjetas
- `UButton` - Botones
- `UTable` - Tablas
- `UBadge` - Insignias
- Y muchos más...

👉 Documentación: [NuxtUI Components](https://ui.nuxt.com/)

## 🔗 Rutas Disponibles

| Ruta                  | Descripción                          |
| --------------------- | ------------------------------------ |
| `/dashboard`          | Dashboard principal con estadísticas |
| `/dashboard/products` | Gestión de productos (ejemplo)       |

## 💡 Consejos

1. **Mantén el código limpio**: Nombres en inglés, código legible
2. **Reutiliza componentes**: Usa los componentes de NuxtUI
3. **Responsive first**: Diseña pensando en móvil primero
4. **Documentación**: Comenta tu código para futuras referencias

## 🤝 Contribuciones

Para agregar nuevas pantallas o mejorar el dashboard:

1. Crea la página en `app/pages/dashboard/`
2. Usa el layout `dashboard-layout`
3. Mantén la estructura consistente
4. Prueba en diferentes tamaños de pantalla

## 📚 Recursos Útiles

- [NuxtUI Docs](https://ui.nuxt.com/)
- [Nuxt 3 Docs](https://nuxt.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

¿Necesitas ayuda? Consulta la documentación en `app/components/dashboard/README.md`

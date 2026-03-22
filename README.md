# Baby Shower Invitation - Emma Luz

Una invitación digital elegante y responsive para el baby shower de Emma Luz (con doble m).

## 🎉 Características

- **Diseño elegante**: Temática baby shower con colores pastel y elementos decorativos
- **Completamente responsive**: Se adapta a todos los dispositivos (móvil, tablet, desktop)
- **Mapa interactivo**: Integración con Google Maps para mostrar la ubicación del restaurante
- **Cuenta regresiva**: Timer en tiempo real hasta la fecha del evento
- **Funcionalidades interactivas**:
  - Confirmación de asistencia (formulario modal)
  - Generación de PDF descargable
  - Compartir en redes sociales
  - Animaciones suaves
- **Accesibilidad**: Diseño accesible y fácil de usar

## 🚀 Demo en Vivo

La invitación está hosteada en: [https://baby-shower.openclaw.elroi.cloud](https://baby-shower.openclaw.elroi.cloud)

## 📋 Detalles del Evento

- **Fecha**: 18 de abril, 2026
- **Hora**: 8:00 AM
- **Lugar**: Restaurante Casa Bonita, Calle 5 de Febrero, La Paz, Baja California Sur
- **Para**: **Emma Luz** y sus papás

## 🎁 Sugerencias de Regalos

1. **Efectivo** - Para los gastos del bebé
2. **Ropa** - Talla 3 meses en adelante
3. **Pañales** - Etapa 1 adelante o 2

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables CSS, Flexbox, Grid, animaciones
- **JavaScript (ES6+)** - Interactividad y funcionalidades
- **Google Maps API** - Mapa interactivo
- **HTML2PDF.js** - Generación de PDFs
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías (Dancing Script, Poppins)

## 📁 Estructura del Proyecto

```
baby-shower-invitation/
├── index.html          # Página principal
├── style.css           # Estilos principales
├── script.js           # JavaScript con todas las funcionalidades
├── README.md           # Este archivo
└── (favicon.ico)       # Icono del sitio (por agregar)
```

## 🚀 Cómo Usar

### Desarrollo Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/elroi-dev/baby-shower-invitation.git
   cd baby-shower-invitation
   ```

2. Abre `index.html` en tu navegador o usa un servidor local:
   ```bash
   # Con Python
   python3 -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

3. Visita `http://localhost:8000` en tu navegador

### Personalización

Para personalizar la invitación:

1. **Cambiar detalles del evento**: Edita las variables en `script.js` (línea 15)
2. **Modificar colores**: Actualiza las variables CSS en `:root` en `style.css`
3. **Cambiar ubicación del mapa**: Actualiza las coordenadas en `initMap()` en `script.js`
4. **Actualizar sugerencias de regalos**: Modifica el HTML en `index.html`

## 📄 Generación de PDF

La invitación incluye funcionalidad para descargar un PDF de alta calidad:
- Usa la biblioteca HTML2PDF.js
- Mantiene el diseño responsive en el PDF
- Incluye todos los elementos visuales
- Optimizado para impresión

## 🌐 Hosting

La invitación está configurada para ser hosteada en:
- **Subdominio**: `baby-shower.openclaw.elroi.cloud`
- **GitHub Pages**: También puede ser desplegada en GitHub Pages

### Configuración para GitHub Pages

1. Ve a Settings > Pages en el repositorio de GitHub
2. Selecciona la rama `main` como fuente
3. Guarda los cambios
4. La invitación estará disponible en `https://[usuario].github.io/baby-shower-invitation`

## 📱 Responsive Design

La invitación está optimizada para:
- **Móviles** (320px - 480px)
- **Tablets** (481px - 768px)
- **Desktop** (769px en adelante)

## 🔧 Funcionalidades JavaScript

### Mapa Interactivo
- Ubicación precisa del restaurante
- Marcador personalizado
- InfoWindow con detalles
- Enlace para direcciones en Google Maps

### Cuenta Regresiva
- Actualización en tiempo real
- Formato días/horas/minutos/segundos
- Detiene automáticamente después de la fecha del evento

### Modal de Confirmación
- Formulario de RSVP
- Validación de campos
- Simulación de envío (en producción conectar a backend)

### Compartir
- Copiar enlace
- Compartir en WhatsApp, Facebook, Twitter, Email
- Enlaces preconfigurados con mensaje personalizado

## 🎨 Diseño y Estilo

### Paleta de Colores
- **Rosa bebé**: `#ffb6c1`
- **Rosa oscuro**: `#ff69b4`
- **Azul bebé**: `#87ceeb`
- **Azul claro**: `#e6f7ff`
- **Oro**: `#ffd700`
- **Blanco**: `#ffffff`

### Tipografías
- **Dancing Script**: Para títulos y nombres
- **Poppins**: Para texto general

### Animaciones
- Transiciones suaves en hover
- Animaciones de entrada al hacer scroll
- Efectos de elevación en tarjetas
- Animación del marcador del mapa

## 📝 Notas de Implementación

### Google Maps API
- Se usa una clave de API dummy en el código
- En producción, reemplazar con una clave válida
- Manejo de errores incluido para fallos de autenticación

### HTML2PDF
- Configuración optimizada para calidad
- Soporte para elementos CSS complejos
- Manejo de errores incluido

### Accesibilidad
- HTML semántico
- Contraste de colores adecuado
- Navegación por teclado
- Textos alternativos para iconos

## 🔒 Consideraciones de Seguridad

- No se almacenan datos personales
- Formulario de RSVP es solo de demostración
- En producción, implementar backend para manejar confirmaciones
- Usar HTTPS para el hosting final

## 📈 Mejoras Futuras

- [ ] Backend para manejar confirmaciones de asistencia
- [ ] Sistema de recordatorios por email
- [ ] Galería de fotos del baby shower
- [ ] Lista de regalos interactiva
- [ ] Integración con calendarios (Google Calendar, iCal)
- [ ] Modo oscuro
- [ ] Soporte para múltiples idiomas

## 👥 Créditos

- **Diseño y desarrollo**: ELROI Dev
- **Para**: Emma Luz
- **Fecha**: Marzo 2026

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

**¡Gracias por visitar la invitación digital del Baby Shower de Emma Luz!** 🎉👶💕
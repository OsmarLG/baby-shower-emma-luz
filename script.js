// DOM Elements
const calendarBtn = document.getElementById('calendarBtn');
const toast = document.getElementById('toast');
const productionLink = document.getElementById('productionLink');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const whatsappBtn = document.getElementById('whatsappBtn');

// Event date: April 18, 2026, 8:00 AM (Mexico time)
const eventDate = new Date('2026-04-18T08:00:00-07:00'); // Baja California Sur timezone

// Initialize Google Map
let map;

function initMap() {
    // Create a simple map container that links to the specific Google Maps URL
    const mapElement = document.getElementById('map');
    
    // Create a clickable map container
    mapElement.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; cursor: pointer; background: linear-gradient(135deg, #ffb6c1 0%, #ffd700 100%);">
            <div style="margin-bottom: 20px;">
                <i class="fas fa-map-marker-alt" style="font-size: 4rem; color: #ff69b4;"></i>
                <i class="fas fa-baby" style="font-size: 3rem; color: #ff1493; margin-left: 10px;"></i>
                <i class="fas fa-bear" style="font-size: 3rem; color: #8b4513; margin-left: 10px;"></i>
            </div>
            <h3 style="color: #333; margin-bottom: 10px; font-family: 'Dancing Script', cursive; font-size: 2rem;">Ubicación del Baby Shower</h3>
            <p style="color: #666; margin-bottom: 15px; font-size: 1.1rem;">Restaurante Casa Bonita</p>
            <p style="color: #666; margin-bottom: 20px; line-height: 1.4;">
                Calle 5 de Febrero, La Paz<br>
                Baja California Sur
            </p>
            <div style="background: linear-gradient(135deg, #ff69b4 0%, #ffd700 100%); color: white; padding: 12px 25px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                <i class="fas fa-map"></i>
                <span>Abrir en Google Maps</span>
            </div>
            <p style="color: #888; margin-top: 20px; font-size: 0.9rem;">
                <i class="fas fa-info-circle"></i> Haz clic en cualquier parte del mapa para abrir la ubicación
            </p>
        </div>
    `;
    
    // Make the entire map clickable
    mapElement.addEventListener('click', () => {
        window.open('https://maps.app.goo.gl/x11p6SWtkZCkJVZi6', '_blank');
    });
}

// Countdown timer
function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;
    
    if (timeDifference <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Show toast notification
function showToast(message, type = 'info') {
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    toast.className = 'toast show';
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Enlace copiado al portapapeles', 'success');
    }).catch(err => {
        console.error('Error copying to clipboard:', err);
        showToast('Error al copiar el enlace', 'error');
    });
}



// Add to calendar function
function addToCalendar() {
    const eventDate = new Date('2026-04-18T08:00:00-07:00');
    const endDate = new Date('2026-04-18T12:00:00-07:00');
    
    const event = {
        title: 'Baby Shower de Emma Luz 🎉',
        description: 'Celebración del Baby Shower de Emma Luz en Restaurante Casa Bonita',
        location: 'Restaurante Casa Bonita, Calle 5 de Febrero, La Paz, Baja California Sur',
        start: eventDate.toISOString().replace(/-|:|\.\d+/g, ''),
        end: endDate.toISOString().replace(/-|:|\.\d+/g, ''),
        url: 'https://baby-shower.openclaw.elroi.cloud'
    };
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
    
    window.open(googleCalendarUrl, '_blank');
    showToast('Abriendo Google Calendar para agregar el evento', 'info');
}

// WhatsApp confirmation function
function confirmViaWhatsApp() {
    const phoneNumber = '+526151127548'; // Fixed: removed extra '1' after country code
    const message = encodeURIComponent('¡Hola! Confirmo mi asistencia al Baby Shower de Emma Luz el 18 de abril de 2026. ¡Nos vemos allí! 🎉');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    showToast('Abriendo WhatsApp para confirmar asistencia', 'info');
}

// Event Listeners
calendarBtn.addEventListener('click', addToCalendar);
whatsappBtn.addEventListener('click', confirmViaWhatsApp);

// Set production link
productionLink.href = 'https://baby-shower.openclaw.elroi.cloud';

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Initialize map
initMap();

// Add some interactive animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        section {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    
    // Show welcome message
    setTimeout(() => {
        showToast('¡Bienvenido a la invitación digital del Baby Shower de Emma Luz!', 'info');
    }, 1000);
});


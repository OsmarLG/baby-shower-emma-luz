// DOM Elements
const rsvpBtn = document.getElementById('rsvpBtn');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const rsvpModal = document.getElementById('rsvpModal');
const shareModal = document.getElementById('shareModal');
const closeRsvpModal = document.getElementById('closeRsvpModal');
const closeShareModal = document.getElementById('closeShareModal');
const rsvpForm = document.getElementById('rsvpForm');
const toast = document.getElementById('toast');
const productionLink = document.getElementById('productionLink');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Share modal elements
const copyLinkBtn = document.getElementById('copyLinkBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const facebookBtn = document.getElementById('facebookBtn');
const twitterBtn = document.getElementById('twitterBtn');
const emailBtn = document.getElementById('emailBtn');
const shareLink = document.getElementById('shareLink');
const copyLinkInputBtn = document.getElementById('copyLinkInputBtn');

// Event date: April 18, 2026, 8:00 AM (Mexico time)
const eventDate = new Date('2026-04-18T08:00:00-07:00'); // Baja California Sur timezone

// Initialize Google Map
let map;
let marker;

function initMap() {
    // Coordinates for Restaurante Casa Bonita, La Paz, BCS (approximate)
    const restaurantLocation = { lat: 24.1426, lng: -110.3129 };
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: restaurantLocation,
        zoom: 15,
        styles: [
            {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#7c93a3' }]
            },
            {
                featureType: 'all',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#ffffff' }, { weight: 2 }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e9e9e9' }]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }]
            }
        ]
    });
    
    marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: 'Restaurante Casa Bonita',
        animation: google.maps.Animation.DROP,
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                    <circle cx="12" cy="12" r="10" fill="#ff69b4" opacity="0.8"/>
                    <circle cx="12" cy="12" r="8" fill="#ffffff"/>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ff69b4"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 5px 0; color: #ff69b4;">Restaurante Casa Bonita</h3>
                <p style="margin: 0 0 5px 0;">Calle 5 de Febrero, La Pava</p>
                <p style="margin: 0 0 5px 0;">California Sur, La Paz</p>
                <p style="margin: 0 0 10px 0;">Baja California Sur</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${restaurantLocation.lat},${restaurantLocation.lng}" 
                   target="_blank" 
                   style="color: #87ceeb; text-decoration: none; font-weight: bold;">
                    Cómo llegar
                </a>
            </div>
        `
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
    
    // Open info window by default
    infoWindow.open(map, marker);
    
    // Make map clickable to open in Google Maps
    map.addListener('click', () => {
        window.open(`https://www.google.com/maps?q=${restaurantLocation.lat},${restaurantLocation.lng}`, '_blank');
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

// Generate PDF
function generatePDF() {
    showToast('Generando PDF...', 'info');
    
    const element = document.querySelector('.container');
    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Invitacion-Baby-Shower-Emma-Luz.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(element).save().then(() => {
        showToast('PDF descargado exitosamente', 'success');
    }).catch(err => {
        console.error('Error generating PDF:', err);
        showToast('Error al generar el PDF', 'error');
    });
}

// Event Listeners
rsvpBtn.addEventListener('click', () => {
    rsvpModal.style.display = 'flex';
});

downloadBtn.addEventListener('click', generatePDF);

shareBtn.addEventListener('click', () => {
    shareModal.style.display = 'flex';
});

closeRsvpModal.addEventListener('click', () => {
    rsvpModal.style.display = 'none';
});

closeShareModal.addEventListener('click', () => {
    shareModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === rsvpModal) {
        rsvpModal.style.display = 'none';
    }
    if (event.target === shareModal) {
        shareModal.style.display = 'none';
    }
});

// RSVP Form submission
rsvpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    console.log('RSVP Submitted:', { name, email, guests, message });
    
    showToast(`¡Gracias ${name}! Tu confirmación ha sido enviada.`, 'success');
    rsvpForm.reset();
    rsvpModal.style.display = 'none';
});

// Share functionality
copyLinkBtn.addEventListener('click', () => {
    copyToClipboard(shareLink.value);
});

copyLinkInputBtn.addEventListener('click', () => {
    copyToClipboard(shareLink.value);
});

whatsappBtn.addEventListener('click', () => {
    const text = encodeURIComponent('¡Te invito al Baby Shower de Emma Luz! 🎉\n\nFecha: 18 de abril, 8:00 AM\nLugar: Restaurante Casa Bonita, La Paz, BCS\n\nMira la invitación digital: ');
    const url = encodeURIComponent(shareLink.value);
    window.open(`https://wa.me/?text=${text}${url}`, '_blank');
});

facebookBtn.addEventListener('click', () => {
    const url = encodeURIComponent(shareLink.value);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
});

twitterBtn.addEventListener('click', () => {
    const text = encodeURIComponent('¡Te invito al Baby Shower de Emma Luz! 🎉 #BabyShower #EmmaLuz');
    const url = encodeURIComponent(shareLink.value);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
});

emailBtn.addEventListener('click', () => {
    const subject = encodeURIComponent('Invitación al Baby Shower de Emma Luz');
    const body = encodeURIComponent(`¡Hola!

Te invito al Baby Shower de Emma Luz 🎉

📅 Fecha: 18 de abril, 2026
⏰ Hora: 8:00 AM
📍 Lugar: Restaurante Casa Bonita, Calle 5 de Febrero, La Pava, California Sur, La Paz, Baja California Sur

Mira la invitación digital completa aquí: ${shareLink.value}

¡Espero verte allí!

Con cariño,
La familia de Malús y Emma Luz`);
    
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
});

// Set production link
productionLink.href = 'https://baby-shower.openclaw.elroi.cloud';
shareLink.value = 'https://baby-shower.openclaw.elroi.cloud';

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

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

// Handle Google Maps API error
window.gm_authFailure = function() {
    const mapElement = document.getElementById('map');
    mapElement.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center;">
            <i class="fas fa-map-marked-alt" style="font-size: 3rem; color: #ff69b4; margin-bottom: 20px;"></i>
            <h3 style="color: #333; margin-bottom: 10px;">Ubicación del Restaurante</h3>
            <p style="color: #666; margin-bottom: 15px;">Restaurante Casa Bonita</p>
            <p style="color: #666; margin-bottom: 20px;">Calle 5 de Febrero, La Pava<br>California Sur, La Paz<br>Baja California Sur</p>
            <a href="https://www.google.com/maps/search/Restaurante+Casa+Bonita+La+Paz+Baja+California+Sur" 
               target="_blank" 
               style="background: linear-gradient(135deg, #ff69b4 0%, #87ceeb 100%); color: white; padding: 10px 20px; border-radius: 25px; text-decoration: none; font-weight: bold;">
                Ver en Google Maps
            </a>
        </div>
    `;
};
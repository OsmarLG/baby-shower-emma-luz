#!/bin/bash

echo "🔍 Verificando cambios realizados en la invitación del Baby Shower Emma Luz"
echo "=========================================================================="

# Check 1: Verify WhatsApp button is removed
echo ""
echo "1. Verificando que el botón de WhatsApp fue eliminado..."
if grep -q "whatsappBtn" index.html; then
    echo "❌ ERROR: Botón de WhatsApp aún existe en index.html"
else
    echo "✅ OK: Botón de WhatsApp eliminado de index.html"
fi

if grep -q "confirmViaWhatsApp" script.js; then
    echo "❌ ERROR: Función confirmViaWhatsApp aún existe en script.js"
else
    echo "✅ OK: Función confirmViaWhatsApp eliminada de script.js"
fi

# Check 2: Verify footer is light not dark
echo ""
echo "2. Verificando que el footer es claro (no oscuro)..."
if grep -q "background: linear-gradient(135deg, var(--dark-gray)" style.css; then
    echo "❌ ERROR: Footer aún tiene fondo oscuro en style.css"
else
    echo "✅ OK: Footer tiene fondo claro en style.css"
fi

if grep -q "background: linear-gradient(135deg, var(--pastel-pink)" style.css; then
    echo "✅ OK: Footer tiene fondo pastel pink"
else
    echo "⚠️ ADVERTENCIA: Footer puede no tener el color pastel esperado"
fi

# Check 3: Verify Winnie Pooh girl colors
echo ""
echo "3. Verificando colores de tema Winnie Pooh para niña..."
if grep -q "--winnie-pink: #ffb6c1" style.css; then
    echo "✅ OK: Color --winnie-pink definido"
else
    echo "❌ ERROR: Color --winnie-pink no definido"
fi

if grep -q "--winnie-gold: #ffd700" style.css; then
    echo "✅ OK: Color --winnie-gold definido"
else
    echo "❌ ERROR: Color --winnie-gold no definido"
fi

if grep -q "--pastel-pink: #ffd1dc" style.css; then
    echo "✅ OK: Color --pastel-pink definido"
else
    echo "❌ ERROR: Color --pastel-pink no definido"
fi

# Check 4: Verify Winnie Pooh icons
echo ""
echo "4. Verificando iconos de Winnie Pooh..."
if grep -q "fas fa-bear" index.html; then
    echo "✅ OK: Icono de oso (Winnie Pooh) presente"
else
    echo "❌ ERROR: Icono de oso no encontrado"
fi

if grep -q "fas fa-honey-pot" index.html; then
    echo "✅ OK: Icono de tarro de miel presente"
else
    echo "❌ ERROR: Icono de tarro de miel no encontrado"
fi

if grep -q "fas fa-bee" index.html; then
    echo "✅ OK: Icono de abeja presente"
else
    echo "❌ ERROR: Icono de abeja no encontrado"
fi

if grep -q "balloon-decorations" index.html; then
    echo "✅ OK: Decoración de globos presente"
else
    echo "❌ ERROR: Decoración de globos no encontrada"
fi

# Check 5: Verify preserved features
echo ""
echo "5. Verificando características preservadas..."
if grep -q "countdown-container" index.html; then
    echo "✅ OK: Countdown preservado"
else
    echo "❌ ERROR: Countdown no encontrado"
fi

if grep -q "map-container" index.html; then
    echo "✅ OK: Mapa preservado"
else
    echo "❌ ERROR: Mapa no encontrado"
fi

if grep -q "gifts-section" index.html; then
    echo "✅ OK: Sección de regalos preservada"
else
    echo "❌ ERROR: Sección de regalos no encontrada"
fi

# Check 6: Verify calendar button still exists
echo ""
echo "6. Verificando que el botón de calendario aún existe..."
if grep -q "calendarBtn" index.html; then
    echo "✅ OK: Botón de calendario presente"
else
    echo "❌ ERROR: Botón de calendario no encontrado"
fi

echo ""
echo "=========================================================================="
echo "📊 RESUMEN:"
echo ""
echo "La verificación ha completado. Si todos los checks muestran ✅ OK,"
echo "los cambios solicitados han sido implementados correctamente."
echo ""
echo "🎉 La invitación está lista para rebuild y deploy!"
echo ""
echo "Para deployar:"
echo "1. npm run build"
echo "2. npm run deploy"
echo "3. Verificar en https://baby-shower.openclaw.elroi.cloud"
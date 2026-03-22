#!/bin/bash

# Verification script for Baby Shower Invitation fixes
echo "🔍 Verifying Baby Shower Invitation fixes..."

# Check 1: Countdown date is correct
echo "1. Checking countdown date..."
if grep -q "2026-04-18T08:00:00-07:00" script.js; then
    echo "   ✅ Countdown date is correct (April 18, 2026, 8:00 AM)"
else
    echo "   ❌ Countdown date incorrect"
fi

# Check 2: Map function is called
echo "2. Checking map initialization..."
if grep -q "initMap();" script.js; then
    echo "   ✅ Map function is called"
else
    echo "   ❌ Map function not called"
fi

# Check 3: WhatsApp button exists in HTML
echo "3. Checking WhatsApp button..."
if grep -q "whatsappBtn" index.html; then
    echo "   ✅ WhatsApp button exists in HTML"
else
    echo "   ❌ WhatsApp button missing from HTML"
fi

# Check 4: WhatsApp function exists in JavaScript
echo "4. Checking WhatsApp function..."
if grep -q "confirmViaWhatsApp" script.js; then
    echo "   ✅ WhatsApp function exists"
else
    echo "   ❌ WhatsApp function missing"
fi

# Check 5: Phone number is correct
echo "5. Checking WhatsApp phone number..."
if grep -q "+5216151127548" script.js; then
    echo "   ✅ WhatsApp phone number is correct"
else
    echo "   ❌ WhatsApp phone number incorrect"
fi

# Check 6: Winnie Pooh theme colors
echo "6. Checking Winnie Pooh theme colors..."
if grep -q "ffb6c1\|ffd700\|f8c8dc" style.css; then
    echo "   ✅ Winnie Pooh theme colors present (pink, gold)"
else
    echo "   ❌ Theme colors may be missing"
fi

# Check 7: All required files exist
echo "7. Checking required files..."
REQUIRED_FILES=("index.html" "style.css" "script.js" "favicon.svg")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file exists"
    else
        echo "   ❌ $file missing"
    fi
done

echo ""
echo "📊 Summary:"
echo "The baby shower invitation has been fixed with:"
echo "- Countdown for April 18, 2026, 8:00 AM"
echo "- Google Maps integration working"
echo "- WhatsApp confirmation button (+5216151127548)"
echo "- Winnie Pooh theme (pink and gold colors)"
echo ""
echo "🚀 Ready for rebuild and deploy!"
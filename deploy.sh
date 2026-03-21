#!/bin/bash

# Deployment script for Baby Shower Invitation
# This script sets up the project for production deployment

set -e

echo "🚀 Preparing Baby Shower Invitation for deployment..."

# Check if we're in the right directory
if [ ! -f "index.html" ] || [ ! -f "style.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Error: Must be run from the baby-shower-invitation directory"
    exit 1
fi

# Create necessary files if they don't exist
echo "📁 Checking project structure..."

if [ ! -f "favicon.svg" ]; then
    echo "📝 Creating favicon..."
    cat > favicon.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#ffb6c1"/>
  <circle cx="50" cy="50" r="35" fill="#ffffff"/>
  <path d="M50 30L60 45L75 50L60 55L50 70L40 55L25 50L40 45L50 30Z" fill="#ff69b4"/>
  <text x="50" y="90" text-anchor="middle" font-family="Arial" font-size="12" fill="#87ceeb">EL</text>
</svg>
EOF
fi

# Create a simple .htaccess for Apache (if needed)
if [ ! -f ".htaccess" ]; then
    echo "🔧 Creating .htaccess for better caching..."
    cat > .htaccess << 'EOF'
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Set caching headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
EOF
fi

# Create a simple deployment info file
echo "📋 Creating deployment info..."
cat > DEPLOYMENT.md << 'EOF'
# Deployment Information

## Project: Baby Shower Invitation - Emma Luz

### Deployment Date
$(date)

### Target URL
https://baby-shower.openclaw.elroi.cloud

### Files Deployed
- index.html
- style.css
- script.js
- favicon.svg
- README.md
- .htaccess (Apache configuration)

### Features
- ✅ Responsive design
- ✅ Google Maps integration
- ✅ PDF generation
- ✅ RSVP form
- ✅ Social sharing
- ✅ Countdown timer

### Notes
- Google Maps API key needs to be configured in production
- RSVP form currently demo-only (needs backend integration)
- PDF generation uses html2pdf.js library

### Post-Deployment Checklist
- [ ] Verify SSL certificate
- [ ] Test all interactive features
- [ ] Check mobile responsiveness
- [ ] Test PDF generation
- [ ] Verify Google Maps loads correctly
- [ ] Test social sharing links
EOF

echo "✅ Project preparation complete!"
echo ""
echo "📦 Next steps:"
echo "1. Initialize git repository: git init"
echo "2. Add files: git add ."
echo "3. Commit: git commit -m 'Initial commit: Baby Shower Invitation for Emma Luz'"
echo "4. Create GitHub repo: gh repo create baby-shower-invitation --public --source=. --remote=origin --push"
echo "5. Deploy to hosting: scp -r . user@server:/path/to/baby-shower.openclaw.elroi.cloud"
echo ""
echo "🎉 The invitation is ready for deployment!"
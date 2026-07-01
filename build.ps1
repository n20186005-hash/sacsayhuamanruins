# Build script with correct environment variables
$env:CURRENT_SITE_DOMAIN="saqsaywaman.com"
npm run build
Write-Host "Build completed with domain: $env:CURRENT_SITE_DOMAIN"

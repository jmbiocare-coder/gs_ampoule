<#
install-deps.ps1

Usage:
  Open PowerShell as Administrator (recommended for winget installs) and run:
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
    .\install-deps.ps1

This script will:
  - Check for Node.js (node). If missing, attempt to install Node.js LTS via winget.
  - Run `npm install` in the repository root.
#>

function Abort($msg) {
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

Write-Host "Checking Node.js installation..."
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host "Node.js not found. Attempting installation via winget..."
    $winget = Get-Command winget -ErrorAction SilentlyContinue
    if (-not $winget) {
        Abort "winget is not available. Please install Node.js LTS manually from https://nodejs.org/ then re-run this script."
    }

    Write-Host "Installing Node.js LTS (OpenJS.NodeJS.LTS) via winget..."
    winget install --id OpenJS.NodeJS.LTS -e --accept-package-agreements --accept-source-agreements

    Write-Host "Re-checking Node.js..."
    $node = Get-Command node -ErrorAction SilentlyContinue
    if (-not $node) {
        Abort "Node.js installation did not complete in this session. Close and reopen PowerShell (or restart your PC) and run this script again."
    }
}

Write-Host "Node.js found: " -NoNewline; node -v

if (-not (Test-Path package.json)) {
    Abort "No package.json found in current directory. Run this script from the project root."
}

Write-Host "Running npm install..."
npm install
if ($LASTEXITCODE -ne 0) {
    Abort "npm install failed with exit code $LASTEXITCODE"
}

Write-Host "Dependencies installed successfully." -ForegroundColor Green

# create-wosmo-project.ps1

param(
    [Parameter(Position = 0)]
    [string]$projectName = ".",
    [Parameter(Position = 1)]
    [string]$projectType = ""
)

# Configuration for different project types
$projectTemplates = @{
    "ecommerce" = @{
        "dependencies" = @{
            "client" = @(
                "react-router-dom",
                "@tanstack/react-query",
                "react-hook-form",
                "zod",
                "@reduxjs/toolkit",
                "react-redux",
                "axios",
                "@headlessui/react",
                "framer-motion",
                "react-hot-toast",
                "recharts",
                "@stripe/stripe-js"
            )
            "server" = @(
                "express",
                "mongoose",
                "cors",
                "dotenv",
                "jsonwebtoken",
                "bcryptjs",
                "multer",
                "cloudinary",
                "express-validator",
                "morgan",
                "helmet",
                "compression",
                "nodemailer",
                "stripe"
            )
            "devDependencies" = @(
                "typescript",
                "@types/node",
                "@types/express",
                "@types/cors",
                "@types/morgan",
                "@types/jsonwebtoken",
                "@types/bcryptjs",
                "@types/multer",
                "ts-node",
                "nodemon"
            )
        }
    }
    "social-media" = @{
        "dependencies" = @{
            "client" = @(
                "react-router-dom",
                "@tanstack/react-query",
                "react-hook-form",
                "zod",
                "@reduxjs/toolkit",
                "react-redux",
                "axios",
                "@headlessui/react",
                "framer-motion",
                "react-hot-toast",
                "socket.io-client"
            )
            "server" = @(
                "express",
                "mongoose",
                "cors",
                "dotenv",
                "jsonwebtoken",
                "bcryptjs",
                "multer",
                "cloudinary",
                "express-validator",
                "morgan",
                "helmet",
                "compression",
                "nodemailer",
                "socket.io"
            )
            "devDependencies" = @(
                "typescript",
                "@types/node",
                "@types/express",
                "@types/cors",
                "@types/morgan",
                "@types/jsonwebtoken",
                "@types/bcryptjs",
                "@types/multer",
                "ts-node",
                "nodemon"
            )
        }
    }
    "blog" = @{
        "dependencies" = @{
            "client" = @(
                "react-router-dom",
                "@tanstack/react-query",
                "react-hook-form",
                "zod",
                "@reduxjs/toolkit",
                "react-redux",
                "axios",
                "@headlessui/react",
                "framer-motion",
                "react-hot-toast",
                "react-markdown"
            )
            "server" = @(
                "express",
                "mongoose",
                "cors",
                "dotenv",
                "jsonwebtoken",
                "bcryptjs",
                "multer",
                "cloudinary",
                "express-validator",
                "morgan",
                "helmet",
                "compression",
                "nodemailer"
            )
            "devDependencies" = @(
                "typescript",
                "@types/node",
                "@types/express",
                "@types/cors",
                "@types/morgan",
                "@types/jsonwebtoken",
                "@types/bcryptjs",
                "@types/multer",
                "ts-node",
                "nodemon"
            )
        }
    }
}

function Show-ProjectTypeMenu {
    Write-Host "`nSelect project type:"
    Write-Host "1. E-commerce"
    Write-Host "2. Social Media"
    Write-Host "3. Blog"
    
    $selection = Read-Host "Enter your choice (1-3)"
    
    switch ($selection) {
        "1" { return "ecommerce" }
        "2" { return "social-media" }
        "3" { return "blog" }
        default { 
            Write-Host "Invalid selection. Defaulting to e-commerce."
            return "ecommerce"
        }
    }
}

function Create-Directory {
    param(
        [string]$path
    )
    
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path | Out-Null
        Write-Host "Created directory: $path"
    }
}

function Create-File {
    param(
        [string]$path,
        [string]$content
    )
    
    if (!(Test-Path $path)) {
        Set-Content -Path $path -Value $content
        Write-Host "Created file: $path"
    }
}

function Initialize-GitRepo {
    param(
        [string]$path
    )
    
    Set-Location $path
    git init
    Create-File -path ".gitignore" -content @"
node_modules/
.env
dist/
build/
.DS_Store
*.log
coverage/
.env.local
.env.development.local
.env.test.local
.env.production.local
"@
}

function Create-ProjectStructure {
    param(
        [string]$basePath,
        [string]$projectType
    )
    
    # Create main project directories
    $directories = @(
        "client/src/assets",
        "client/src/components/common",
        "client/src/components/layout",
        "client/src/components/ui",
        "client/src/features/auth",
        "client/src/features/user",
        "client/src/hooks",
        "client/src/lib",
        "client/src/services",
        "client/src/store",
        "client/src/types",
        "server/src/config",
        "server/src/controllers",
        "server/src/middleware",
        "server/src/models",
        "server/src/routes",
        "server/src/services",
        "server/src/types",
        "server/src/utils"
    )
    
    # Add project-specific directories
    switch ($projectType) {
        "ecommerce" {
            $directories += @(
                "client/src/features/products",
                "client/src/features/cart",
                "client/src/features/checkout",
                "client/src/features/orders"
            )
        }
        "social-media" {
            $directories += @(
                "client/src/features/posts",
                "client/src/features/comments",
                "client/src/features/messages",
                "client/src/features/notifications"
            )
        }
        "blog" {
            $directories += @(
                "client/src/features/posts",
                "client/src/features/comments",
                "client/src/features/categories",
                "client/src/features/tags"
            )
        }
    }
    
    foreach ($dir in $directories) {
        Create-Directory -path "$basePath/$dir"
    }
}

function Initialize-ReactApp {
    param(
        [string]$path
    )
    
    Set-Location $path
    npm create vite@latest client -- --template react-ts
    Set-Location "client"
    npm install
    
    # Install common dependencies
    npm install tailwindcss postcss autoprefixer @tailwindcss/forms
    npx tailwindcss init -p
}

function Initialize-Server {
    param(
        [string]$path,
        [string]$projectType
    )
    
    Set-Location "$path/server"
    npm init -y
    
    # Update package.json scripts
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $packageJson.scripts = @{
        "start" = "node dist/server.js"
        "dev" = "nodemon src/server.ts"
        "build" = "tsc"
        "watch" = "tsc -w"
    }
    $packageJson | ConvertTo-Json | Set-Content "package.json"
    
    # Install dependencies
    $template = $projectTemplates[$projectType]
    $dependencies = $template.dependencies.server -join " "
    $devDependencies = $template.dependencies.devDependencies -join " "
    
    npm install $dependencies
    npm install -D $devDependencies
}

function Create-EnvFiles {
    param(
        [string]$path,
        [string]$projectType
    )
    
    # Server .env
    $serverEnv = @"
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/$projectType
JWT_SECRET=your-jwt-secret
CLOUDINARY_URL=your-cloudinary-url
"@
    
    if ($projectType -eq "ecommerce") {
        $serverEnv += "`nSTRIPE_SECRET_KEY=your-stripe-secret"
    }
    
    Create-File -path "$path/server/.env" -content $serverEnv
    
    # Client .env
    $clientEnv = @"
VITE_API_URL=http://localhost:5000/api
"@
    
    Create-File -path "$path/client/.env" -content $clientEnv
}

# Main script execution
if ($projectName -eq ".") {
    $projectName = (Get-Item -Path ".\").Name
}

if ([string]::IsNullOrEmpty($projectType)) {
    $projectType = Show-ProjectTypeMenu
}

Write-Host "`nCreating new $projectType project: $projectName`n"

# Create project directory if not using current directory
if ($projectName -ne ".") {
    Create-Directory -path $projectName
}

$basePath = $projectName

# Initialize Git repository
Initialize-GitRepo -path $basePath

# Create project structure
Create-ProjectStructure -basePath $basePath -projectType $projectType

# Initialize React app
Initialize-ReactApp -path $basePath

# Initialize Server
Initialize-Server -path $basePath -projectType $projectType

# Create environment files
Create-EnvFiles -path $basePath -projectType $projectType

Write-Host "`nProject setup complete! To get started:"
Write-Host "1. cd $projectName"
Write-Host "2. Update the .env files in both client and server directories"
Write-Host "3. Start the development servers:"
Write-Host "   - Client: cd client && npm run dev"
Write-Host "   - Server: cd server && npm run dev"
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Explicitly set the project root so Turbopack ignores other lockfiles outside this repo.
    root: path.join(__dirname),
  },
}

module.exports = nextConfig

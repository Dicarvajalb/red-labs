var fs = require('fs');
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'build',
    env:{
      accesibilidadJs: fs.readFileSync('./public/index-header.html').toString(),
    }
}

module.exports = nextConfig

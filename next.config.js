var fs = require('fs');
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return{ beforeFiles:[
        {
          source: "/html",
          destination: "/index.html",
        },
        ]
        }
    },
    env:{
      accesibilidadJs: fs.readFileSync('./public/index-header.html').toString(),

    }
    
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['knex', 'bcryptjs'],
    },
}

module.exports = nextConfig

/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config
export default defineConfig({
    base: '/seed-project/',
    plugins: [
        react(),
        legacy({
            targets: ['defaults', '>0.2%', 'not dead'],
            modernPolyfills: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux', 'react-i18next'],
                    chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion', 'react-icons'],
                },
            },
        },
    },
    server: {
        proxy: {
            '/rmg/': {
                target: 'https://railmapgen.github.io',
                changeOrigin: true,
                secure: false,
            },
            '/rmg-palette/': {
                // target: 'http://localhost:8000',
                target: 'https://railmapgen.github.io',
                changeOrigin: true,
                secure: false,
            },
            '/rmp-gallery/': {
                // target: 'http://localhost:8000',
                target: 'https://railmapgen.github.io',
                changeOrigin: true,
                secure: false,
            },
            '^(/styles/|/fonts/|/rmg/|/rmg-palette/|/rmp-gallery/)': {
                target: 'https://railmapgen.github.io',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        server: {
            deps: {
                fallbackCJS: true,
            },
        },
        watch: false,
    },
});

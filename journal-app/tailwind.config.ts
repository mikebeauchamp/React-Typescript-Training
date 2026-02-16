import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light']
    }
} as Config

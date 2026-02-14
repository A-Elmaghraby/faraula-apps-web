/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#060a14',
                    deeper: '#0a0e1a',
                    surface: '#111827',
                },
                neon: {
                    cyan: '#06d6a0',
                    purple: '#8b5cf6',
                    pink: '#f472b6',
                    blue: '#38bdf8',
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out both',
                'fade-in': 'fadeIn 0.6s ease-out both',
                'slide-in-left': 'slideInLeft 0.6s ease-out both',
                'slide-in-right': 'slideInRight 0.6s ease-out both',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
};

import type { Config } from 'tailwindcss'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                airbnb: {
                    Shades: {
                        white: `var(--white)`,
                        black: `var(--black)`,
                        'white-05': `var(--white-05)`,
                        'black-30': `var(--black-30)`,
                    },
                    neutral: {
                        100: `var(--neutral-01)`,
                        200: `var(--neutral-02)`,
                        300: `var(--neutral-03)`,
                        400: `var(--neutral-04)`,
                        500: `var(--neutral-05)`,
                        600: `var(--neutral-06)`,
                        700: `var(--neutral-07)`,
                        800: `var(--neutral-08)`,
                    },
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                gray: {},
            },
            borderRadius: {
                xl: 'calc(var(--radius) * 4)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            backgroundImage: {
                'hero-pattern': 'var(--gradient)',
            },
            gridTemplateColumns: {
                carousel: 'auto 1fr auto',
                'auto-fit':
                    'repeat(var(--destination-card-columns, 3), minmax(0, 1fr))',
                'card-grid':
                    'repeat(var(--destination-card-columns), minmax(0, 1fr))',
            },
            gridTemplateAreas: {
                carousel: [
                    'carousel_prev_btn carousel_container carousel_next_btn',
                ],
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        function ({
            addUtilities,
        }: {
            addUtilities: (utilities: Record<string, any>) => void
        }) {
            addUtilities({
                '.grid-areas-carousel': {
                    'grid-template-areas': `
            "carousel_prev_btn carousel_container carousel_next_btn"
          `,
                },
                '.area-carousel_prev_btn': {
                    'grid-area': 'carousel_prev_btn',
                },
                '.area-carousel_container': {
                    'grid-area': 'carousel_container',
                },
                '.area-carousel_next_btn': {
                    'grid-area': 'carousel_next_btn',
                },
            })
        },
    ],
} satisfies Config

export default config

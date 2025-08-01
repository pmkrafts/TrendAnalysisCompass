import { createTheme } from '@mui/material/styles';

// Bento Grid + Glassmorphism MUI Theme
const bentoGlassTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
            light: 'rgba(255, 255, 255, 0.9)',
            dark: 'rgba(255, 255, 255, 0.7)',
            contrastText: '#000000',
        },
        secondary: {
            main: '#6366f1', // Indigo accent
            light: '#818cf8',
            dark: '#4f46e5',
            contrastText: '#ffffff',
        },
        background: {
            default: '#8ddbdb', // Dark bento background
            paper: 'rgba(125, 221, 245, 0.05)',
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.95)',
            secondary: 'rgba(255, 255, 255, 0.7)',
        },
        divider: 'rgba(0, 0, 0, 0.08)',
        // Custom bento colors
        grey: {
            50: 'rgba(255, 255, 255, 0.02)',
            100: 'rgba(255, 255, 255, 0.05)',
            200: 'rgba(255, 255, 255, 0.08)',
            300: 'rgba(255, 255, 255, 0.12)',
            400: 'rgba(255, 255, 255, 0.16)',
            500: 'rgba(255, 255, 255, 0.20)',
        },
    },
    typography: {
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '0.95rem',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
            letterSpacing: '0.01em',
        },
        caption: {
            fontSize: '0.75rem',
            letterSpacing: '0.02em',
            opacity: 0.7,
        },
    },
    shape: {
        borderRadius: 20, // Rounded bento boxes
    },
    spacing: 8,
    components: {
        // Global styles
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#46535f',
                    minHeight: '100vh',
                    fontSmooth: 'always',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                },
                '*': {
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent',
                },
                '*::-webkit-scrollbar': {
                    width: '6px',
                },
                '*::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                },
            },
        },

        // Container for bento grid layout
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                },
            },
        },

        // Grid system for bento layout
        MuiGrid: {
            defaultProps: {
                spacing: 3,
            },
            styleOverrides: {},
        },

        // Main bento cards/papers
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    position: 'relative',
                    background: 'rgba(224, 217, 217, 0.03)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        background: 'rgba(223, 38, 38, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        transform: 'translateY(-2px)',
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    },
                },
            },
        },

        // Bento Cards
        MuiCard: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        transform: 'translateY(-2px)',
                    },
                    // Bento grid size variants
                    '&.bento-small': {
                        minHeight: '200px',
                    },
                    '&.bento-medium': {
                        minHeight: '300px',
                    },
                    '&.bento-large': {
                        minHeight: '400px',
                    },
                    '&.bento-wide': {
                        minHeight: '250px',
                    },
                    '&.bento-tall': {
                        minHeight: '500px',
                    },
                },
            },
        },

        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    '&:last-child': {
                        paddingBottom: '24px',
                    },
                },
            },
        },

        // Buttons with glass effect
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    padding: '10px 20px',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                contained: {
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-1px)',
                    },
                },
                outlined: {
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                    },
                },
            },
        },

        // Form inputs with glass effect
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.04)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease',
                        '& fieldset': {
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover fieldset': {
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                        },
                        '&.Mui-focused': {
                            background: 'rgba(255, 255, 255, 0.06)',
                            '& fieldset': {
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                            },
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.9rem',
                    },
                    '& .MuiOutlinedInput-input': {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.9rem',
                    },
                },
            },
        },

        // App Bar for bento layout
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    background: 'rgba(66, 59, 59, 0.8',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    "&:hover ": {
                        background: 'rgba(15, 15, 15, 0.8)',
                    }
                },
            },
        },

        // Chip components for bento cards
        MuiChip: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.75rem',
                    height: '26px',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.12)',
                    },
                },
            },
        },

        // Avatar for bento profile cards
        MuiAvatar: {
            styleOverrides: {
                root: {
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.05)',
                },
            },
        },

        // Dividers for bento card sections
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    margin: '16px 0',
                },
            },
        },

        // List items for bento navigation cards
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    margin: '2px 0',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.04)',
                    },
                    '&.Mui-selected': {
                        background: 'rgba(255, 255, 255, 0.08)',
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.12)',
                        },
                    },
                },
            },
        },

        // Icon buttons for bento cards
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    padding: '8px',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.08)',
                    },
                },
            },
        },
    },
});

// Custom bento grid utility classes
export const bentoClasses = {
    bentoGrid: {
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(12, 1fr)',
        },
    },
    bentoItem: {
        position: 'relative',
        overflow: 'hidden',
    },
    // Grid span utilities
    spanCol1: { gridColumn: 'span 1' },
    spanCol2: { gridColumn: 'span 2' },
    spanCol3: { gridColumn: 'span 3' },
    spanCol4: { gridColumn: 'span 4' },
    spanCol5: { gridColumn: 'span 5' },
    spanCol6: { gridColumn: 'span 6' },
    spanCol7: { gridColumn: 'span 7' },
    spanCol8: { gridColumn: 'span 8' },
    spanCol9: { gridColumn: 'span 9' },
    spanCol10: { gridColumn: 'span 10' },
    spanCol11: { gridColumn: 'span 11' },
    spanCol12: { gridColumn: 'span 12' },
    // Row span utilities
    spanRow1: { gridRow: 'span 1' },
    spanRow2: { gridRow: 'span 2' },
    spanRow3: { gridRow: 'span 3' },
    spanRow4: { gridRow: 'span 4' },
};

export default bentoGlassTheme;
import { extendTheme } from '@chakra-ui/react'

const tema = extendTheme({
    fonts: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, serif",
        mono: "Montserrat, monospace"
    },
    colors: {
        customBlue: {
            50: "#E3F2FD",
            100: "#64B5F6",
            200: "#90CAF9",
            300: "#87CEEB",
            400: "#42A5F5",
            500: "#2196F3", // Defina a cor principal desejada aqui
            600: "#1E88E5",
            700: "#1976D2",
            800: "#1565C0",
            900: "#0D47A1",
        },
    },
})

export default tema;

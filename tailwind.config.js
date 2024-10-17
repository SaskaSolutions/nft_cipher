/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
        roboto: ["Roboto", "monospace"],
      },
      colors: {
        primary: "#0a0118",      // Main background color (used in Section 1)
        secondary: "#9b59b6",    // Buttons, links, highlights (used in Section 1)
        accent: "#8e44ad",       // Secondary highlights, icons (used in Section 1)
        background: "#1e1e2e",   // General background (used in Section 1)
        foreground: "#2c2c3e",   // Card and modal backgrounds (used in Section 1)
        textPrimary: "#e0e0e0",  // Primary text color (used in Section 1)
        textSecondary: "#b3b3b3",// Secondary text color (used in Section 1)
        border: "#44475a",       // Borders and dividers (used in Section 1)
        hover: "#6c3483",        // Hover states (used in Section 1)

        // New colors for Section 2
        primary2: "#1a202c",      // Main background color
        secondary2: "#4a5568",    // Buttons, links, highlights
        accent2: "#2d3748",       // Secondary highlights, icons
        background2: "#171923",   // General background
        foreground2: "#2d3748",   // Card and modal backgrounds
        textPrimary2: "#e2e8f0",  // Primary text color
        textSecondary2: "#cbd5e0",// Secondary text color
        border2: "#718096",       // Borders and dividers
        hover2: "#4a5568",        // Hover states

        // New colors for Section 3
        primary3: "#f7fafc",      // Main background color
        secondary3: "#cbd5e0",    // Buttons, links, highlights
        accent3: "#a0aec0",       // Secondary highlights, icons
        background3: "#edf2f7",   // General background
        foreground3: "#e2e8f0",   // Card and modal backgrounds
        textPrimary3: "#2d3748",  // Primary text color
        textSecondary3: "#4a5568",// Secondary text color
        border3: "#cbd5e0",       // Borders and dividers
        hover3: "#a0aec0",        // Hover states

        // New colors for Section 4
        primary4: "#2d3748",      // Main background color
        secondary4: "#718096",    // Buttons, links, highlights
        accent4: "#4a5568",       // Secondary highlights, icons
        background4: "#1a202c",   // General background
        foreground4: "#2a4365",   // Card and modal backgrounds
        textPrimary4: "#e2e8f0",  // Primary text color
        textSecondary4: "#cbd5e0",// Secondary text color
        border4: "#4a5568",       // Borders and dividers
        hover4: "#718096",        // Hover states
      },
    },
  },
  plugins: [],
};

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var${variableName})`;
    }
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        base: {
          main: withOpacity("--color-bg-main"),
          keys: withOpacity("--color-bg-keypad"),
          display: withOpacity("--color-bg-display"),
        },
        keys: {
          main: {
            base: withOpacity("--color-keys-main-bg"),
            shadow: withOpacity("--color-keys-main-shadow"),
          },
          destruct: {
            base: withOpacity("--color-keys-destructive-bg"),
            shadow: withOpacity("--color-keys-destructive-shadow"),
          },
          evaluate: {
            base: withOpacity("--color-keys-eval-bg"),
            shadow: withOpacity("--color-keys-eval-shadow"),
          },
        },
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
    },
  },
  plugins: [],
};

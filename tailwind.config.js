/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo': "url(/ideas.png)",
        'login-bg': "url(/background/699.jpg)",
        'login-art': "url(/login/undraw_thought_process_re_om58.svg)",
        'platform-bg': "url(/background/8585.jpg)"
      },
      backgroundColor:{
        'hightlight-col':'#1976d2'
      },
      textColor:{
        'header-text': '#1976d2'
      }
    },
  },
  plugins: [],
}

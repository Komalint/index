 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        olive: '#D91656' ,
      },
       screens: {
          xs: '350px' ,
       },
    },
  },
  plugins: [],
}
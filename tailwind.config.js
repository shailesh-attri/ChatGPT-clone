
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'x240':{'min':'240px','max':'399px'},
        'x400':{'min':'400px','max':'519px'},
        'x520':{'min':'520px','max':'639px'},
        'x640':{'min':'640px','max':'759px'},
        'x760':{'min':'760px','max':'839px'},
        'x840':{'min':'840px','max':'1079px'},
        'x1080':{'min':'1080px','max':'1269px'},
        'x1260':{'min':'1260px','max':'1535px'},
        'x1536':{'min':'1536px','max':'1920px'}
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
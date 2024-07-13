/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      
      screens:
      {
        'mobile-sm': '320px',
        // => @media (min-width: 320px) { ... }
        
        'mobile-md': '375px',
        // => @media (min-width: 375px) { ... }

        'mobile-lg': '425px',
        // => @media (min-width: 425px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        
        'md-lg': '896px',
        // => @media (min-width: 896px) { ... }
  
        'lg': '1080px',
        // => @media (min-width: 1080px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily:
      {
        'Inter-Light': ['Inter-Light'],
        'Inter-Regular': ['Inter-Regular'],
        'Inter-Medium': ['Inter-Medium'],
        'Inter-SemiBold': ['Inter-SemiBold'],
        'Inter-Bold': ['Inter-Bold'],
        'Inter-ExtraBold': ['Inter-ExtraBold'],
        'Inter-Black': ['Inter-Black']
      },
      fontSize:
      {
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '72': '72px'
      },
      size:
      {
        'swatch': '5.75em'
      },
      width:
      {
        'col-1': '8.33%',
        'col-2': '16.66%',
        'col-3': '25%',
        'col-4': '33.33%',
        'col-5': '41.66%',
        'col-6': '50%',
        'col-7': '58.33%',
        'col-8': '66.66%',
        'col-9': '75%',
        'col-10': '83.33%',
        'col-11': '91.66%',
        'col-12': '100%'
      },
      height:
      {
        'card-height-sm': '91.66vh',
        'card-height-sm-1/2': '45.83vh',
        'card-height': '960px',
        'card-height-1/2': '540px'
      },
      colors:
      {
        'microsoft-blue': '#00A3EE',
        'microsoft-yellow': '#FFB900',
        'microsoft-green': '#7FBA00',
        'microsoft-red': '#F25022',
      },
      borderRadius:
      {
        'default': '1em',
        '3/4': '0.75em',
        'swatch': '1em',
        '48': '48px',
        'circular': '50%'
      },
      boxShadow:
      {
        'card-shadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    // ... other plugins
    require('@lostisworld/tailwind-mask'),
  ],
}


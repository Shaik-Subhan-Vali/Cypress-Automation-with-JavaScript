// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default

// async function setupNodeEvents(on,config){
//   on('file:preprocessor', cucumber())
//   return config;
// }

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents,  
//     specPattern: 'cypress/UAT/Features/*.{js,feature}'
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: 
  {
    specPattern: "cypress/e2e/Assignments/Integration/Tests/**/*.spec.js",
  },

  e2e: 
  {
    setupNodeEvents(on, config)
    {
     
    },
  },
});

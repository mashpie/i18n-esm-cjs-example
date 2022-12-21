const path = require('path');
const { I18n } = require('i18n');

const scope = {}

new I18n({
  locales: ['en'],
  register: scope,

  /**
   * uncomment to write to ./locales/en.json instead of ./node_modules/i18n/locales/en.json
   */
  // directory: path.join(__dirname, 'locales') 
  
});

scope.setLocale('en')

console.log(scope.__('Hello'));
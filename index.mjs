import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { I18n } from 'i18n';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scope = {};

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
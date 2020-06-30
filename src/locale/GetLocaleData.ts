import { LocaleData } from "./LocaleData";
import enLocaleData from "./en/LocaleData";
import esLocaleData from "./es/LocaleData";

const allLocales = [enLocaleData, esLocaleData];

let localeMap: {[key: string]: LocaleData} = {};

export const localeList = [
  {
    prefix: 'en',
    name: 'English'
  }, {
    prefix: 'es',
    name: 'Español'
  }
];

export function GetLocaleData(localeCode = 'en'): LocaleData {
  let locale = localeMap[localeCode];
  if (!locale) {
    locale = allLocales.find(x => x.prefix === localeCode) || allLocales[0];
    localeMap[localeCode] = locale;
  }
  return locale;
}

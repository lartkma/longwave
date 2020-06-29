import { LocaleData } from "./LocaleData";
import enLocaleData from "./en/LocaleData";
import esLocaleData from "./es/LocaleData";

const allLocales = [enLocaleData, esLocaleData];

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
  return allLocales.find(x => x.prefix === localeCode) || allLocales[0];
}

import { LocaleData } from "./LocaleData";
import enLocaleData from "./en/LocaleData";
import esLocaleData from "./es/LocaleData";

const allLocales = [enLocaleData, esLocaleData];

type LocaleDataSimple = {
  prefix: LocaleData['prefix'],
  name: LocaleData['name']
};

export function GetLocaleData(localeCode = 'en'): LocaleData {
  return allLocales.find(x => x.prefix === localeCode) || allLocales[0];
}

export function GetLocaleList(): LocaleDataSimple[] {
  return allLocales.map(x => ({prefix: x.prefix, name: x.name}) as LocaleDataSimple);
}

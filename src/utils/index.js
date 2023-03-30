export function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}


export function getCountriesCode(){
  const countries = require('/public/locals/countryPhoneCodes.json');
  return countries;
}

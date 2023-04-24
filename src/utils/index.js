export function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}


// export function getCountriesCode(){
//   const countries = require('/public/locals/countryPhoneCodes.json');
//   return countries;
// }


export function reformFireBaseDates(res){
  // res.createdAt = res.createdAt.toDate() 
  // res.updatedAt = res.updatedAt.toDate()
  return res 
}

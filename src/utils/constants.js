export const percentColors = [
    { percentage: 0.0, color: { r: 0, g: 57, b: 130 } },
    { percentage: 0.5, color: { r: 128, g: 222, b: 252 } },
    { percentage: 1.0, color: { r: 254, g: 141, b: 95 } } ];

export const colors = {
    firstColor: '#15327a',
    secondColor: '#93d8ff'
}

export const constants = {
    cnt: 10,
    percentage: 0
}

export  const  isEmpty = (obj) => {
    if (obj === null ||
        obj === undefined ||
        Array.isArray(obj) ||
        typeof obj !== 'object'
    ) {
        return true;
    }
    return Object.getOwnPropertyNames(obj).length === 0;
  };

  export const countriesStateCode = ["US", "GB", "FR", "DE", "IT", "NL", "RS", "HR", "BS", "ZA", "AU", "RU"].sort()
  
  export const countriesArray = { "US": "US", "GB": "GB", "FR": "FR", "DE": "DE", "IT": "IT", "NL": "NL", "RS": "RS", "HR": "HR", "BS": "BS", "ZA": "ZA", "AU": "AU", "RU": "RU" }
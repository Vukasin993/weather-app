export const percentColors = [
    { percentage: 0.0, color: { r: 9, g: 42, b: 121 } },
    { percentage: 0.1198, color: { r: 13, g: 139, b: 213 } },
    { percentage: 0.25, color: { r: 26, g: 159, b: 234 } },
    { percentage: 0.3854, color: { r: 91, g: 196, b: 253 } },
    { percentage: 0.5, color: { r: 154, g: 220, b: 254 } },
    { percentage: 0.6302, color: { r: 178, g: 223, b: 220 } },
    { percentage: 0.75, color: { r: 254, g: 213, b: 107 } },
    { percentage: 0.875, color: { r: 255, g: 188, b: 117 } },
    { percentage: 1.0, color: { r: 254, g: 148, b: 86 } }
];

// const percentColors = [
//     { percentage: 0.0, color: { r: 0, g: 57, b: 130 } },
//     { percentage: 0.5, color: { r: 128, g: 222, b: 252 } },
//     { percentage: 1.0, color: { r: 254, g: 141, b: 95 } } ];

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
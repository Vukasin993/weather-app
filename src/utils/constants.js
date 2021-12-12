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

export const constants = {
    cnt: 10,
    percentage: 0
}

export const isEmpty = (obj) => {
    if (obj === null ||
        obj === undefined ||
        Array.isArray(obj) ||
        typeof obj !== 'object'
    ) {
        return true;
    }
    return Object.getOwnPropertyNames(obj).length === 0;
  };

  export const countriesStateCode = ["US", "GB", "FR", "DE", "IT", "NL", "RS", "HR", "BS", "ZA", "AU", "RU", "JP", "BR", "JM"].sort()
  
  export const countriesArray = { "US": "US", "GB": "GB", "FR": "FR", "DE": "DE", "IT": "IT", "NL": "NL", "RS": "RS", "HR": "HR", "BS": "BS", "ZA": "ZA", "AU": "AU", "RU": "RU", "JM": "JM", "JP": "JP", "BR": "BR"}

  export const cities = [
    {label: 'belgrade', value: 'Belgrade'},
    {label: 'novi sad', value: 'Novi Sad'},
    {label: 'nis', value: 'Nis'},
    {label: 'kragujevac', value: 'Kragujevac'},
    {label: 'london', value: 'London'},
    {label: 'manchester', value: 'Manchester'},
    {label: 'liverpool', value: 'Liverpool'},
    {label: 'washington', value: 'Washington'},
    {label: 'new orleans', value: 'New Orleans'},
    {label: 'atlanta', value: 'Atlanta'},
    {label: 'chicago', value: 'Chicago'},
    {label: 'new york', value: 'New York'},
    {label: 'utrecht', value: 'Utrecht'},
    {label: 'eindhoven', value: 'Eindhoven'},
    {label: 'amsterdam', value: 'Amsterdam'},
    {label: 'berlin', value: 'Berlin'},
    {label: 'munich', value: 'Munich'},
    {label: 'frankfurt', value: 'Frankfurt'},
    {label: 'mainz', value: 'Mainz'},
    {label: 'sydney', value: 'Sydney'},
    {label: 'melbourne', value: 'Melbourne'},
    {label: 'brisbane', value: 'Brisbane'},
    {label: 'marble bar', value: 'Marble Bar'},
    {label: 'moscow', value: 'Moscow'},
    {label: 'saint petersburg', value: 'Saint Petersburg'},
    {label: 'nizhny novgorod', value: 'Nizhny Novgorod'},
    {label: 'paris', value: 'Paris'},
    {label: 'marseille', value: 'Marseille'},
    {label: 'bordeaux', value: 'Bordeaux'},
    {label: 'lyon', value: 'Lyon'},
    {label: 'rome', value: 'Rome'},
    {label: 'venice', value: 'Venice'},
    {label: 'milan', value: 'Milan'},
    {label: 'florence', value: 'Florence'},
    {label: 'naples', value: 'Naples'},
    {label: 'zagreb', value: 'Zagreb'},
    {label: 'dubrovnik', value: 'Dubrovnik'},
    {label: 'zadar', value: 'Zadar'},
    {label: 'split', value: 'Split'},
    {label: 'rijeka', value: 'Rijeka'},
    {label: 'cape town', value: 'Cape Town'},
    {label: 'johannesburg', value: 'Johannesburg'},
    {label: 'durban', value: 'Durban'},
    {label: 'pretoria', value: 'Pretoria'},
    {label: 'rio de janeiro', value: 'Rio de Janeiro'},
    {label: 'freeport', value: 'Freeport'},
    {label: 'kingston', value: 'Kingston'},
    {label: 'sao paulo', value: 'Sao Paulo'},
    {label: 'tokyo', value: 'Tokyo'},
    {label: 'kyoto', value: 'Kyoto'},
    {label: 'osaka', value: 'Osaka'}
  ];
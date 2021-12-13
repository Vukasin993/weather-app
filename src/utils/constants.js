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

  export const countriesStateCode = ["US", "GB", "FR", "DE", "IT", "NL", "RS", "HR", "BS", "ZA", "AU", "RU", "JP", "BR", "JM"].sort();
  
  export const countriesArray = { "US": "US", "GB": "GB", "FR": "FR", "DE": "DE", "IT": "IT", "NL": "NL", "RS": "RS", "HR": "HR", "BS": "BS", "ZA": "ZA", "AU": "AU", "RU": "RU", "JM": "JM", "JP": "JP", "BR": "BR"};

  export const cities = [
    {label: 'belgrade', value: 'Belgrade', code: 'RS'},
    {label: 'novi sad', value: 'Novi Sad', code: 'RS'},
    {label: 'nis', value: 'Nis', code: 'RS'},
    {label: 'kragujevac', value: 'Kragujevac', code: 'RS'},
    {label: 'london', value: 'London', code: 'GB'},
    {label: 'manchester', value: 'Manchester', code: 'GB'},
    {label: 'liverpool', value: 'Liverpool', code: 'GB'},
    {label: 'washington', value: 'Washington', code: 'US'},
    {label: 'new orleans', value: 'New Orleans', code: 'US'},
    {label: 'atlanta', value: 'Atlanta', code: 'US'},
    {label: 'chicago', value: 'Chicago', code: 'US'},
    {label: 'new york', value: 'New York', code: 'US'},
    {label: 'utrecht', value: 'Utrecht', code: 'NL'},
    {label: 'eindhoven', value: 'Eindhoven', code: 'NL'},
    {label: 'amsterdam', value: 'Amsterdam', code: 'NL'},
    {label: 'berlin', value: 'Berlin', code: 'DE'},
    {label: 'munich', value: 'Munich', code: 'DE'},
    {label: 'frankfurt', value: 'Frankfurt', code: 'DE'},
    {label: 'mainz', value: 'Mainz', code: 'DE'},
    {label: 'sydney', value: 'Sydney', code: 'AU'},
    {label: 'melbourne', value: 'Melbourne', code: 'AU'},
    {label: 'brisbane', value: 'Brisbane', code: 'AU'},
    {label: 'marble bar', value: 'Marble Bar', code: 'AU'},
    {label: 'moscow', value: 'Moscow', code: 'RU'},
    {label: 'saint petersburg', value: 'Saint Petersburg', code: 'RU'},
    {label: 'nizhny novgorod', value: 'Nizhny Novgorod', code: 'RU'},
    {label: 'paris', value: 'Paris', code: 'FR'},
    {label: 'marseille', value: 'Marseille', code: 'FR'},
    {label: 'bordeaux', value: 'Bordeaux', code: 'FR'},
    {label: 'lyon', value: 'Lyon', code: 'FR'},
    {label: 'rome', value: 'Rome', code: 'IT'},
    {label: 'venice', value: 'Venice', code: 'IT'},
    {label: 'milan', value: 'Milan', code: 'IT'},
    {label: 'florence', value: 'Florence', code: 'IT'},
    {label: 'naples', value: 'Naples', code: 'IT'},
    {label: 'zagreb', value: 'Zagreb', code: 'HR'},
    {label: 'dubrovnik', value: 'Dubrovnik', code: 'HR'},
    {label: 'zadar', value: 'Zadar', code: 'HR'},
    {label: 'split', value: 'Split', code: 'HR'},
    {label: 'rijeka', value: 'Rijeka', code: 'HR'},
    {label: 'cape town', value: 'Cape Town', code: 'ZA'},
    {label: 'johannesburg', value: 'Johannesburg', code: 'ZA'},
    {label: 'durban', value: 'Durban', code: 'ZA'},
    {label: 'pretoria', value: 'Pretoria', code: 'ZA'},
    {label: 'rio de janeiro', value: 'Rio de Janeiro', code: 'BR'},
    {label: 'freeport', value: 'Freeport', code: 'BS'},
    {label: 'kingston', value: 'Kingston', code: 'JM'},
    {label: 'sao paulo', value: 'Sao Paulo', code: 'BR'},
    {label: 'tokyo', value: 'Tokyo', code: 'JP'},
    {label: 'kyoto', value: 'Kyoto', code: 'JP'},
    {label: 'osaka', value: 'Osaka', code: 'JP'}
  ];
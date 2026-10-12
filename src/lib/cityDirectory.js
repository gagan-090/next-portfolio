import cities from '@/data/cities.json';
export const cityCountries = {
  india: { name: 'India', code: 'IN', market: 'india', currency: 'INR', note: 'Share your preferred IST meeting times. UPI or bank transfer and milestone terms are agreed before starting.' },
  'south-africa': { name: 'South Africa', code: 'ZA', market: 'south-africa', currency: 'ZAR', note: 'Share your South African review hours and preferred billing currency. Payment method and any transfer fees are agreed before contract.' },
  usa: { name: 'USA', code: 'US', market: 'usa', currency: 'USD', note: 'Share your local time zone and preferred review hours. US daylight-saving changes are considered when agreeing meeting times.' },
};
export const directoryCities = cities;
export const PAGE_SIZE = 100;
const byCountry = Object.fromEntries(Object.keys(cityCountries).map(country => [country, cities.filter(c => c.country === country).sort((a,b) => a.name.localeCompare(b.name) || a.region.localeCompare(b.region))]));
const byPath = new Map(cities.map(c => [`${c.country}/${c.slug}`,c]));
export const citiesFor = country => byCountry[country] || [];
export const findCity = (country, slug) => byPath.get(`${country}/${slug}`);
export const cityPath = city => `/locations/${city.country}/${city.slug}`;
export const listPath = (country, page = 1) => page === 1 ? `/locations/${country}` : `/locations/${country}/page/${page}`;

import { cityCountries,citiesFor,PAGE_SIZE,listPath } from '@/lib/cityDirectory';
import { pageMetadata } from '@/lib/site';
import CityListPage from '@/components/locations/CityListPage';
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(cityCountries).flatMap(country=>Array.from({length:Math.max(0,Math.ceil(citiesFor(country).length/PAGE_SIZE)-1)},(_,i)=>({country,page:String(i+2)})));}
export async function generateMetadata({params}){const {country,page}=await params;const info=cityCountries[country];if(!info)return {};return pageMetadata({title:`${info.name} City Directory — Page ${page}`,description:`Cities and towns for remote freelance software projects in ${info.name}.`,path:listPath(country,Number(page)),noindex:true});}
export default async function Page({params}){const {country,page}=await params;return <CityListPage country={country} page={Number(page)} />;}

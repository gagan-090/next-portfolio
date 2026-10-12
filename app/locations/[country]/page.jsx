import { cityCountries } from '@/lib/cityDirectory';
import { pageMetadata } from '@/lib/site';
import CityListPage from '@/components/locations/CityListPage';
export const dynamicParams=false;
export const generateStaticParams=()=>Object.keys(cityCountries).map(country=>({country}));
export async function generateMetadata({params}) {
 const {country}=await params; const info=cityCountries[country]; if(!info)return {};
 return pageMetadata({title:`Freelance Service Directory — ${info.name}`,description:`Browse real cities and towns in ${info.name} for remote freelance software projects with Gagan Shukla in India.`,path:`/locations/${country}`,noindex:true});
}
export default async function Page({params}) {const {country}=await params;return <CityListPage country={country} />;}

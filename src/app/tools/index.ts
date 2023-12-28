import axios from "axios"

export async function getAllWorldCases (url:string){
    const res = await fetch(url, {cache: 'force-cache'})
    if(!res.ok){
        throw new Error('Failed to fetch data')
    } else if (res.ok){
        return res.json()
    }
}

export const countryDataFetcher = async(url:string) => await axios.get(url).then((res:any) => res.data)
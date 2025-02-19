import { BookData } from "@/types";

export default async function fetchRandomBooks() : Promise<BookData[]>{
    const url = 'next-server-git-master-spike25s-projects.vercel.app/random';

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error();
        }

        return await response.json();

    }catch(err){
        console.error(err);

        return [];
    }
}

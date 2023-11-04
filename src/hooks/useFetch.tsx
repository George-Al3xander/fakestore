import {useState, useEffect} from "react"




const useFetch = (apiLink: string) => {


    const [data, setData] = useState<any>(null);

    const getData = () => {
        fetch(`${apiLink}`)
        .then(res=>res.json())
        .then(json=>setData(json))
    }

    useEffect(() => {
      getData();
    }, [])
    


    return data
}


export default useFetch
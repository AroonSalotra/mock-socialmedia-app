import { useEffect, useState } from "react";
import axios from "axios";

const useGetApi = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)
                console.log("API Connected")
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [url])

    return { data }
}

export default useGetApi;
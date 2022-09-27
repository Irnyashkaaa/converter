import { useEffect, useState } from "react"
import { stateType } from "../App"


export const useAPI = (request: any) => {
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        request()
            .then((response: any) => setData(response.data))
            .catch((error: string) => setError(error))
    }, [])

    console.log(error);
    
    return [data, error]
}
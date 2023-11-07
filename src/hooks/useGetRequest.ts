import { useState, useCallback } from "react";
import loadingStatus from "../helpers/loadingStatus";

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

const useGetRequest = (url : string) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const get = useCallback(async () => {
        setLoadingState(loadingStatus.isLoading)
        await timeout(1000); //simulate network delay
        try {
            const response = await fetch(url, {
                mode: "cors"
            })
            const result = await response.json();
            setLoadingState(loadingStatus.loaded);
            return result;
        } catch (error) {
            setLoadingState(loadingStatus.hasErrored);        
        }
    }, [url]);

    return {get, loadingState};
}

export default useGetRequest;
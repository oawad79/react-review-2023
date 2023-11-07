import { useReducer, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Action = {
    type: string;
    payload: House[];
}

const reducer = (state : House[], action : Action) => {
    switch (action.type) {
        case "initial":
            return [...action.payload];
        case "addHouse":
            return [...state, ...action.payload];
        default:
            return state;
    }
}


const useHouses = () => {
    const [houses, dispatch] = useReducer(reducer, []);
    
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          axios
            .get("http://localhost:3000/v1/houses")
            .then((res) => res.data),
    })

    useEffect(() => {
        async function fetchHouses() {
            if (data) {
                dispatch({
                    type: "initial",
                    payload: data
                });
            }   
        }
        fetchHouses();
    }, [data]);

    return {houses, dispatch, isLoading, isFetching, error};
}

export default useHouses;
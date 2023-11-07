import HouseRow from "./houseRow";
import useHouses from '../hooks/useHouses';
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

const HouseList = () => {
    //const {houses, dispatch, loadingState} = useHouses();
    const {houses, dispatch, isLoading, isFetching} = useHouses();

    if (isLoading || isFetching) {
        return <LoadingIndicator loadingStatus={loadingStatus.isLoading}/>
    }
    
    const addHouse = () => {
        dispatch({
            type: "addHouse",
            payload: [{
                "id": houses.length + 1,
                "address": "Some new address",
                "country": "Colorado",
                "price": 121212
            }]
        });
    }

    return (
        <>
            <div className="grid">
                <div className="text-center font-mono font-bold text-lg text-red-700">
                    <h1>Houses in the Market</h1>
                </div>
                <table className="shadow-lg bg-white">
                    <thead>
                        <tr>
                            <th className="bg-blue-100 border text-left px-8 py-4">Address</th>
                            <th className="bg-blue-100 border text-left px-8 py-4">Country</th>
                            <th className="bg-blue-100 border text-left px-8 py-4">Asking Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            houses.map((house : House) => (
                                <HouseRow key={house.id} house={house} />
                            ))  
                        }
                    </tbody>
                </table>
            
            </div>
            <button className="bg-red-500 rounded-lg p-1 m-1" onClick={addHouse}>
                Add House
            </button>        
        </>
    );
}

export default HouseList;
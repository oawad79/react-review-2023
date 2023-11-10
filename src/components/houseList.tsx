import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";
import { useNavigate } from "react-router-dom";
// import loadingStatus from "../helpers/loadingStatus";
// import LoadingIndicator from "./loadingIndicator";

const HouseList = () => {
  const { houses } = useHouses();
  const navigate = useNavigate();

  //replaced this with Suspense and Lazy Loading
  // if (isLoading || isFetching) {
  //   return <LoadingIndicator loadingStatus={loadingStatus.isLoading} />;
  // }

  // const openAddHouse = () => {
  //   // dispatch({
  //   //   type: "addHouse",
  //   //   payload: [
  //   //     {
  //   //       id: houses.length + 1,
  //   //       address: "Some new address",
  //   //       country: "Colorado",
  //   //       price: 121212,
  //   //     },
  //   //   ],
  //   // });
  // };

  return (
    <>
      <div className="grid">
        <div className="text-center font-mono font-bold text-lg text-red-700">
          <h1>Houses in the Market</h1>
        </div>
        <table className="shadow-lg bg-white">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Address
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Country
              </th>
              <th className="bg-blue-100 border text-left px-8 py-4">
                Asking Price
              </th>
            </tr>
          </thead>
          <tbody>
            {houses.map((house: House) => (
              <HouseRow key={house.id} house={house} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-6">
        <button
          type="submit"
          className="bg-blue-400 px-6 py-2 rounded text-white w-1/5"
          onClick={() => navigate("/addHouse")}
        >
          Add House
        </button>
      </div>
    </>
  );
};

export default HouseList;

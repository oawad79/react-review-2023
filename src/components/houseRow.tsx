import { useContext } from "react";
import { currencyFormmater } from "../helpers/currencyFormatter";
import { navigationContext } from "../helpers/context";
import {navValues} from "../helpers/context";

interface HouseRowProps {
    house: House;
}

const HouseRow = (houseRowProps : HouseRowProps) => {

    const {navigate} = useContext(navigationContext);

    return (
        <tr onClick={() => navigate!(navValues.house, houseRowProps.house)} className="hover:cursor-pointer hover:bg-gray-400">
            <td className="border px-8 py-4">{houseRowProps.house.address}</td>
            <td className="border px-8 py-4">{houseRowProps.house.country}</td>
            {houseRowProps.house.price && 
                <td className={houseRowProps.house.price > 250000? "border px-8 py-4 text-orange-800" : "border px-8 py-4 text-green-800"}>
                    {currencyFormmater.format(houseRowProps.house.price)}
                </td>
            
            }
        </tr>
    );
}

export default HouseRow;
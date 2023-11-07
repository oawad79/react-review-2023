import { useContext } from "react";
import { currencyFormmater } from "../helpers/currencyFormatter";
import { navigationContext } from "../helpers/context";

const House = () => {
    const {param: house} = useContext(navigationContext);
    return (
        <div className="flex flex-row space-x-5">
            <img src={`http://localhost:3000/images/${house?.image}`} className="h-auto max-w-lg rounded-lg"/>
            <div>
                <div className="flex flex-row">
                    <div className="font-bold text-2xl">{house?.address}, {house?.country}</div>
                    <span className="space-x-11 font-sans">(Asking Price: {currencyFormmater.format(house!.price)})</span>
                </div>
                <div className="m-6"></div>                
                <div>{house?.description}</div>
            </div>
        </div>
    );
}

export default House;
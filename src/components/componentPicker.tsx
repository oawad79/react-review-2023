import navValues from "../helpers/navValues";
import HouseList from "./houseList";
import House from "./house";

type Props = {
    currentNavLocation: string
};

const ComponentPicker = ({currentNavLocation} : Props) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <HouseList/>;
        case navValues.house:
            return <House/>;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
}

export default ComponentPicker;
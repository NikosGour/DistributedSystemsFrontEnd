import { useState } from "react";
import NavBar from "../components/NavBar";
import CarCard from "../components/CarCard";

const IncomingTransfersPage = () => {

    const [cars, setCars] = useState(["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8", "car9", "car10", "car11", "car12", "car13", "car14"]);

    return (
        <div>
            <NavBar isInIncomingPage={true} />
            <h1 className="header_hp">Incoming Transfers</h1>
            <div className="car_list">
                {cars.map((car, i) => (< CarCard key={i} licence_plate={car} />))}
            </div>

        </div>
    );
};

export default IncomingTransfersPage;
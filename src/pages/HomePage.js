import { useState } from "react";
import NavBar from "../components/NavBar";
import CarCard from "../components/CarCard";

const HomePage = () => {

    const [cars, setCars] = useState(["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8", "car9", "car10", "car11", "car12", "car13", "car14"]);

    return (
        <div>
            <NavBar isInHomePage={true} />
            <h1 className="header_hp">Select a car to transfer</h1>
            <div className="car_list">
                {cars.map((car, i) => (<CarCard key={i} licence_plate={car} />))}
            </div>

        </div>
    );
};

export default HomePage;
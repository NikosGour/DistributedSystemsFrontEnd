import { useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const [cars, setCars] = useState(["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8", "car9", "car10", "car11", "car12", "car13", "car14"]);

    return (
        <div>
            <NavBar isInHomePage={true} user={{ ...loc.state }} />
            <h1 className="header_hp">Select a car to transfer</h1>
            <div className="car_list">
                {cars.map((car, i) =>
                    <div className="car">
                        <h3 className="car_name">{car}</h3>
                        <button onClick={() => navigate(`/car/${car}`, { state: { ...loc.state } })} className="car_button">Transfer</button>
                    </div>)}
            </div>

        </div>
    );
};

export default HomePage;
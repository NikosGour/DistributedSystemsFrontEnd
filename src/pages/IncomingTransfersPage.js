import { useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

const IncomingTransfersPage = () => {
    const loc = useLocation();
    const [cars, setCars] = useState(["car1", "car2", "car3", "car4", "car5", "car6", "car7", "car8", "car9", "car10", "car11", "car12", "car13", "car14"]);
    console.log(loc)
    return (
        <>
            <NavBar isInIncomingPage={true} user={loc.state} />
            {loc.state ?
                <>
                    <h1 className="header_hp">Incoming Transfers</h1>
                    <div className="car_list">
                        {cars.map((car, i) =>
                            <div className="car" key={i}>
                                <h3 className="car_name">{car}</h3>
                                <button onClick={() => { setCars(cars.slice(0, i).concat(cars.slice(i + 1))); }} className="car_button">Accept</button>
                            </div>)}
                    </div>

                </> :
                <>
                    <h1 className="header_hp">You are not logged in</h1>
                    <p className="header_hp">Please login to see incoming transfers</p>
                </>
            }
        </>
    );
};

export default IncomingTransfersPage;
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        if (loc.state) {
            const headers = {};
            headers["Authorization"] = loc.state.auth;

            fetch(`http://localhost:7979/api/cars/${loc.state.id}`, { method: "GET", headers: headers })
                .then(res => res.json())
                .then(data => {
                    setCars(data);
                });
        }
    }, [])

    return (
        <>
            <NavBar isInHomePage={true} user={loc.state} />
            {loc.state ?
                <>
                    <h1 className="header_hp">Select a car to transfer</h1>
                    <div className="car_list">
                        {cars.map((car, i) =>
                            <div className="car" key={i}>
                                <h3 className="car_name">{car.liscence_plate_number}</h3>
                                <button onClick={() => navigate(`/car/${car.liscence_plate_number}`, { state: loc.state })} className="car_button">Transfer</button>
                            </div>)}
                    </div>
                </> :
                <>
                    <h1 className="header_hp">You are not logged in</h1>
                    <p className="header_hp">Please login to view your cars</p>
                </>
            }

        </>
    );
};

export default HomePage;
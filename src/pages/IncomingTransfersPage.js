import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

const IncomingTransfersPage = () => {
    const loc = useLocation();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        if (loc.state) {
            const headers = {};
            headers["Authorization"] = loc.state.auth;

            fetch(`http://localhost:7979/api/actions/${loc.state.id}`, { method: "GET", headers: headers })
                .then(res => res.json())
                .then(data => {
                    setCars(data);
                });

        }
    }, [])

    const acceptTransfer = async (car, i) => {
        const headers = {};
        headers["Authorization"] = loc.state.auth;

        const res = await fetch(`http://localhost:7979/api/actions/${car.liscence_plate_number}/car`, { method: "GET", headers: headers })
        const data = await res.json();

        const transfer_id = data.id;

        const res2 = await fetch(`http://localhost:7979/api/actions/${loc.state.id}/${transfer_id}/accept`, { method: "POST", headers: headers })
        const data2 = await res2.json();

        if (data2 === true) {
            alert("Transfer accepted");
        }
        else {
            alert("Transfer declined");
        }
        setCars(cars.slice(0, i).concat(cars.slice(i + 1)));
    }

    return (
        <>
            <NavBar isInIncomingPage={true} user={loc.state} />
            {loc.state ?
                <>
                    <h1 className="header_hp">Incoming Transfers</h1>
                    <div className="car_list">
                        {cars.map((car, i) =>
                            <div className="car" key={i}>
                                <h3 className="car_name">{car.liscence_plate_number}</h3>
                                <button onClick={() => { acceptTransfer(car, i) }} className="car_button">Accept</button>
                            </div>
                        )}
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
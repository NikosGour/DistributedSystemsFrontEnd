import NavBar from "../components/NavBar";
import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../assets";
const CarTransferPage = () => {

    const loc = useLocation();
    const { license_plate } = useParams();
    const navigate = useNavigate();

    const [transfer_address, setTransferAddress] = useState("");
    const [afm_transferee, setAfmTransferee] = useState("");

    const validate_form = async (e) => {
        e.preventDefault();

        const headers = {};
        headers["Authorization"] = loc.state.auth;
        const res = await fetch(BASE_URL + `/api/users/afm/${afm_transferee}`, { method: "POST", headers: headers })
        const data = await res.json();
        const id = data;

        if (id === 0) {
            alert("No user with this afm exists!");
            return;
        }

        headers["Content-Type"] = "plain/text";
        const res2 = await fetch(BASE_URL + `/api/actions/${license_plate}/${id}`, { method: "POST", headers: headers, body: transfer_address })
        const data2 = await res2.json();
        if (data2 === true) {
            alert("Transfer successful!");
            navigate("/", { state: loc.state });
        }
        else {
            alert("Transfer failed!");
        }
    }


    return (
        <>
            <NavBar user={loc.state} />
            <h1 className="header">Car Transfer Page</h1>
            <h3 className="subheader">TRANSFER FOR {license_plate.toUpperCase()}</h3>
            <form className="vertical_form" onSubmit={validate_form}>
                <label htmlFor="transferAddress">Transfer address:</label>
                <input type="text" value={transfer_address} onChange={(e) => setTransferAddress(e.target.value)} required />
                <label htmlFor="afmTransferee">Afm of transferee:</label>
                <input type="text" value={afm_transferee} onChange={(e) => setAfmTransferee(e.target.value)} required />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
export default CarTransferPage;
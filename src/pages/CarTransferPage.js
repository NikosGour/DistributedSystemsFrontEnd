import NavBar from "../components/NavBar";
import { useLocation, useParams } from "react-router-dom";
const CarTransferPage = () => {

    const loc = useLocation();
    const { license_plate } = useParams();

    return (
        <div>
            <NavBar user={{ ...loc.state }} />
            <h1 className="header">Car Transfer Page</h1>
            <h3 className="subheader">TRANSFER FOR {license_plate.toUpperCase()}</h3>
            <form className="vertical_form" action="/car_transfer">
                <label htmlFor="transferAddress">Transfer address:</label>
                <input type="text" id="tranfer_address" name="transferAddress" />
                <label htmlFor="afmTransferee">Afm of transferee:</label>
                <input type="text" id="afm" name="afmTransferee" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default CarTransferPage;
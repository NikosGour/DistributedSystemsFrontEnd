import NavBar from "./NavBar";
const liscence_plate = 0;
const CarTransfer = () => {

    return (
        <div>
            <NavBar />
            <h1 className="header">Car Transfer Page</h1>
            <h3 className="subheader">TRANSFER FOR {liscence_plate}</h3>
            <form className="vertical_form" action="/car_transfer">
                <label for="transferAddress">Tranfer address:</label>
                <input type="text" id="tranfer_address" name="transferAddress" />
                <label for="afmTransferee">Afm of transferee:</label>
                <input type="text" id="afm" name="afmTransferee" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default CarTransfer;
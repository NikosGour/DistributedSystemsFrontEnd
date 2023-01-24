import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';
const CarCard = (props) => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="car">
            <h3 className="car_name">{props.licence_plate}</h3>
            <button onClick={() => navigate(`/car/${props.licence_plate}`)} className="car_button">Transfer</button>
        </div>
    );
}

CarCard.propTypes = {
    id: PropTypes.number,
    licence_plate: PropTypes.string.isRequired
}

export default CarCard;
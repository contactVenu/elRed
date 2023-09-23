import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ title }) {
    return (
        <div className='Navigation'>
            <FontAwesomeIcon icon={faAngleLeft} />
            <span>{title}</span>
        </div>
    )
}

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faWifi, faBattery } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className='header'>
            <span className='time'> 9:41 </span>
            <span className='icons'>
                <FontAwesomeIcon icon={faSignal} />
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBattery} />
            </span>
        </div>
    )
}

import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function About({ content, iconClick }) {
    return (
        <div div className='about' >
            <div className='title'>
                About Me
                <FontAwesomeIcon icon={faPen} onClick={iconClick} />
            </div>
            <div className='body'>
                {content != ""
                    ? content
                    : <span className='empty'>No about me added yet</span>
                }
            </div>
        </div>
    )
}

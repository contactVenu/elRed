import './DeletePopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DeletePopup({ setPdf, setDeletePopupView }) {

    const handleDelete = () => {
        setPdf(null)
        setDeletePopupView(false)
    }
    return (
        <div className='deletePopup'>
            <FontAwesomeIcon icon={faTrash} color='#ff2f52' />
            <span>Are you sure you want to delete your resume?</span>
            <div>
                <button className='closeButton' onClick={() => setDeletePopupView(false)} >Cancel</button>
                <button className='deleteButton' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

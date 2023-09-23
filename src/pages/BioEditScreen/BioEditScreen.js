import './BioEditScreen.css';
import Navigation from '../../components/Navigation/Navigation'
import FileUpload from '../../components/FileUpload/FileUpload'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeletePopup from '../../components/DeletePopup/DeletePopup';

export default function BioEditScreen() {
    const location = useLocation()
    const navigate = useNavigate()
    const [about, setAbout] = useState(location?.state?.aboutMe || "")
    const [pdf, setPdf] = useState(location?.state?.myResume || null)
    const [bloodGroup, setBloodGroup] = useState(location?.state?.myBloodGroup || "")
    const [buttonDisable, setButtonDisable] = useState(true)
    const [deletePopupView, setDeletePopupView] = useState(false)

    const handleSubmit = () => {
        navigate('/', { state: { about, pdf, bloodGroup } })
    }

    useEffect(() => {
        if (about == "" || pdf == null || bloodGroup == "") {
            setButtonDisable(true)
        } else {
            setButtonDisable(false)
        }
    }, [about, pdf, bloodGroup])


    return (
        <div className='BioEditScreen'>
            <Navigation title="My Bio" />
            <div className='aboutContainer'>
                <div className='title'>
                    Write something about yourself?
                </div>
                <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={3} placeholder='Write something here...'>
                    lorem ipsum dolor sit amet, consectetur
                </textarea>
            </div>
            <div className='resumeContainer'>
                <FileUpload setPdfUrl={setPdf} pdfUrl={pdf} setDeletePopupView={setDeletePopupView} />
            </div>
            <div className='bloodGroupContainer'>
                <div className='title'>
                    Blood Group
                </div>
                <select onChange={(e) => setBloodGroup(e.target.value)}>
                    <option selected={bloodGroup == ""} value="">Select blood group</option>
                    <option selected={bloodGroup == "A+"} value="A+">A+</option>
                    <option selected={bloodGroup == "B+"} value="B+">B+</option>
                    <option selected={bloodGroup == "AB+"} value="AB+">AB+</option>
                    <option selected={bloodGroup == "O+"} value="O+">O+</option>
                    <option selected={bloodGroup == "A-"} value="A-">A-</option>
                    <option selected={bloodGroup == "B-"} value="B-">B-</option>
                    <option selected={bloodGroup == "AB-"} value="AB-">AB-</option>
                    <option selected={bloodGroup == "O-"} value="O-">O-</option>
                </select>
            </div>
            <button className={`submitButton ${buttonDisable ? 'disabled' : ''}`} onClick={handleSubmit} >Save</button>
            {deletePopupView && <DeletePopup setPdf={setPdf} setDeletePopupView={setDeletePopupView} />}
        </div>
    )
}
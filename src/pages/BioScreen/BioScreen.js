import { useState } from 'react';
import './BioScreen.css';
import ResumeIcon from '../../assets/resumeIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../../components/Navigation/Navigation';
import About from '../../components/About/About';
import { useLocation, useNavigate } from 'react-router-dom';
import PdfView from '../../components/PdfView/PdfView';
import Skills from '../../components/Skills/Skills';

export default function BioScreen() {
    const navigate = useNavigate()
    const location = useLocation()
    const [aboutMe, setAboutMe] = useState(location?.state?.about || "");
    const [myBloodGroup, setMyBloodGroup] = useState(location?.state?.bloodGroup || "");
    const [myResume, setMyResume] = useState(location?.state?.pdf || "");
    const [pdfView, setPdfView] = useState(false)
    const [skills, setSkills] = useState(null)

    const editIconClick = () => {
        navigate('/editBio', { state: { aboutMe, myBloodGroup, myResume } })
    }
    const skillIconClick = () => {
        navigate('/editSkills', { state: { aboutMe, myBloodGroup, myResume } })
    }
    const viewPdf = () => {
        setPdfView(true)
    }

    return (
        <div className="bioScreen">
            <Navigation title="Bio" />
            <About content={aboutMe} iconClick={editIconClick} />
            <div className='bloodGroup'>
                Blood group
                <span>
                    {myBloodGroup == "" ? "Select" : myBloodGroup}
                </span>
            </div>
            <div className='resume' onClick={viewPdf}>
                <span>
                    <img src={ResumeIcon} alt="ResumeIcon" />
                    Resume
                </span>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <Skills skills={skills} setSkills={setSkills} iconClick={skillIconClick} />
            {pdfView && <PdfView myResume={myResume} setPdfView={setPdfView} />}
        </div>
    );
}
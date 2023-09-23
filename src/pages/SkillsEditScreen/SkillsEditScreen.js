import './SkillsEditScreen.css'
import Navigation from '../../components/Navigation/Navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export default function SkillsEditScreen() {

    const [skills, setSkills] = useState(null)
    const [hobbies, setHobbies] = useState(null)
    const [subjects, setSubjects] = useState(null)
    const [selectedSkills, setSelectedSkills] = useState([])
    const [selectedHobbies, setSelectedHobbies] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])

    const checkSkills = (target, item) => {
        return target.includes(item)
    }
    const addSkills = (target, action, item) => {
        const tmp = target
        tmp.push(item)
        action(tmp)
    }
    const deleteSkills = (target, action, item) => {
        const tmp = target.filter(val => val !== item)
        tmp.push(item)
        action(tmp)
    }

    useEffect(() => {
        axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json')
            .then(res => {
                setSkills(res.data.result[0].skills);
            }).catch(err => console.log(err))
        axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json')
            .then(res => {
                setHobbies(res.data.result[0].hobbies);
            }).catch(err => console.log(err))
        axios.get('https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json')
            .then(res => {
                setSubjects(res.data.result[0].subjects);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='skillsEditScreen'>
            <Navigation title="Skills" />
            <div className='skillsContainer'>
                <span>I am incredible at these skills/professionally great at</span>
                <div>
                    {skills && skills.map(item => {
                        return checkSkills(selectedSkills, item.value)
                            ? <span>{item.value} <FontAwesomeIcon icon={faClose} /></span>
                            : <span>{item.value}</span>
                    })}
                </div>
            </div>
            <div className='skillsContainer'>
                <span>Hobbies I am passionate about</span>
                <div>
                    {hobbies && hobbies.map(item => {
                        return <span>{item.value}</span>
                    })}
                </div>
            </div>
            <div className='skillsContainer'>
                <span>My favorite subjects are</span>
                <div>
                    {subjects && subjects.map(item => {
                        return <span>{item.value}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

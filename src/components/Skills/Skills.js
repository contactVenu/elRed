import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function Skills({ skills, setSkills, iconClick }) {
    return (
        <div className='skills'>
            <div className='title'>
                About Me
                <FontAwesomeIcon icon={faPen} onClick={iconClick} />
            </div>
            <div className='body'>
                {skills
                    ? "content"
                    : <span className='empty'>No Soft Skills added yet</span>
                }
            </div>
        </div>
    )
}

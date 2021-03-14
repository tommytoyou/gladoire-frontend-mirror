import React from 'react';
import {useState, useEffect} from 'react';
import JournalForm from './JournalForm';

const Journal = (props) => {
    const [complete, setComplete] = useState(Boolean())
    const [formStyle, setFormStyle] = useState({ display: 'none'})
    const [bodyStyle, setBodyStyle] = useState({})

const toggleBodyForm = () => {
    if (formStyle.display === 'block') {
        setFormStyle({ display: 'none'})
        setBodyStyle({ display: 'block'})
    } else {
        setFormStyle({ display: 'block'})
        setBodyStyle({ display: 'none'})
    }
}

const deleteClickedJournal = () => props.deleteJournal(props.journal)

return (
    <li data-journals-index={props.journal.id}>
      <div style={bodyStyle}>
      </div>  
      <JournalForm
        Journal={props.journal}
        style={formStyle}
        autoFocus={true}
        buttonName='Something To Cherish Later'
        onUpdateJournal={props.onUpdateJournal}
        toggleBodyForm={toggleBodyForm}
        />
        </li>
    )
}

export default Journal;
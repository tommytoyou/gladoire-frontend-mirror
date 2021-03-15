import { useState, useEffect} from 'react';
import CreateJournalForm from './CreateJournalForm';

function JournalForm(props) {
    const [journal, setJournal] = useState({})

    function onChange(e) {
        setJournal(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        props.toggleBodyForm()
        console.log({ body: journal })
        props.onUpdateJournal({ body:journal }, props.journal._id)
    }

    useEffect(()=> {
        setJournal(props.journal.body)
    }, [])
    return (
      <div style={props.style} className='journalForm'>
       <form className='editor' onSubmit={onSubmit}>
         <input
           autoFocus={props.autoFocus}
           onChange={onChange}
           type='text'
           value={journal || ''}
         />
         <button type='submit' className='btn'>
             {props.buttonName}
         </button>
       </form>
       
      </div>

    )
}

export default JournalForm;
import { useState } from 'react';

const CreateJournalForm = (props) => {
    const [journal, setJournal] = useState('');

    const onInputChange = (e)=> {
        setJournal( e.target.value )
    }
    const onFormSubmit = (e)=> {
        e.preventDefault()
        props.createForm(journal)
        setJournal('')
    }
    return (
        <div>
            <form onSubmit={ onFormSubmit } id="taskForm">
                <input
                onChange={ onInputChange }
                type="text" id="newJournalDescription"
                placeholder="What did I experience today?"
                value={journal}
                />
                <button type="submit"  id="addJournal" className="btn">To Cherish Another Time</button>

            </form>
        </div>
    )

}


export default CreateJournalForm;
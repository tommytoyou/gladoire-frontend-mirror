import { useState } from 'react';

const CreateJournalForm = (props) => {
    const [journal, setJournal] = useState('');
    console.log('', props)
    const onInputChange = (e)=> {
        setJournal( e.target.value )
    }

    const onFormSubmit = (e)=> {
        // e.preventDefault()
        console.log(props)
        // props.createJournal(journal)
        // setJournal('')
        
    }
    return (
        <div>
            <form onSubmit={ onFormSubmit } id="taskForm">
                <input
                onChange={ onInputChange }
                type="text" id="newJournalDescription"
                placeholder="What did I Learn Today?"
                value={journal}
                />
                <button type="submit"  id="addJournal" className="btn">Save For Later</button>

            </form>
        </div>
    )

}


export default CreateJournalForm;
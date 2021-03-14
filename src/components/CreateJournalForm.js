import { useState } from 'react';
import JournalModel from '../models/Journal';

const CreateJournalForm = (props) => {
    const [journal, setJournal] = useState('');
    const [journals, setJournals] = useState([])
    const [journalCount, setJournalCount] = useState(0)

    console.log('', props)
    const onInputChange = (e)=> {
        setJournal( e.target.value )
    }
    const createJournal = async (journal) => {
        let newJournal = {
            body: journal,
            completed: false,
        }
        console.log('This is the create journal function')

        const anotherJournal = await JournalModel.create(newJournal)
        let newJournals = [...journals, anotherJournal.data]
        setJournals(newJournals)
        setJournalCount(journalCount + 1)
    }

    const onFormSubmit = (e)=> {
        e.preventDefault()
        console.log('insideSubmit')
        createJournal(journal)
        setJournal('')
        
    }
    // const onFormSubmit = (e)=> {
    //     e.preventDefault()
    //     console.log(props)
    //     props.createJournal(journal)
    //     setJournal('')
        
    // }
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
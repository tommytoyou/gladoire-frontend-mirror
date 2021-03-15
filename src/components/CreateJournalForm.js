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
    const listOfJournals = journals.map((journal, index) => {
        console.log(journal)
        return journals
    })
    const createJournal = async (journal) => {
        let newJournal = {
            content: journal,
            completed: false,
        }
        console.log('This is the create journal function', newJournal)

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

                <div>
                <legend class="text-center">Today's Meditations?</legend>
                <form>
                
                <fieldset>

                 <textarea onSubmit={ onFormSubmit }  name="content" 
                 input onChange={ onInputChange }
                type="text" id="newJournalDescription"
                placeholder="Awareness is ephemeral."
                value={journal}
                
                 class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
                <br />
                <div>
                </div>              
                <button type="submit"  id="addJournal" className="btn">Save For Later</button>
                </fieldset>
            </form>
            </div>
            <br />
            <div>
            <ul>{listOfJournals}</ul>
            </div>
        </div>
        
    )

}


export default CreateJournalForm;
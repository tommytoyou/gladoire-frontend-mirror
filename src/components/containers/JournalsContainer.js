import { useState, useEffect } from 'react'
import JournalModel from '../../models/Journal'
import Journals from '../Journals'
import CreateJournalForm from '../CreateJournalForm'

export default function JournalsContainer(){
    const [journals, setJournals] = useState([])

    // put empty array to run once after initial render
    useEffect(()=> {
        const fetchData = async()=> {
            const res = await JournalModel.all()
            console.log(res)
            setJournals(res.data)
        }
        fetchData()
    }, [])

    const createJournal = async(journal) => {
        console.log(journal)
        let newJournal = {
            body: journal,
            completed: false
        }
        const anotherJournal = await JournalModel.create(newJournal)
        console.log(anotherJournal)
        // taking our current journals, spreading and
        // putting new one at the end
        setJournals([...Journals, anotherJournal.data])
    }

    const deleteJournal = async(journal)=> {
        console.log(journal)
        // talk to database
        const deletedJournal = await JournalModel.delete(journal)
        // filter is going to check and remove the journal with the id that was passed in
        let tempJournals = [...journals].filter((eachJournal)=> {
            return eachJournal._id !== deletedJournal.data._id
        })
        //we will have to update state
        setJournals(tempJournals)
    }



    return (
        <div className='journalsContainer'>
            <CreateJournalForm createJournal={createJournal} />
            <Journals journals={journals}  deleteJournal={deleteJournal} />
            <h1>JournalsContainer</h1>
        </div>
    );
}
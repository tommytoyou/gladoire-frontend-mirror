import { useState, useEffect } from 'react';
import JournalModel from '../models/Journal';
import Journals from '../components/Journals';
import CreateJournalForm from '../components/CreateJournalForm';

function JournalsContainer() {
    const [journals, setJournals] = useState([])
    const [journalCount, setJournalCount] = useState(0)

    useEffect(() => {
        fetchData()
    }, [])

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

    const fetchData = async () => {
        const res = await JournalModel.all()
        setJournals(res.data)
        setJournalCount(res.data.filte((journal) => journal.completed === false).length)
    }

    const deleteJournal = async (journal) => {
        let res = await JournalModel.delete(journal)
        let tempJournals = journals.filter(function (journal) {
            return journal._id !== res.data._id
        })
        setJournals(tempJournals)
    }

    const updateJournal = async (journal) => {

        const isUpdatedJournal = (j) => {

            return j._id === journal._id
        }

        let result = await JournalModel.update(journal)
        let journalsNow = [...journals]
        journalsNow.find(isUpdatedJournal).body = journal.body
        setJournals(journalsNow)
    }

    return (
        <div className='journalsComponent'>
            <CreateJournalForm createJournal={createJournal} />
            <Journals journals={journals} updateJournal={updateJournal} deleteJournal={deleteJournal} />
        </div>
    )
}

export default JournalsContainer;
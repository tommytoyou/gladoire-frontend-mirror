import Journal from './Journal';
import JournalContainer from "../components/containers/JournalsContainer"

const Journals = (props) => {

    let journals = props.journals.map((journal) => {
        return (
            <Journal
                key={journal._id}
                journal={journal}
                deleteJournal={props.deleteJournal}
                updateJournal={props.updateJournal}
            />
        )
    })

    return <div>
        <h1>I live for TA hours!!! </h1>
        <JournalContainer/>
        <ul>{journals}</ul>
    </div>
}

export default Journals;
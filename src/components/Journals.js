import Journal from './Journal';

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

    return <ul>{journals}</ul>
}

export default Journals;
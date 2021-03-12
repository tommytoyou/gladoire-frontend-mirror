import React, { useState, useEffect } from 'react'

const CreateJournal = (props) => {
  const [journal, setJournal] = useState('')

  const onInputChange = (e) => {
    setJournal(e.target.value)
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
    props.createJournal(journal)
    setJournal('')
  }
  return (
    <div>
      <h1>Journal</h1>
      <form onSubmit={onFormSubmit} id='taskForm'>
        <input
          onChange={onInputChange}
          type='text'
          id='newJournalDescription'
          placeholder='What did I experience today?'
          value={journal}
        />
        <button type='submit' id='addJournal' className='btn'>
          To Cherish Another Time
        </button>
      </form>
    </div>
  )
}

export default CreateJournal

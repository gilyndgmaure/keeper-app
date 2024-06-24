import { useState } from 'react';
import '../App.css'
import CreateArea from './CreateArea';
import Header from './Header';
import Note from './Note';

function App() {
  const [notes, setNotes] =useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <>
    <div>
      <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
          return (
            <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            />
          );
        })}
    </div>
      
    </>
  );
}

export default App

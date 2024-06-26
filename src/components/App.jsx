import { useEffect, useState } from 'react';
import '../App.css'
import CreateArea from './CreateArea';
import Header from './Header';
import Note from './Note';

function App() {

  const initNote = {
    note: [],
  }

  const getInitialNote = () => {
    const note = localStorage.getItem('notes');
    return note ? JSON.parse(note) : initNote;
  }

  const [notes, setNotes] = useState(getInitialNote);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    })
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
            onDelete={deleteNote}
            />
          );
        })}
    </div>
      
    </>
  );
}

export default App;

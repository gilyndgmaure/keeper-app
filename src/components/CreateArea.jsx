import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function CreateArea(props) {
    
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, 
                [name]: value
            };
        });
    }

    function submitNote(event) {
        // eslint-disable-next-line react/prop-types
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    
    return (
        <>
        <div>
            <form className="create-note">
                <input 
                name="title"
                onChange={handleChange}
                value={note.title} 
                placeholder="Title"
                />
                <textarea 
                name="content" 
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                />
                <button onClick={submitNote}><AddIcon/></button>
            </form>
        </div>
        </>
    );

}

export default CreateArea;
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function CreateArea() {
    
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
                <button><AddIcon/></button>
            </form>
        </div>
        </>
    );

}

export default CreateArea;
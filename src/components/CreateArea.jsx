import AddIcon from '@mui/icons-material/Add';

function CreateArea() {
    
    return (
        <>
        <div>
            <form className="create-note">
                <input name="title" placeholder="Title"/>
                <textarea name="content" placeholder="Take a note..."/>
                <button><AddIcon/></button>
            </form>
        </div>
        </>
    );

}

export default CreateArea;
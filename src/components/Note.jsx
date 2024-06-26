
/* eslint-disable react/prop-types */
function Note(props) {

    function handleChange() {

    }
 return (
        <>
        <div className="note" onClick={handleChange}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        </>
    );
}

export default Note;
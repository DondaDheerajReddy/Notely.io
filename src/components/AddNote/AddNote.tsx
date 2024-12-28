import { MouseEvent, useState } from "react";
import "./AddNote.css";

type Note = {
  title: string;
  content: string;
};

type Props = {
  handleClick: (e: MouseEvent, note: Note) => void;
};

function AddNote(props: Props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <div>
      <form action="">
        <input
          value={note.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (note.title.trim() && note.content.trim()) {
              props.handleClick(e, note);
              setNote({
                content: "",
                title: "",
              });
            }
          }}
          type="submit"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;

import "./Note.css";

type Props = {
  id: number;
  title: String;
  content: String;
  deleteNote: (index: number) => void;
};

function Note(props: Props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Note from "./components/Note";
// import notes from "./components/notes";

// function App() {
//   return (
//     <>
//       <Header></Header>
//       <div className="main">
//         {notes.map((note) => {
//           return (
//             <Note title={note.title} content={note.content} key={note.key} />
//           );
//         })}
//       </div>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;

import { useState, MouseEvent } from "react";
import AddNote from "./components/AddNote/AddNote";
import Note from "./components/Note/Note";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

type Note = {
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<{ title: string; content: string }[]>([]);
  function handleClick(event: MouseEvent, note: Note) {
    event.preventDefault();
    setNotes((prevState) => {
      return [...prevState, note];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevState) => {
      return prevState.filter((_, index) => id != index);
    });
  }

  return (
    <div>
      <Header></Header>
      <AddNote handleClick={handleClick}></AddNote>
      <div className="main">
        {notes.map((item, index) => {
          return (
            <Note
              deleteNote={deleteNote}
              id={index}
              title={item.title}
              content={item.content}
              key={index}
            />
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

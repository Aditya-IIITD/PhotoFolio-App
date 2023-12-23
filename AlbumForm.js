import { useRef } from "react";

function Albumform({ addAlbum, toast }) {
  const nameInputRef = useRef(null);

  const handleCreate = (e) => {
    e.preventDefault();
    if (nameInputRef.current.value.trim().length === 0) {
      toast.warning("Write valid name");
    } else {
      addAlbum(nameInputRef.current.value.trim());
      toast.success("Album created");
    }
    nameInputRef.current.value = "";
  };

  const clearFunc = (e) => {
    e.preventDefault();
    nameInputRef.current.value = "";
  };

  return (
    <form className="albumForm">
      <h2>Create an album</h2>
      <input placeholder="Album Name" ref={nameInputRef} />
      <button className="clearBtn" onClick={(e) => clearFunc(e)}>
        Clear
      </button>
      <button className="createBtn" onClick={(e) => handleCreate(e)}>
        Create
      </button>
    </form>
  );
}

export default Albumform;

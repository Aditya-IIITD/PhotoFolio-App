import { useRef } from "react";
import styles from "./imgform.module.css";

function Imageform({ toast, addImage }) {
  const titleInputRef = useRef();
  const urlInputRef = useRef();

  const handleClear = (e) => {
    e.preventDefault();
    titleInputRef.current.value = "";
    urlInputRef.current.value = "";
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value.trim();
    const url = urlInputRef.current.value.trim();
    if (title.length === 0) {
      toast.warn("Write valid name");
    } else if (url.length === 0) {
      toast.warn("Write valid URL");
    } else {
      addImage(title, url);
    }
    titleInputRef.current.value = "";
    urlInputRef.current.value = "";
  };

  return (
    <form className={styles.imgForm}>
      <h2 className={styles.h2}>Add image to xyz </h2>
      <input placeholder="Title" className={styles.input} ref={titleInputRef} />
      <input
        placeholder="Image URL"
        className={styles.input}
        ref={urlInputRef}
      />
      <div className={styles.buttons}>
        <button className={styles.clearBtn} onClick={handleClear}>
          Clear
        </button>
        <button className={styles.createBtn} onClick={handleCreate}>
          Create
        </button>
      </div>
    </form>
  );
}

export default Imageform;

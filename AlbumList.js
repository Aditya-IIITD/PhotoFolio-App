import Card from "./Card";

function Albumlist({ albums, cancelbtn, setCancel, fetchImages }) {
  return (
    <div className="albumList">
      <div className="albumListHeader">
        <h2>Your albums</h2>
        <button
          className={cancelbtn ? "btn cancelButton" : "btn addButton"}
          onClick={() => setCancel(!cancelbtn)}
        >
          {cancelbtn ? "Cancel" : "Add album"}
        </button>
      </div>
      <div className="albums">
        {albums.map((item) => {
          return <Card albumName={item.albumName} fetchImages={fetchImages} />;
        })}
      </div>
    </div>
  );
}

export default Albumlist;

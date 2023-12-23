import { ImageCard } from "./Card";
import { useState } from "react";

function Imagelist({ images, cancelbtn, setCancel, setActiveAlbum }) {
  const [Search, setSearch] = useState(false);
  return (
    <div className="imageList">
      <div className="imageListHeader">
        <div className="leftDiv">
          <div className="returnIcon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709624.png"
              alt="return"
              onClick={() => setActiveAlbum(null)}
            />
          </div>
          <h2>Images in xyz</h2>
        </div>
        <div className="rightDiv">
          {Search ? <input placeholder="Search..." /> : null}
          <img
            src={
              Search
                ? "https://cdn-icons-png.flaticon.com/128/126/126497.png"
                : "https://cdn-icons-png.flaticon.com/128/954/954591.png"
            }
            onClick={() => setSearch(!Search)}
            alt="Search"
          />
          <button
            className={cancelbtn ? "btn cancelButton" : "btn addButton"}
            onClick={() => setCancel(!cancelbtn)}
          >
            {cancelbtn ? "Cancel" : "Add Image"}
          </button>
        </div>
      </div>
      <div className="images">
        {images
          ? images.map((item, index) => (
              <ImageCard name={item.name} url={item.url} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Imagelist;

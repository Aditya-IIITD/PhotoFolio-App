function Card({ albumName, fetchImages }) {
  return (
    <div className="card" onClick={() => fetchImages(albumName)}>
      <div className="coverPhoto">
        <img
          src="https://cdn-icons-png.flaticon.com/128/833/833281.png"
          alt="album"
        />
      </div>
      <span>{albumName}</span>
    </div>
  );
}

export function ImageCard({ name, url }) {
  return (
    <div className="imageCard">
      <div className="iconsContainer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
          alt="update"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/3687/3687412.png"
          alt="Delete"
        />
      </div>
      <div className="imageCoverPhoto">
        <img src={url} alt="album" />
      </div>
      <span>{name}</span>
    </div>
  );
}

export default Card;

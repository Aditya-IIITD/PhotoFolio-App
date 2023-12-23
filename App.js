import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Albumlist from "./Components/AlbumList";
import Albumform from "./Components/AlbumForm";
import Imageform from "./Components/ImageForm";
import Imagelist from "./Components/ImageList";
import { useReducer, useState, useEffect } from "react";
import { db } from "./firebaseInit";
import {
  doc,
  addDoc,
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import Carousel from "./Components/Carousel";

function reducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "ADD_ALBUM":
      return [payload, ...state];
    case "ADD_ALL_AT_ONCE":
      return payload.arr;
    default:
      return [];
  }
}

function imagesReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case "ADD_IMAGE":
      return [{ name: payload.name, url: payload.url }, ...state];
    case "ALL_AT_ONCE":
      return payload.arr;
    default:
      return [];
  }
}

function App() {
  const [albums, dispatch] = useReducer(reducer, []);
  const [images, setImages] = useReducer(imagesReducer, []);
  const [cancelbtn, setCancel] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const addAlbum = async (name) => {
    const docRef = await addDoc(collection(db, "Albums"), {
      albumName: name,
      images: [],
    });
  };

  const addImage = async (name, url) => {
    if (images && images.find((item) => item.name === name)) {
      toast("This image title is already taken.");
      return;
    }
    console.log(activeAlbum);
    await updateDoc(doc(db, "Albums", activeAlbum.id), {
      images: arrayUnion({ name, url }),
    });
    setImages({ type: "ADD_IMAGE", payload: { name, url } });
  };

  const fetchImages = (name) => {
    const album = albums.find((item) => item.albumName === name);
    const arr = album.images;
    setImages({ type: "ALL_AT_ONCE", payload: { arr } });
    setActiveAlbum(album);
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Albums"), (newData) => {
      const arr = newData.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, albumName: data.albumName, images: data.images };
      });
      dispatch({ type: "ADD_ALL_AT_ONCE", payload: { arr: arr } });
    });
  }, []);

  if (activeAlbum) {
    return (
      <div className="App">
        <Navbar />
        {cancelbtn ? <Imageform toast={toast} addImage={addImage} /> : ""}
        <Imagelist
          images={images}
          cancelbtn={cancelbtn}
          setCancel={setCancel}
          setActiveAlbum={setActiveAlbum}
        />
        <ToastContainer />
        {activeImage ? <Carousel image={activeImage} /> : null}
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      {cancelbtn ? <Albumform addAlbum={addAlbum} toast={toast} /> : ""}
      <Albumlist
        albums={albums}
        cancelbtn={cancelbtn}
        setCancel={setCancel}
        fetchImages={fetchImages}
      />

      <ToastContainer />
      {activeImage ? <Carousel image={activeImage} /> : null}
    </div>
  );
}

export default App;

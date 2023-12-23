import styles from "./Carousel.module.css";
function Carousel() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1053/1053177.png"
          className={styles.icon}
          alt="previous"
        />
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=ais"
          className={styles.image}
          alt="mainimage"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/1053/1053176.png"
          className={styles.icon}
          alt="next"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/12377/12377432.png"
          className={styles.cancel}
          alt="cancel"
        />
      </div>
    </>
  );
}

export default Carousel;

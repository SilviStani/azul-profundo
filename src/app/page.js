import styles from "./page.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import MainPage from "../../Components/MainPage/MainPage";
import Info from "../../Components/Info/Info";

export default function Home() {
  return (
    <div className={styles.page}>
        <NavBar />
        <MainPage />
        <Info />
    </div>
  );
}

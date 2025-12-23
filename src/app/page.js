import styles from "./page.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import MainPage from "../../Components/MainPage/MainPage";
import Info from "../../Components/Info/Info";
import MainGallery from "../../Components/MainGallery/MainGallery";
import SpanBreak from "../../Components/Span/SpanBreak";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
        <NavBar />
        <MainPage />
        <SpanBreak />
        <Info />
        <SpanBreak />
        <MainGallery/>
        <SpanBreak />
        <Footer/>
    </div>
  );
}

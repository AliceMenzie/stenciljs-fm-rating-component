// import Head from "next/head";
// import Image from "next/image";
import { UiCard } from "ui-library-react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <UiCard
        imageFront="/icon-star.svg"
        imageBack="/illustration-thank-you.svg"
      />
    </div>
  );
}

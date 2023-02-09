import type { AppProps } from "next/app";
import Image from "next/image";
import { useEffect, useState } from "react";
import headImage from "../assets/headerImage.svg";
import headImageMin from "../assets/headerImageMin.svg";
import { Container, Header } from "../styles/app";
import { globalStyles } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  const [isLarge, setIsLarge] = useState(false)
  const [windowSize, setWindowSize]  = useState(0);
  useEffect( () => {
    if(typeof window !== "undefined"){
      setWindowSize(window.innerWidth)
      if(windowSize > 1439){
        setIsLarge(true)
      }
    }
  },[windowSize])
  console.log(windowSize)
  globalStyles();
  return (
    <Container>
      <Header>
        { isLarge ? 
        <Image src={headImage} alt="" id="headerImage" /> :
        <Image src={headImageMin} alt="" id="headerImageMin" />}
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

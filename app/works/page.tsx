'use client';
import AboutEntry from '../components/AboutEntry/AboutEntry'
import WorksImage from '../components/WorksImage/WorksImage'
import ImageView from '../components/ImageView/ImageView';
import Image from 'next/image';
import styles from './page.module.scss'
import { useState } from 'react';
import testImage from './placehold.jpg';


export default function About() {
  const [showEntry, setShowEntry] = useState(false);
  const aboutEntry1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  function clickHandler(){
    setShowEntry(!showEntry);
  }
  

  return (
    <div className={styles['works-container']}>
      {showEntry && <ImageView click={clickHandler}><AboutEntry name="Name Here" content={aboutEntry1} isReverse={false} image={testImage}/></ImageView>}
      <WorksImage click={clickHandler}><Image src={testImage} alt='' /></WorksImage>
    </div>
  )
}

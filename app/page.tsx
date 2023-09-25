import styles from './page.module.scss'
import Image from 'next/image'
import banner from './placehold-sea.jpg'

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <div className={styles['main-banner-container']}>
        <div className={styles['banner-text']}>
          <h1>Placeholder Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={styles['banner-image']}>
          <div className={styles['image']}>
            <Image src={banner} alt='banner' width={1000}/>
          </div>
          <div className={styles['box-decoration']} style={{left:'-1em', top:'-0.8em'}}/>
          <div className={styles['box-decoration']} style={{right:'-2em', bottom:'-2em', height:'60%'}}/>
        </div>
      </div>
    </div>
  )
}

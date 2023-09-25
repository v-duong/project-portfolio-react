import Image, { StaticImageData } from 'next/image';
import styles from './AboutEntry.module.scss'

export default function AboutEntry({name, content, isReverse = false, image} : { name: string , content: string, isReverse : boolean, image?: StaticImageData }) {

    return (
        <div className={isReverse ? styles['about-item-container-reverse'] : styles['about-item-container']}>
            {image && <Image className={styles['about-image']} src={image} alt="Logo"/>}
            <div className={styles['text-container']}>
                <h2>{name}</h2>
                <div>{content}</div>
            </div>
        </div>
    );
}
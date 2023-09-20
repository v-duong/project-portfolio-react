import Image from 'next/image';
import styles from './AboutEntry.module.scss'

export default function AboutEntry({name, content, isReverse = false} : { name: string , content: string, isReverse : boolean }) {
    return (
        <div className={isReverse ? styles['about-item-container-reverse'] : styles['about-item-container']}>
            <Image className={styles['about-image']} src={''} alt="Logo"/>
            <div className={styles['text-container']}>
                <h2>{name}</h2>
                <div>{content}</div>
            </div>
        </div>
    );
}
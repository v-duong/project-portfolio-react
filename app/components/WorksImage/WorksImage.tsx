import Image from 'next/image';
import styles from './WorksImage.module.scss'

class WorksImageInfo {
    height: number = 0;
    width: number = 0;
    rotation: number = 0;
    posX: number = 0;
    posY: number = 0;
    posZ: number = 0;
}

export default function WorksImage() {
    let elementInfo = new WorksImageInfo();
    elementInfo.height = Math.random() * 15 + 25;
    elementInfo.width = Math.random() * 15 + 25;
    elementInfo.rotation = Math.random() * 20 - 10;
    elementInfo.posX = Math.random() * 150 - 50;
    elementInfo.posY = Math.random() * 250 - 50;
    elementInfo.posZ = Math.random() * -15 - 5;


    return (
        <div className={styles['photo-image-container']} style={{
            height: elementInfo.height + "em", 
            width: elementInfo.width + "em",
            transform: `translateZ(${elementInfo.posZ}px) rotateZ(${elementInfo.rotation}deg)`,
            left: elementInfo.posX + "%",
            top: elementInfo.posY + "%"
            }}>
            <div className={styles['image']}></div>
        </div>
    );
}
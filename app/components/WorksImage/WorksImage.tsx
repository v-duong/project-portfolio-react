'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './WorksImage.module.scss'
import ImageView from '../ImageView/ImageView';

class WorksImageInfo {
    height: number = 0;
    width: number = 0;
    rotation: number = 0;
    posX: number = 0;
    posY: number = 0;
    posZ: number = 0;
}


export default function WorksImage({
    children,
    click
  }: {
    children: React.ReactNode,
    click : React.MouseEventHandler
  }) {
    const [elementInfo, setElementInfo] = useState(new WorksImageInfo());

    /*
    useEffect(() => {
        let e = new WorksImageInfo();
        e.width = Math.random() * 15 + 25;
        e.height = e.width  * (Math.random() * 0.3 + 1);
        
        e.rotation = Math.random() * 20 - 10;
        e.posX = Math.random() * 150 - 50;
        e.posY = Math.random() * 250 - 50;
        e.posZ = Math.random() * -15 - 5;

        setElementInfo(e);
    },[]);
*/
    return (
        <div className={styles['photo-image-container']} onClick={click} >
                <div className={styles['image']}>
                    {children}
                </div>
        </div>
    );
}
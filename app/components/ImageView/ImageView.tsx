import Image from 'next/image';
import styles from './ImageView.module.scss'


export default function ImageView({
    children,
    click
  }: {
    children: React.ReactNode,
    click? : React.MouseEventHandler
  }) {
    return (
        <div className={styles['image-view-container']}>
            <div className={styles['image-view-bg']} onClick={click}></div>
            <div className={styles['image-view-content']}>
                {children}
            </div>
        </div>
    );
}
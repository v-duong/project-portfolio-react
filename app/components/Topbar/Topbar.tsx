import Image from 'next/image';
import logo from '../static/logo2.png';
import styles from './Topbar.module.scss'
import TopbarItem from './TopbarItem/TopbarItem'

export default function Topbar() {
    return (
        <div className={styles['topbar-container']}>
            <a href="/"><Image className={styles['logo-image']} src={logo} alt="Logo"/></a>
            <TopbarItem content="Works" />
            <TopbarItem content="About" />
            <TopbarItem content="Contact" />
        </div>
    );
}
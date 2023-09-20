import Image from 'next/image';
import logo from '../static/logo.png';
import styles from './Navbar.module.scss'
import NavbarItem from './NavbarItem/NavbarItem'

export default function Navbar() {
    return (
        <div className={styles['navbar-container']}>
            <a href="/"><Image className={styles['logo-image']} src={logo} alt="Logo"/></a>
            <NavbarItem content="Works" />
            <NavbarItem content="About" />
            <NavbarItem content="Contact" />
        </div>
    );
}
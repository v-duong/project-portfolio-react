import styles from './NavbarItem.module.scss'

export default function NavbarItem({content} : { content: string }) {
    return (
        <a href={content.toLocaleLowerCase()}>
            <div className={styles['navbar-item']}>
                {content}
            </div>
        </a>
    );
}
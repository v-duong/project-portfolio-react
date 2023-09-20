import styles from './TopbarItem.module.scss'

export default function TopbarItem({content} : { content: string }) {
    return (
        <a href={content.toLocaleLowerCase()}>
            <div className={styles['navbar-item']}>
                {content}
            </div>
        </a>
    );
}
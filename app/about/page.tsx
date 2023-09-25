import AboutEntry from '../components/AboutEntry/AboutEntry'
import styles from './page.module.scss'

export default function About() {

  const aboutEntry1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className={styles['about-container']}>
        <AboutEntry name="Name Here" content={aboutEntry1} isReverse={false} />
        <AboutEntry name="Name Here" content={aboutEntry1} isReverse={true}  />
        <AboutEntry name="Name Here" content={aboutEntry1} isReverse={false} />
        <AboutEntry name="Name Here" content={aboutEntry1} isReverse={true}  />
        <AboutEntry name="Name Here" content={aboutEntry1} isReverse={false} />
        <AboutEntry name="Name Here" content={aboutEntry1} isReverse={true}  />
    </div>
  )
}

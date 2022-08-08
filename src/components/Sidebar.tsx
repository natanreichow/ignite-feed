import { Pencil } from 'phosphor-react'

import styles from './Sidebar.module.css';
import cover from '../assets/cover-img.jpg';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} />

            <div className={styles.profile}>
                <Avatar src='https://github.com/natanreichow.png'/>
                <strong>Natan Reichow</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href='#'>
                    <Pencil size={20}/>
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}
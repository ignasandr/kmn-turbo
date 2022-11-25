import Navbar from './Navbar'
import Logo from '../Logo'
import styles from './nav.module.css'
import Burger from './Burger'
import Accessibility from './Accessibility'

type Props = {
    menuItems: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: any[],
        id: string
    }[]
}

export default function Header({ menuItems }: Props) {
    return (
        <header>
            <div className={styles.header}>
                <Burger />
                <Logo />
                <Navbar menuItems={menuItems}/>
                <Accessibility />
            </div>
        </header>
    )
}
import MenuItems from './MenuItems'
import styles from './nav.module.css'

type Props = {
    menuItems: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: any[],
        id: string
    }[]
}

export default function Navbar({ menuItems }: Props) {
    const depthLevel = 0;

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    { menuItems.map((item, index) => {
                        return (
                            <MenuItems {...item} depthLevel={depthLevel} key={index}/>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

import { use } from "react";
import Header from '../ui/Nav/Header';
// import menu from "../data/nav.json"
import styles from './root.module.css';
import './global.css';


async function getMenuItems() {
    let menu = await fetch("http://localhost:3001/api/globals/menu");

    return menu.json();
} 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let menu = use(getMenuItems());

  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header menuItems={menu.menuItems}/>
        <div className={styles.grid}>
          <div className={styles.container}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

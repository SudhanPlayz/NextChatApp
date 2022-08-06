import type { NextComponentType } from "next"
import styles from "./styles.module.scss"

const Sidebar: NextComponentType = () => {
    return <div className={styles.container}>
        <div className={styles.searchBar}>
            <input type="text" placeholder="Find or start a conversation" />
        </div>
    </div>
}

export default Sidebar
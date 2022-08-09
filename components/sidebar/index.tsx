import type { NextComponentType } from "next"
import React from "react"
import UserProfile from "../userProfile"
import styles from "./styles.module.scss"

const Sidebar: NextComponentType<{}, {}, {
    children?: React.ReactNode,
    header?: React.ReactNode
}> = ({
    children,
    header
}) => {
    return <div className={styles.container}>
        <div className={styles.header}>
            {header?header:<input type="text" placeholder="Find or start a conversation" />}
        </div>
        <div className={styles.content}>
            {children}
        </div>
        <UserProfile/>
    </div>
}

export default Sidebar
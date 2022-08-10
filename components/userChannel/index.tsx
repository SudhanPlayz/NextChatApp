import type { NextComponentType } from "next"
import React, { ReactNode } from "react"
import styles from "./styles.module.scss"

const UserChannel: NextComponentType<{}, {}, {
    Avatar: ReactNode,
    name: string
}> = ({ Avatar, name }) => {
    return <div className={styles.container}>
        {Avatar}
        <div className={styles.name}>{name}</div>
    </div>
}

export default UserChannel
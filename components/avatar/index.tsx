import type { NextComponentType } from "next"
import React from "react"
import styles from "./styles.module.scss"

const Avatar: NextComponentType<{}, {}, {
    status: string,
    image?: string
}> = ({ status, image = "https://picsum.photos/200" }) => {
    return <div className={styles.container}>
        <img src={image} alt="User Avatar" />
        <div className={styles["status"+status]}></div>
    </div>
}

export default Avatar
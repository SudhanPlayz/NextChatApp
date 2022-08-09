import type { NextComponentType } from "next"
import React, { ReactNode } from "react"
import styles from "./styles.module.scss"

const SidePane: NextComponentType<{}, {}, {
    name: string,
    children: ReactNode
}> = ({
    name,
    children
}) => {
    return <div className={styles.pane}>
        {children}
        <div>{name}</div>
    </div>
}

const DirectMessages: NextComponentType = () => {
    return <div className={styles.container}>
        <SidePane name="Friends">
            <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
        </SidePane>
        <h3>Direct Messages</h3>
    </div>
}

export default DirectMessages
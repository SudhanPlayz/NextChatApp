import type { NextComponentType } from "next"
import Link from 'next/link'
import styles from "./styles.module.scss"

const GuildItem: NextComponentType<{}, {}, {
    children?: React.ReactNode,
    selected?: boolean,
    path: string,
    svg?: boolean
}> = ({
    children,
    selected,
    path,
    svg
}) => {
        return <Link href={path} shallow>
            <a className={styles.container + (selected ? " " + styles.active : "") + (svg?" " + styles.svg : "")}>
                <div className={styles.icon}>
                    <div className={styles.pill}></div>
                    {children}
                </div>
            </a>
        </Link>
    }

export default GuildItem
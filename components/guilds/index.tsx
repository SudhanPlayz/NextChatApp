import type { NextComponentType } from "next"
import GuildItem from "../guildItem"
import styles from "./styles.module.scss"

const Guilds: NextComponentType = () => {
    return <div className={styles.container}>
        <GuildItem selected path="/"></GuildItem>
        <div className={styles.wrapper}><div className={styles.divider}></div></div>
        <div className={styles.guilds}>
            <GuildItem path="/"></GuildItem>
            <GuildItem path="/"></GuildItem>
            <GuildItem path="/"></GuildItem>
            <GuildItem path="/"></GuildItem>
            <GuildItem svg path="/create">
                <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path></svg>
            </GuildItem>
        </div>
    </div>
}

export default Guilds
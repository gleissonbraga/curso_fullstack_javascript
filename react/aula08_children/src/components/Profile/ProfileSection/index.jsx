import styles from "./styles.module.css"

export default function ProfileSection() {
    return ( 
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}
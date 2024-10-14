import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.name} className={styles.avatar}/>
            <h2 className={styles.name}>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div className={styles.links}>
                <a href={props.githubUrl} target="_blank">GitHub</a>
                <a href={props.linkedinUrl} target="_blank">Linkedin</a>
                <a href={props.twitterUrl} target="_blank">Twitter</a>
            </div>
        </div>
    )
}
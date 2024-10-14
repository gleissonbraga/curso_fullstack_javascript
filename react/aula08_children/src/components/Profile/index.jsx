import LinkButton from "../LinkButton"
import Title from "../Title"
import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.name} className={styles.avatar}/>
            <title>
                <span>{props.name}</span>
                <button>Follow</button>
            </title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
                <div className={styles.links}>
                    <LinkButton href={props.githubUrl}> GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                    <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
                </div>
            </ProfileSection>
            
        </div>
    )
}
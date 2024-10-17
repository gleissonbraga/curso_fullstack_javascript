import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import styles from "./styles.module.css"



export default function Profile(props) {
    // [valor, funcaoModificadora]
    const [followtext, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo")
        setFollowText("Following")
    }



    return (
        <div className={styles.container}>
            <img src={props.avatar} alt={props.name} className={styles.avatar}/>
            <title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}

                >
                    {followtext}

                </button>
            </title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection 
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
        
            <LinkButton href={props.githubUrl}> GitHub</LinkButton>
            <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
            <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
            
        </div>
    )
}
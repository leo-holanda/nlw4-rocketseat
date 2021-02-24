import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return(
        <div className={ styles.profileContainer }>
            <img src="https://github.com/leo-holanda.png" alt="Leonardo Holanda"></img>
            <div>
                <strong>Leonardo Holanda</strong>
                <p>
                    <img src="icons/level.svg"></img>
                    Level 1
                </p>
            </div>
        </div>
    );
}
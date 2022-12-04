import styles from './Header.module.css'

function Header(props){
return(
    <div className={styles.header_div}>
        <h1>Recipes</h1>
        <div className={styles.header_form}>
        <ul>
            <li><p>About</p></li>
            <li><p>API</p></li>
        </ul>
        {props.children}
        </div>

    </div>
)
}

export default Header
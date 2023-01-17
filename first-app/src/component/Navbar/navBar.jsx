import styles from './navBar.module.css'
const Navbar = ({totalItems}) => {
    console.log('navBar.js render');

    return ( 
       
            <header className={styles.navBar}>
                <h2>sajadssa.ir</h2>
            <span>{totalItems}</span>


            </header>
 

     );
}
 
export default Navbar;
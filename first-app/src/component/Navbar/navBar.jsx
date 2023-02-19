import { UseProducts } from '../Providers/ProductsProvider';
import styles from './navBar.module.css'
const Navbar = () => {
    // console.log('navBar.js render');
    const products=UseProducts();
    const totalItems=products.filter((p) => p.quantity > 0).length;
    return ( 
       
            <header className={styles.navBar}>
                <h2>sajadssa.ir</h2>
            <span>{totalItems}</span>


            </header>
 

     );
}
 
export default Navbar;
// sfc
import styles from './select.module.css';
import Select from 'react-select';

 
const SelectComponent = ({ title, ...rest }) => {
    console.log(rest);
    return (
        <div className={styles.selectContainer}>
                <span>{title}</span>

                <Select className={styles.selectContainer}
                {...rest}
            
                />
            </div>
       
     );
}

 
export default SelectComponent;
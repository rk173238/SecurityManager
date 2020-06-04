import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import classes from './MobileMenu.css';

class MobileMenu extends Component {
    render() {
        return(
            <ul className={classes.menuContainer}>
                <li className={classes.menuLink}>
                    <Link to='/home/dashboard/'>DASHBOARD</Link>
                </li>
                <li className={classes.menuLink}>
                    <Link to='/home/inventory'>INVENTORY</Link>
                </li>
                <li className={classes.menuLink}>
                    <Link to='/home/report'>INSIGHT</Link>
                </li>
                <li className={classes.menuLink}>
                    <Link to='/home/analysis/smcmap'>ANALYSIS</Link>
                </li>
                <li className={classes.menuLink}>
                    <Link to='/home/admin'>BASELINE ADMIN</Link>
                </li>
                <li className={classes.menuLink}>
                    <Link to='/home/config'>WEIGHTAGE ADMIN</Link>
                </li>
            </ul>
            )
    }
}
export default MobileMenu
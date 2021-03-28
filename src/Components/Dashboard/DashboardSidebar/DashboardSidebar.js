import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../../Store/Actions/UsersAction';

const DashboardSidebar = ({ setExactRoute }) => {
    const history = useHistory()
    const token = sessionStorage.getItem("token")
    var decoded = jwt_decode(token);
    const { role } = decoded
    const dispatch = useDispatch()

    const handleLogOut = () => {
        sessionStorage.clear()
        dispatch(logOutUser())
        history.push("/")
    }
    const handleBackHome = () => {
        history.push("/")
    }
    return (
        <div>
            <ListItem button onClick={() => handleBackHome()}>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => setExactRoute('Dashboard')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            {
                role === "super admin" && <>
                    <ListItem button onClick={() => setExactRoute('Products')}>
                        <ListItemIcon>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                    </ListItem>
                    <ListItem button onClick={() => setExactRoute('Orders')}>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    <ListItem button onClick={() => setExactRoute('Create Product')}>
                        <ListItemIcon>
                            <AddBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="CreateProducts" />
                    </ListItem>
                    <ListItem button onClick={() => setExactRoute('Users')}>
                        <ListItemIcon>
                            < PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                </>
            }
            {
                role === "admin" &&
                <ListItem button primary="Reports" onClick={() => setExactRoute('Pending Orders')}>
                    <ListItemIcon>
                        <RemoveShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pending Orders" />
                </ListItem>
            }
            {
                role === "user" &&
                <ListItem button onClick={() => setExactRoute('User Orders')}>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>
            }

            <ListItem button onClick={() => handleLogOut()}>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="LogOut" />
            </ListItem>

        </div>
    )
};

export default DashboardSidebar
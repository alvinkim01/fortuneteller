import React  from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    }
}  

class AppShell extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            open : false
        };
    } 

    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    
    handleDrawerClose = () => this.setState({open: !this.state.open,toggle : false})

    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>
                    </AppBar>
                    <Drawer open={this.state.toggle}>
                    <div className={classes.drawerHeader}>
                      <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                      </IconButton>
                    </div>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/">
                                홈 화면
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/mediumtoday">
                                오늘의운세
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/mediumyear">
                                2020 년간 운세
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/mediummonth">
                                2020 월간 운세
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);
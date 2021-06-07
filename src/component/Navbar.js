import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Navbar=()=>{

return (
<AppBar color= "primary" position="static">
<Toolbar>
    <IconButton color="inherit">
        <MenuIcon/>
    </IconButton>
    <Typography  variant ="h6">FeelsCricket</Typography>
</Toolbar>
</AppBar>


);
};
export default Navbar;
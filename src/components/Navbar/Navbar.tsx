import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
/* import Button from '@mui/material/Button'; */
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { CustomModal } from "..";
import { FavoriteTable } from "./FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite"
import { dialogOpenSubject$ } from "../CustomModal/CustomModal";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

  return (
    <>
    <CustomModal>
      <FavoriteTable/>
    </CustomModal>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              App Clean Architecture
            </Typography>
             <IconButton color="inherit" aria-label="favorites" onClick={handleClick}><FavoriteIcon/></IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export { Navbar };

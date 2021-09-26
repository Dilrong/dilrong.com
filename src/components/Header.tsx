import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Drawer,
  List,
  Link,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const link = {
  textDecoration: "none",
  color: "gray",
  "&:hover": {
    color: "#62bb47",
    fontWeight: "bold",
  },
  "&:active": {
    color: "#62bb47",
    fontWeight: "bold",
  },
};

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawer(open);
  };
  const Logo = () => {
    return (
      <Link href="/" underline="none">
        <Typography variant="h6">Dilrong</Typography>
      </Link>
    );
  };

  const SectionDesktop = () => {
    return (
      <Box sx={{ display: { md: "block", xs: "none" }, marginLeft: 3 }}>
        <Grid container spacing={3}>
          <Grid item>
            <Link href="/blogs" underline="none" sx={link}>
              Blog
            </Link>
          </Grid>
          <Grid item>
            <Link href="/books" underline="none" sx={link}>
              Book
            </Link>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const SectionMobile = () => {
    return (
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <IconButton
          onClick={() => {
            toggleDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    );
  };

  const MobileDrawer = () => {
    return (
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        <List style={{ width: 250 }}>
          <Link href="/blogs" underline="none">
            <ListItem button>
              <ListItemText>Blog</ListItemText>
            </ListItem>
          </Link>
          <Link href="/books" underline="none">
            <ListItem button>
              <ListItemText>Book</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    );
  };

  return (
    <>
      <AppBar
        color="transparent"
        position="static"
        elevation={1}
        sx={{ marginBottom: (theme) => theme.spacing(3) }}
      >
        <Toolbar variant="dense">
          <Logo />
          <div style={{ flexGrow: 1 }} />
          <SectionDesktop />
          <SectionMobile />
        </Toolbar>
      </AppBar>
      <MobileDrawer />
    </>
  );
};

export default Header;

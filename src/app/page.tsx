'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Tabs,
  Tab,
  Box,
  Grid,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

function ResponsiveAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [value, setValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderGridContent = () => {
    switch (value) {
      case 0:
        return (
          <Grid container spacing={2}>
            {/* Contacts Grid */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>Contact 1</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>Contact 2</Box>
            </Grid>
            {/* Add more grid items as needed */}
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            {/* Accounts Grid */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>Account 1</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>Account 2</Box>
            </Grid>
            {/* Add more grid items as needed */}
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            {/* Addresses Grid */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>Address 1</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>Address 2</Box>
            </Grid>
            {/* Add more grid items as needed */}
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Responsive App
          </Typography>
          {!isMobile && (
            <>
              <Box sx={{ position: 'relative', display: 'flex', flexGrow: 1 }}>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  startAdornment={<SearchIcon />}
                  sx={{ ml: 2, width: '100%', color: 'inherit', backgroundColor: '#f1f3f4', borderRadius: 1, pl: 1 }}
                />
              </Box>
              <Avatar alt="User" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
            </>
          )}
        </Toolbar>
      </AppBar>

      {isMobile ? (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem
            onClick={() => {
              handleTabChange({} as React.SyntheticEvent, 0);
              handleMenuClose();
            }}
          >
            Contacts
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleTabChange({} as React.SyntheticEvent, 1);
              handleMenuClose();
            }}
          >
            Accounts
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleTabChange({} as React.SyntheticEvent, 2);
              handleMenuClose();
            }}
          >
            Addresses
          </MenuItem>
        </Menu>
      ) : (
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Contacts" />
          <Tab label="Accounts" />
          <Tab label="Addresses" />
        </Tabs>
      )}

      <Box p={2}>{renderGridContent()}</Box>
    </>
  );
}

export default ResponsiveAppBar;

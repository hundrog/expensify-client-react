import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import BottomNav from '../components/bottomNav';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Pathname() {
	return useLocation().pathname.substring(1);
}

export default function AppLayout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt:2 }}>
          <Outlet />
        </Box>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} >
            <BottomNav pathname={Pathname()}/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
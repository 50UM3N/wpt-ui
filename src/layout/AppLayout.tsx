import { Box, Toolbar } from "@mui/material";
import Header from "@/layout/Header";
import Sidebar from "@/layout/Sidebar";
import BottomNav from "@/layout/BottomNav";
import { DRAWER_WIDTH } from "@/constant";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` } }}>
        <Toolbar />
        <Outlet />
        <BottomNav />
      </Box>
    </Box>
  );
};

export default AppLayout;

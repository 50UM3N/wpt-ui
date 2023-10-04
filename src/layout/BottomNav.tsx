import { Archive, Favorite, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, display: { xs: "block", sm: "none" } }} elevation={3}>
      <BottomNavigation value={pathname} onChange={(_, value) => navigate(value)} showLabels>
        <BottomNavigationAction value="/" label="Recents" icon={<Restore />} />
        <BottomNavigationAction value="test-2" label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction value="test-3" label="Archive" icon={<Archive />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;

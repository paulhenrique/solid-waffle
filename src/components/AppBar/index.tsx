import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  Avatar,
  Container,
  Fade,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import useAppBar from "./useAppBar";

export default function AppBar() {
  const {
    changeRouteDispatch,
    handleClick,
    anchorEl,
    open,
    handleClose,
    logout,
  } = useAppBar();

  return (
    <Box sx={{ flexGrow: 1 }} mb="79px">
      <AppBarMui position="fixed">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" onClick={() => changeRouteDispatch("/")}>
                MensApp
              </Button>
            </Box>
            <IconButton onClick={handleClick}>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBarMui>
    </Box>
  );
}

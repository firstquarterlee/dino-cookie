import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          가계부
        </Typography>

        {session ? (
          <Button color="inherit" onClick={() => signOut()}>
            로그아웃
          </Button>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            로그인
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

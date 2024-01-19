import AnnouncementIcon from "@mui/icons-material/Announcement";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false
  });

  function iconHandler(index) {
    if (index === 0) {
      return <AnnouncementIcon />;
    }

    if (index === 1) {
      return <AppRegistrationIcon />;
    }

    if (index === 2) {
      return <ApartmentIcon />;
    }

    if (index === 3) {
      return <AttachMoneyIcon />;
    }

    if (index === 4) {
      return <GroupsIcon />;
    }

    if (index === 5) {
      return <SupportAgentIcon />;
    }

    if (index === 6) {
      return <HomeIcon />;
    }
  }

  function handleClick(index) {
    if (index === 0) {
      navigate("/noticias");
    }

    if (index === 1) {
      navigate("/areas-comuns");
    }

    if (index === 2) {
      return console.log("Portaria");
    }

    if (index === 3) {
      navigate("/contas");
    }

    if (index === 4) {
      navigate("/visitantes");
    }

    if (index === 5) {
      navigate("/suporte");
    }

    if (index === 6) {
      navigate("/home");
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Avisos", "Áreas comuns", "Portaria", "Boletos", "Visitantes", "Abrir chamado", "Início"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemIcon>{iconHandler(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <ApartmentIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon
              sx={{
                color: "#fff",
                fontSize: "3.5rem",
                cursor: "pointer"
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

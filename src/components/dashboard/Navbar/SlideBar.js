import { Drawer, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import routes from "../../../routes";


export const SlideBar=()=> {
  console.log(routes);

  return (
    <Drawer variant="permanent">
    <List>
      {routes.map((route, index) => (
        <ListItem button key={index} component={Link} to={route.route}>
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText primary={route.name} />
        </ListItem>
      ))}
    </List>
  </Drawer>
  );
}


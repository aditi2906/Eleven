import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
} from "@nextui-org/react";

const NavbarHeader = () => {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          ParkBros
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarHeader;

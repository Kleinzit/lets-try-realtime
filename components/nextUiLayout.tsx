import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Container,
} from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
};

const NextUiLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            APP
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/boilerplate">Boilerplate</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {children}
    </Container>
  );
};

export default NextUiLayout;

import { Button, Container, Row, Col, Text } from "@nextui-org/react";
import Link from "next/link";

const IndexPage = () => (
  <Container>
    <Row>
      <Text h1>Welcome!</Text>
    </Row>
    <Row>
      <Link href="/boilerplate">
        <Button>Go to boilerplate</Button>
      </Link>
    </Row>
  </Container>
);

export default IndexPage;

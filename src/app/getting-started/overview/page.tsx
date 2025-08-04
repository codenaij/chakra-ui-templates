import { Box, Container, Heading, Text } from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const OverviewPage = () => {
  return (
    <Container>
      <Box mb={10}>
        <Heading
          as="h1"
          my={3}
          borderLeft={"5px solid"}
          borderColor={"purple"}
          px={5}
        >
          Getting Started
        </Heading>
        <Text>
          Open-source Chakra UI v3 templates and components that accelerate your
          development workflow. Copy, paste, and customize professional-grade
          designs.
        </Text>
        <Text>This project uses Chakra V3. So you need have it installed</Text>
        <Box>
          <SyntaxHighlighter
            language={"jsx"}
            style={tomorrow}
            customStyle={{
              margin: 10,
              fontSize: "0.75rem",
            }}
          >
            {`
npm i @chakra-ui/react @emotion/react
npm i lorem-ipsum`}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </Container>
  );
};

export default OverviewPage;

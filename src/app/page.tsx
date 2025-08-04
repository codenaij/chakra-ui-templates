"use client";

import {
  Box,
  Container,
  For,
  Grid,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = [
  {
    name: "Ecommerce",
    href: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HomePage() {
  return (
    <Container>
      <Box my={10}>
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
            npm i @chakra-ui/react @emotion/react
          </SyntaxHighlighter>
        </Box>
      </Box>
      <Box my={10}>
        <Heading
          as="h1"
          my={3}
          borderLeft={"5px solid"}
          borderColor={"purple"}
          px={5}
        >
          Why Choose Our Templates?
        </Heading>
        <List.Root>
          <Stack gap={2} pl={{ base: "0", md: "20px" }}>
            <List.Item>
              ⚡ Lightning Fast Development Skip the design phase and jump
              straight to building. Our templates are production-ready and fully
              responsive out of the box.
            </List.Item>
            <List.Item>
              🎨 Modern & Professional Every template follows current design
              trends and best practices, ensuring your applications look
              polished and contemporary.
            </List.Item>
            <List.Item>
              🔧 Fully Customizable Built with Chakra UI v3's flexible theming
              system. Easily adapt colors, spacing, and components to match your
              brand.
            </List.Item>
            <List.Item>
              📱 Mobile-First Design All templates are crafted with mobile
              responsiveness as a priority, ensuring perfect user experiences
              across all devices.
            </List.Item>
            <List.Item>
              🚀 Production Ready Clean, semantic code with TypeScript support
              and accessibility features built-in from day one.
            </List.Item>
            <List.Item>
              💯 Open Source Completely free to use in personal and commercial
              projects. Contribute back to help the community grow.
            </List.Item>
          </Stack>
        </List.Root>
      </Box>

      <Box my={10}>
        <Heading
          as="h1"
          my={3}
          borderLeft={"5px solid"}
          borderColor={"purple"}
          px={5}
        >
          Templates
        </Heading>

        <Box mx={"auto"} maxW={{ base: "2xl", lg: "7xl" }} py={10}>
          <Text srOnly>Components</Text>

          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gapX={{ base: 6, xl: 8 }}
            gapY={10}
          >
            <For each={components}>
              {(product) => (
                <LinkBox key={product.name} className={"group"}>
                  <Image
                    src={product.href}
                    alt={product.name}
                    objectFit={"cover"}
                    _groupHover={{ opacity: 0.75 }}
                    bg={"gray.200"}
                    borderRadius={"lg"}
                    w={"full"}
                    aspectRatio={{ base: 1, xl: 7 / 8 }}
                  />

                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    mt={4}
                    color={"gray.700"}
                  >
                    <LinkOverlay href="/ecommerce/product-lists">
                      {product.name}
                    </LinkOverlay>
                  </Text>
                </LinkBox>
              )}
            </For>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

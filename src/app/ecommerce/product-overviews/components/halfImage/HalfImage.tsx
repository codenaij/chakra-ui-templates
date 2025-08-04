import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LoremIpsum } from "lorem-ipsum";
import { LuCheck, LuStar } from "react-icons/lu";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    max: 16,
    min: 8,
  },
});

const product = {
  id: 1,
  name: "Iphone 13",
  href: "#",
  price: "£300",
  productImgSrc:
    "https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  productImgAlt: "A blue iphone 13 beside a yellow apple",
  description: lorem.generateSentences(2),
  reviews: { average: 5, totalCount: 10 },
};

const HalfImage = () => {
  return (
    <Box bg="white">
      <Container
        maxW="7xl"
        py={{ base: "16", sm: "24" }}
        px={{ base: "4", sm: "6", lg: "8" }}
      >
        <Grid columns={{ lg: 2 }} gap={{ lg: "8" }}>
          <VStack align="start" gap="4" maxW={{ lg: "lg" }}>
            <Heading
              size={{ base: "2xl", sm: "3xl" }}
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.900"
            >
              {product.name}
            </Heading>

            <HStack gap="4">
              <Text fontSize={{ base: "lg", sm: "xl" }} color="gray.900">
                {product.price}
              </Text>

              <HStack gap="2">
                <HStack gap="0.5">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Icon
                      key={rating}
                      color={
                        product.reviews.average > rating
                          ? "yellow.400"
                          : "gray.300"
                      }
                    >
                      <LuStar />
                    </Icon>
                  ))}
                </HStack>
                <Text fontSize="sm" color="gray.500">
                  {product.reviews.totalCount} reviews
                </Text>
              </HStack>
            </HStack>

            <HStack>
              <Icon color="green.500">
                <LuCheck />
              </Icon>
              <Text fontSize="sm" color="gray.500">
                Item Availability
              </Text>
            </HStack>

            <Text color="gray.500">{product.description}</Text>
            <List.Root p={{ base: "none", md: "4" }}>
              <List.Item>{lorem.generateSentences(1)}</List.Item>
              <List.Item>{lorem.generateSentences(1)}</List.Item>
              <List.Item>{lorem.generateSentences(1)}</List.Item>
              <List.Item>{lorem.generateSentences(1)}</List.Item>
            </List.Root>
          </VStack>

          <Box
            gridColumn={{ lg: "2" }}
            gridRow={{ lg: "span 2" }}
            mt={{ base: "10", lg: "0" }}
          >
            <Image
              src={product.productImgSrc}
              alt={product.productImgAlt}
              borderRadius="lg"
              objectFit="cover"
              w="full"
              aspectRatio="1/1"
            />
          </Box>

          <Box
            mt={{ base: "10", lg: "0" }}
            gridColumn={{ lg: "1" }}
            gridRow={{ lg: "2" }}
            maxW={{ lg: "lg" }}
          >
            <VStack align="stretch" gap="6">
              <Button size="lg" variant={"subtle"} w="full">
                Add to Cart
              </Button>
            </VStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default HalfImage;

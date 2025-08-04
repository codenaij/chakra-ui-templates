import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Separator,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Iphone 13",
    href: "#",
    price: "£300",
    size: "Pro",
    productImgSrc:
      "https://images.unsplash.com/photo-1680337673571-e194b42583ab?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productImgAlt: "A blue iphone 13 beside a yellow apple",
  },
  {
    id: 2,
    name: "Glossier Cleanser",
    href: "#",
    price: "£25",
    size: "Suave",
    productImgSrc:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productImgAlt: "Glossier milky jelly cleanser conditioning face wash kit.",
  },
  {
    id: 3,
    name: "Rayban Sunglasses",
    href: "#",
    price: "£100",
    size: "Meta",
    productImgSrc:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productImgAlt: "Rayban Non-Prescription Sunglasses.",
  },
];

const SimpleShoppingCart = () => {
  return (
    <Box bg="white">
      <Container
        maxW="2xl"
        py={{ base: "16", sm: "24" }}
        px={{ base: "4", sm: "6", lg: "0" }}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", sm: "3xl" }}
          fontWeight="bold"
          letterSpacing="tight"
          textAlign="center"
          color="gray.900"
        >
          Shopping Cart
        </Heading>

        <Box mt="12">
          <Box as="section">
            <VisuallyHidden>
              <Heading as="h2">Items in your shopping cart</Heading>
            </VisuallyHidden>

            <Stack
              gap="0"
              separator={<Separator />}
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              {products.map((product) => (
                <Flex key={product.id} py="6" gap={{ base: "4", sm: "6" }}>
                  <Box flexShrink="0">
                    <Image
                      src={product.productImgSrc}
                      alt={product.productImgAlt}
                      boxSize={{ base: "24", sm: "32" }}
                      borderRadius="md"
                      objectFit="cover"
                    />
                  </Box>

                  <Flex flex="1" direction="column">
                    <Box>
                      <Flex justify="space-between">
                        <Heading as="h4" size="sm">
                          <Link
                            href={product.href}
                            fontWeight="medium"
                            color="gray.700"
                            _hover={{ color: "gray.800" }}
                          >
                            {product.name}
                          </Link>
                        </Heading>
                        <Text
                          ml="4"
                          fontSize="sm"
                          fontWeight="medium"
                          color="gray.900"
                        >
                          {product.price}
                        </Text>
                      </Flex>
                      <Text mt="1" fontSize="sm" color="gray.500">
                        {product.size}
                      </Text>
                    </Box>

                    <Flex mt="4" flex="1" align="flex-end" justify="end">
                      <Box ml="4">
                        <Button variant="outline" size="sm" fontWeight="medium">
                          Remove
                        </Button>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Stack>
          </Box>

          {/* Order summary */}
          <Box as="section" aria-labelledby="summary-heading" mt="10">
            <VisuallyHidden>
              <Heading as={"h2"} id="summary-heading">
                Order summary
              </Heading>
            </VisuallyHidden>

            <Box>
              <VStack gap="4" align="stretch">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="medium" color="gray.900">
                    Total
                  </Text>
                  <Text ml="4" fontWeight="medium" color="gray.900">
                    £425.00
                  </Text>
                </Flex>
              </VStack>
              <Text mt="1" fontSize="sm" color="gray.500">
                Shipping and taxes will be calculated at checkout.
              </Text>
            </Box>

            <Box mt="10">
              <Button type="submit" variant={"surface"} size="lg" w="full">
                Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SimpleShoppingCart;

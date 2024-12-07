// pages/index.js
import {
    Box,
    Container,
    Flex,
    Text,
    Heading,
    Image,
    UnorderedList,
    ListItem,
    Tooltip,
  } from "@chakra-ui/react";
  
  const DemoLayout = () => {
    return (
      <Container pt="20" pb="16">
        <Flex wrap="wrap" mx="-15px" mb="10">
          <Box
            w={{ base: "full", md: "9/12", lg: "7/12", xl: "6/12" }}
            px="15px"
            mx="auto"
          >
            <Box textAlign="center">
              <Heading
                as="h3"
                fontSize={{ base: "calc(1.475rem + 2.7vw)", xl: "3.5rem" }}
                mb="3"
                color="#3f78e0"
              >
                21
              </Heading>
            </Box>
            <Heading
              as="h2"
              fontSize={{ base: "calc(1.325rem + 0.9vw)", xl: "2rem" }}
              fontWeight="bold"
              lineHeight="1.25"
              mb="3"
              textAlign="center"
            >
              Functional, impressive and rich demos to start with
            </Heading>
          </Box>
        </Flex>
  
        <Box>
          <Box mb="10">
            <Box bg="#f0f0f8">
              <Box px={{ base: "15px", md: "40px", xl: "14" }} py="0">
                <Flex wrap="wrap" mx="-15px" md="mx-[-20px]" xl="mx-[-35px]" align="center">
                  <Box
                    w={{ base: "full", xl: "7/12", lg: "7/12" }}
                    px={{ base: "15px", md: "20px", xl: "35px" }}
                  >
                    <Flex wrap="wrap" mx="-17.5px">
                      <Box w="6/12" px="17.5px">
                        <Tooltip label="Click to see the demo" aria-label="A tooltip">
                          <a href="../../demo18.html" target="_blank">
                            <Image
                              src="../../assets/img/demos/d18.jpg"
                              srcSet="../../assets/img/demos/d18@2x.jpg 2x"
                              alt="image"
                              boxShadow="0 0.25rem 1.75rem rgba(30,34,40,0.07)"
                              borderRadius="0.4rem 0 0 0.4rem"
                            />
                          </a>
                        </Tooltip>
                      </Box>
                      <Box w="6/12" px="17.5px">
                        <Tooltip label="Click to see the demo" aria-label="A tooltip">
                          <a href="../../demo18.html" target="_blank">
                            <Image
                              src="../../assets/img/demos/d18-2.jpg"
                              srcSet="../../assets/img/demos/d18-2@2x.jpg 2x"
                              alt="image"
                              boxShadow="0 0.25rem 1.75rem rgba(30,34,40,0.07)"
                              borderRadius="0 0.4rem 0.4rem 0"
                            />
                          </a>
                        </Tooltip>
                      </Box>
                    </Flex>
                  </Box>
                  <Box
                    w={{ base: "full", xl: "5/12", lg: "5/12" }}
                    px={{ base: "15px", md: "20px", xl: "35px" }}
                  >
                    <Heading as="h2" fontSize="calc(1.275rem + 0.3vw)" mb="4" lineHeight="1.35">
                      Demo Layout XVIII
                    </Heading>
                    <UnorderedList pl="0" listStyleType="none" display="flex" flexWrap="wrap" mx="-15px" ml="0" mt="-10px">
                      <ListItem w={{ base: "full", xl: "6/12", lg: "6/12" }} pl="5" mb="10px">
                        <Text as="span" mr="2">
                          <i className="uil uil-check" />
                        </Text>
                        Network, Marketing
                      </ListItem>
                      <ListItem w={{ base: "full", xl: "6/12", lg: "6/12" }} pl="5" mb="10px">
                        <Text as="span" mr="2">
                          <i className="uil uil-check" />
                        </Text>
                        Design, Layout
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default DemoLayout;
  
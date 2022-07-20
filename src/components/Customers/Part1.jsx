import React from 'react'
import { Container, Heading, Flex, Button, SimpleGrid, Checkbox, GridItem, FormControl, FormLabel, Input, Select, VStack, Image, Box, Spacer, Text } from '@chakra-ui/react'
// import { FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, VStack, Select, Checkbox, Button, HStack, } from '@chakra-ui/react';
import {
    Avatar,
    Center,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
// import Slider from './Slider'


const Part1 = () => {
    return (
        <>
            <Container
                // bg='blue.500'
                height={["90vh", "140vh", "90vh"]} maxWidth={['container.sl', 'container.xl', 'container.xl']} p={[0, 5, 10]}>
                <Flex
                    // bg='green.100'
                    height={["80vh", "110vh", "60vh"]}
                    paddingY={[0, 5, 10]}
                    direction={{
                        base: "column",
                        md: "row",
                    }} >
                    <Box
                        //  bg='red.300'
                        width="100%" p={5}>
                        <VStack float={"center"} >
                            <p>FEATURES STORY</p>
                            <Heading noOfLines={4}>More meetings, better prospects boost Bitly’s conversions across the board</Heading>
                            <Spacer />
                            <Text fontSize={['xl', '2xl', '3sl']} noOfLines={5}>Bitly’s sales development team sets meetings for account executives who then deal directly with customers to close deals. But the company’s rapid growth exposed an inefficient process. Calendly simplified scheduling and improved communication between teams.</Text>
                        </VStack>
                    </Box>
                    <Box
                        // bg='red.200'
                        width="full" p={[0, 5, 10]} >
                        <VStack float={"center"}>
                            <Box boxSize={[40, 400, 600]}>
                                <Image width={[300, 1200, 2000]} src="https://images.ctfassets.net/k0lk9kiuza3o/5QD4ZgLcbPH9m7jNPzSl7K/355979abdf528e245ae76e2c2ad1adfa/FeaturedStory_Bitly.png?w=1348&h=1091&q=50&fm=webp" alt='Dan Abramov' />
                            </Box>
                        </VStack>
                    </Box>
                </Flex>
            </Container>


            <Container
                // bg='blue.600'
                textAlign={"center"} margin="auto" h={[1700,1750,720]} maxWidth="1200" padding="5" >
                <Heading
                // bg='blue.200'
                >Popular customer stories</Heading>
                <Text fontSize={["xl", "xl", "3xl"]}>Learn how Calendly customers save time and drive revenue</Text>
                <Container maxWidth={'container.xl'} p="10">
                    <Flex
                        height={{ base: "auto", md: "100vh" }}
                        paddingY={[0, 10, 20]}
                        direction={{
                            base: "column-reverse",
                            md: "row",
                        }}
                    >

                        <SimpleGrid bg={"green"} maxW={'400px'} h={"480"} columns={1} >
                            <Center >
                                <Box
                                    maxW={'300px'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    height={"450"}
                                    rounded={'md'}
                                    overflow={'hidden'}
                                    align={'left'}
                                >
                                    <Image
                                        my={5}
                                        mx={2}
                                        h={'40px'}
                                        w={'20'}
                                        src={
                                            'https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg'
                                        }
                                        objectFit={'cover'}
                                    />


                                    <Box p={6}>
                                        <Stack spacing={0} mb={5}>
                                            <Heading fontSize={'4xl'} fontWeight={900} fontFamily={'body'}>
                                                How Lyft accelerates its B2B sales cycle
                                            </Heading>
                                        </Stack>


                                        <Button
                                            w={'full'}
                                            mt={12}
                                            bg={useColorModeValue('#151f21', 'gray.900')}
                                            color={'white'}
                                            rounded={'md'}
                                            _hover={{
                                                transform: 'translateY(-2px)',
                                                boxShadow: 'lg',
                                            }}>
                                            Read Me
                                        </Button>

                                    </Box>
                                </Box>
                            </Center>
                        </SimpleGrid>
                        <Spacer ></Spacer>


                        <SimpleGrid bg={"green"} maxW={'400px'} h={"480"} columns={1} >
                            <Center >
                                <Box
                                    maxW={'300px'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    height={"450"}
                                    rounded={'md'}
                                    overflow={'hidden'}
                                    align={'left'}
                                >
                                    <Image
                                        my={5}
                                        mx={2}
                                        h={'40px'}
                                        w={'40'}
                                        src={
                                            'https://images.ctfassets.net/k0lk9kiuza3o/1f9Hp8EGvZrcsGNPmLpPqs/7b5823770d62546c9f5cf4ba580d0a7b/Katalon_Studio_logo_1.png?w=760&h=284&q=50&fm=webp'
                                        }
                                        objectFit={'cover'}
                                    />


                                    <Box p={6}>
                                        <Stack spacing={0} mb={5}>
                                        <Heading fontSize={'3xl'} fontWeight={800} fontFamily={'body'}>
                                                How Katalon shortened their sales cycle with Calendary
                                            </Heading>
                                        </Stack>


                                        <Button
                                            w={'full'}
                                            mt={20}
                                            bg={useColorModeValue('#151f21', 'gray.900')}
                                            color={'white'}
                                            rounded={'md'}
                                            _hover={{
                                                transform: 'translateY(-2px)',
                                                boxShadow: 'lg',
                                            }}>
                                            Read Me
                                        </Button>

                                    </Box>
                                </Box>
                            </Center>
                        </SimpleGrid>
                        <Spacer ></Spacer>

                        <SimpleGrid bg={"green"} maxW={'400px'} h={"480"}  columns={1} >
                            <Center >
                                <Box
                                    maxW={'300px'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    boxShadow={'2xl'}
                                    height={"450"}
                                    rounded={'md'}
                                    overflow={'hidden'}
                                    align={'left'}
                                >
                                    <Image
                                        my={5}
                                        mx={2}
                                        h={'40px'}
                                        w={'50'}
                                        src={
                                            'https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/93731d681249b5939c390ef562ae7440/640px-Vonage_Logo.png?w=640&h=141&q=50&fm=webp'
                                        }
                                        objectFit={'cover'}
                                    />


                                    <Box p={6}>
                                        <Stack spacing={0} mb={5}>
                                            <Heading fontSize={'3xl'} fontWeight={800} fontFamily={'body'}>
                                                How Vonage's customers sucess team increases efficiency  with calendly
                                            </Heading>
                                        </Stack>


                                        <Button
                                            w={'full'}
                                            mt={2}
                                            bg={useColorModeValue('#151f21', 'gray.900')}
                                            color={'white'}
                                            rounded={'md'}
                                            _hover={{
                                                transform: 'translateY(-2px)',
                                                boxShadow: 'lg',
                                            }}>
                                            Read Me
                                        </Button>

                                    </Box>
                                </Box>
                            </Center>
                        </SimpleGrid>
                        <Spacer ></Spacer>



                    </Flex>
                </Container>

            </Container>

            
        </>
    )
}

export default Part1
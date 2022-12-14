import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { RiSurveyFill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import SKKULogo from "../public/skku.svg";

export const Header = () => {
    return (
        <Center
            as="nav"
            role={"navigation"}
            minH="16"
            width="full"
            px={4}
            position={"fixed"}
            top={0}
            backgroundColor="white"
            boxShadow={"xs"}
        >
            <Stack
                direction={"row"}
                mt={1}
                w={{ base: "full", xl: "container.xl" }}
                justifyContent={"space-between"}
                verticalAlign="center"
            >
                <Center>
                    <SKKULogo width="30" />
                    <Flex direction={"column"} marginLeft={4}>
                        <Text
                            fontSize={{ base: "xs", sm: "md" }}
                            color="gray.500"
                        >
                            SW·AI 캡스톤디자인 경진대회
                        </Text>
                        <Text
                            fontSize={{ base: "sm", sm: "md" }}
                            fontWeight={600}
                            color="gray.500"
                        >
                            Babble
                        </Text>
                    </Flex>
                </Center>
                <Center>
                    <Stack direction={{ base: "row", sm: "row" }} align="start">
                        <Button
                            py={4}
                            variant={"solid"}
                            colorScheme="gray"
                            leftIcon={<ImLab />}
                            size={{ base: "xs", md: "sm" }}
                            px={4}
                            onClick={() =>
                                window.open("https://comedu.skku.edu")
                            }
                        >
                            <Flex>
                                <Text
                                    fontSize={"md"}
                                    fontFamily="idc"
                                    fontWeight={600}
                                >
                                    COM
                                </Text>
                                <Text
                                    fontSize={"md"}
                                    fontFamily="idc"
                                    fontWeight={500}
                                >
                                    Edu
                                </Text>
                            </Flex>
                        </Button>
                        <Button
                            py={4}
                            variant={"solid"}
                            colorScheme="green"
                            leftIcon={<RiSurveyFill />}
                            size={{ base: "xs", md: "sm" }}
                            px={4}
                            onClick={() =>
                                window.open(
                                    "https://forms.gle/bmpJKFCM2vddkAUg9"
                                    )
                            }
                        >
                            Survey
                        </Button>
                    </Stack>
                </Center>
            </Stack>
        </Center>
    );
};

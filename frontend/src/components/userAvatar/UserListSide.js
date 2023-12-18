import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";
import searchResult from "../../components/miscellaneous/SideDrawer"
const UserListSide = ({ handleFunction }) => {
    const { user, searchResult } = ChatState();
    console.log(searchResult);
    const name = searchResult[0].name;
    const email = searchResult[0].email;
    const pic = searchResult[0].pic;
    console.log(searchResult[0]);
    return (
        <Box
            onClick={handleFunction}
            cursor="pointer"
            bg="lightblue"
            _hover={{
                background: "#38B2AC",
                color: "white",
            }}
            w="100%"
            d="flex"
            alignItems="center"
            color="black"
            px={3}
            py={2}
            mb={2}
            borderRadius="lg"
        >
            <Avatar
                mr={2}
                size="sm"
                cursor="pointer"
                name={name}
                src={pic}
            />
            <Box>
                <Text>{name}</Text>
                <Text fontSize="xs">
                    <b>Email : </b>
                    {email}
                </Text>
            </Box>
        </Box>
    );
};

export default UserListSide;

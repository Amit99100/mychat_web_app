import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { black } from "colors";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    // it will make responsive , when mobile and pc ( so i used container here . )
    //maxwidth xl( xtra larage . )
    //content will center . 
    <Container maxW="xl" centerContent>
      {/* box is like div , Here we can write directly css , so better than div .  */}
      {/* <Box
        d="flex"
        p={2.5}
        justifyContent="center"
        bg="white"
        w="100%"
        m="35px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
        shadow="dark-lg"
        bgGradient="linear(to-l, #00ADB5, #9AD0C2)"
      >

      </Box> */}

      <Box mt={"5%"} shadow="dark-lg" bg={"white"} c="black" w="100%" p={4} borderRadius="lg" borderWidth="2px" className="login_box">
        <Text m={"1rem"} color="black" fontSize="4xl" fontFamily="Georgia" >
          NamasteConnect
        </Text>
        {/* Tabs is used to switch login and signup  */}
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab fontWeight={"bold"} >Login</Tab>
            <Tab fontWeight={"bold"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* Login componenet  */}
              <Login />
            </TabPanel>
            <TabPanel>
              {/* SignIn componenet  */}
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

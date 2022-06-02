import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
   showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
   return (
      <Flex align="center">
         {showProfileData && (
            <Box mr="4" textAlign="right">
               <Text>Carlos Henrique</Text>
               <Text color="gray.300" fontSize="small">henriquesouzadev@gmail.com</Text>
            </Box>
         )}

         <Avatar size="md" name="Carlos Henrique" src="https://github.com/henriquesouzadev.png" />
      </Flex>
   );
}
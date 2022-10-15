import { Box } from "@mui/material";
import { Container, Stack } from "@mui/system";

const NavBar = () => {
  return (
    <Container>
      <Stack
        direction={"row"}
        justifyContent={{ xs: "center", md: "flex-end", xl: "flex-end" }}
        alignItems={"center"}
        height={"10vh"}
        paddingTop={"10px"}
        paddingBottom={"5px"}
      >
        <Box height={"100%"}>
          <img height={"100%"} src="/logo.png" alt="Flybondi logo" />
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;

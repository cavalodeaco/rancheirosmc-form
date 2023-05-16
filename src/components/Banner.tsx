import { Center, createStyles, MediaQuery, Title } from "@mantine/core";
import { ReactElement } from "react";
import banner from "./img/background.jpeg";

const useStyles = createStyles((theme) => ({
  banner: {
    minHeight: "calc(100vh - 60px)",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 100%",
    paddingTop: "20%",
    // filter: "sepia(1)"
  },
  blackground: { 
    backgroundColor: "#0000008c",
    height: "100%"
  }
}));

export default function Banner(): ReactElement {
  const { classes } = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.blackground}>
        <Center>
          <MediaQuery
            query="(min-width: 700px)"
            styles={{
              fontSize: "5rem",
            }}
          >
            <Title color={"white"} size={"2.5rem"}>Manobras para Vida</Title>
          </MediaQuery>
        </Center>
      </div>
    </div>
  );
}

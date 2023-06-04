import { Center, createStyles, MediaQuery, Title } from "@mantine/core";
import { ReactElement } from "react";
import banner from "./img/background.jpeg";
import faixa from "./img/faixa.svg";
import logao from "./img/logao.svg";

const useStyles = createStyles((theme) => ({
  banner: {
    height: "160px",
    backgroundImage: `url(${faixa})`,
    backgroundSize: 'contain',
    borderBottom: `0px`,
    ['@media (max-width: 600px)']: {
      backgroundSize: 'cover',
      backgroundPosition: '0% 100%',
    },
    marginTop: '-8px',
  },
  logao: {
    height: "240px",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '-180px',
    position: 'relative',
    zIndex: 2,
    backgroundImage: `url(${logao})`,
    backgroundColor: '#00000000',
  }

}));

export default function Banner(): ReactElement {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.banner}>
      </div>
      <div className={classes.logao}>
      </div>
    </>
  );
}

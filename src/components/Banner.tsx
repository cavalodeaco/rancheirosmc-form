import { Center, createStyles, Image, MediaQuery, Title } from "@mantine/core";
import { ReactElement } from "react";
import banner from "./img/background.jpeg";
import faixa from "./img/faixa.svg";
import logao from "./img/logao.svg";
import fundo from "./img/fundo.webp";

const useStyles = createStyles((theme) => ({
  banner: {
    height: "120px",
    backgroundImage: `url(${faixa})`,
    backgroundSize: 'contain',
    borderBottom: `0px`,
    ['@media (max-width: 600px)']: {
      backgroundSize: 'cover',
      backgroundPosition: '0% 100%',
    },
    marginTop: '-8px',
    position: 'relative',
    zIndex: 2,
  },
  logao: {
    height: "240px",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '-140px',
    position: 'relative',
    zIndex: 3,
    backgroundImage: `url(${logao})`,
    backgroundColor: '#00000000',
  },
  fundo: {
    // backgroundImage: `url(${fundo})`,
    // aspectRatio: '3415 / 2447',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    marginTop: '-110px',
    position: 'relative',
    zIndex: 1,
  },

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

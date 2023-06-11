import { ReactElement, useState } from "react";
import {
  createStyles,
  Title,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Anchor,
  Center,
  Space,
  Menu,
  Drawer,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import header from "./img/header.svg";
import logo from "./img/logo.webp";

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: "absolute",
    backgroundImage: `url(${header})`,
    backgroundColor: "#f5e02c",
    backgroundSize: "contain",
    borderBottom: `0px`,
    ["@media (max-width: 600px)"]: {
      backgroundSize: "cover",
      backgroundPosition: "0% 100%",
    },
    zIndex: 3,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.brand[4],
      color: theme.colors.dark[9],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.dark[7],
      color: theme.colors.brand[4],
      "&:hover": {
        backgroundColor: theme.colors.brand[4],
        color: theme.colors.dark[5],
      },
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.brand[4],
      color: theme.colors.dark[9],
    },
  },
}));

const links = [
  {
    link: "/#sobre",
    label: "Sobre o treinamento",
    target: "_self",
  },
  {
    link: "https://www.rancheirosmc.com.br/",
    label: "Rancheiros MC",
    target: "_blank",
  },
  {
    link: "/#inscricao",
    label: "Inscreva-se",
    target: "_self",
  },
];

export function HeaderResponsive(): ReactElement {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState<string | undefined>();
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      target={link.target}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Anchor href="#">
          <Image
            src={logo}
            height={"32px"}
            width={"32px"}
            sx={{ border: "1px solid #F5E02C", borderRadius: '15%', paddingRight: '32px' }}
          >
            Manobras Para Vida
          </Image>
        </Anchor>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Drawer opened={opened} onClose={close} position="right">
          {items}
        </Drawer>
      </Container>
    </Header>
  );
}

import { ReactElement, useState } from 'react';
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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import header from './img/header.svg';

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundImage: `url(${header})`,
    backgroundColor: '#f5e02c',
    backgroundSize: 'contain',
    borderBottom: `0px`,
    ['@media (max-width: 600px)']: {
      backgroundSize: 'cover',
      backgroundPosition: '0% 100%',
    },
    zIndex: 0,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.dark[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.brand[4],
      color: theme.colors.dark[9],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.brand[4],
      color: theme.colors.dark[9],
      '&:hover': {
        backgroundColor: theme.colors.dark[9],
        color: theme.colors.brand[4],
      },
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .color,
    },
  },
}));

const links = [
  {
    link: '/#sobre',
    label: 'Sobre',
    target: '_self',
  },
  {
    link: 'https://www.rancheirosmc.com.br/',
    label: 'Rancheiros MC',
    target: '_blank',
  },
  {
    link: '/#inscricao',
    label: 'Inscreva-se',
    target: '_self',
  }
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
    <>
      <Header height={HEADER_HEIGHT} className={classes.root} >
        <Container className={classes.header}>
          <Title order={2} transform="uppercase" color='white'>
            <Center>
              {/* <img src={logo} alt="Manobras para Vida" height={36} /> */}
              <Space w="xs" />
              Manobras para Vida
            </Center>
          </Title>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Container>
      </Header>
      <Container className={classes.header}>
        <Transition transition="scale-y" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </>
  );
}

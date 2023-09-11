import {
  Anchor,
  Box,
  Button,
  Container,
  List,
  SimpleGrid,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { ReactElement } from "react";
import poly from "./img/poly.svg";

const useStyles = createStyles((theme) => ({
  contribute: {
    borderRadius: theme.spacing.sm,
    color: theme.colors.gray[0],
    backgroundImage: theme.fn.gradient({
      from: "brand.9",
      to: "dark.9",
      deg: 180,
    }),
    padding: "1rem",
  },

  volunteer: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  background: {
    backgroundImage: `url(${poly})`,
    backgroundSize: "cover",
    color: "#2B0604",
    paddingTop: `110px`,
    paddingBottom: theme.spacing.xl * 2,
  },
}));

export function Contribute(): ReactElement {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.background}>
      <Container>
        <Title my={30} order={3} color="black">
          Como posso ajudar?
        </Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
          <Box className={classes.volunteer}>
            <Title order={4}>🫵 Seja Voluntário!</Title>
            <Text mt={"md"}>
              Entre em contato e participe dos nossos encontros!
            </Text>
            <Button
              mt={"md"}
              component="a"
              href="https://www.rancheirosmc.com.br/#contato"
              target="_blank"
              style={{
                color: theme.colors.brand[9],
              }}
            >
              https://www.rancheirosmc.com.br/#contato
            </Button>
          </Box>
          <Box className={classes.contribute}>
            <Title order={4}>🤝 Contribua financeiramente!</Title>
            <Text mt={"md"}>PIX:</Text>
            <List mt={"xs`"}>
              <List.Item>RANCHEIROS MC - RANCHO RAIZ</List.Item>
              <List.Item>CNPJ: 44.363.528/0001-09</List.Item>
            </List>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
}

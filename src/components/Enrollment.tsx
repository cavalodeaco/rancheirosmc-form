import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  ThemeIcon,
  Space,
  Center,
  Box,
  Anchor,
  Container,
} from "@mantine/core";
import "dayjs/locale/pt-br";
import { ReactElement } from "react";
import EnrollmentForm from "./form/EnrollmentForm";
import { IconTrafficCone } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    borderRadius: 0,
    backgroundColor: theme.colors.brand[4],
    color: '#2B0604',
    // padding: "5rem",
    marginTop: "-110px",
    position: "relative",
    paddingTop: `calc(110px)`,
    paddingBottom: theme.spacing.xl,
    zIndex: 1,

    // [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    //   padding: '3rem 0.5rem',
    // },
  },

  description: {
    color: "#2B0604",
    maxWidth: "100%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  anchor: {
    color: "#2B0604",
    textDecoration: "underline",
  },

  formBox: {
    borderRadius: theme.spacing.sm,
    backgroundColor: "#F2F09E",
    padding: "1rem",
  },
}));

function Warning({ text }: { text: string }): ReactElement {
  const { classes } = useStyles();
  return (
    <Text className={classes.description} mt="sm" mb={30}>
      <Center inline>
        <ThemeIcon variant="filled" size={30} radius={30}>
          <IconTrafficCone size={20} stroke={1.5} color="#2B0604"/>
        </ThemeIcon>
        <Space w="xs" />
        {text}
      </Center>
    </Text>
  );
}

export default function Enrollment(): ReactElement {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        <Title my={30} order={3}>
          INSCREVA-SE:
        </Title>
        <SimpleGrid
          cols={2}
          // spacing={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          <EnrollmentForm />
          <Box className={classes.formBox}>
            <Warning text="O curso geralmente ocorre aos sábados das 8h às 14h." />
            <Warning text="Tenha paciência, estamos com fila de espera." />
            <Warning text="Entraremos em contato quando tivermos uma turma com vagas." />
            <Warning text="O curso não fornece a moto para o treinamento." />
            <Text className={classes.description} mt="sm" mb={30}>
              <Center inline>
                <ThemeIcon variant="filled" size={30} radius={30} >
                  <IconTrafficCone size={20} stroke={1.5} color="#2B0604"/>
                </ThemeIcon>
                <Space w="xs" />
                <Anchor href="#sobre" className={classes.anchor}>
                  Saiba mais
                </Anchor>
              </Center>
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
}

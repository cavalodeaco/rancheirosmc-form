/* eslint-disable react/jsx-props-no-spreading */
// "Prop spreading is forbidden" rule disabled for this file
// Prop spreading used following the Mantine use-form docs usage examples
// see https://mantine.dev/form/use-form/

import {
  createStyles,
  Button,
  Group,
  ThemeIcon,
  Stepper,
  MantineProvider,
  LoadingOverlay,
  Alert,
  List,
  Anchor,
} from "@mantine/core";
import "dayjs/locale/pt-br";
import { ReactElement, useState } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { validateBr } from "js-brasil";
import merge from "lodash.merge";
import { theme } from "../../utils/theme";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import {
  IconAlertCircle,
  IconCircleCheck,
  IconHelmet,
  IconLicense,
  IconUserCheck,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },
  brownText: {
    color: theme.colors.brand[9],
  },
  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const page1Schema = z.object({
  user: z.object({
    name: z
      .string()
      .regex(/^\D*$/, "O nome não deve conter números")
      .min(1, { message: "O campo nome é obrigatório" }),
    phone: z.custom((phone) => validateBr.celular(phone), {
      message: "Informe um número de celular",
    }),
    driverLicense: z.custom((cnh) => validateBr.cnh(cnh), {
      message: "Informe o número da sua CNH",
    }),
  }),
  enroll: z.object({
    city: z.custom(
      (city) => {
        const cities = [
          "maringa",
          "londrina",
          "cambira",
          "medianeira",
          "arapongas",
          "curitiba",
          "apucarana",
          "nova_esperanca",
          "cornelio",
          "ivate",
          "guarulhos",
          "faxinal",
        ];
        return cities.includes(city as string);
      },
      {
        message:
          "Selecione uma das opções de cidade para a realização do curso",
      }
    ),
  }),
});

const page2Schema = z.object({
  user: z.object({
    email: z
      .string()
      .email("Endereço de e-mail inválido")
      .optional()
      .or(z.literal("")),
  }),
});

const page3Schema = z.object({
  enroll: z.object({
    terms: z.object({
      authorization: z.custom((value) => value === true, {
        message:
          "O aceite do termo de autorização de uso da imagem é necessário para a realização do curso",
      }),
      responsibility: z.custom((value) => value === true, {
        message:
          "O aceite do termo de responsabilidade é obrigatório para a realização do curso",
      }),
      lgpd: z.custom((value) => value === true, {
        message:
          "O consentimento do uso dos dados é necessário para a inscrição",
      }),
    }),
  }),
});

export default function EnrollmentForm(): ReactElement {
  const page1 = useForm({
    validate: zodResolver(page1Schema),
    initialValues: {
      user: {
        name: "",
        phone: "",
        driverLicense: "",
        driverLicenseUF: "PR",
      },
      enroll: {
        city: "",
      },
    },
  });

  const page2 = useForm({
    validate: zodResolver(page2Schema),
    initialValues: {
      user: {
        email: "",
      },
      enroll: {
        motorcycle: {
          brand: "",
          model: "",
        },
        use: "",
      },
    },
  });

  const page3 = useForm({
    validate: zodResolver(page3Schema),
    initialValues: {
      enroll: {
        terms: {
          authorization: false,
          responsibility: false,
          lgpd: false,
        },
      },
    },
  });

  const form = [page1, page2, page3];

  const { classes } = useStyles();

  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);

  const prevStep = (): void => setActive((current) => current - 1);

  const submitForm = async (): Promise<void> => {
    if (!form[form.length - 1].validate().hasErrors) {
      setLoading(true);
      const data = JSON.stringify(
        merge({}, page1.values, page2.values, page3.values)
      );
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      };
      try {
        const response = await fetch(
          (process.env.REACT_APP_BACKEND_ADDRESS + "/enroll") as string,
          config
        );
        const { message } = await response.json();
        if (response.status === 201 && message === "enrolled") {
          setResult(1);
        } else if (response.status === 409 && message === "waiting") {
          setResult(2);
        } else {
          // invalid response
          setResult(0);
        }
      } catch (error) {
        // failed to fetch or parse json
        setResult(0);
      } finally {
        // no matter what, stop loading and show next page
        setLoading(false);
        setActive((current) => current + 1);
      }
    }
  };

  const nextStep = (): void =>
    setActive((current) =>
      form[current].validate().hasErrors ? current : current + 1
    );

  return (
    <div className={classes.form} style={{ position: "relative" }}>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <MantineProvider theme={{ ...theme, colorScheme: "light" }}>
        <Stepper active={active} radius={40} color="brand.6">
          <Stepper.Step
            icon={
              <ThemeIcon
                variant="filled"
                size={40}
                radius={40}
                className={classes.brownText}
              >
                <IconUserCheck size={25} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Page1 page1={page1} useStyles={useStyles} />
          </Stepper.Step>
          <Stepper.Step
            icon={
              <ThemeIcon
                variant="filled"
                size={40}
                radius={40}
                className={classes.brownText}
              >
                <IconHelmet size={30} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Page2 page2={page2} useStyles={useStyles} />
          </Stepper.Step>
          <Stepper.Step
            icon={
              <ThemeIcon
                variant="filled"
                size={40}
                radius={40}
                className={classes.brownText}
              >
                <IconLicense size={30} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Page3 page3={page3} />
          </Stepper.Step>
          <Stepper.Completed>
            {
              [
                <Alert
                  icon={<IconAlertCircle size={16} />}
                  title="Não conseguimos fazer sua inscrição"
                  color="red.6"
                >
                  Tente novamente mais tarde.
                </Alert>,
                <Alert
                  icon={<IconCircleCheck size={16} />}
                  title="Inscrição confirmada!"
                  color="teal.6"
                >
                  <List
                    icon={
                      <ThemeIcon
                        color="teal.6"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconCircleCheck size={16} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Você está na fila de espera!</List.Item>
                    <List.Item>
                      Nossa equipe entrará em contato por telefone/WhatsApp
                      próximo a data, para agendar a sua turma.
                    </List.Item>
                    <List.Item>
                      Obs.: Cada turma atenderá no máximo 20 alunos.
                    </List.Item>
                    <List.Item>
                      <Anchor href="#sobre" color="dimmed" underline>
                        Saiba mais
                      </Anchor>
                    </List.Item>
                  </List>
                </Alert>,
                <Alert
                  icon={<IconAlertCircle size={16} />}
                  title="Opa! Já tínhamos uma inscrição sua."
                  color="yellow.6"
                >
                  <List
                    icon={
                      <ThemeIcon
                        color="yellow.6"
                        size={24}
                        radius="xl"
                        variant="light"
                      >
                        <IconAlertCircle size={16} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>Você está na fila de espera!</List.Item>
                    <List.Item>
                      Nossa equipe entrará em contato por telefone/WhatsApp
                      próximo a data, para agendar a sua turma.
                    </List.Item>
                    <List.Item>
                      Obs.: Cada turma atenderá no máximo 20 alunos.
                    </List.Item>
                    <List.Item>
                      <Anchor href="#sobre" color="dimmed" underline>
                        Saiba mais
                      </Anchor>
                    </List.Item>
                  </List>
                </Alert>,
              ][result]
            }
          </Stepper.Completed>
        </Stepper>
        {active !== 3 && (
          <Group position="right" mt="xl">
            {active !== 0 && (
              <Button
                variant="light"
                onClick={prevStep}
                className={classes.brownText}
              >
                Anterior
              </Button>
            )}
            {active === 2 ? (
              <Button onClick={submitForm} className={classes.brownText}>
                Enviar
              </Button>
            ) : (
              <Button onClick={nextStep} className={classes.brownText}>
                Próximo
              </Button>
            )}
          </Group>
        )}
      </MantineProvider>
    </div>
  );
}

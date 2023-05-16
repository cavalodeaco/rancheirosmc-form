import { Switch, ScrollArea } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { ReactElement } from "react";
import { authorization, responsibility, lgpd } from "../../data/terms.js";

export default function Page1({
  page3,
}: {
  page3: UseFormReturnType<{
    enroll: {
      terms: { authorization: boolean; responsibility: boolean; lgpd: boolean };
    };
  }>;
}): ReactElement {
  return (
    <>
      <Switch.Group
        mt="md"
        label="Termo de Autorização"
        withAsterisk
        value={[page3.values.enroll.terms.authorization.toString()]}
        error={page3.errors["enroll.terms.authorization"]}
        onChange={(values) => {
          page3.setFieldValue("enroll.terms.authorization", Boolean(values[1]));
        }}
        description={
          <ScrollArea style={{ height: 60 }}>{authorization}</ScrollArea>
        }
      >
        <Switch value="true" label="Li e concordo" />
      </Switch.Group>
      <Switch.Group
        mt="md"
        label="Termo de Responsabilidade"
        withAsterisk
        value={[page3.values.enroll.terms.responsibility.toString()]}
        error={page3.errors["enroll.terms.responsibility"]}
        onChange={(values) => {
          page3.setFieldValue(
            "enroll.terms.responsibility",
            Boolean(values[1])
          );
        }}
        description={
          <ScrollArea style={{ height: 60 }}>{responsibility}</ScrollArea>
        }
      >
        <Switch value="true" label="Li e concordo" />
      </Switch.Group>

      <Switch.Group
        mt="md"
        label="Termo de Consentimento"
        error={page3.errors["enroll.terms.lgpd"]}
        withAsterisk
        value={[page3.values.enroll.terms.lgpd.toString()]}
        onChange={(values) => {
          page3.setFieldValue("enroll.terms.lgpd", Boolean(values[1]));
        }}
        description={<ScrollArea style={{ height: 60 }}>{lgpd}</ScrollArea>}
      >
        <Switch value="true" label="Li e concordo" />
      </Switch.Group>
    </>
  );
}

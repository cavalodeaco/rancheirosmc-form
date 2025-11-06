import { MantineProvider } from "@mantine/styles";
import { ApolloProvider } from "@apollo/client";
import { theme } from "../utils/theme";
import { CustomFonts } from "../fonts/CustomFonts";
import { AppShell, Center, Title } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Enrollment from "./Enrollment";
import Banner from "./Banner";
import { About } from "./About";
import { Contribute } from "./Contribute";
import { apolloClient } from "../apollo/client";

export default function App() {
  document.title = "MANOBRAS PARA VIDA";
  return (
    <ApolloProvider client={apolloClient}>
      <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
        <CustomFonts />
        <AppShell header={<HeaderResponsive />} padding={0} >
          <Banner />
          <Linkable id="inscricao">
            <Enrollment />
          </Linkable>
          <Linkable id="sobre">
            <About />
          </Linkable>
          <Linkable id="contribua">
            <Contribute />
          </Linkable>
        </AppShell>
      </MantineProvider>
    </ApolloProvider>
  );
}

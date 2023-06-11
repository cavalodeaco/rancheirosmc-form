import { MantineProvider } from "@mantine/styles";
import { theme } from "../utils/theme";
import { CustomFonts } from "../fonts/CustomFonts";
import { AppShell, Center, Title } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";
import Linkable from "./Linkable";
import Enrollment from "./Enrollment";
import Banner from "./Banner";
import { About } from "./About";

export default function App() {
  document.title = "MANOBRAS PARA VIDA";
  return (
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
      </AppShell>
    </MantineProvider>
  );
}

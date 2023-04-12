import {
  Container,
  CssBaseline,
  PaletteMode,
  Switch,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import YourEntries from "./pages/YourEntries";
import { getDesignTokens } from "./assets/theme/theme";

export default function App() {
  // The light theme is used by default
  const [colorMode, setColorMode] = useState<PaletteMode>("light");

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  );

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setColorMode((prevMode) => (prevMode == "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <span>Dark mode</span><Switch checked={colorMode === "dark"} onChange={changeTheme} />

      <Container>
        <div className="App">
          <YourEntries />
        </div>
      </Container>
    </ThemeProvider>
  );
}

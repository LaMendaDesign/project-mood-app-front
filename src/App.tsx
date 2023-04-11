import { Box, Card, CardContent, CardHeader, Container, CssBaseline, FormControlLabel, FormGroup, PaletteMode, Switch, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import { getDesignTokens } from "./theme/theme";

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
      <Container>
        <div className="App">
          <Box component="div" p={5}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={colorMode === 'dark'} onChange={changeTheme} />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
            <CardContent>
              <Typography variant="h3" component="h3">
                I fucking did iiiiittt
              </Typography>
              <Typography variant="body1">
                {colorMode} Mode is On
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
}

import { Theme, useThemeUI } from "theme-ui";

import { GSRTheme } from "./index";

interface ExactContextValue extends Omit<Theme, "theme"> {
  theme: GSRTheme;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;

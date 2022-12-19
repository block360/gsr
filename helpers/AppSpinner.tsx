import React from "react";
import { Box, Spinner, SxStyleProp } from "theme-ui";

// wrapper for <Spinner /> component from theme-ui implemented because <Spinner /> is not mapped to any default variant
// eg: styles from `styles.spinner.default` in theme definition are not applied.
export function AppSpinner({
  variant,
  sx,
  size,
}: {
  variant?: string;
  sx?: SxStyleProp;
  size?: number;
}) {
  return (
    // fontSize: 0px used to hide empty space created below Spinner SVG
    <Box sx={{ fontSize: "0px", textAlign: "center" }}>
      <Spinner
        variant={variant || "styles.spinner.default"}
        sx={{
          ...sx,
          ...(size && {
            width: size,
            height: size,
          }),
        }}
      />
    </Box>
  );
}

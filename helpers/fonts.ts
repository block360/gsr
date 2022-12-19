export const globalStyles = `
html,
body,
body > div:first-of-type,
div#__next {
  height: 100%;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow-anchor: none;
  overflow-x: hidden;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  @font-face {
    font-family: "Open Sans";
    src: url("../static/fonts/OpenSans/OpenSans-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("../static/fonts/OpenSans/OpenSans-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("../static/fonts/OpenSans/OpenSans-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("../static/fonts/OpenSans/OpenSans-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("../static/fonts/OpenSans/OpenSans-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "GSU font";
    src: url("../static/fonts/GSUFont/GSU-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "GSU font";
    src: url("../static/fonts/GSUFont/GSU-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;

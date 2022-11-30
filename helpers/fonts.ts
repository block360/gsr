import localFont from "@next/font/local";
export const openSansFont = localFont({
  src: [
    { path: "../fonts/OpenSans/OpenSans-Light.ttf", weight: "300" },
    { path: "../fonts/OpenSans/OpenSans-Regular.ttf", weight: "400" },
    { path: "../fonts/OpenSans/OpenSans-Medium.ttf", weight: "500" },
    { path: "../fonts/OpenSans/OpenSans-SemiBold.ttf", weight: "600" },
    { path: "../fonts/OpenSans/OpenSans-Bold.ttf", weight: "700" },
  ],
});
export const gsuFont = localFont({
  src: [
    { path: "../fonts/GSUFont/GSU-Regular.ttf", weight: "400" },
    { path: "../fonts/GSUFont/GSU-Bold.ttf", weight: "700" },
  ],
});

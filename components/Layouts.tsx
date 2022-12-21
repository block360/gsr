import { isAppContextAvailable } from "components/AppContextProvider";
import { AppHeader } from "components/Header";
import { WithChildren } from "helpers/types";
import React from "react";
import { Container, Flex, SxStyleProp } from "theme-ui";
import { ModalTrezorMetamaskEIP1559 } from "./Modal";

interface BasicLayoutProps extends WithChildren {
  header: JSX.Element;
  footer?: JSX.Element;
  sx?: SxStyleProp;
  variant?: string;
}

interface WithAnnouncementLayoutProps extends BasicLayoutProps {
  showAnnouncement: boolean;
}

export function BasicLayout({
  header,
  footer,
  children,
  sx,
  variant,
}: BasicLayoutProps) {
  return (
    <Flex
      sx={{
        bg: "none",
        flexDirection: "column",
        minHeight: "100%",
        ...sx,
      }}
    >
      {header}
      <Container
        variant={variant || "appContainer"}
        sx={{ flex: 2, mb: 5 }}
        as="main"
      >
        <Flex sx={{ width: "100%", height: "100%" }}>{children}</Flex>
      </Container>
      {footer}
    </Flex>
  );
}

export function WithAnnouncementLayout({
  header,
  footer,
  children,
  showAnnouncement,
  sx,
  variant,
}: WithAnnouncementLayoutProps) {
  return (
    <Flex
      sx={{
        bg: "none",
        flexDirection: "column",
        minHeight: "100%",
        ...sx,
      }}
    >
      {header}
      {showAnnouncement && <Container variant="announcement"></Container>}
      <Container
        variant={variant || "appContainer"}
        //@GSUpro fixes background height
        sx={{ flex: 2, mb: 5, minHeight: "900px" }}
        //@GSUpro fixes background height end
        as="main"
      >
        <Flex sx={{ width: "100%", height: "100%" }}>{children}</Flex>
      </Container>
      {footer}
    </Flex>
  );
}

export function AppLayout({ children }: WithChildren) {
  if (!isAppContextAvailable()) {
    return null;
  }

  return (
    <>
      <WithAnnouncementLayout
        header={<AppHeader />}
        sx={{
          zIndex: 2,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: "top center",
          backgroundSize: [undefined, undefined, "100%"],
        }}
        showAnnouncement={false}
      >
        {children}
        <ModalTrezorMetamaskEIP1559 />
      </WithAnnouncementLayout>
    </>
  );
}

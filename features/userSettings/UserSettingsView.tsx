import { Icon } from "@makerdao/dai-ui-icons";
import { useAppContext } from "components/AppContextProvider";
import {
  disconnect,
  getConnectionDetails,
  getWalletKind,
} from "components/connectWallet/ConnectWallet";
import { AppLink } from "components/Links";
import { formatAddress } from "helpers/formatters/format";
import { useObservable } from "helpers/observableHook";
import { useTranslation } from "next-i18next";
import React, { useRef } from "react";
import { Box, Button, Flex, Grid, SxStyleProp, Text, Textarea } from "theme-ui";

function WalletInfo() {
  const { web3Context$ } = useAppContext();
  const [web3Context] = useObservable(web3Context$);
  const clipboardContentRef = useRef<HTMLTextAreaElement>(null);

  const { t } = useTranslation();

  function copyToClipboard() {
    const clipboardContent = clipboardContentRef.current;

    if (clipboardContent) {
      clipboardContent.select();
      document.execCommand("copy");
    }
  }

  if (web3Context?.status !== "connected") return null;

  const { account, connectionKind } = web3Context;
  const { userIcon } = getConnectionDetails(
    getWalletKind(connectionKind as any)
  );

  return (
    <Grid>
      <Flex sx={{ alignItems: "center" }}>
        <Icon name={userIcon!} size={32} sx={{ mr: 2, flexShrink: 0 }} />
        <Grid sx={{ gap: 0, width: "100%" }}>
          <Flex sx={{ justifyContent: "space-between" }}>
            <Text variant="address" sx={{ fontWeight: 600, fontSize: 5 }}>
              {formatAddress(account, 6)}
            </Text>

            <Text
              sx={{
                color: "interactive100",
                fontSize: 1,
                cursor: "pointer",
                fontWeight: "semiBold",
              }}
              onClick={() => copyToClipboard()}
            >
              {t("copy")}
            </Text>
            <Textarea
              ref={clipboardContentRef}
              sx={{ position: "absolute", top: "-1000px", left: "-1000px" }}
              value={account}
              readOnly
            />
          </Flex>
        </Grid>
      </Flex>
    </Grid>
  );
}

export function UserSettings({ sx }: { sx?: SxStyleProp }) {
  const { t } = useTranslation();
  const { web3Context$ } = useAppContext();
  const [web3Context] = useObservable(web3Context$);

  return (
    <Box sx={sx}>
      <Text variant="headerSettings" sx={{ mb: 3 }}>
        {t("wallet")}
      </Text>
      <WalletInfo />
      <Box sx={{ borderTop: "1px solid neutral30", mt: 3 }} />
      <Button
        variant="textual"
        sx={{
          p: 0,
          my: 16,
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          disconnect(web3Context);
        }}
      >
        <Icon name="sign_out" color="primary60" size="auto" width={20} />
        <Text
          variant="paragraph3"
          sx={{ fontWeight: "medium", color: "primary60", ml: 2 }}
        >
          {t("disconnect-wallet")}
        </Text>
      </Button>
      <Flex
        sx={{
          px: 0,
          mt: 3,
          pb: 1,
          pt: 2,
        }}
      >
        <AppLink
          variant="settings"
          sx={{ mr: 3 }}
          withAccountPrefix={false}
          href="/terms"
          onClick={close}
        >
          {t("account-terms")}
        </AppLink>
        <AppLink
          variant="settings"
          sx={{ mr: 3 }}
          withAccountPrefix={false}
          href="/privacy"
          onClick={close}
        >
          {t("account-privacy")}
        </AppLink>
        <AppLink
          variant="settings"
          withAccountPrefix={false}
          href="/support"
          onClick={close}
        >
          {t("account-support")}
        </AppLink>
      </Flex>
    </Box>
  );
}

export function UserSettingsButtonContents({
  context,
  web3Context,
  active,
}: any) {
  const { connectionKind } = web3Context;
  const { userIcon } = getConnectionDetails(getWalletKind(connectionKind));

  return (
    <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
      <Flex sx={{ alignItems: "center" }}>
        <Icon name={userIcon!} size="auto" width="42" />
        <Text
          variant="address"
          sx={{
            ml: 3,
            color: "primary100",
            fontSize: 2,
            fontWeight: [600, 500],
          }}
        >
          {formatAddress(context.account, 6)}
        </Text>
      </Flex>
      <Flex sx={{ ml: 2 }}>
        <Icon
          size="auto"
          width="16"
          height="16"
          name="settings"
          sx={{ flexShrink: 0, m: "13px" }}
          color={active ? "primary100" : "inherit"}
        />
      </Flex>
    </Flex>
  );
}

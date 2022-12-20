import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function SignedInPage() {
  return (
    <div>
      <p>You have logged in. </p>
    </div>
  );
}

export default SignedInPage;

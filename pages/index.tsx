import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>GSR</title>
        <meta name="description" content="gsu save rate" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <main>
        <h1>${t("test")} &#x24;</h1>
        <p>inprogress $</p>
        <button
          type="button"
          onClick={() => {
            throw new Error("Sentry Frontend Error");
          }}
        >
          Throw error
        </button>
      </main>
      <footer>GSU SAVE RATE $</footer>
    </div>
  );
}

import Tape from "../../components/tape/index";
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Tape" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, maximum-scale=1,user-scalable=no"
        />

        <title>Tape</title>
      </Head>
      <Tape></Tape>
    </>
  );
}

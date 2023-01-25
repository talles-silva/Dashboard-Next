import Head from "next/head";
import { CabecalhoContainer } from "./styles";

interface Props {
  title: string;
}

export default function Cabecalho({ title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <CabecalhoContainer>
        <h1>{title}</h1>
      </CabecalhoContainer>
    </>
  );
}

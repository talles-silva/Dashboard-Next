import Head from "next/head";
import React from "react";
import { HeaderContainer } from "./styles";

interface Title {
  title: string;
}

export default function Header({ title }: Title) {
  return (
    <HeaderContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{title}</div>
    </HeaderContainer>
  );
}

import { BotaoContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Botao({ children }: Props) {
  return <BotaoContainer>{children}</BotaoContainer>;
}

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <img src={logo}/>
            <NewTransactionButton>New Transaction</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  )
}

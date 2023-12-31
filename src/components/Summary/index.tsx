import { CurrenciesIcon, DownArrowIcon, SummaryContainer,UpArrowIcon,SummaryCard } from "./styles";
export default function Summary() {
  return (
    <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entry</span>
                <UpArrowIcon size={32}/>
            </header>

            <strong>€ 10.230,20 </strong>
        </SummaryCard>
        <SummaryCard>
            <header>
                <span>Leave</span>
                <DownArrowIcon size={32}/>
            </header>

            <strong>€ 10.230,20 </strong>
        </SummaryCard>
        <SummaryCard variant="green">
            <header>
                <span>Almount</span>
                <CurrenciesIcon size={32}/>
            </header>

            <strong>€ 10.230,20 </strong>
        </SummaryCard>
    </SummaryContainer>
  )
}

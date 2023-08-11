import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
        </div>
        <TaskInput id="task" placeholder="Dê um nome para seu projeto" />

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput type="number" id="minutesAmount" />

        <span>minutos.</span>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </FormContainer>
    </HomeContainer>
  )
}

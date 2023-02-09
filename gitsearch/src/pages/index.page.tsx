import { styled } from "../styles"
import { HomeContainer } from "./styles"

const Button = styled('button', {
  backgroundColor: "$orange600", 
  color:"$purple500",
  padding: '4px 8px'
})

export default function Home() {
  return (
      <HomeContainer>
        <h1>testando sa bagaça</h1>
      </HomeContainer>
    )
}

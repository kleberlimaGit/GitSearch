import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$orange600", 
  color:"$purple500",
  padding: '4px 8px'
})

export default function Home() {
  return (
      <h1>Hello World</h1>
    )
}

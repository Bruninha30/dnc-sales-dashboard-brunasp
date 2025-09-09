import { CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>
          <h1>Welcome to the Home Page</h1>
        </CardComponent>
      </Container>
    </>
  )
}
export default Home

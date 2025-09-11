import { AvatarsList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/Avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: '/Avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2345.43),
    },
    {
      avatar: '/Avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3248.43),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <AvatarsList listData={mockListData} />
      </Container>
    </>
  )
}
export default Home

import { AvatarsList, CardComponent, CustomTable, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'
import { IoHeartDislikeSharp } from 'react-icons/io5'

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
  const mockTableData = {
    headers: ['Nome', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span> nome1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 2</span>,
        <span> nome2@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 3</span>,
        <span> nome3@email.com</span>,
        <button>Action</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}
export default Home

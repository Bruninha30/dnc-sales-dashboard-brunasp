import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  Styledp,
} from '@/components'
import { pxToRem } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [message, setMessage] = useState<{
    msg: string
    type: 'error' | 'success'
  } | null>(null)

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setMessage({
      msg: 'Login realizado com sucesso!',
      type: 'success',
    })

    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={41} width={100} />
            </Box>

            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Bem-Vindo</StyledH1>
              <Styledp>Digite sua senha e email para logar</Styledp>
            </Box>

            <FormComponent
              onSubmit={handleLogin}
              inputs={[
                { type: 'email', placeholder: 'Email', required: true },
                { type: 'password', placeholder: 'Senha', required: true },
              ]}
              buttons={[
                {
                  className: 'primary',
                  type: 'submit',
                  children: 'Login',
                },
              ]}
              message={message || undefined}
            />
          </Container>
        </Grid>

        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login

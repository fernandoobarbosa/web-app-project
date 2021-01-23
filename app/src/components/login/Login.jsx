import FormularioCadastro from './FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

function Login () {
  const history = useHistory()

  function onSubmitForm (dados) {
    api
      .post('/authenticate', {
        login: dados.login,
        password: dados.password
      })
      .then(function (response) {
        history.push('/dashboard')
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' align='center' component='h1'>
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmitForm} />
    </Container>
  )
}

export default Login

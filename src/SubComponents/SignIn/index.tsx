import * as C from './style'
import Cart from '../../assets/cart.svg'
import Search from '../../assets/search.svg'
const SignIn = () => {
  return (
    <C.SignInContainer>
        <a href=""><img src={Search} alt="lupa de busca" /></a>
        <a href=""><img src={Cart} alt="carrinho de compras" /></a>
        <C.ButtonSignIn>Sign In</C.ButtonSignIn>
    </C.SignInContainer>
  )
}

export default SignIn
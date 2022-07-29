import Logo from '../../SubComponents/Logo'
import NavLinks from '../../SubComponents/NavLinks'
import SignIn from '../../SubComponents/SignIn'
import * as C from './style'

const Header = () => {
  return (
    <C.NavContainer>
        <Logo/>
        <NavLinks/>
        <SignIn/>
    </C.NavContainer>
  )
}

export default Header
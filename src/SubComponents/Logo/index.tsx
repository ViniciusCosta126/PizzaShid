import * as C from './style'
import LogoHeader from '../../assets/Logo.svg'
const Logo = () => {
  return (
    <C.ContainerLogo>
      <img src={LogoHeader} alt="Logo" />
      <p>Pizza Shid</p>
    </C.ContainerLogo>
  )
}

export default Logo
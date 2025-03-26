import {appleImg} from '../utils/index'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="appleLogo" width={14} height={18} />
        </nav>
    </header>
  )
}

export default Navbar
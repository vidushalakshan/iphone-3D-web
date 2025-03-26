import {appleImg, bagImg, searchImg} from '../utils/index'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt="appleLogo" width={14} height={18} />
        </nav>

        <div>
            {['Phones', 'Macbook', 'Talets'].map((nav) => (
                <div key={nav}>
                    {nav}
                </div>
            ))}
        </div>

        <div>
            <img src={searchImg} alt="Searchicon"  height={18} width={18}/>
            <img src={bagImg} alt="bagicon"  height={18} width={18}/>
        </div>
    </header>
  )
}

export default Navbar
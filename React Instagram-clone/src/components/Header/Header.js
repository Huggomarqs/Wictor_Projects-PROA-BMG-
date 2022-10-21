import './Header.css'
import { AiOutlineSearch} from 'react-icons/ai'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { MdOutlineExplore, MdKeyboardArrowDown } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { TbBrandMessenger, TbSquarePlus } from 'react-icons/tb'


function Header() {
    return (
        <div className="header" >

            <div className="container" >
                <div className='logoarrow'>
                <img className="logo" alt='error' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" />
                <div className='arrow'>
                <MdKeyboardArrowDown /></div>
                </div>
                <div className="input2">
                    <IconContext.Provider value={{ color: '#8e8e8e', size: '21px' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>

                    <input placeholder="Pesquisar" />
                </div>
                <div className="menu-icone" >
                    <IconContext.Provider value={{ size: '28px' }}>
                        <div>
                        <BsFillHouseDoorFill  />
                        </div>
                        <div>
                         <TbBrandMessenger />
                        </div>
                        <div>
                            <TbSquarePlus />
                        </div>
                        <div>
                            <MdOutlineExplore />
                        </div>
                        <div>
                            <FiHeart />
                        </div>
                    </IconContext.Provider>
                    <img className="image" alt='error' src="https://avatars.githubusercontent.com/u/92128904?s=400&u=73cb15ccf034c3ea929c64dbda064a9a64f9c68b&v=4" />
                </div>
                </div>
        </div>
    );
}

export default Header;
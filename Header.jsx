
import {   BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='header'>
        <div className="mesage">
            <h4>Hello Shahrukh,</h4>
        </div>
      <div className='searchIcon'>
        <BsSearch className='icon'/>
         <input type="text" placeholder='search' className='text' />
          

      </div>
    </div>
  )
}

export default Header

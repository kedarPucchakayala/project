import { BsFillArchiveFill, BsHexagon,  BsKeyFill, BsListCheck, BsMenuButtonWideFill, BsMessenger, BsPeople } from "react-icons/bs"

const Sidebar = () => {
  return (
    <aside id='sidebar'>
    <div className="title">
      <div className="brand">
        <BsHexagon className="icon"/>Dashboard
      </div>
      <span className="close-icon">X</span>
    </div>
    <ul className="sidebar-list">
    <li className="sidebar-list-item">
      <a href="">
        <BsKeyFill className="icon"/> Dashboard
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="">
        <BsFillArchiveFill className="icon"/> Products
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="">
        <BsPeople className="icon"/> customers
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="">
        <BsMenuButtonWideFill className="icon"/> Income
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="">
        <BsListCheck className="icon"/> Promote 
      </a>
    </li>
    <li className="sidebar-list-item">
      <a href="">
        <BsMessenger className="icon"/> Help
      </a>
    </li>

    </ul>
    <footer className="footer">
      <li><a href="">Evano
        </a>
       
        </li>
    </footer>

    </aside>
  )
}

export default Sidebar

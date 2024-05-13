import "./navbar.scss";
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div></div>
        <div className="items">
          <div className="item">
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
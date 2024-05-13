import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;


    switch (type) {
        case "house":
          data = {
            title: "HOUSES",
            isMoney: false,
            link: "See all houses",
            icon: <HomeIcon className="icon" style={{color:"rgb(114, 173, 255)",backgroundColor: "black"}} />,
          };
          break;
        case "order":
          data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: <ShoppingCartOutlinedIcon className="icon" style={{color:"rgb(114, 173, 255)",backgroundColor: "black"}} />,
          };
          break;
        case "earning":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"rgb(114, 173, 255)",backgroundColor: "black"}} />,
          };
          break;
        case "balance":
          data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"rgb(114, 173, 255)",backgroundColor: "black"}} />,
          };
          break;
        default:
          break;
      }
 

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && "$"} {amount}
        </span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;

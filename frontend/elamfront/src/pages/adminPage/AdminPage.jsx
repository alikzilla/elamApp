import "./adminPage.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import Navbar from "./components/navbar/Navbar";
import TableList from "./components/tablelist/TableList";

const AdminPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="house" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
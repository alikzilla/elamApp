import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userColumns, userRows } from "../../../../datatablesource";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  useEffect(() => {
    fetch(`http://localhost:5000/houses`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
    .catch(error => console.error('Error fetching houses:', error));
  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    fetch(`http://localhost:5000/houses/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete house');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message); // Message from the server
      })
      .catch(error => {
        console.error('Error:', error);
      });

  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new House
        <Link to="/admin/houses/new" className="link">
          Add New House
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
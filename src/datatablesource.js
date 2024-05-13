import houseImage from "./assets/foryou.jpg";

export const userColumns = [
  { 
    field: "id", 
    headerName: "ID", 
    width: 70 
  },
  {
    field: "name",
    headerName: "House",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 2,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 3,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 4,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 5,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 6,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 7,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 8,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 9,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
  {
    id: 10,
    name: "4YOU",
    img: houseImage,
    rating: "4.5",
    address: "Rozibakiyeva 1/1",
    price: "30.000.000tg",
  },
];
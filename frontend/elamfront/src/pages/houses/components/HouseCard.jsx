import { Link } from "react-router-dom";

const HouseCard = ({ img, name, cost, address, rating }) => {
  return (
    <section className="bg-black text-white rounded-lg">
      <img src={img} alt={"house_" + img} className="img-fluid" />
      <div className="mx-4 my-6">
          <p className="text-xl relative group">
            {name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </p>
          <p>Cost: {cost}</p>
          <p>Address: {address}</p>
          <div className="flex justify-between">
            <p className="m-auto mx-0 text-sm text-yellow-200">Rating: {rating}/5</p>
            <div className="">
              <Link to={`/houses/${name}`}>
                <button className="border border-indigo-700 px-2 rounded-md">Look</button>
              </Link>
            </div>
          </div>
        </div> 
    </section>
  )
}

export default HouseCard;
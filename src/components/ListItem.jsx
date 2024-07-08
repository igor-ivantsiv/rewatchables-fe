import { Link } from "react-router-dom";

const ListItem = ({ rewatchable }) => {
  1;
  return (
    <>
    {/* condition to direct to the correct page (to not have to change the db) */}
      <Link to={`/${rewatchable.type === "movie" ?
        "movies" :
        "series"
      }/${rewatchable.id}`}>
        <li>
          <div>
            <img src={rewatchable.image} alt="cover" />
            <h3>{rewatchable.title}</h3>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ListItem;

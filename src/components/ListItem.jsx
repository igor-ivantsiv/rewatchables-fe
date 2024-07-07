import { Link } from "react-router-dom";

const ListItem = ({ rewatchable }) => {
  1;
  return (
    <>
      <Link to={`/${rewatchable.type}s/${rewatchable.id}`}>
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

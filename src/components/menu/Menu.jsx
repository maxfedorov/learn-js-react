import Dish from "../dish/Dish.jsx";

const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.length === 0 ? (
          <span>Menu is empty</span>
        ) : (
          menu.map(({ id, name }) => (
            <li key={id}>
              <Dish title={name} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Menu;

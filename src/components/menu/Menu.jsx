import Dish from "../dish/Dish.jsx";

const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {menu.length === 0 ? (
          <span>Menu is empty</span>
        ) : (
          menu.map((item) => <Dish key={item.id} item={item} />)
        )}
      </ul>
    </>
  );
};

export default Menu;

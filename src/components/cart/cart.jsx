import { CartItemContainer } from "../cart-item/cart-item-container.jsx";
import styles from "./cart.module.css";

export const Cart = ({ itemsIds }) => {
  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      <ul>
        {itemsIds.map((id) => (
          <li key={id}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

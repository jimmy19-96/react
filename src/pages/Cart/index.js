import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  ContainerList,
  ContainerPrice,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
} from './styles';

function Cart() {
  const { state } = useContext(CartContext);
  const itemsPrice = state.cart.reduce((a, c) => a + c.quantity * c.price, 0);

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>${el.quantity * el.price}</p>
              <button type="button">
                <MdDelete size={24} color="0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
      </ContainerList>
      <ContainerPrice>
        <p>TOTAL: ${itemsPrice}</p>
      </ContainerPrice>
    </Container>
  );
}

export default Cart;

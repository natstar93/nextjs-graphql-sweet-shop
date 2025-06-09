import { useState } from 'react';
import { useBasket } from '../contexts/basket/basket-provider';
import formatCurrencyGbp from '../utils/formatters';
import QuantityPicker, { MIN_QUANTITY } from './quantity-picker';
import { ProductType } from '../types/Product';
import { BasketActions } from '../contexts/basket/basket-reducer';

export default function AddToBasket({ price }: Pick<ProductType, 'price'>) {
  const { dispatch } = useBasket();
  const [quantity, setQuantity] = useState<number>(MIN_QUANTITY);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity - 1);

  return (
    <>
      <div className="flex justify-between items-end">
        <h2 className="text-xl">{formatCurrencyGbp(price)}</h2>
        <QuantityPicker
          quantity={quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: BasketActions.ADD_PRODUCT, value: quantity });
          setQuantity(MIN_QUANTITY);
        }}
        className="bg-primary-main p-2 rounded-md w-full md:w-44 text-neutral-layer-dark"
      >
        Add to basket
      </button>
    </>
  );
}

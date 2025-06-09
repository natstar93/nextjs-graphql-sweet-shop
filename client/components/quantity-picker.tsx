import { memo } from 'react';
import Button, { ButtonOperation } from './quantity-button';

export const MIN_QUANTITY = 1;

type QuantityPickerType = {
  quantity: number,
  handleIncrement: () => void,
  handleDecrement: () => void
}

const QuantityPicker = memo(function QuantityPicker(
  { quantity, handleIncrement, handleDecrement }: QuantityPickerType,
) {
  return (
    <div className="w-20">
      <h3 className="text-sm text-center" aria-label="quantity">Qty</h3>
      <div className="flex justify-between items-center">
        <Button
          type={ButtonOperation.decrement}
          handleClick={handleDecrement}
          disabled={quantity === MIN_QUANTITY}
        />
        <h3 className="w-6 text-xl text-center" title="Current quantity">{quantity}</h3>
        <Button
          type={ButtonOperation.increment}
          handleClick={handleIncrement}
        />
      </div>
    </div>
  );
});

export default QuantityPicker;

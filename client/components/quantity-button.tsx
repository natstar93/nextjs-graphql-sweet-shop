export enum ButtonOperation {
  increment = 'increment',
  decrement = 'decrement',
}

type ButtonType = {
  type: ButtonOperation,
  handleClick: () => void,
  disabled?: boolean
}

export default function Button({
  type, handleClick, disabled = false,
}: ButtonType) {
  const isPlusButton = type === ButtonOperation.increment;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`flex justify-center items-center ${disabled ? 'bg-secondary-main' : 'bg-primary-main'} rounded-md size-6 text-md text-neutral-layer-dark`}
      aria-label={`${isPlusButton ? 'Increase' : 'Decrease'} quantity`}
    >
      {isPlusButton ? '+' : '-'}
    </button>
  );
}

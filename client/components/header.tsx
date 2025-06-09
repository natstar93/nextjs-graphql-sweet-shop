import Image from 'next/image';
import Link from 'next/link';

import { useBasket } from '../contexts/basket/basket-provider';

export default function Header() {
  const { state } = useBasket();

  return (
    <header className="flex justify-between items-start p-4 border-b-2 border-b-neutral-detail-bold">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={141}
          height={18}
          alt="Homepage"
        />
      </Link>
      <button type="button" title="Basket items" className="flex gap-1">
        <img
          src="/basket.svg"
          width={20}
          height={20}
          alt="Basket items"
        />
        {state.basketCount > 0 && (
          <span className="flex justify-center items-center bg-primary-main rounded-full size-5 text-neutral-layer-dark text-xs">
            {state.basketCount}
          </span>
        )}
      </button>
    </header>
  );
}

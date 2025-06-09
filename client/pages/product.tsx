import Image from 'next/image';

import getProduct from '../lib/get-product';
import Layout from '../components/layout';
import { ProductType } from '../types/Product';
import { BasketProvider } from '../contexts/basket/basket-provider';
import AddToBasket from '../components/add-to-basket';

const PAGE_ID_PARAM = '2';

export async function getStaticProps() {
  const props = await getProduct(PAGE_ID_PARAM);
  return props;
}

interface ProductPageProps {
  product: ProductType | null,
  error: string | null
}

export default function ProductPage({
  product, error,
}: ProductPageProps) {
  if (error) {
    return (<Layout><main className="flex justify-center">{error}</main></Layout>
    );
  }

  const {
    imgUrl, name, description, price, packSize,
  } = product;

  return (
    <BasketProvider>
      <Layout>
        <main className="flex md:flex-row flex-col">
          <figure className="flex flex-col items-center p-4 w-full md:w-1/2 xl:w-1/3">
            <Image
              src={imgUrl}
              width={457}
              height={540}
              alt={name}
              className="rounded-lg"
              priority
            />
          </figure>
          <section className="flex flex-col my-4 px-8 md:px-4 w-full md:w-1/2 xl:w-2/3">
            <div className="flex flex-col gap-4 p-4 w-full">
              <h1 className="text-4xl">{name}</h1>
              <h2 className="text-md text-neutral-detail-bold">
                {`Pack of ${packSize}`}
              </h2>

              <AddToBasket price={price} />
            </div>
            <div className="bg-neutral-layer p-4 w-full">
              <h2 className="mb-2 text-2xl">Description</h2>
              <p>{description}</p>
            </div>
            <div className="bg-neutral-layer-dark p-4 w-full">
              <h2 className="mb-2 text-2xl">Specifications</h2>
              <p>TODO: content</p>
            </div>
          </section>
        </main>
      </Layout>
    </BasketProvider>
  );
}

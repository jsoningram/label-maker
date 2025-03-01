import { type Product } from '@prisma/client';

import { db } from '@/lib/db';
import ProductTable from '@/components/ProductTable/ProductTable';

export default async function Home() {
  const products: Product[] = await db.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <ProductTable data={products} />
      </div>
    </main>
  );
}

import { db } from '@/lib/db';

import { bd } from './products/BD';
import { be } from './products/BE';
import { bes } from './products/BES';
import { eAndM } from './products/E&M';
import { eAndMa } from './products/E&MA';
import { eAndMs } from './products/E&MS';
import { nm } from './products/NM';
import { pl } from './products/PL';
import { ry } from './products/RY';
import { rys } from './products/RYS';
import { yy } from './products/YY';
import { yys } from './products/YYS';

const products = [
  ...bd,
  ...be,
  ...bes,
  ...eAndM,
  ...eAndMa,
  ...eAndMs,
  ...nm,
  ...pl,
  ...ry,
  ...rys,
  ...yy,
  ...yys,
];

function getSize(input: string): string {
  const match = input.match(/\b\d{2,}-\d{2,}\b/);

  return match ? match[0] : 'NA';
}

function getTemple(input: string): number {
  const match = input.match(/\d+/);

  return match ? Number(match[0]) : 0;
}

function getModel(input: string): string {
  const match = input.match(/^([A-Za-z0-9\s]+)-/);
  return match ? match[1].trim() : 'NA';
}

function getColorCode(input: string): number {
  const match = input.match(/-(\d+)$/);

  return match ? Number(match[1].trim()) : 0;
}

async function main() {
  for (const product of products) {
    await db.product.upsert({
      where: { product_id: product.attr0 },
      update: {},
      create: {
        collection: product.attr8,
        product_id: product.attr0,
        barcode: product.attr4,
        model: getModel(product.attr2),
        size: getSize(product.attr3),
        temple: getTemple(product.attr6),
        color_code: getColorCode(product.attr2),
        color: product.attr5 ?? '',
        product_image: product.attr1,
        barcode_image: product.attr7,
      },
    });
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();

    process.exit(1);
  });

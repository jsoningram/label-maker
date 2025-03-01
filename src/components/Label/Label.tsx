'use client';

import { type FunctionComponent } from 'react';
import { Product } from '@prisma/client';

import BarcodeImage from '@/components/BarcodeImage/BarcodeImage';

type LabelProps = {
  data: Product[];
};

const Label: FunctionComponent<LabelProps> = ({ data }) => {
  const { collection, model, size } = data[0];

  return (
    <div className="flex w-96 flex-col rounded-lg border border-black p-2">
      <div className="mb-0.5 flex items-center justify-between">
        <span className="font-bold">{`${collection}-${model}`}</span>
        <span className="font-bold">{size}</span>
      </div>
      <div className="flex flex-row gap-4">
        {data.length > 1 ? (
          data.map((model) => (
            <BarcodeImage key={model.product_id} model={model} />
          ))
        ) : (
          <BarcodeImage model={data[0]} />
        )}
      </div>
    </div>
  );
};

export default Label;

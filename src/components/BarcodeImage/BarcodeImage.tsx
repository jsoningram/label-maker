/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';
import { Product } from '@prisma/client';

interface BarcodeImageProps {
  model: Product;
}
const BarcodeImage: FunctionComponent<BarcodeImageProps> = ({ model }) => {
  const formatColorCode = () => {
    if (!model.color) {
      return model.color_code;
    }

    return `${model.color_code}-${model.color}`;
  };

  return (
    <div className="flex flex-col justify-between">
      <span className="text-[10px] font-bold">{formatColorCode()}</span>
      {model.barcode !== '0' && (
        <div className="-z-10 -ml-5 h-10 w-[135px] overflow-hidden">
          <img
            src={`/barcode_images/${model.barcode_image}`}
            alt="Barcode"
            className="h-full w-full object-cover object-left-top"
          />
        </div>
      )}
    </div>
  );
};

export default BarcodeImage;

'use client';

import { Product } from '@prisma/client';

import hasWindow from '@/utils/hasWindow';
import Label from '@/components/Label/Label';

export default function Page() {
  const labelData = hasWindow
    ? sessionStorage.getItem('labelData') || '[{}]'
    : '[{}]';
  const data: Product[][] = JSON.parse(labelData);

  return (
    <div className="ml-auto mr-auto mt-2 w-[775px]">
      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page {
            size: 8.5in 11in;
            margin: 0.25in;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .page-break {
            break-inside: avoid;
          }
          .force-page-break {
            break-after: page;
          }
        }
      `}</style>
      <div className="grid grid-cols-2 gap-4">
        {data.map((models, i) => {
          return (
            <div
              key={models[0].product_id}
              className={`${i !== 0 && i % 17 === 0 ? 'force-page-break' : ''}`}
            >
              <Label data={models} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

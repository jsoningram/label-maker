/*
  Warnings:

  - You are about to alter the column `barcode` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_id" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "barcode" BIGINT NOT NULL,
    "color" TEXT NOT NULL,
    "color_code" INTEGER NOT NULL,
    "temple" INTEGER NOT NULL,
    "barcode_image" TEXT NOT NULL,
    "brand" TEXT NOT NULL
);
INSERT INTO "new_Product" ("barcode", "barcode_image", "brand", "color", "color_code", "id", "model", "product_id", "product_image", "size", "temple") SELECT "barcode", "barcode_image", "brand", "color", "color_code", "id", "model", "product_id", "product_image", "size", "temple" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
CREATE UNIQUE INDEX "Product_model_key" ON "Product"("model");
CREATE UNIQUE INDEX "Product_barcode_image_key" ON "Product"("barcode_image");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

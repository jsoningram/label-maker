-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collection" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "temple" INTEGER NOT NULL,
    "color_code" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,
    "barcode_image" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");

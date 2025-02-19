-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product_id" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "barcode" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "color_code" INTEGER NOT NULL,
    "temple" INTEGER NOT NULL,
    "barcode_image" TEXT NOT NULL,
    "brand" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_model_key" ON "Product"("model");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_image_key" ON "Product"("barcode_image");

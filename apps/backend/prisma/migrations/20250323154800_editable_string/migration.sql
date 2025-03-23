-- CreateTable
CREATE TABLE "EditableString" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "EditableString_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EditableString_name_key" ON "EditableString"("name");

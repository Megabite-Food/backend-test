-- CreateTable
CREATE TABLE "VehicleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "licensePlate" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "vehicleTypeId" INTEGER NOT NULL,
    CONSTRAINT "Vehicle_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateStart" DATETIME NOT NULL,
    "dateFinish" DATETIME NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    CONSTRAINT "Parking_licensePlate_fkey" FOREIGN KEY ("licensePlate") REFERENCES "Vehicle" ("licensePlate") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tariff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" DECIMAL NOT NULL,
    "active" BOOLEAN NOT NULL,
    "vehicleTypeId" INTEGER NOT NULL,
    "immediate" BOOLEAN NOT NULL,
    CONSTRAINT "Tariff_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_licensePlate_key" ON "Vehicle"("licensePlate");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  let vehicle = await prisma.vehicleType.create({
    data: {
      id: 1,
      description: "oficial",
      active: true,
    },
  });
  console.log(vehicle);
  vehicle = await prisma.vehicleType.create({
    data: {
      id: 2,
      description: "residente",
      active: true,
    },
  });
  console.log(vehicle);
  vehicle = await prisma.vehicleType.create({
    data: {
      id: 3,
      description: "no-residente",
      active: true,
    },
  });
  console.log(vehicle);
  let tariff = await prisma.tariff.create({
    data: {
      id: 1,
      amount: 0.0,
      vehicleTypeId: 1,
      active: true,
      immediate: true,
    },
  });
  console.log(tariff);
  tariff = await prisma.tariff.create({
    data: {
      id: 2,
      amount: 0.05,
      vehicleTypeId: 2,
      active: true,
      immediate: false,
    },
  });
  console.log(tariff);
  tariff = await prisma.tariff.create({
    data: {
      id: 3,
      amount: 0.5,
      vehicleTypeId: 3,
      active: true,
      immediate: true,
    },
  });
  console.log(tariff);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

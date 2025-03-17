import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: "식비", color: "#FF6B6B" },
    { name: "교통비", color: "#4ECDC4" },
    { name: "주거비", color: "#45B7D1" },
    { name: "의료비", color: "#96CEB4" },
    { name: "문화생활", color: "#FFEEAD" },
    { name: "교육비", color: "#D4A5A5" },
    { name: "생활용품", color: "#9FA8DA" },
    { name: "기타", color: "#90A4AE" },
  ];

  console.log("Seeding categories...");

  for (const category of categories) {
    try {
      await prisma.category.upsert({
        where: {
          name: category.name,
        },
        create: {
          name: category.name,
          color: category.color,
        },
        update: {
          color: category.color,
        },
      });
      console.log(`Created/Updated category: ${category.name}`);
    } catch (error) {
      console.error(`Error processing category ${category.name}:`, error);
    }
  }
}

main()
  .catch((e) => {
    console.error("Error in seed script:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seed completed");
    await prisma.$disconnect();
  });

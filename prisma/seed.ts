import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Xóa dữ liệu cũ
  await prisma.word.deleteMany();
  await prisma.sentence.deleteMany();
  await prisma.unit.deleteMany();
  await prisma.section.deleteMany(); // Xóa dữ liệu của section nếu cần

  // Tạo Section mới (hoặc kết nối với một Section đã có)
  const section = await prisma.section.create({
    data: {
      title: "Section 1",
      order: 1,
    },
  });

  // Tạo Unit mới
  const unit = await prisma.unit.create({
    data: {
      title: "Unit 1",
      order: 1,
      section: { connect: { id: section.id } }, // Kết nối Unit với Section đã tạo
      sentences: {
        create: [
          {
            text: "Người Việt Nam rất thích chụp ảnh.",
            order: 1,
            startTime: 0.0,
            endTime: 1.6,
            words: {
              create: [
                { word: "Người", order: 1, startTime: 0.0, endTime: 0.3 },
                { word: "Việt", order: 2, startTime: 0.3, endTime: 0.46 },
                { word: "Nam", order: 3, startTime: 0.46, endTime: 0.72 },
                { word: "rất", order: 4, startTime: 0.72, endTime: 0.94 },
                { word: "thích", order: 5, startTime: 0.94, endTime: 1.2 },
                { word: "chụp", order: 6, startTime: 1.2, endTime: 1.36 },
                { word: "ảnh.", order: 7, startTime: 1.36, endTime: 1.6 },
              ],
            },
          },
          {
            text: "Nhưng mà họ không chụp bằng máy ảnh.",
            order: 2,
            startTime: 2.0,
            endTime: 4.0,
            words: {
              create: [
                { word: "Nhưng", order: 1, startTime: 2.0, endTime: 2.4 },
                { word: "mà", order: 2, startTime: 2.4, endTime: 2.6 },
                { word: "họ", order: 3, startTime: 2.6, endTime: 2.8 },
                { word: "không", order: 4, startTime: 2.8, endTime: 3.2 },
                { word: "chụp", order: 5, startTime: 3.2, endTime: 3.4 },
                { word: "bằng", order: 6, startTime: 3.4, endTime: 3.6 },
                { word: "máy", order: 7, startTime: 3.6, endTime: 3.8 },
                { word: "ảnh.", order: 8, startTime: 3.8, endTime: 4.0 },
              ],
            },
          },
        ],
      },
    },
  });

  // Tạo Lesson mới
  await prisma.lesson.create({
    data: {
      type: "STORY",
      totalSteps: 10,
      unitId: unit.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log("Seed data created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

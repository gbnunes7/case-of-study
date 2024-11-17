import prismaInstance from "@/utils/prismaInstance";
async function main() {
  const rockPaperScissors = await prismaInstance.project
    .create({
      data: {
        title: "Rock Paper Scissors",
        technologies: ["React", "TailwindCSS", "JavaScript"],
        goalDescription: "A simple game of Rock Paper Scissors",
        goalSummary:
          "A simple game of Rock Paper Scissors, created for practice techniques of React and TailwindCSS",
        features: [
          "Play against machine",
          "Modal Rules",
          "Responsive design",
          "Scoreboard",
        ],
        repo: "https://github.com/gbnunes7/rock-paper-scissors-v2",
        demo: "https://rock-paper-scissors-v2-iota.vercel.app/",
        userExperience: "Easy to use, responsive, and fun to play",
      },
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });

  console.log("Created project:", rockPaperScissors);
}
main()
  .then(async () => {
    await prismaInstance.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaInstance.$disconnect();
    process.exit(1);
  });

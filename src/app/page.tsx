import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen flex bg-zinc-900 text-neutral-300 items-center justify-center">
      <div style={{ flex: "35% 1" }} className="h-full bg-orange-700"></div>

      <div
        style={{ left: "35%", transform: "translateX(-50%)" }}
        className="absolute"
      >
        <Image
          src="/morro-do-ernesto.jpg"
          alt="Foto de Perfil"
          className="rounded-full"
          width={400}
          height={400}
          priority
        />
      </div>

      <div
        style={{ flex: "65% 1" }}
        className="flex flex-col justify-center items-end h-full"
      >
        <div style={{ marginRight: "8%" }} className="w-1/2">
          <h6>Full Stack Developer</h6>
          <h1 className="text-white text-6xl font-bold">Eduardo Miguel</h1>
          <br></br>
          <p>
            Formado em Sistemas Para Internet pelo Instituto Federal Mato Grosso
            do Sul e atuo como Desenvolvedor Full Stack há mais de 3 anos.
          </p>
          <p>
            Possuo experiência em C#, .Net Framework, .Net Core, React Native,
            React JS, Typescript, Javascript, Sql Server, Sprints e Scrum. Sou
            autodidata e procuro sempre me aperfeiçoar e me atualizar nas
            tecnologias mais recentes. Sou um profissional muito esforçado e
            trabalho bem em equipe
          </p>
          <div className="flex justify-between">
            <button className="border-4 border-orange-700 text-orange-700 p-2 rounded-full">Download CV</button>
            <button className="border-4 border-orange-700 text-orange-700 p-2 rounded-full">Contato</button>
          </div>
        </div>
      </div>
    </div>
  );
}

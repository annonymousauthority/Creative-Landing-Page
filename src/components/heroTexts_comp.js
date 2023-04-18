export default function HeroTexts({ text1, text2 }) {
  return (
    <div className={"flex flex-col items-start justify-start"}>
      <h1 className="font-bold text-6xl text-white">{text1}</h1>
      <h1 className="font-bold text-6xl text-white">{text2}</h1>
    </div>
  );
}

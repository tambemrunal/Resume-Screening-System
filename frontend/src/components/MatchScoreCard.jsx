function MatchScoreCard({ score }) {

  return (

    <div
      className="
      bg-slate-900
      text-white
      p-4
      rounded-lg
      shadow
    "
    >
      <h2 className="text-lg font-bold">
        Final AI Score
      </h2>

      <p
        className="
        text-4xl
        font-bold
        text-white
        mt-2
      "
      >
        {score}%
      </p>
    </div>
  );
}

export default MatchScoreCard;

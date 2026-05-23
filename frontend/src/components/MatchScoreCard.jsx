function MatchScoreCard({ score }) {

  return (

    <div
      className="
      bg-green-100
      p-4
      rounded-xl
      shadow
    "
    >
      <h2 className="text-lg font-bold">
        Match Score
      </h2>

      <p
        className="
        text-4xl
        font-bold
        text-green-700
        mt-2
      "
      >
        {score}%
      </p>
    </div>
  );
}

export default MatchScoreCard;
function AIExplanation({
  explanation,
}) {

  return (

    <div
      className="
      bg-white
      shadow
      rounded-xl
      p-4
      mt-4
    "
    >
      <h2
        className="
        text-lg
        font-bold
        mb-2
      "
      >
        AI Explanation
      </h2>

      <p className="text-gray-700">
        {explanation}
      </p>
    </div>
  );
}

export default AIExplanation;
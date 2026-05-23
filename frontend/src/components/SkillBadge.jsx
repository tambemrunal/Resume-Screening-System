function SkillBadge({ skill }) {

  return (

    <span
      className="
      px-3
      py-1
      bg-blue-100
      text-blue-700
      rounded-full
      text-sm
      mr-2
      mb-2
      inline-block
    "
    >
      {skill}
    </span>
  );
}

export default SkillBadge;
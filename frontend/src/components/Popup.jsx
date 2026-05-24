function Popup({
  message,
  type = "info",
  onClose,
}) {
  if (!message) {
    return null;
  }

  const tone = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
    error: "bg-red-50 border-red-200 text-red-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  }[type] || "bg-blue-50 border-blue-200 text-blue-800";

  return (
    <div
      className="
      fixed
      top-5
      right-5
      z-50
      max-w-sm
    "
    >
      <div
        className={`
        border
        rounded-lg
        shadow-lg
        p-4
        ${tone}
      `}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold">
            {message}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="
            text-lg
            leading-none
            font-bold
          "
            aria-label="Close popup"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

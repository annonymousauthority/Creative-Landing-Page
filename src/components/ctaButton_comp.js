export default function CTAButton({ text, action }) {
  return (
    <button
      type="button"
      onClick={action}
      className="flex w-1/3 text-center text-white bg-gradient-to-r from-yellow-400 to-yellow-500 p-3  justify-center rounded-lg"
    >
      {text}
    </button>
  );
}

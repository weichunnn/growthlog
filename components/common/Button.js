export default function Button({ text, variant, onClick, additionalClasses }) {
  var type = '';
  if (variant == 'solid') {
    type = 'text-white bg-blue-600 hover:bg-blue-700';
  } else if (variant == 'outline') {
    type = 'text-blue-600 border-2 border-blue-600 hover:bg-blue-100';
  } else if (variant == 'highlight') {
    type = 'hover:text-blue-600 active:ring-0	';
  }

  return (
    <button
      className={`font-medium py-2 px-4 rounded-md transistion duration-200 ease-in-out active:ring-4 ring-blue-200 ${type} ${additionalClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

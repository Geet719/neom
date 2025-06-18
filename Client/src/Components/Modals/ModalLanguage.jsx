export default function ModalLanguage() {
  return (
    <ul className="absolute z-50 right-0 mt-5 w-32 bg-white shadow-lg rounded-md p-2 language-dropdown">
      {["English", "French", "Arabic"].map((lang, index) => (
        <li
          key={index}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}

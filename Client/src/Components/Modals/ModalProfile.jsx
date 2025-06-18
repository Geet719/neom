import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Edit Profile", path: "/edit-profile" },
  { name: "Feedback", path: "/feedback" },
  { name: "Settings", path: "/settings" },
];

module.exports function ModalProfile() {
  return (
    <ul className="absolute z-50 right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 profile-dropdown">
      {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
            activeClassName="font-bold text-blue-600" // Highlights the active link
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}


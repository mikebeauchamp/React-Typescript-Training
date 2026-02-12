import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col w-[300px] rounded-2xl overflow-hidden border border-gray-300 shadow-2xl">
          <img src="/profile.jpg" alt="Profile" className="mb-3" />
          <div className="flex flex-col px-3 pb-3">
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <FaUser className="text-gray-400" /> Jane Doe
              </li>
              <li className="flex items-center gap-2">
                <FaBriefcase className="text-gray-400" /> Software Engineer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

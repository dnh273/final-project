import { NavLink, useNavigate } from "react-router-dom";
import useComponentVisible from "../../hooks/useComponentVisible";
import appRoutes from "../../routes/appRoutes";
import { removeToken } from "../../utils/storage";

const Sidebar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const navigate = useNavigate();

  function logout() {
    removeToken();
    navigate("/auth/login");
  }

  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={() => setIsComponentVisible(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !isComponentVisible && "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
        ref={ref}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          {/* <button
            id="dropdownUserNameButton"
            data-dropdown-toggle="dropdownUserName"
            className="flex items-center justify-between my-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <div className="flex items-center">
              <img
                src="https://i1.sndcdn.com/avatars-000304411295-zx2krs-t500x500.jpg"
                className="w-8 h-8 rounded-full mr-3"
                alt="Bonnie avatar"
              />
              <div className="text-left">
                <div className="font-bold">Batman</div>
                <div className="text-sm text-gray-400 ">admin@gmail.com</div>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button> */}

          <ul className="space-y-2 font-medium border-b py-3">
            {appRoutes.map((route, index) => {
              return (
                <li
                  key={route.sidebarProps?.displayText}
                  onClick={() => {
                    setIsComponentVisible(false);
                  }}
                >
                  <NavLink to={`${route.path}`}>
                    {({ isActive, isPending }) => (
                      <div
                        className={
                          isActive
                            ? "bg-gray-200 flex items-center py-2 group px-3 text-gray-900 rounded-lg hover:bg-gray-200  transition-all"
                            : "flex items-center py-2 px-3 group text-gray-900 rounded-lg hover:bg-gray-200  transition-all"
                        }
                      >
                        <div
                          className={`transition duration-75 ${
                            isActive ? "text-black" : "text-gray-400"
                          } group-hover:text-gray-700`}
                        >
                          {route.sidebarProps?.icon}
                        </div>
                        <span className="ml-3">
                          {route.sidebarProps?.displayText}
                        </span>
                      </div>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <ul className="space-y-2 font-medium py-3">
            <li>
              <div
                className={
                  "flex items-center cursor-pointer py-2 px-3 group text-gray-900 rounded-lg hover:bg-gray-200  transition-all"
                }
                onClick={logout}
              >
                <div
                  className={`transition duration-75 text-gray-400 group-hover:text-gray-700`}
                >
                  <i className="ri-logout-box-r-line"></i>
                </div>
                <span className="ml-3">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

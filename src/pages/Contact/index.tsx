import { Outlet, NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <h1>This Is Contact Us</h1>
      <div className={"navigation"}>
        <NavLink end={true} to={"/contact-us"}>
          Nested One
        </NavLink>
        <NavLink end={true} to={"test2"}>
          Nested Two
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;

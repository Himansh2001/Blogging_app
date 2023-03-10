import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p className="sidebarTitle">ABOUT ME</p>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          exercitationem consectetur est non iste suscipit labore pariatur
          incidunt.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

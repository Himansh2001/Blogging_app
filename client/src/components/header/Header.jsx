
import "./header.css"
export default function Header(){
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React&NodeBlog</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://img.freepik.com/premium-photo/natural-sun-rays-garden-sunset-sun-beams-tree-park_290431-19740.jpg?w=2000"
          alt=""
        />
      </div>
    );
} 


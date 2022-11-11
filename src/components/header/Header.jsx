import Heropic from "../../assets/images/info.jpeg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Home For Dog Infos</span>
        <span className="headerTitleLg">Dogs</span>
      </div>
      <img className="headerImg" src={Heropic} alt="" />
    </div>
  );
};

export default Header;

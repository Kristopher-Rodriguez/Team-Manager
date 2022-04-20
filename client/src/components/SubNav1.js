import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubNav1 = (props) => {
  const { listPageIsActive, setListPageIsActive } = props;
  const [listTabStyle, setListTabStyle] = useState({});
  const [addPlayerTabStyle, setAddPlayerTabStyle] = useState({});
  const styleObjBold = {
    fontWeight: "700",
  };

  useEffect(() => {
    if (listPageIsActive) {
      setListTabStyle(styleObjBold);
      setAddPlayerTabStyle({});
    } else {
      setListTabStyle({});
      setAddPlayerTabStyle(styleObjBold);
    }
  }, [listPageIsActive]);

  return (
    <div className="h5">
      <span style={{ ...listTabStyle }}>
        <Link to="/players/list">List</Link>
      </span>
      <span> | </span>
      <span style={{ ...addPlayerTabStyle }}>
        <Link to="/players/addplayer">Add Player</Link>
      </span>
    </div>
  );
};

export default SubNav1;

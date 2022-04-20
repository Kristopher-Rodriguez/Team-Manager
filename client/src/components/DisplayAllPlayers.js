import { useState, useEffect } from "react";
import axios from "axios";
import SubNav1 from "./SubNav1";

const DisplayAllPlayers = (props) => {
  const [players, setPlayers] = useState([]);
  const { listPageIsActive, setListPageIsActive } = props;

  useEffect(() => {
    console.log(setListPageIsActive);
    setListPageIsActive(true);
  });

  useEffect(() => {
    console.log("useEffectFired");
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res);
        setPlayers(res.data);
      })
      .catch((err) => console.log(err.res));
  }, []);

  const handleDeletePlayer = (id) => {
    axios
      .delete(`http://localhost:8000/api/players/${id}`)
      .then((res) => {
        console.log(res);
        const filteredPlayers = players.filter((player, index) => {
          return player._id !== id;
        });
        console.log(filteredPlayers);
        setPlayers(filteredPlayers);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="border border-dark m-4 p-3">
      <div className="d-flex justify-content-between align-items-center m-2">
        <SubNav1
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
        />
      </div>
      <div className="d-flex justify-content-center">
        <table className="table table-striped table-bordered table-hover m-2">
          <thead>
            <tr>
              <th scope="col">Player Name</th>
              <th scope="col">Preferred Position</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td className="align-middle">{player.name}</td>
                  <td className="align-middle">{player.position}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeletePlayer(player._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayAllPlayers;

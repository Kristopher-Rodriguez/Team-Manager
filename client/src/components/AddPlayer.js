import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubNav1 from "./SubNav1";

const AddPlayer = (props) => {
  const { listPageIsActive, setListPageIsActive } = props;
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setListPageIsActive(false);
  });

  const handleAddPlayer = (e) => {
    e.preventDefault();
    console.log(name);
    axios
      .post("http://localhost:8000/api/players", {
        name,
        position,
      })
      .then((res) => {
        console.log("success", res);
        console.log(res.data);
        navigate("/players/list")
      })
      .catch((err) => {
        console.log("error", err.response);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="border border-dark m-4 p-3">
      <div className="d-flex justify-content-between align-items-center m-2">
        <SubNav1
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
        />
      </div>
      <div className="border border-dark m-4 p-3">
        <h5>Add Player</h5>
        <form onSubmit={handleAddPlayer}>
          <div className="m-2">
            <div className="d-flex flex-column">
              <label htmlFor="Name">Player Name:</label>
              <input
                className="m-1"
                type="text"
                id="Name"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="mt-2" style={{ color: "red" }}>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="d-flex flex-column pt-2">
              <label htmlFor="Position">Preferred Position:</label>
              <input
                className="m-1"
                type="text"
                id="Position"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="m-1 mt-2">
              <button className="btn btn-success w-25">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlayer;

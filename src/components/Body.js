import { useState, useEffect } from "react";
import List from "./list";
import Add from "./Add";
import Loading from "./Loading";

import Navbar from "./Navbar";

const Body = () => {
  const [list, setlist] = useState([]);
  const [value, setvalue] = useState(false);
  const [search, setsearch] = useState("");
  const [dummydata, setdummyData] = useState([]);

  const handledummy = () => {
    async function fetchdata() {
      try {
        const getpost = await fetch("https://dummyjson.com/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await getpost.json();
        setdummyData(data.users);
        setlist(data.users);
        console.log(data);
      } catch (error) {
        alert("Not able to fetch");
      }
    }

    fetchdata();
  };

  const handleClick = () => {
    setvalue(true);
  };

  const handlesearch = () => {
    const filtereddata = dummydata.filter((res) =>
      res.firstName.toLowerCase().includes(search.toLowerCase())
    );

    if (filtereddata.length > 0) {
      setlist(filtereddata);
    } else {
      alert("No match found");
    }
  };

  useEffect(() => {
    async function fetchdata() {
      try {
        const getpost = await fetch("https://dummyjson.com/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await getpost.json();
        setdummyData(data.users);
        setlist(data.users);
        console.log(data);
      } catch (error) {
        alert("error");
      }
    }
    fetchdata();
  }, []);

  return list.length === 0 ? (
    <Loading />
  ) : (
    <div className="Body">
      <Navbar />
      <div className="but">
        <div>
          <button className="Add" onClick={handleClick}>
            + Add Employee
          </button>{" "}
          <button className="Add" onClick={handledummy}>
            {" "}
            See All Employee
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="search"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />{" "}
          <button className="Add" onClick={handlesearch}>
            Search
          </button>
        </div>
      </div>
      <br></br>
      <div className="table">
        <div className="row">
          <div className="cell header">Name</div>
          <div className="cell header">Email</div>
          <div className="cell header">Phone</div>
          <div className="cell header">Role</div>
          <div className="cell header">Action</div>
        </div>
        {list.map((item, index) => {
          return <List res={item} key={index} Show={() => handledummy()} />;
        })}
      </div>
      {value && <Add item={() => setvalue(false)} />}
    </div>
  );
};

export default Body;

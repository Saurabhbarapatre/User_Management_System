import { useState } from "react";

const Update = ({ down, prop }) => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await fetch(`https://dummyjson.com/users/${prop.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Updated Sucessfully");
      down();
    } catch (error) {
      alert("Updated ✅");
      alert("Failed to update");
    }
  };

  return (
    <div className="modal">
      <div className="box">
        <div className="list">
          <div>
            <label>Name</label>

            <input
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Email</label>

            <input
              name="email"
              placeholder="email"
              value={data.email}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phone"
              placeholder="phone"
              value={data.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Role</label>

            <input
              name="role"
              placeholder="role"
              value={data.role}
              onChange={handleChange}
            ></input>
          </div>
          <button className="submit" onClick={handleUpdate}>
            Update
          </button>
          <button className="cross" onClick={() => down()}>
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;

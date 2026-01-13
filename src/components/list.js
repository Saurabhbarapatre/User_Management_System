import { useState } from "react";
import Update from "./Update";
import View from "./View";

const List = ({ res, Show }) => {
  const [update, setupdate] = useState(false);
  const [view, setview] = useState(false);

  const handleDelete = async () => {
    const Item = await fetch(`https://dummyjson.com/users/${res.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    alert("Deleted ✅");
    if (Item.ok) {
      Show();
    }
  };

  return (
    <div className="row">
      <div className="cell ">{res.firstName}</div>
      <div className="cell ">{res.email}</div>
      <div className="cell ">{res.phone}</div>
      <div className="cell ">{res.company.title}</div>
      <div className="cell">
        <button className="del" onClick={handleDelete}>
          Delete
        </button>
        {"   "}
        {"   "}
        <button className="del" onClick={() => setupdate(true)}>
          Update
        </button>
        {"   "}
        {"   "}
        <button className="del" onClick={() => setview(true)}>
          View
        </button>
        {update && <Update down={() => setupdate(false)} prop={res} />}
        {view && <View Down={() => setview(false)} prop={res} />}
      </div>
    </div>
  );
};

export default List;

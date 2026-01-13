const View = ({ Down, prop }) => {
  return (
    <div className="modal">
      <div className="box">
        <div className="list">
          <button className="cross-2" onClick={() => Down()}>
            ✖
          </button>
          <h2>Employee Details</h2>

          <span>
            <h4>Name:</h4> {prop.firstName}
          </span>

          <span>
            <h4>Email:</h4> {prop.email}
          </span>

          <span>
            <h4>Phone:</h4> {prop.phone}
          </span>

          <span>
            <h4>Role:</h4> {prop.company.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default View;

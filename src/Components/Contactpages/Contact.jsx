const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 col-md-1 pt-2 pt-md-1">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
          style={{ width: "80%" }}
          alt=""
        />
      </div>
      <div className="col-6 col-md-5 text-warning pt-0">
        <span className="h4">{props.contact.name}</span>
        <br />
        <div className="text-white">
          {props.contact.email}
          <br />
          {props.contact.phone}
        </div>
      </div>

      <div className="col-2 col-md-2 pt-md-3">
        <button
          className={`btn btn-sm m-1 ${
            props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.favoriteClick(props.contact)}
        >
          <i className="bi bi-star" style={{ fontSize: "2rem" }}></i>
        </button>
      </div>

      <div className="col-2 col-md-2 pt-md-3">
        <button className="btn btn-primary m-1">
          <i className="bi bi-pencil-square" onClick={()=>props.updateClick(props.contact)}style={{ fontSize: "2rem" }}></i>
        </button>

        <button className="btn btn-danger m-1">
          <i
            className="bi bi-trash"
            style={{ fontSize: "2rem" }}
            onClick={() => props.deleteContact(props.contact.id)}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;

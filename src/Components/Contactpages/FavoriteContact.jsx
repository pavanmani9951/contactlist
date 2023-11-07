import Contact from "./Contact";
const FavoriteContact = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "20px", backgroundColor: "#323637" }}
    >
      <h3 className="text-white" style={{ textAlign: "center" }}>
        Favorites
      </h3>
      {props.contacts.map((contact, index) => (
        <Contact
          contact={contact}
          key={index}
          favoriteClick={props.favoriteClick}
          deleteContact ={props.deleteContact}
          updateClick = {props.updateClick}
        ></Contact>
      ))}
    </div>
  );
};

export default FavoriteContact;

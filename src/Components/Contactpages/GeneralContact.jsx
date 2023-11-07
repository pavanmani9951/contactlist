import Contact from "./Contact";
const GeneralContact = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "20px", backgroundColor: "#323637" }}
    >
      <h3 className="text-white" style={{ textAlign: "center" }}>
        Other Contacts
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

export default GeneralContact;

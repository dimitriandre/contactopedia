import Contact from "./Contact";

const FavoriteContact = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index}></Contact>
      ))}
    </div>
  );
};

export default FavoriteContact;

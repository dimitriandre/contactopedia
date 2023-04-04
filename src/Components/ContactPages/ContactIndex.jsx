import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Peter Parker",
          phone: "456-233-6969",
          email: "itspizz@time.pizza",
          isFavorite: false,
        },
        {
          id: 1,
          name: "Jean Bon",
          phone: "456-233-3969",
          email: "bruh@time.pizza",
          isFavorite: true,
        },
        {
          id: 1,
          name: "Your Mom",
          phone: "456-233-5464",
          email: "itspizz@time.ananas",
          isFavorite: true,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavoriteContact
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite == true
                )}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite == false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;

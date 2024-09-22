import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import Navbar from "./Navbar";
import Sidebar from './Sidebar';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            dates: showFormattedDate(new Date()),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts });
    }

    onAddContactHandler({ name, tag }) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: "/images/default.jpg",
                    },
                ],
            };
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="d-flex" style={{ backgroundImage: "linear-gradient(#074173, #0C71C7)" }}>
                    <Sidebar />
                    <h1>Aplikasi Kontak</h1>
                    <h2>Tambah Kontak</h2>
                    {/* <ContactInput addContact={this.onAddContactHandler} /> */}
                    <h2>Daftar Kontak</h2>
                    {/* <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} /> */}
                </div>
            </>
        );
    }
}

export default NotesApp;

import React from "react";

class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: "",
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    render() {
        return (
            <form className="contact-input">
                <input
                    type="text"
                    placeholder="Nama"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
            </form>
        );
    }
}

export default Searchbar;

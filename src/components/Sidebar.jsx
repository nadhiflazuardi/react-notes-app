import React, { Component } from "react";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        // Ini state buat nyimpen current page
        this.state = {
            currentPageState: "dashboard",
        };
    }

    // Fungsi buat update currentPageState
    handlePageChange = (page) => {
        this.setState({ currentPageState: page });
    };

    render() {
        const { currentPageState } = this.state;

        return (
            <nav
                className="d-flex flex-column justify-content-between min-vh-100 h-100"
                style={{ width: "20%", position: "sticky", top: "0", marginTop: "-70px" }}
            >
                <div className="py-3" style={{ marginTop: "60px" }}>
                    <div className="my-5 ms-3">
                        {/* Notes Section */}
                        <div className="w-100 text-decoration-none text-white">
                            <div
                                className="w-100 h-100 sidebar-button ps-3 py-2 d-flex align-items-center gap-2"
                                style={{
                                    borderRadius: "20px 0 0 20px",
                                    backgroundColor: currentPageState === "dashboard" ? "#CEDDE6" : "",
                                    color: currentPageState === "dashboard" ? "#074173" : "",
                                }}
                                onClick={() => this.handlePageChange("dashboard")}
                            >
                                <i style={{ width: "20px" }} className="fa-light fa-table-columns"></i>
                                Notes
                            </div>
                        </div>

                        {/* Arsip Section */}
                        <div className="w-100 text-decoration-none text-white">
                            <div
                                className="w-100 h-100 sidebar-button ps-3 py-2 d-flex align-items-center gap-2"
                                style={{
                                    borderRadius: "20px 0 0 20px",
                                    backgroundColor: currentPageState === "profil" ? "#CEDDE6" : "",
                                    color: currentPageState === "profil" ? "#074173" : "",
                                }}
                                onClick={() => this.handlePageChange("profil")}
                            >
                                <i style={{ width: "20px" }} className="fa-solid fa-user-pen"></i>
                                Arsip
                            </div>
                        </div>

                        {/* Kategori Section */}
                        <div className="w-100 text-decoration-none text-white">
                            <div
                                className="w-100 h-100 sidebar-button ps-3 py-2 d-flex align-items-center gap-2"
                                style={{
                                    borderRadius: "20px 0 0 20px",
                                    backgroundColor: currentPageState === "lowongan-disimpan" ? "#CEDDE6" : "",
                                    color: currentPageState === "lowongan-disimpan" ? "#074173" : "",
                                }}
                                onClick={() => this.handlePageChange("lowongan-disimpan")}
                            >
                                <i style={{ width: "20px" }} className="fa-solid fa-bookmark"></i>
                                Kategori
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="w-100 text-decoration-none text-white">
                            <div
                                className="w-100 h-100 sidebar-button ps-3 py-2 d-flex align-items-center gap-2"
                                style={{
                                    borderRadius: "20px 0 0 20px",
                                    backgroundColor: currentPageState === "bantuan" ? "#CEDDE6" : "",
                                    color: currentPageState === "bantuan" ? "#074173" : "",
                                }}
                                onClick={() => this.handlePageChange("bantuan")}
                            >
                                <i style={{ width: "20px" }} className="fa-regular fa-circle-question"></i>
                                About
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white ms-4 ps-1 py-4">{/* Tambahin konten di sini */}</div>
            </nav>
        );
    }
}

export default Sidebar;
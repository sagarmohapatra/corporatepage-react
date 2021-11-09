import React from "react";
let ContactUs = ({ don, you }) => {
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold text-warning">Get In Touch</h2>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <a href={don} data-toggle="lightbox">
                                <img src={don} className="img-fluid c-image" alt="" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h2 className="font-weight-bold text-warning">Contact Information</h2>
                            <p className="lead">I advice you to go for Classplus , as many of my classmates and friends have joined
                                that. All of them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection
                                and the hard work you can do, cannot be done by anyone else for you. I joined jspiders, old
                                airport road in June, 2014. At that time, 120 students were in a className.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <iframe
                                src={you}
                                width="500" height="300" frameborder="0" style={{ border: 0 }} allowfullscreen=""
                                aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-info text-white text-center">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control mb-2" placeholder="User Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control mb-2" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <textarea rows="4" className="form-control mb-2" placeholder="Description"></textarea>
                                        </div>
                                        <input type="submit" value="Contact" className="btn btn-info" />
                                        <a href="#" className="btn btn-info" data-dismiss="modal">Close</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-warning text-white text-center p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-9">
                            <h3>Copyright © 2019 ,Classplus.com</h3>
                            <h6>All Rights Reserved</h6>
                            <h6>Developed & Maintained by
                                <a className="text-warning" href="https://classplusapp.com" target="_blank">
                                    <i className="fa fa-users"></i>Classplus</a>
                            </h6>
                        </div>
                        <div className="col-md-3">
                            <a href="#" className="btn btn-outline-white btn-block" data-toggle="modal"
                                data-target="#contact-modal">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}
export default ContactUs;
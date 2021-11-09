import React from "react";
let AboutUs = ({ f, f2, f3, f4 }) => {
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold text-teal">About Us
                                <small>It's Nice to Meet You!</small>
                            </h2>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <a href="../img/download.png" data-toggle="lightbox">
                                <img src={f} class="img-fluid c-image" alt="" width="500px" />
                            </a>
                        </div>
                        <div class="col-md-6">
                            <h2 class="font-weight-bold text-teal">Classplus Training & Developement Center</h2>
                            <p>I advice you to go for Classplus , as many of my classmates and friends have joined that. All of
                                them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection and the hard
                                work you can do, cannot be done by anyone else for you. I joined jspiders, old airport road in
                                June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-3 text-center">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1 class="text-warning">Meet The Trainers</h1>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nesciunt!</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-4">
                            <div class="card t_card">
                                <div class="card-body ">
                                    <img src={f2} class="img-fluid w-50 rounded-circle t_image" alt="" />
                                    <h3 class="mt-2">Mr.Raveesh</h3>
                                    <p class="lead">Trainer</p>
                                    <p>I advice you to go for Classplus, as many of my classmates and friends have joined that.
                                        All of them have got placed at min.Package of 3 Lacs.</p>
                                    <div class="d-flex text-center justify-content-between">
                                        <i class="fa fa-facebook-f fa-2x text-warning p-3"></i>
                                        <i class="fa fa-twitter fa-2x text-warning p-3"></i>
                                        <i class="fa fa-github fa-2x text-warning p-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card t_card">
                                <div class="card-body ">
                                    <img src={f3} class="img-fluid w-50 rounded-circle t_image" alt="" />
                                    <h3 class="mt-2">Mr.Yuvakishore</h3>
                                    <p class="lead">Trainer</p>
                                    <p>I advice you to go for Classplus, as many of my classmates and friends have joined that.
                                        All of them have got placed at min.Package of 3 Lacs.</p>
                                    <div class="d-flex text-center justify-content-between">
                                        <i class="fa fa-facebook-f fa-2x text-warning p-3"></i>
                                        <i class="fa fa-twitter fa-2x text-warning p-3"></i>
                                        <i class="fa fa-github fa-2x text-warning p-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card t_card">
                                <div class="card-body ">
                                    <img src={f4} class="img-fluid w-50 rounded-circle t_image" alt="" />
                                    <h3 class="mt-2">Mr.Varun Kumar</h3>
                                    <p class="lead">Trainer</p>
                                    <p>I advice you to go for , as maClassplusny of my classmates and friends have joined that.
                                        All of them have got placed at min. Package of 3 Lacs.</p>
                                    <div class="d-flex text-center justify-content-between">
                                        <i class="fa fa-facebook-f fa-2x text-warning p-3"></i>
                                        <i class="fa fa-twitter fa-2x text-warning p-3"></i>
                                        <i class="fa fa-github fa-2x text-warning p-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <footer class="bg-warning text-white text-center p-3">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9">
                            <h3>Copyright © 2020,Classplus.com</h3>
                            <h6>All Rights Reserved</h6>
                            <h6>Developed & Maintained by
                                <a class="text-warning" href="https://classplusapp.com" target="_blank">
                                    <i class="fa fa-users"></i>Classplus</a>
                            </h6>
                        </div>
                        <div class="col-md-3">
                            <a href="#" class="btn btn-outline-white btn-block" data-toggle="modal"
                                data-target="#contact-modal">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}
export default AboutUs;
import React from "react";
import "../../index.css"
let Home = ({ imga, imgb, imgr }) => {
    return (
        <React.Fragment>
            <div className="main-content">
                <div className="main-content-wrapper">
                    <h1>Welcome to <span class="text-dark">Classplus Training & Developement Center</span></h1>
                    <p>I advice you to go for jspiders , as many of my classmates and friends have joined that. All of them have
                        got placed at min. Package of 3 Lacs.Yes, you have to study for selection and the hard work you can do,
                        cannot be done by anyone else for you. I joined jspiders, old airport road in June, 2014. At that time,
                        120 students were in a class.</p>
                    <button className="btn btn-warning">Learn More</button>
                </div>
            </div>
            <section class="p-3 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <i className="fa fa-users text-warning fa-4x"></i>
                            <h2 className="font-weight-bold text-warning">Best Faculty Members</h2>
                            <p>I advice you to go for jspiders , as many of my classmates and friends have joined that. All of
                                them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection and the hard
                                work you can do, cannot be done by anyone else for you. I joined jspiders, old airport road in
                                June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-code text-warning fa-4x"></i>
                            <h2 className="font-weight-bold text-warning">Best Coding Skills</h2>
                            <p>I advice you to go for jspiders , as many of my classmates and friends have joined that. All of
                                them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection and the hard
                                work you can do, cannot be done by anyone else for you. I joined jspiders, old airport road in
                                June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-book-reader text-warning fa-4x"></i>
                            <h2 className="font-weight-bold text-warning">Best Course Material</h2>
                            <p>I advice you to go for jspiders , as many of my classmates and friends have joined that. All of
                                them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection and the hard
                                work you can do, cannot be done by anyone else for you. I joined jspiders, old airport road in
                                June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary text-white text-center p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5 className="display-4">We Provide Best Training for UI Technologies and JAVA Full Stack</h5>
                            <p className="lead">I advice you to go for jspiders , as many of my classmates and friends have joined
                                that. All of them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection
                                and the hard work you can do, cannot be done by anyone else for you. I joined jspiders, old
                                airport road in June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-3 text-center">

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="font-weight-bold text-warning">Please find the Courses we Offer as Below</h2>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, omnis?</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <a >
                                <img src={imga} class="img-fluid c-image" alt="" />
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a data-toggle="lightbox">
                                <img src={imgb} class="img-fluid c-image" alt="" />
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a data-toggle="lightbox">
                                <img src={imgr} class="img-fluid c-image" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3 bg-primary text-white text-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h2>Learn More about India's No.1 Institute</h2>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-md-4">
                            <a href="#" class="btn btn-outline-white btn-block">Lean More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2 class="font-weight-bold text-warning">The Complete Java Course</h2>
                            <p class="lead">I advice you to go for jspiders , as many of my classmates and friends have joined
                                that. All of them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection
                                and the hard work you can do, cannot be done by anyone else for you. I joined jspiders, old
                                airport road in June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                        <div class="col-md-6">
                            <a href={imga} data-toggle="lightbox">
                                <img src={imga} class="img-fluid c-image" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-4 bg-warning text-white">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <a href={imgb} data-toggle="lightbox">
                                <img src={imgb} class="img-fluid c-image" alt="" />
                            </a>
                        </div>
                        <div class="col-md-6">
                            <h2 class="font-weight-bold text-warning">The Angular Course</h2>
                            <p class="lead">I advice you to go for jspiders , as many of my classmates and friends have joined
                                that. All of them have got placed at min. Package of 3 Lacs.Yes, you have to study for selection
                                and the hard work you can do, cannot be done by anyone else for you. I joined jspiders, old
                                airport road in June, 2014. At that time, 120 students were in a class.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2 class="font-weight-bold text-warning">The Bootstrap Course</h2>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda autem
                                deserunt doloremque error ex, excepturi fuga illum iste minima modi nemo, quos voluptatibus.
                                Accusamus accusantium aspernatur dolore illo, non quia velit voluptatibus! Alias animi dolorum
                                ex excepturi laudantium nam numquam odio quasi quisquam vero. Ad adipisci ipsum nemo ut.</p>
                        </div>
                        <div class="col-md-6">
                            <a href={imgr} data-toggle="lightbox">
                                <img src={imgr} class="img-fluid c-image" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-info text-white text-center p-3">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9">
                            <h3>Copyright © 2020 ,Classplus.com</h3>
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
export default Home;
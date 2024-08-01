import React from 'react'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import { Link } from 'react-router-dom'
function Index() {
    return (
        <>
            <BaseHeader />

            <section className="py-lg-8 py-5">
                {/* container */}
                <div className="container my-lg-8">
                    {/* row */}
                    <div className="row align-items-center">
                        {/* col */}
                        <div className="col-lg-6 mb-6 mb-lg-0">
                            <div>
                                {/* heading */}
                                <h5 className="text-dark mb-4">
                                    <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2" />
                                    La mejor plataforma de fletes en México
                                </h5>
                                {/* heading */}
                                <h1 className="display-3 fw-bold mb-3">
                                    Flete Seguro
                                </h1>
                                {/* para */}
                                <p className="pe-lg-10 mb-5">
                                    Plataforma digital que sincroniza oferta y demanda en entrga de mercancías.
                                </p>
                                {/* btn */}
                                <a href="#" className="btn btn-primary fs-4 text-inherit ms-3">
                                    Unete ahora <i className='fas fa-plus'></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=Nfzi7034Kbg"
                                    className="btn btn-outline-success fs-4 text-inherit ms-3"
                                >

                                    Como funciona <i className='fas fa-video'></i>
                                </a>
                            </div>
                        </div>
                        {/* col */}
                        <div className="col-lg-6 d-flex justify-content-center">
                            {/* images */}
                            <div className="position-relative">
                                <img
                                    src="https://fleteseguro-bucket.s3.amazonaws.com/fsicon3.ico?AWSAccessKeyId=AKIA4VQHH4EJBT3TR7IZ&Signature=ckW2jutOE5YY%2BQ22eF%2BgxSpDqU8%3D&Expires=1720489185"
                                    alt="fleteseguro"
                                    className="end-0 bottom-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-8">
                <div className="container mb-lg-8">
                    {/* row */}
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-4 border-top-md border-top pb-4  border-end-md">
                            {/* text */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-award fs-2 text-info" />
                                </div>
                                <div className="lh-1">
                                    <h2 className="mb-1">316,000+</h2>
                                    <span>Transportistas</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 border-top-md border-top border-end-lg">
                            {/* icon */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-users fs-2 text-warning" />
                                </div>
                                {/* text */}
                                <div className="lh-1">
                                    <h2 className="mb-1">321,000+</h2>
                                    <span>Clientes</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 border-top-lg border-top border-end-md">
                            {/* icon */}
                            <div className="py-7 text-center">
                                <div className="mb-3">
                                    <i className="fe fe-tv fs-2 text-primary" />
                                </div>
                                {/* text */}
                                <div className="lh-1">
                                    <h2 className="mb-1">41,000+</h2>
                                    <span>Fletes</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>


            <section className="my-8 py-lg-8">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row align-items-center bg-primary gx-0 rounded-3 mt-5">
                        {/* col */}
                        <div className="col-lg-6 col-12 d-none d-lg-block">
                            <div className="d-flex justify-content-center pt-4">
                                {/* img */}
                                <div className="position-relative">
                                    <img
                                        src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png"
                                        alt="image"
                                        className="img-fluid mt-n8"
                                    />
                                    <div className="ms-n8 position-absolute bottom-0 start-0 mb-6">
                                        <img src="https://geeksui.codescandy.com/geeks/assets/images/svg/dollor.svg" alt="dollor" />
                                    </div>
                                    {/* img */}
                                    <div className="me-n4 position-absolute top-0 end-0">
                                        <img src="https://geeksui.codescandy.com/geeks/assets/images/svg/graph.svg" alt="graph" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="text-white p-5 p-lg-0">
                                {/* text */}
                                <h2 className="h1 text-white">Sponsors</h2>
                                <p className="mb-0">
                                    Anunciate con nosotros.
                                </p>
                                <a href="#" className="btn bg-white text-dark fw-bold mt-4">
                                    Conoce más <i className='fas fa-arrow-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />

        </>
    )
}

export default Index

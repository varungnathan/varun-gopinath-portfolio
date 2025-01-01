import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <i className="uil uil services__icon"></i>
                <h3 className="services__title"></h3>
            </div>

            <span className="services__button">
                View More <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    

                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. 
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                        in their exact original form, accompanied by 
                        English versions from the 1914 translation by H. Rackham.
                    </p>

                    <ul className="services__moda-services grid">
                        <li className="services__modal-services">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p>Web Design</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
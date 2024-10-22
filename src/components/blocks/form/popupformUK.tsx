"use client"

import { slideInDownAnimate } from "@/utils/animation";
import { useState } from "react";
import ContactForm from "./form";
import ContactFormUkrainian from "./formUK";


export default function PopupFormUkrainian() {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <span style={slideInDownAnimate('1200ms')}>
                <button
                    onClick={handleShow}
                    className="btn btn-lg btn-primary rounded-pill me-2"
                >
                    Запишіться
                </button>
            </span>

            {showModal && (
                <>
                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"></div>

                    {/* Modal */}
                    <div
                        className="modal fade show"
                        style={{ display: 'block' }}
                        tabIndex={-1}
                        aria-labelledby="contactFormModalLabel"
                        aria-hidden="false"
                        role="dialog"
                    >
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="row no-gutters">
                                    {/* Left side: Image */}
                                    <div className="col-md-5 d-none d-md-block">
                                        <img
                                            src="/img/women-meet.jpg"
                                            alt="Гранти для компаній"
                                            className="img-fluid"
                                            style={{ height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    {/* Right side: Form */}
                                    <div className="col-md-7">
                                        <div className="modal-header ps-4">
                                            <h3 className="modal-title ps-0" id="contactFormModalLabel">
                                                Приєднуйтесь до проекту безкоштовно
                                            </h3>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={handleClose}
                                                aria-label="Закрити"
                                            ></button>
                                        </div>
                                        <p className="ps-4">Залиште свої контактні дані, ми вам передзвонимо!</p>
                                        <div className="">
                                            <ContactFormUkrainian />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
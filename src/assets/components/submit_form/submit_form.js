import React, { useState } from 'react';
import { post } from '../../../service/admin/university.service';  // Import the function from service.js

const SubmitForm = () => {
    // Define the state for each form input
    const [name, setName] = useState('');
    const [shortName, setShortName] = useState('');
    const [code, setCode] = useState('');
    const [link, setLink] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'short_name') setShortName(value);
        if (name === 'code') setCode(value);
        if (name === 'link') setLink(value);
    };

    // Handle form submission (POST request using axios)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent to the backend
        const formData = {
            name,
            short_name: shortName,
            code,
            link,
        };

        // Call the submitFormData function from service.js
        const result = await post(formData);

        // Handle the response based on success or failure
        if (result.success) {
            alert(result.message);
        } else {
            alert(result.message);
        }
    };

    return (
        <div>
            <div
                className="modal fade"
                id="submit_form_modal"
                tabIndex="-1"
                aria-labelledby="submit_form_modal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Entity Form
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group flex-nowrap my-3">
                                    <span className="input-group-text" id="addon-wrapping">
                                        Name
                                    </span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        aria-label="short_name"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                                <div className="input-group flex-nowrap my-3">
                                    <span className="input-group-text" id="addon-wrapping">
                                        Short Name
                                    </span>
                                    <input
                                        type="text"
                                        name="short_name"
                                        value={shortName}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        aria-label="short_name"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>

                                <div className="input-group flex-nowrap my-3">
                                    <span className="input-group-text" id="addon-wrapping">
                                        Code
                                    </span>
                                    <input
                                        type="text"
                                        name="code"
                                        value={code}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        aria-label="short_name"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>

                                <div className="input-group flex-nowrap my-3">
                                    <span className="input-group-text" id="addon-wrapping">
                                        Link
                                    </span>
                                    <input
                                        type="text"
                                        name="link"
                                        value={link}
                                        onChange={handleInputChange}
                                        className="form-control"
                                        aria-label="short_name"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitForm;

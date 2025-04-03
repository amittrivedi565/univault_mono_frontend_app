import React from 'react';
import './submit_form.css';
const SubmitForm = () => {
    return (
        <div>
            <div className="modal fade" id="submit_form_modal" tabIndex="-1" aria-labelledby="submit_form_modal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Entity Form</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="input-group flex-nowrap my-3">
                                    <span class="input-group-text" id="addon-wrapping">Name</span>
                                    <input type="text" name="name" class="form-control"  aria-label="short_name" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="input-group flex-nowrap my-3">
                                    <span class="input-group-text" id="addon-wrapping">Short Name</span>
                                    <input type="text" name="short_name" class="form-control" aria-label="short_name" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping my-3">Code </span>
                                    <input type="text" name="code" class="form-control" aria-label="short_name" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap my-3">
                                    <span class="input-group-text" id="addon-wrapping">Link</span>
                                    <input type="text" name="link" class="form-control" aria-label="short_name" aria-describedby="addon-wrapping" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubmitForm
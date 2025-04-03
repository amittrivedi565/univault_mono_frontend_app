import './add_button.css';
import React from 'react';
const AddButton = () => {
    return (
        <div className='container p-4' data-bs-toggle='modal' data-bs-target='#submit_form_modal' style={{ textAlign: 'right' }}>
            <button className='btn btn-primary' id='add-button'>+</button>
        </div>
    );
}

export default AddButton;
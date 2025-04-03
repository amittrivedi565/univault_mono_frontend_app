import React from 'react';
import './content_list.css';
const ContentList = () => {
    return (
        <>
            <div className='container h-100' style={{ minHeight: '75vh' }}>
                <div class="accordion" id="content_list_accordian">
                    {/* For one row */}
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Bachelor Of Technology
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#content_list_accordian">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Short Name</th>
                                            <th scope="col">Code</th>
                                            <th scope="col">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BTech</td>
                                            <td>BT101</td>
                                            <td><a href="https://example.com" target="_blank" rel="noopener noreferrer">open</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentList;
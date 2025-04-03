import React, { useState, useEffect } from 'react';
import './content_list.css';
import { get } from "../../../service/admin/university.service";

const ContentList = () => {
    const [contentList, setContent] = useState([]);  // Default state is an empty array

    // Fetch data from backend
    const fetchData = async () => {
        try {
            const response = await get();  // Assuming response contains data in response.data
            const data = response.data;  // Assuming the actual content array is inside response.data
            
            if (Array.isArray(data)) {  // Ensure that data is an array
                setContent(data);  // Update state only if data is an array
            } else {
                console.error("Received data is not an array", data);
                setContent([]);  // Set empty array in case of unexpected structure
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setContent([]);  // Set empty array on error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);  // Empty dependency array ensures the effect runs once when the component mounts
    return (
        <div className="container h-100" style={{ minHeight: '75vh' }}>
            <div className="accordion" id="content_list_accordion">
                {contentList.map((content, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}
                            >
                                {content.name} {/* Display content name dynamically */}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#content_list_accordion"
                        >
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Short Name</th>
                                            <th scope="col">Code</th>
                                            <th scope="col">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{content.short_name}</td>
                                            <td>{content.code}</td>
                                            <td>
                                                <a href={content.link} target="_blank" rel="noopener noreferrer">
                                                    Link
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary btn-sm">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentList;

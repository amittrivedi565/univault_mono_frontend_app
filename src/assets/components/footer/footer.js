import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer bg-dark text-white text-center py-2 w-100'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <p className='mb-0 mx-2'>
                    Made with ❤️ by the UniVault Team | &nbsp;
                    <a
                        href="https://github.com/UniVaultProjects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        Visit our GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
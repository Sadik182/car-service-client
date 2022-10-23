import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright at {year} @ Md. Sadikur Rahman  </small></p>
        </footer>
    );
};

export default Footer;
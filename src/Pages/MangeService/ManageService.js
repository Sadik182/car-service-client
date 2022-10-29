import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services] = useServices()

    const handleDelete = id => {
        
    }
    return (
        <div className='w-50 mx-auto text-center'>
            <h1>This is Manage Service Page</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;
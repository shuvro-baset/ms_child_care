import { useEffect, useState } from 'react';

const useServices = () => {
    // set services data 
    const [services, setServices] = useState([])
    // fetching services data
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
     } , [])
    return [services]
};

export default useServices;
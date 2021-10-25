import { useEffect, useState } from 'react';

const useDoctors = () => {
    // set doctors data using useState method.
    const [doctors, setDoctors] = useState([])
    
    // fetching doctors data.
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
     } , [])
    return [doctors]
    
};

export default useDoctors;
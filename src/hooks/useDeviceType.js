import { useEffect, useState } from 'react';

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('desktop');

    const updateDeviceType = () => {
        if (window.innerWidth < 464) {
            setDeviceType('mobile');
        } else if (window.innerWidth >= 464 && window.innerWidth < 1024) {
            setDeviceType('tablet');
        } else {
            setDeviceType('desktop');
        }
    };

    useEffect(() => {
        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);
        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;

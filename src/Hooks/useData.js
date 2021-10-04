import { useEffect } from 'react';
import { useState } from 'react';

const useData = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return [allData, setAllData];
};

export default useData;
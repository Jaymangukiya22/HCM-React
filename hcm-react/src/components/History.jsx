import React, { useState, useEffect } from 'react';

const History = ({ caseno }) => {
    const [historyData, setHistoryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch(`http://localhost/HCM-React/hcm-react/fetch_history.php?caseno=${caseno}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch history data');
                }
                const data = await response.json();
                setHistoryData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchHistory();
    }, [caseno]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching history: {error.message}</p>;
    }

    if (!historyData || typeof historyData !== 'object') {
        return <p>Invalid data format: Expected an object</p>;
    }

    const formatDate = (inputDate) => {
        const dateObj = new Date(inputDate);
        const formattedDate = dateObj.toLocaleDateString('en-GB'); // Adjust locale as needed
        return formattedDate;
    };

    const renderPrescriptions = (prescriptions) => {
        if (prescriptions.length === 0) {
            return <p>No prescriptions found</p>;
        }

        return prescriptions.map((prescription, index) => (
            <span key={index}>
                {prescription.medicine} X {prescription.dose}<br />
            </span>
        ));
    };

    // Get sorted dates in descending order
    const sortedDates = Object.keys(historyData).sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateB - dateA;
    });

    return (
        <div className="history-div rounded-3" style={{ maxHeight: '81vh', overflowY: 'scroll' }}>
            {sortedDates.map(date => (
                <div key={date} className="justify-content-center align-items-center mb-3 mt-1 p-1 rounded-3" style={{ backgroundColor: '#d1d3ab' }}>
                    <div className="input-group">
                        <span className="p-3 border-0 rounded-3 w-100 mb-1 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#0b6e4f', color: 'bisque', textAlign: 'center', fontWeight: 600, fontSize: '20px' }}>
                            <span>{formatDate(date)}</span>
                            {/* {historyData[date].checkup_remarks.file && (
                                <img src="Images And Icons/image-preview.svg" alt="file icon" style={{ cursor: 'pointer', height: '27px', width: '27px' }} onClick={() => showModal(historyData[date].checkup_remarks.file)} />
                            )} */}
                        </span>
                        <span className="p-3 border-0 rounded-3 me-auto" style={{ backgroundColor: '#0b6e4f', color: 'bisque', width: '49.75%' }}>
                            <p>{historyData[date].checkup_remarks.remarks}</p>
                        </span>
                        <span className="p-3 border-0 rounded-3 ms-auto" style={{ backgroundColor: '#0b6e4f', color: 'bisque', width: '49.75%' }}>
                            {renderPrescriptions(historyData[date].prescriptions)}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default History;

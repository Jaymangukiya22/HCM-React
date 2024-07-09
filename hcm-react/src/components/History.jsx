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

    const { test_details = {}, checkup_remarks = {}, prescriptions = [] } = historyData;

    return (
        <div className="history-div rounded-3" style={{ maxHeight: '45vh', overflowY: 'scroll' }}>
            <div className="justify-content-center align-items-center mb-1 mt-3 p-3 rounded-3" style={{ backgroundColor: '#d1d3ab' }}>
                <div className="input-group">
                    <span className="p-3 border-0 rounded-3 w-100 mb-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#0b6e4f', color: 'bisque', textAlign: 'center', fontWeight: 600, fontSize: '20px' }}>
                        <span>{test_details.date}</span>
                        {checkup_remarks.file && (
                            <img src="Images And Icons/image-preview.svg" alt="file icon" style={{ cursor: 'pointer', height: '27px', width: '27px' }} onClick={() => showModal(checkup_remarks.file)} />
                        )}
                    </span>
                    <span className="p-3 border-0 rounded-3 me-auto" style={{ backgroundColor: '#0b6e4f', color: 'bisque', width: '49%' }}>
                        <p>{checkup_remarks.remarks}</p>
                    </span>
                    <span className="p-3 border-0 rounded-3 ms-auto" style={{ backgroundColor: '#0b6e4f', color: 'bisque', width: '49%' }}>
                        <p>
                            {prescriptions.length > 0 ? (
                                prescriptions.map(prescription => (
                                    <span key={prescription.id}>
                                        {prescription.medicine} X {prescription.dose}<br />
                                    </span>
                                ))
                            ) : (
                                <p>No prescriptions found</p>
                            )}
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default History;

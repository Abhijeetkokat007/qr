import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState('');
    const [qrImage, setQrImage] = useState('');
    const [file, setFile] = useState(null);
    const [customQrImage, setCustomQrImage] = useState('');
    const [allQRCodes, setAllQRCodes] = useState([]);
    const [pdfUrl, setPdfUrl] = useState('');

    const generateSimpleQr = async () => {
        const res = await axios.post('http://localhost:5000/generate-simple-qr', { data });
        setQrImage(res.data.qrImage);
        fetchAllQRCodes();
    };

    const uploadFileAndGenerateQr = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('http://localhost:5000/api/upload-file', formData);
        setQrImage(res.data.qrImage);
        fetchAllQRCodes();
    };

    const generateCustomQr = async () => {
        const formData = new FormData();
        formData.append('logo', file);
        formData.append('data', data);
        const res = await axios.post('http://localhost:5000/generate-custom-qr', formData);
        setCustomQrImage(res.data.qrImageUrl);
        fetchAllQRCodes();
    };

    const fetchAllQRCodes = async () => {
        const res = await axios.get('http://localhost:5000/all-qr-codes');
        setAllQRCodes(res.data.qrCodes);
        setPdfUrl(res.data.pdfUrl);
    };

    useEffect(() => {
        fetchAllQRCodes();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">QR Code Generator</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <input
                    type="text"
                    placeholder="Enter URL or Text"
                    className="p-3 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setData(e.target.value)}
                />

                <button
                    onClick={generateSimpleQr}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
                >
                    Generate Simple QR
                </button>

                <input
                    type="file"
                    className="mb-4 w-full text-gray-500 file:border file:border-gray-300 file:rounded file:px-4 file:py-2 file:text-gray-700 file:hover:bg-gray-100 focus:outline-none"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <div className="flex flex-col gap-4 mb-6">
                    <button
                        onClick={uploadFileAndGenerateQr}
                        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                    >
                        Upload File and Generate QR
                    </button>

                    <button
                        onClick={generateCustomQr}
                        className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
                    >
                        Generate Custom QR with Logo
                    </button>
                </div>
            </div>

            {/* Display Latest QR Image */}
            {qrImage && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Generated QR Code:</h2>
                    <img src={qrImage} alt="QR Code" className="w-72 h-72 border-4 border-white rounded-lg shadow-lg mx-auto" />
                </div>
            )}

            {/* Display Custom QR Image */}
            {customQrImage && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Custom QR with Logo:</h2>
                    <img src={customQrImage} alt="Custom QR Code" className="w-72 h-72 border-4 border-white rounded-lg shadow-lg mx-auto" />
                </div>
            )}

            {/* Display All QR Codes */}
            {allQRCodes.length > 0 && (
                <div className="mt-12 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">All Generated QR Codes</h2>
                        {pdfUrl && (
                            <a
                                href={pdfUrl}
                                download
                                className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Download PDF
                            </a>
                        )}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {allQRCodes.map((qr, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={qr.qrImageUrl} alt={`QR ${index}`} className="w-36 h-36 border border-gray-300 rounded shadow" />
                                <p className="mt-2 text-sm font-medium text-gray-600">Batch: {qr.batchNumber}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;


// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [data, setData] = useState('');
//     const [qrImage, setQrImage] = useState('');
//     const [file, setFile] = useState(null);
//     const [customQrImage, setCustomQrImage] = useState('');

//     const generateSimpleQr = async () => {
//         const res = await axios.post('http://localhost:5000/generate-simple-qr', { data });
//         setQrImage(res.data.qrImage);
//     };

//     const uploadFileAndGenerateQr = async () => {
//         const formData = new FormData();
//         formData.append('file', file);
//         const res = await axios.post('http://localhost:5000/upload-file', formData);
//         setQrImage(res.data.qrImage);
//     };

//     const generateCustomQr = async () => {
//         const formData = new FormData();
//         formData.append('logo', file);
//         formData.append('data', data);
//         const res = await axios.post('http://localhost:5000/generate-custom-qr', formData);
//         setCustomQrImage(res.data.qrImageUrl);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center">
//             <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">QR Code Generator</h1>

//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                 <input
//                     type="text"
//                     placeholder="Enter URL or Text"
//                     className="p-3 border-2 border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     onChange={(e) => setData(e.target.value)}
//                 />

//                 <button
//                     onClick={generateSimpleQr}
//                     className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
//                 >
//                     Generate Simple QR
//                 </button>

//                 <input
//                     type="file"
//                     className="mb-4 w-full text-gray-500 file:border file:border-gray-300 file:rounded file:px-4 file:py-2 file:text-gray-700 file:hover:bg-gray-100 focus:outline-none"
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />

//                 <div className="flex flex-col gap-4 mb-6">
//                     <button
//                         onClick={uploadFileAndGenerateQr}
//                         className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
//                     >
//                         Upload File and Generate QR
//                     </button>

//                     <button
//                         onClick={generateCustomQr}
//                         className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
//                     >
//                         Generate Custom QR with Logo
//                     </button>
//                 </div>
//             </div>

//             {/* Display Simple QR Image */}
//             {qrImage && (
//                 <div className="mt-8">
//                     <h2 className="text-2xl font-semibold text-white mb-4">Generated QR Code:</h2>
//                     <img src={qrImage} alt="QR Code" className="w-72 h-72 border-4 border-white rounded-lg shadow-lg mx-auto" />
//                 </div>
//             )}

//             {/* Display Custom QR Image */}
//             {customQrImage && (
//                 <div className="mt-8">
//                     <h2 className="text-2xl font-semibold text-white mb-4">Custom QR with Logo:</h2>
//                     <img src={customQrImage} alt="Custom QR Code" className="w-72 h-72 border-4 border-white rounded-lg shadow-lg mx-auto" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;

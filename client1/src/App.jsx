import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState('');
    const [qrImage, setQrImage] = useState('');
    const [file, setFile] = useState(null);
    const [customQrImage, setCustomQrImage] = useState('');

    const generateSimpleQr = async () => {
        const res = await axios.post('http://localhost:5000/generate-simple-qr', { data });
        setQrImage(res.data.qrImage);
    };

    const uploadFileAndGenerateQr = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post('http://localhost:5000/upload-file', formData);
        setQrImage(res.data.qrImage);
    };

    const generateCustomQr = async () => {
        const formData = new FormData();
        formData.append('logo', file);
        formData.append('data', data);
        const res = await axios.post('http://localhost:5000/generate-custom-qr', formData);
        setCustomQrImage(res.data.qrImageUrl);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">QR Code Generator</h1>

            <input
                type="text"
                placeholder="Enter URL or Text"
                className="p-2 border rounded w-72 mb-4"
                onChange={(e) => setData(e.target.value)}
            />

            <button
                onClick={generateSimpleQr}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
                Generate Simple QR
            </button>

            <input
                type="file"
                className="mb-4"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <div className="flex flex-col gap-2">
                <button
                    onClick={uploadFileAndGenerateQr}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Upload File and Generate QR
                </button>

                <button
                    onClick={generateCustomQr}
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                    Generate Custom QR with Logo
                </button>
            </div>

            {qrImage && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Generated QR Code:</h2>
                    <img src={qrImage} alt="QR Code" className="w-64 h-64 border rounded shadow" />
                </div>
            )}

            {customQrImage && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Custom QR with Logo:</h2>
                    <img src={customQrImage} alt="Custom QR Code" className="w-64 h-64 border rounded shadow" />
                </div>
            )}
        </div>
    );
}

export default App;

import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import QRCode from 'qrcode';
import fs from 'fs-extra';
import PDFDocument from 'pdfkit';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// For storing uploaded files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Store all QR data
let qrDataStore = [];

const generateBatchNumber = () => {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};

const saveQrToPDF = (base64Data, batchNumber) => {
  const pdfPath = path.join(__dirname, `pdfs/qr-${batchNumber}.pdf`);
  fs.ensureDirSync(path.join(__dirname, 'pdfs'));
  
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4' });
    const stream = fs.createWriteStream(pdfPath);

    doc.pipe(stream);
    doc.image(base64Data, { fit: [250, 250], align: 'center', valign: 'center' });
    doc.moveDown();
    doc.fontSize(18).text(`Batch: ${batchNumber}`, { align: 'center' });
    doc.end();

    stream.on('finish', () => resolve(pdfPath));
    stream.on('error', reject);
  });
};

// ✅ API: Upload file and generate QR code with batch + PDF
app.post('/upload-file', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const batchNumber = generateBatchNumber();

    const fileUrl = `https://example.com/fake-s3-url/${file.originalname}`;
    const qrImage = await QRCode.toDataURL(fileUrl);

    const pdfPath = await saveQrToPDF(qrImage, batchNumber);
    const downloadUrl = `http://localhost:${process.env.PORT}/download/${path.basename(pdfPath)}`;

    // Save to in-memory store
    qrDataStore.push({ batchNumber, qrImage, downloadUrl });

    res.json({ batchNumber, qrImage, downloadUrl });
  } catch (err) {
    console.error('QR generation failed:', err);
    res.status(500).json({ error: 'File upload or QR generation failed' });
  }
});

// ✅ API: Download generated PDF
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'pdfs', req.params.filename);
  res.download(filePath);
});

// ✅ API: Get all generated QR codes
app.get('/all-qrs', (req, res) => {
  res.json(qrDataStore);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


// import express from 'express';
// import multer from 'multer';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import AWS from 'aws-sdk';
// import QRCode from 'qrcode';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Configure AWS
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

// const s3 = new AWS.S3();

// // Multer for file upload
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Generate Simple QR
// app.post('/generate-simple-qr', async (req, res) => {
//   const { data } = req.body;
//   try {
//     const qrImage = await QRCode.toDataURL(data);
//     res.json({ qrImage });
//   } catch (err) {
//     console.error('QR Generation Error:', err);
//     res.status(500).json({ error: 'Failed to generate QR' });
//   }
// });

// // Upload File and Generate QR
// app.post('/upload-file', upload.single('file'), async (req, res) => {
//   const file = req.file;
//   const fileName = `uploads/${Date.now()}-${file.originalname}`;

//   const params = {
//     Bucket: process.env.S3_BUCKET_NAME,
//     Key: fileName,
//     Body: file.buffer,
//     ContentType: file.mimetype,
//   };

//   try {
//     await s3.upload(params).promise();

//     // Generate Presigned URL for download (valid 10 minutes)
//     const signedUrl = s3.getSignedUrl('getObject', {
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: fileName,
//       Expires: 600, // 10 minutes
//     });

//     const qrImage = await QRCode.toDataURL(signedUrl);

//     res.json({ qrImage });
//   } catch (err) {
//     console.error('S3 Upload Error:', err);
//     res.status(500).json({ error: 'File upload or QR generation failed' });
//   }
// });

// // Generate Custom QR with Logo (basic placeholder, optional)
// app.post('/generate-custom-qr', upload.single('logo'), async (req, res) => {
//   const { data } = req.body;
//   const logo = req.file;

//   if (!data || !logo) {
//     return res.status(400).json({ error: 'Data or logo file missing' });
//   }

//   const logoPath = path.join(__dirname, 'temp-logo.png');
//   fs.writeFileSync(logoPath, logo.buffer);

//   try {
//     const qrImage = await QRCode.toDataURL(data, {
//       errorCorrectionLevel: 'H',
//       width: 300,
//       margin: 2
//     });

//     // You can enhance here with logo overlay using Sharp/Jimp if needed

//     res.json({ qrImageUrl: qrImage });
//   } catch (err) {
//     console.error('Custom QR Error:', err);
//     res.status(500).json({ error: 'Failed to generate custom QR' });
//   } finally {
//     fs.unlinkSync(logoPath);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });



// import express from 'express';
// import cors from 'cors';
// import multer from 'multer';
// import QRCode from 'qrcode';
// import AWS from 'aws-sdk';
// import dotenv from 'dotenv';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const Jimp = require('jimp');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // AWS S3 configuration
// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
// });

// // Multer storage (in memory)
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const PORT = process.env.PORT || 5000;

// // API to generate simple QR Code
// app.post('/generate-simple-qr', async (req, res) => {
//     try {
//         const { data } = req.body;
//         const qrImage = await QRCode.toDataURL(data);
//         res.json({ qrImage });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });

// // API to generate customized QR Code
// app.post('/generate-custom-qr', upload.single('logo'), async (req, res) => {
//     try {
//         const { data } = req.body;
//         const logo = await Jimp.read(req.file.buffer);
//         const qrCodeBuffer = await QRCode.toBuffer(data, { width: 500, margin: 1 });
//         const qrImage = await Jimp.read(qrCodeBuffer);

//         // Resize logo
//         logo.resize(100, 100);

//         // Composite logo in the center
//         qrImage.composite(logo, qrImage.bitmap.width / 2 - 50, qrImage.bitmap.height / 2 - 50);

//         // Upload to S3
//         const uploadParams = {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: `custom-qr/${Date.now()}.png`,
//             Body: await qrImage.getBufferAsync(Jimp.MIME_PNG),
//             ContentType: 'image/png',
//         };

//         const result = await s3.upload(uploadParams).promise();
//         res.json({ qrImageUrl: result.Location });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });

// // Upload file to S3 and get QR code for the download link
// app.post('/upload-file', upload.single('file'), async (req, res) => {
//     try {
//         const uploadParams = {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: `uploads/${Date.now()}-${req.file.originalname}`,
//             Body: req.file.buffer,
//             ContentType: req.file.mimetype,
//         };

//         const result = await s3.upload(uploadParams).promise();
//         const qrImage = await QRCode.toDataURL(result.Location);

//         res.json({ fileUrl: result.Location, qrImage });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

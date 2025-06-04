const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csv = require('csv-parser');
const XLSX = require('xlsx');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors({ origin: 'https://forgetrack.net' }));
app.use(express.json());

let teklaData = [];

app.post('/uploadTekla', upload.single('file'), (req, res) => {
  const file = req.file;

  if (file.originalname.endsWith('.csv')) {
    teklaData = [];
    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (row) => teklaData.push(row))
      .on('end', () => res.json({ status: 'CSV uploaded', data: teklaData }));
  } else if (file.originalname.endsWith('.xlsx')) {
    const workbook = XLSX.readFile(file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    teklaData = XLSX.utils.sheet_to_json(sheet);
    res.json({ status: 'Excel uploaded', data: teklaData });
  } else {
    res.status(400).json({ error: 'Only CSV or Excel files allowed.' });
  }
});

app.get('/getTeklaData', (req, res) => {
  res.json({ data: teklaData });
});

app.listen(5000, () => console.log('ForgeTrack backend running on port 5000'));

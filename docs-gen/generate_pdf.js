const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const fileUrl = `file:///${path.join(__dirname, 'tech_documentation.html').replace(/\\/g, '/')}`;
  console.log(`Navigating to ${fileUrl}`);
  
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, 'Stackly_Tech_Documentation.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '40px',
      right: '0px',
      bottom: '40px',
      left: '0px'
    }
  });

  console.log(`PDF saved to ${pdfPath}`);
  await browser.close();
}

generatePDF().catch(console.error);

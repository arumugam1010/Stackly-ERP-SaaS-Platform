const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const pages = [
  'index.html',
  'features.html',
  'solutions.html',
  'pricing.html',
  'about.html',
  'dashboard.html'
];

async function captureScreenshots() {
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const pageName of pages) {
    const fileUrl = `file:///${path.join(__dirname, '..', pageName).replace(/\\/g, '/')}`;
    console.log(`Navigating to ${fileUrl}`);
    try {
      await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
      // Small delay for animations
      await new Promise(r => setTimeout(r, 1000));
      
      const screenshotPath = path.join(screenshotsDir, `${pageName.replace('.html', '')}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Saved screenshot: ${screenshotPath}`);
    } catch (e) {
      console.error(`Error taking screenshot for ${pageName}: ${e}`);
    }
  }

  await browser.close();
  console.log("All screenshots captured.");
}

captureScreenshots();

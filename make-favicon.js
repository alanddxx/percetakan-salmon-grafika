import fs from 'fs';
import https from 'https';

const url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANLe56fETxkAzdh20gw865hT3K-RvdrCeqcG2dYx6S6d2sh9UMBQ9p7HCwMhDVtT539OfG_58giqS7kWpWKnrqFIKb6agRQ-_r7wjQbDrSxcB2x0r68PY2AJ9ETsLHcDJo5Ygytc7Kp4Loyi5YaAWL3Nw5z3uc8D55PzaQzqV1wFKtC3P4N9a8hb26uFavrTdFvy6uOlRWUEhKpUl27bE2CxvlR7uIokZUmQR-1F4UN-NC9gkmq1Oxm-Rqv7KT_cwQTg';

https.get(url, (res) => {
  const contentType = res.headers['content-type'] || 'image/png';
  const data = [];
  res.on('data', (chunk) => data.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(data);
    const base64 = buffer.toString('base64');
    
    // Create an SVG that puts the base64 image inside a circle with a white background
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="100" fill="#ffffff" />
  <clipPath id="circleClip">
    <circle cx="100" cy="100" r="100" />
  </clipPath>
  <image href="data:${contentType};base64,${base64}" x="10" y="10" width="180" height="180" preserveAspectRatio="xMidYMid meet" clip-path="url(#circleClip)" />
</svg>`;
    
    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/favicon.svg', svg);
    console.log('Favicon saved to public/favicon.svg');
  });
}).on('error', (e) => {
  console.error('Error fetching image:', e);
});

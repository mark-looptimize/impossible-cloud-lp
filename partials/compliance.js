import {html, render} from 'lit-html';
const sectionIdentifier = 'compliance';

const configuration = {
  headline: 'Specifically designed to help you meet even the strictest data requirements and regulations.',
  logo1: '../assets/iso-badge.png',
  logo2: '../assets/soc2-badge.png',
  logo3: '../assets/gdpr-ready.png',
  logo4: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d575629309ce5cbd1c5f2f_Group%208.png',
  logo5: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5756303886e3956c31eb1_HIPAA%201.png'
};

const template = html`
<div class="bg-white py-6 sm:py-6">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 py-2 text-gray-900">${configuration.headline}</h2>
    <div class="mx-auto grid max-w-lg grid-cols-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-10 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-10">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-2" src="${configuration.logo1}" alt="ISO 27001" style="height: 50%;">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-2" src="${configuration.logo2}" alt="SOC 2" style="height: 50%;">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-2" src="${configuration.logo3}" alt="GDPR" style="height: 50%;">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-2" src="${configuration.logo4}" alt="GDPR" style="height: 50%;">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-2" src="${configuration.logo5}" alt="GDPR" style="height: 50%;">
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
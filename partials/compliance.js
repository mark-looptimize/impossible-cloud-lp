import {html, render} from 'lit-html';
const sectionIdentifier = 'compliance';

const configuration = {
  headline: 'Specifically designed to meet your enterprise requirements',
  logo1: '../assets/iso-badge.png',
  logo2: '../assets/soc2-badge.png',
  logo3: '../assets/gdpr-ready.png'
};

const template = html`
<div class="bg-white py-6 sm:py-6">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold leading-8 py-2 text-gray-900">${configuration.headline}</h2>
    <div class="mx-auto grid max-w-lg grid-cols-3 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-1" src="${configuration.logo1}" alt="Transistor" style="height: 35%">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-1" src="${configuration.logo2}" alt="Reform" style="height: 35%">
      <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-1" src="${configuration.logo3}" alt="Tuple" style="height: 35%">
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
import {html, render} from 'lit-html';

export function renderCompliance(configuration, sectionIdentifier) {
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
}


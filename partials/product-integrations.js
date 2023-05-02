import {html, render} from 'lit-html';

export function renderIntegrations(configSettings, sectionIdentifier) {
  const template = html`
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">${configSettings.headline}</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-12 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-2" src="${configSettings.productOne}">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-2" src="${configSettings.productTwo}">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-2" src="${configSettings.productThree}">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-2" src="${configSettings.productFour}">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-2" src="${configSettings.productFive}">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-2" src="${configSettings.productSix}">
      </div>
    </div>
  </div>
  `;

  render(template, document.getElementById(sectionIdentifier));
}


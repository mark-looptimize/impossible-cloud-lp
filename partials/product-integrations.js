import {html, render} from 'lit-html';

const sectionIdentifier = 'product-integrations';


const configSettings = {
    headline: 'Integrates with all the tools you already know and love',
    productOne: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb5403d12ae293250565_image%206.png',
    productTwo: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb543dc29b3803a65b7b_632441f7bf2fc81432c995b2_Logo-p-500%201.png',
    productThree: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb543933d177c0706859_632441fde4e3ad788b40e260_veeam_logo_topaz-500.png.web.1920%201.png',
    productFour: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb5403d12aed6e25056e_horizontal-logo-monochromatic-white%201.png',
    productFive: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb556f089e1294a958ff_image%2015.png',
    productSix: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb536841085cc6caa79e_image%2016.png'
};

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
      <!-- <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="${configSettings.productFive}"> -->
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
import {html, render} from 'lit-html';
const sectionIdentifier = 'europe';

const configuration = {
  pillText: 'Proudly European owned and operated',
  headline: 'Designed to meet the needs of European organizations',
  imagePath: "../assets/eu-flag.jpg",
  leadText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
  feature1: {
    headline: 'Geofencing Technology',
    text: 'Impossible Cloud provides sophisitcated geofencing technology to help ensure that data for all of our European customers stays in European servers helping you more easily meet regulation requirements.'
  },
  feature2: {
    headline: 'Built in compliance controls',
    text: 'We offer all customers the ability to take advantage of advanced version and object locks on all of their data to meet compliance, governance and legal requirements.'
  },
};

const template = html`
<div class="overflow-hidden bg-white py-6 sm:py-6">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-green-600">${configuration.pillText}</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${configuration.headline}</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">${configuration.leadText}</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg>
                ${configuration.feature1.headline}
              </dt>
              <dd class="inline">${configuration.feature1.text}</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
                ${configuration.feature2.headline}
              </dt>
              <dd class="inline">${configuration.feature2.text}</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="${configuration.imagePath}" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
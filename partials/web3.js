import {html, render} from 'lit-html';
const sectionIdentifier = 'web-3';

const configuration = {
  pillText: 'Next generation cloud native architecture',
  headline: 'Meet the future of cloud object storage',
  imagePath: "../assets/data-center-big.jpg",
  leadText: 'At ImpossibleCloud we have taken only the very best and most relevant ideas from Web3 to create a modern cloud environment that leaves behind many of the trade-offs that legacy providers require.',
  feature1: {
    headline: 'Fully immutable data',
    text: 'Impossible Cloud Storage is always hot, eliminating the need for tiering files. Ideal for your high performance applications.'
  },
  feature2: {
    headline: 'Decentralized architecture',
    text: 'Say goodbye to single points of failure that can bring your business to a halt and say hello to the outage proof future that our innovative architecture helps provide.'
  },
  feature3: {
    headline: 'Hot storage for high performance',
    text: 'Impossible Cloud Storage is always hot, eliminating the need for tiering files. Ideal for your high performance applications.'
  },
};

const template = html`
<div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:ml-auto lg:pl-4 lg:pt-4">
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
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                </svg>
                ${configuration.feature3.headline}
              </dt>
              <dd class="inline">${configuration.feature3.text}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="flex items-start justify-end lg:order-first">
        <img src="${configuration.imagePath}" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442">
      </div>
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
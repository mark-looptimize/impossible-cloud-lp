import {html, render} from 'lit-html';
const sectionIdentifier = 'use-cases';

const configuration = {
  headline: 'Use Cases',
  subHeadling: 'Privacy and data integrity ensured',
  leadText: 'Multiple security layers offer the highest level of protection for your data. Impossible Cloud Storage can be utilized as primary storage for application data and content, secondary storage for backup or disaster recovery, and archival storage for long-term data and record retention.',
  imagePath: '../assets/use-cases.svg'
};

const template = html`
<div class="bg-white py-12 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <p class="text-base font-semibold leading-7 text-green-600">${configuration.subHeadling}</p>
      <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${configuration.headline}</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">${configuration.leadText}</p>
    </div>
  </div>
  <img src="${configuration.imagePath}" class="mt-16 px-32">
</div>


`;

render(template, document.getElementById(sectionIdentifier));
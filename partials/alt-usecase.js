import {html, render} from 'lit-html';
const sectionIdentifier = 'use-cases';

const configuration = {
  subheading: 'Use cases',
  heading: 'How does cloud storage help my business?',
  leadText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
  useCase1: {
    headline: 'Backup and disaster recovery',
    text: 'Safer than a military bunker. ImpossibleCloud offers first class disaster recovery systems for those times when things just don\'t go as expected.  Our decentralized, outage-proof environment helps ensure that you\'ll never lose an important file again.'
  },
  useCase2: {
    headline: 'Sensitive data storage',
    text: 'Our industry-leading privacy controls and innovative system architecture ensure that only you have access to your data at all times, making it the ideal solution for your most sensitive data needs.'
  },
  useCase3: {
    headline: 'Ransomware protection',
    text: 'We built ImpossibleCloud from the ground up to ensure that your data stays immutable and decentralized to help mitigate against the fastest growing threats in the modern cyber landscape.'
  },
  useCase4: {
    headline: 'Application data',
    text: 'We keep your data located at the edge where your customers are located to help support a whole range of high-performance application centric use cases.'
  },
};

const template = html`
<div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-base font-semibold leading-7 text-green-400">${configuration.subheading}</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">${configuration.heading}</p>
      <p class="mt-6 text-lg leading-8 text-gray-300">${configuration.leadText}</p>
    </div>
    <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
      <div class="relative pl-9">
        <dt class="inline font-semibold text-white">
          <svg class="absolute left-1 top-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
          </svg>
          ${configuration.useCase1.headline}
        </dt>
        <dd class="inline">${configuration.useCase1.text}</dd>
      </div>
      <div class="relative pl-9">
        <dt class="inline font-semibold text-white">
          <svg class="absolute left-1 top-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
          </svg>
          ${configuration.useCase2.headline}
        </dt>
        <dd class="inline">${configuration.useCase2.text}</dd>
      </div>
      <div class="relative pl-9">
        <dt class="inline font-semibold text-white">
          <svg class="absolute left-1 top-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
          </svg>
          ${configuration.useCase4.headline}
        </dt>
        <dd class="inline">${configuration.useCase4.text}</dd>
      </div>
      <div class="relative pl-9">
        <dt class="inline font-semibold text-white">
          <svg class="absolute left-1 top-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z" clip-rule="evenodd" />
          </svg>
          ${configuration.useCase3.headline}
        </dt>
        <dd class="inline">${configuration.useCase3.text}</dd>
      </div>
    </dl>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
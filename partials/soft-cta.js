import {html, render} from 'lit-html';
const sectionIdentifier = 'soft-cta';

const configuration = {
  headline1: 'Ready to dive in?',
  headline2: 'Start your free 30 day trial today.',
  supportingText: 'No credit card required',
  buttonText: 'Get started'
};

export function renderSoftCta(configuration, sectionIdentifier) {
  const template = html`
  <div class="bg-green-100">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
      <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${configuration.headline1}<br>${configuration.headline2}</h2>
      <p class="text-sm font-semibold leading-6 text-gray-900">${configuration.supportingText}</p>
      </div>
      <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <a href="#top" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">${configuration.buttonText}</a>
      </div>
    </div>
  </div>
  `;

  render(template, document.getElementById(sectionIdentifier));
}


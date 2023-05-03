import {html, render} from 'lit-html';

export function renderHero(configuration, sectionIdentifier) {
  const template = html`
  <div class="bg-white">
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
      <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="px-6 lg:px-0 lg:pt-4">
          <div class="mx-auto max-w-2xl">
            <div class="max-w-lg">
              <img class="h-11" src="../assets/impossible-cloud-logo.png" alt="Impossible Cloud">
              <div class="mt-24 sm:mt-32 lg:mt-16" id="hero-pills">
                <a href="#" class="inline-flex space-x-6">
                  <span class="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10">${configuration.microcopy1}</span>
                  <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>${configuration.microcopy2}</span>
                  </span>
                </a>
              </div>
              <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${configuration.headline}</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">${configuration.text}</p>
              <!-- <div class="mt-10 flex items-center gap-x-6">
                <a href="#" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">${configuration.button1}</a>
                
              </div>
              <p class="text-sm text-gray-600 mt-6">
                150GB for 30 days. No payment details required.
                </p> -->
            </div>
          </div>
        </div>
        <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>
          <div class="shadow-lg md:rounded-3xl mt-24 sm:mt-32 lg:mt-32">
            <img src="../assets/form-2.png">
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
    </div>
  </div>
  `;

  render(template, document.getElementById(sectionIdentifier));
}


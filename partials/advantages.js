import {html, render} from 'lit-html';
const sectionIdentifier = 'advantages';

const configuration = {
  headline: 'Why switch to Impossible Cloud?',
  leadText: 'We know that changing cloud providers can be challenging at the best of times, which is precisely why we have gone out of our way to make the entire process as simple a decision for you as possible.',
  feature1: {
    headline: 'Always available',
    text: 'Your data is available anywhere and always.'
  },
  feature2: {
    headline: 'Low latency',
    text: 'Located at your edge for unparalleled performance.'
  },
  feature3: {
    headline: 'Privacy Guaranteed',
    text: 'Only you have access to your data.'
  },
  feature4: {
    headline: 'Decentralized Architecture',
    text: 'Decentralized architecture eliminates the single point of failure.'
  },
  feature5: {
    headline: 'S3 API Compatability',
    text: 'Easy to use and easy to switch with full S3 API compatibility.'
  },
  feature6: {
    headline: 'Security & Resilience',
    text: 'Industry-leading security with built-in resilience and immutability.'
  },
};

const template = html`
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${configuration.headline}</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">${configuration.leadText}</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </div>
            ${configuration.feature1.headline}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">${configuration.feature1.text}</p>
            <p class="mt-6">
              <a href="#" class="text-sm font-semibold leading-6 text-green-600">Learn more <span aria-hidden="true">→</span></a>
            </p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            ${configuration.feature2.headline}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">${configuration.feature2.text}</p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            ${configuration.feature3.headline}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">${configuration.feature3.text}</p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </div>
            ${configuration.feature4.headline}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">${configuration.feature4.text}</p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </div>
            ${configuration.feature5.headline}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">${configuration.feature5.text}</p>
            <p class="mt-6">
              <a href="#" class="text-sm font-semibold leading-6 text-green-600">Learn more <span aria-hidden="true">→</span></a>
            </p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </div>
            ${configuration.feature6.headline}
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p class="flex-auto">${configuration.feature6.text}</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
import {html, render} from 'lit-html';

export function renderTrialCta(configuration, sectionIdentifier) {
  const template = html`
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10" aria-hidden="true">
        <div class="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#46ffa6] to-[#38d572] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 class="text-base font-semibold leading-8 text-green-400">${configuration.subHeading}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">${configuration.headline}</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">${configuration.leadText}</p>
        <p class="mt-6">
        <a href="#top" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Get started</a>
        </p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">${configuration.statistic1.text}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">${configuration.statistic1.metric}</dd>
        </div>
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">${configuration.statistic2.text}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">${configuration.statistic2.metric}</dd>
        </div>
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">${configuration.statistic3.text}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">${configuration.statistic3.metric}</dd>
        </div>
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">${configuration.statistic4.text}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">${configuration.statistic4.metric}</dd>
        </div>
      </dl>
    </div>
  </div>
  `;

  render(template, document.getElementById(sectionIdentifier));
}


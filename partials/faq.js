import {html, render} from 'lit-html';
const sectionIdentifier = 'faq';

const configuration = {
  question1: 'What are the rules for naming buckets?',
  question2: 'How does pricing work?',
  question3: 'What are the rules for setting a password?',
  question4: 'How do I find out when Impossible Cloud performs service maintenance?',
};

const template = html`
<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <div class="pt-6">
          <dt>
            <!-- Expand/collapse question button -->
            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
              <span class="text-base font-semibold leading-7">How does Impossible Cloud handle tax collection?</span>
              <span class="ml-6 flex h-7 items-center">
                <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </button>
          </dt>
          <dd class="mt-2 pr-12" id="faq-0">
            <p class="text-base leading-7 text-gray-600">
            Impossible Cloud is provided by <strong>Impossible Cloud GmbH</strong>.
            </p>
            <p class="text-base leading-7 text-gray-600 mt-3">
            If you are a customer in the United States, Impossible Cloud GmbH collects sales tax following your <b>local state regulations</b>.
            </p>
            <p class="text-base leading-7 text-gray-600 mt-3">
            If you are a customer outside the United States, Impossible Cloud GmbH collects VAT following your <b>local country's regulations</b>. Impossible Cloud GmbH determines your home state or country based on the home state or country associated with your payment method.
            </p>
          </dd>
          <dt>
            <!-- Expand/collapse question button -->
            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
              <span class="text-base font-semibold leading-7">${configuration.question1}</span>
              <span class="ml-6 flex h-7 items-center">
                <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </button>
          </dt>
          <dt>
            <!-- Expand/collapse question button -->
            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
              <span class="text-base font-semibold leading-7">${configuration.question2}</span>
              <span class="ml-6 flex h-7 items-center">
                <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </button>
          </dt>
          <dt>
            <!-- Expand/collapse question button -->
            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
              <span class="text-base font-semibold leading-7">${configuration.question3}</span>
              <span class="ml-6 flex h-7 items-center">
                <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </button>
          </dt>
          <dt>
            <!-- Expand/collapse question button -->
            <button type="button" class="flex w-full items-start justify-between text-left text-gray-900" aria-controls="faq-0" aria-expanded="false">
              <span class="text-base font-semibold leading-7">${configuration.question4}</span>
              <span class="ml-6 flex h-7 items-center">
                <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </button>
          </dt>

        </div>

        <!-- More questions... -->
      </dl>
    </div>
  </div>
</div>
`;

render(template, document.getElementById(sectionIdentifier));
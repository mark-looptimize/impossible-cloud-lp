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
              <div class="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" class="inline-flex space-x-6">
                  <span class="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10">${configuration.microcopy1}</span>
                  <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>${configuration.microcopy2}</span>
                  </span>
                </a>
              </div>
              <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${configuration.headline}</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">${configuration.text}</p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">${configuration.button1}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>
          <div class="shadow-lg md:rounded-3xl mt-24 sm:mt-32 lg:mt-16">
            <div class="bg-green-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div>
              <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">Terminal</div>
                      </div>
                    </div>
                    <div class="px-6 pb-14 pt-6">
                      <code class="text-white">
                      <span class="text-gray-300">> # Install CLI</span><br>
                        <span class="text-green-300">curl</span> "https://awscli.amazonaws.com/awscli-exe-x86_64.zip"<br>
                        <span class="text-green-300">unzip</span> "awscli-exe-x86_64.zip"<br>
                        <span class="text-green-300">sudo</span> ./aws/install<br>
                        <span class="text-gray-300">> # Configure</span><br>
                        <span class="text-green-300">aws</span> configure --profile=impossiblecloud<br>
                        <span class="text-gray-300">> # Upload</span><br>
                        <span class="text-green-300">aws</span> s3 --profile=impossiblecloud \\<br>
                        --endpoint=us-west-1.storage.impossibleapi.net cp backup.zip
                      </code>
                    </div>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
    </div>
  </div>
  `;

  render(template, document.getElementById(sectionIdentifier));
}


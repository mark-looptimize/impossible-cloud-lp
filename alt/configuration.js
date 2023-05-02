import {html} from 'lit-html';

const tick = html`<svg class="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>`;

export const pageConfiguration = {
  advantagesConfig: {
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
  },
  salesEmailConfig: {
    headline: 'Still have questions?',
    subHeadline: 'Leave your email and we will get in touch'
  },
  faqConfig: {
    q1: 'What is Object Storage?',
    q2: 'How does Object Storage Work?',
    q3: 'Who is eligible for the free trial?',
    q4: 'What are the limitations of the trial?',
    q5: 'What\'s the maximum size for an object?',
    q6: 'What SLA does Impossible Cloud offer for Storage Services?',
    answerText: 'Object storage is a way of storing data as individual units, called objects, rather than as a hierarchy of files and folders. It offers scalability, durability, and cost-effectiveness, making it a popular choice for storing large amounts of unstructured data such as images, videos, and documents.'
  },
  useCaseConfig: {
    subheading: 'Use cases',
    heading: 'How does cloud storage help my business?',
    leadText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
    useCase1: {
      headline: 'Backup and disaster recovery',
      text: 'Safer than a military bunker. Impossible Cloud offers first class disaster recovery systems for those times when things just don\'t go as expected.  Our decentralized, outage-proof environment helps ensure that you\'ll never lose an important file again.'
    },
    useCase2: {
      headline: 'Sensitive data storage',
      text: 'Our industry-leading privacy controls and innovative system architecture ensure that only you have access to your data at all times, making it the ideal solution for your most sensitive data needs.'
    },
    useCase3: {
      headline: 'Ransomware protection',
      text: 'We built Impossible Cloud from the ground up to ensure that your data stays immutable and decentralized to help mitigate against the fastest growing threats in the modern cyber landscape.'
    },
    useCase4: {
      headline: 'Application data',
      text: 'We keep your data located at the edge where your customers are located to help support a whole range of high-performance application centric use cases.'
    },
  },
  complianceConfig: {
    headline: 'Specifically designed to help you meet even the strictest data requirements and regulations.',
    logo1: '../assets/iso-badge.png',
    logo2: '../assets/soc2-badge.png',
    logo3: '../assets/gdpr-ready.png',
    logo4: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d575629309ce5cbd1c5f2f_Group%208.png',
    logo5: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5756303886e3956c31eb1_HIPAA%201.png'
  },
  trialCtaConfig: {
    subHeading: 'Up and running within minutes',
    headline: 'Get started today with a risk-free trial',
    leadText: '',
    buttonText: '',
    statistic1: {
      metric: '30',
      text: 'days'
    },
    statistic2: {
      metric: '$0',
      text: 'No credit card required'
    },
    statistic3: {
      metric: '150 GB',
      text: 'Storage limit'
    },
    statistic4: {
      metric: '150 GB',
      text: 'Data egress'
    },
  },
  featuresConfig: {
    pillText: 'Better storage',
    headline: 'Decentralized & enterprise-grade',
    imagePath: "../assets/product-screenshot.png",
    leadText: 'Impossible Cloud is building and operating a global, enterprise-grade network of data centers optimized for maximum security and performance.',
    feature2: {
      headline: 'Optimized for highest durability',
      text: 'Impossible Cloud Storage is designed for 100% file durability and offers effective ransomware protection with object lock.'
    },
    feature3: {
      headline: 'Outage proof and secure',
      text: 'Impossible Cloud Storage is decentralized to minimize the risk of a single point of failure. Identity and Access Management, triple file encryption, immutable buckets, and object lock ensure industry-leading cloud storage security.'
    },
    feature4: {
      headline: 'Easy to switch with one line of code',
      text: 'S3 API action list compatibility allows you to switch to with a single line of code and continue using your existing scripts.'
    },
  },
  integrationConfig: {
    headline: 'Integrates with all the tools you already know and love',
    productOne: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb5403d12ae293250565_image%206.png',
    productTwo: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb543dc29b3803a65b7b_632441f7bf2fc81432c995b2_Logo-p-500%201.png',
    productThree: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb543933d177c0706859_632441fde4e3ad788b40e260_veeam_logo_topaz-500.png.web.1920%201.png',
    productFour: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb5403d12aed6e25056e_horizontal-logo-monochromatic-white%201.png',
    productFive: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb556f089e1294a958ff_image%2015.png',
    productSix: 'https://uploads-ssl.webflow.com/6246f2caaa889a7764ccbbcc/63d5cb536841085cc6caa79e_image%2016.png'
  },
  softCtaConfig: {
    headline1: 'Ready to dive in?',
    headline2: 'Start your free 30 day trial today.',
    supportingText: 'No credit card required',
    buttonText: 'Get started'
  },
  pricingConfig: {
    headline: 'Simple no-tricks pricing',
    leadText: 'Your business may be unpredictable, but your data costs shouldn\'t be. Avoid billing surprises and benefit from our transparent pricing structure.',
    boxText: 'We all hate hidden fees. Impossible Cloud makes costs predictable. Get easy, scalable and reliable cloud storage at a fair price.',
    price: '$7.99',
    timePeriod: 'per month',
    dataUnit: 'Storage per TB',
    subHeadline: 'Pay only for what you use',
    buttonText: 'See details',
    point1: 'No minimum storage time',
    point2: 'Fair minimum file sizes',
    point3: 'No paying for API calls',
    point4: 'No outrageous egress fees',
    microcopy: 'Discounted rates available for reserved capacity plans and partners.'
  },
  geofencingConfig: {
    pillText: 'Built to operate in a changing global environment',
    headline: 'Designed to meet the needs of global organizations',
    imagePath: "../assets/globe.jpg",
    leadText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.',
    feature1: {
      headline: 'Geofencing Technology',
      text: 'Impossible Cloud provides sophisitcated geofencing technology to help ensure that data for all of our customers stays in servers located where they operate helping you more easily meet regulation requirements.'
    },
    feature2: {
      headline: 'Built in compliance controls',
      text: 'We offer all customers the ability to take advantage of advanced version and object locks on all of their data to meet compliance, governance and legal requirements.'
    },
  },
  heroConfig: {
    headline: 'Amazon S3 compatible object storage at half the price',
    text: html`<ul><li class="flex gap-x-3"> ${tick} 50-75% savings compared to hyperscalers like AWS</li><li class="flex gap-x-3"> ${tick} Full S3 API compatability</li><li class="flex gap-x-3"> ${tick} Get started with just 1 line of code</li></ul>`,
    microcopy1: '',
    microcopy2: '50-75% savings compared to hyperscalers like AWS',
    button1: 'Start a free 30 day trial',
  },
  keyFocusConfig: {
    pillText: 'Storage cost comparison',
    headline: 'Store your data in the cloud without paying a fortune',
    imagePath: "../assets/calculator-2.png",
    leadText: 'Impossible Cloud offers simple and transparent pricing plans including Pay-per-use and Business Plans. All plans offer 50-75% savings compared to hyperscalers.',
    feature1: {
      headline: 'Lower total cost of ownership',
      text: 'Get more for your money with our cost-effective cloud storage solution that delivers up to 75% lower total cost of ownership than other providers.'
    },
    feature2: {
      headline: 'Pay only for what you use',
      text: 'Only pay for what you need with our flexible pay-per-use plan that lets you scale up or down as your business demands change.'
    },
    feature3: {
      headline: 'No hidden fees',
      text: 'Say goodbye to high egress fees and other hidden costs with our affordable and transparent pricing model that puts you in control.'
    },
  }
};


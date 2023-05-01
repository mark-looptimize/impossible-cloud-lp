import {html, render} from 'lit-html';
const sectionIdentifier = 'section-id';

const configuration = {
  name: 'World'
};

const template = html`<h1>Hello ${configuration.name}</h1>`;

render(template, document.getElementById(sectionIdentifier));
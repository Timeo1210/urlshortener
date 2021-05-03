# URLShortener

## What is does

This is a full web application for shorter URLs.
It's write in Typescript and use `git flow`, `Commitizen` and `eslint`
Live project on [littleurl](https://littleurl.cf/)

## Backend

The **Backend** use a hexagonal architecture mainly inspired by [link](https://github.com/Sairyss/domain-driven-hexagon) with mongodb or postgresql database and express server.
A `Dockerfile` is available for docker build

## Frontend

The **Frontend** use next.js, tailwindcss and react-query.

## Installation

### Backend

Setup your backend env variables in `/server/.env` (structure can be find in `/server/.env.example`)
Run:

```bash
yarn install
yarn dev
```

### Frontend

Setup your frontend env variables in `/web/.env.local` (structure can be find in `/web/.env.example`)
Run:

```bash
yarn install
yarn dev
```

## Licence

Distributed under the MIT license. See [`LICENSE.md`](https://github.com/Timeo1210/urlshortener/blob/master/LICENSE.md) for more information.

## Authors

Check me on [Twitter](https://twitter.com/TimeoBoulhol)

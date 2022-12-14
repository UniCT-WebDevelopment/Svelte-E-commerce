<div align="center">
  <a href="https://github.com/khalld">
    <img src="https://avatars.githubusercontent.com/u/37438774?v=4" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Svelte e-commerce demo</h3>

  <p align="center">
    <a href="https://github.com/khalld/svelte-ecommerce"><strong>Original repository</strong></a>
    ¬∑
    <a href="https://github.com/khalld/svelte-ecommerce/issues">Report Bug</a>
    ¬∑
    <a href="https://github.com/khalld/svelte-ecommerce/issues">Request Feature</a>
  </p>
</div>


## About the project

Demo of a real case of ecommerce made for Web programming, Design & Usability (Universit√† degli studi di Catania - Magistrale in Informatica (Curriculum Data Science) A.A. 2022-2023)

<p align="center">

<img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" width=45>
<a href="https://nodejs.org/en/"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" width=45></a> 
<a href="https://expressjs.com/"><img src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" width=45></a>
<a href="https://kit.svelte.dev/"><img src="https://github.com/get-icon/geticon/raw/master/icons/svelte-icon.svg" width=45></a>
<a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"><img src="https://github.com/get-icon/geticon/raw/master/icons/bootstrap.svg" width=45></a>
<a href="https://sass-lang.com/"><img src="https://github.com/get-icon/geticon/raw/master/icons/sass.svg" width=45></a>
<a href="https://vitejs.dev/"><img src="https://github.com/get-icon/geticon/raw/master/icons/vite.svg" width=45></a>

</p>



## Features

- Admin Panel:
    - Creation of Product
    - Order management
    - User views
- Authentication
- Searchbar (on products page)
- Shopping cart management
- Simulation of purchase (it is not necessary to be logged in)
- Order status
- Notify with email for: password recovery, after checkout and when the status of order change
- MongoDb (using <a href="https://cloud.mongodb.com/">MongoDb Cloud</a> )
- Product's image upload

## Libraries

Server side
- Express
- Mongoose to handle database
- Nodemailer to sending emails

Front end side
- SvelteKit
- Bootstrap 5.2 with SASS integration
- i18n (<a href="https://github.com/sveltekit-i18n/lib">sveltekit-i18n</a>)
# Getting started

To run the server side, in this folder:

```bash
npm run dev
```

To run the client side, go to `client` folder and then:

```bash
npm run dev
```

## Requirements

- Node `v16.17.0`

Run Chrome with disabled cors option (OS X)

```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

### Run with Docker

### Build server:

```bash
docker image build . -t <your_dockerhub_name>/<container_name>:tag
```

Run

```bash
docker run -p 4000:3000 <image_name/image_id>
```

Stop

```bash
docker stop -t 10 18d2d8935a4f
```

### Useful links

<ul>
  <li><a href="https://github.com/svelte-add/bootstrap">Add bootstrap to svelte</a></li>
  <li><a href="https://blog.logrocket.com/how-switch-node-js-versions-nvm/">Manage multiple version of Node.js with nvm</a></li>
</ul>


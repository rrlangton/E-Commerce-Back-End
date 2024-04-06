# 13 E-Commerce Back End

## Description

Internet retail, also known as **e-commerce**, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Walk-through videos

The following animation shows the application's functions being tested in Insomnia:

<a> https://app.screencastify.com/v3/watch/Ua3PDUAEBVLdGnYExS6x </a>

## Installation

You’ll need to use the [pg](https://node-postgres.com/) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a PostgreSQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

Use the `schema.sql` file in the `db` folder to create your database with PostgreSQL shell commands. Use environment variables to store sensitive data like your PostgreSQL username, password, and database name.

## Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

## Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the PostgreSQL database on server start.

### GitHub Repo containing application code

<a> https://github.com/rrlangton/E-Commerce-Back-End </a>

### Sources

 Module 13 mini-project helped with writing the routes and tutoring sessions helped with testing in insomnia



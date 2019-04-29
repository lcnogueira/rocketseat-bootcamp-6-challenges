# Challenge 3 - Marketplace App (Third Node Module)

## Description

You should improve the Marketplace App by developing the following features:

- Store the purchase aim (Purchase) on MongoDB by creating a Model and saving the purchase data through the `store` method on PurchaseController;
- Create a new route so that the seller can accept a purchase purpose by setting the item as sold. From this moment on, the ad shouldn't be listed and a purchase aim can't be realized anymore for the ad;
- The ad should include an additional field called `purchasedBy`, which stores the `Purchase` ID that the seller has accepted. If this field exists, it means the ad was sold.

## How to test the API server

1. Install the project dependencies: `yarn install`;
2. Create an account on [mailtrap.io](<[http](https://mailtrap.io/)>) and on `sentry.io`, set a database and a redis server and fill in the fields in the `.env.example` file accordingly;
3. Rename the `.env.example` file to `.env`;
4. Run `yarn start` to start the API server.

The API server will be available at `localhost:3000`.

You can use a tool like [Insomnia](https://insomnia.rest/) to make http requests to the server :bulb:. The API server doesn't have route documentation up to this moment. However, you can take a look at the `routes.js` file in the root folder if you need more information.

### Skills

NodeJs, Express, Sentry, Redis and Kue, JWT, MongoDB, Nodemailer.

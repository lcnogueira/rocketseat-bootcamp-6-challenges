# Challenge 4 - Adonis Events API (Forth Node Module)

For this challenge, you should create a REST API by using AdonisJS to schedule events.

## Requirements

- The user should be able to:
  - Create an account with name, email, and password;
  - Authenticate himself with his email and password;
  - Update his name and password, by inserting the old password, new password, and password confirmation;
  - Register events with title, localization, date and time;
  - List events by date;
  - Delete an event;
  - Share an event by providing the recipient email. The recipient should receive all the event information by email
- Use `Redis` to queue the e-mails that have to be sent;
- The user e-mail should be unique;
- The user shouldn't be able to register 2 events at the same date and time;
- The user can only see/edit/delete the own events;
- The user can't edit/delete a past event;
- All the fields should be validated and return readable messages.

## How to start the API

1. Clone the project;
2. Fill in the fields in the `.env.example` file;
3. Rename the `.env.example` file to `env`;
4. Install the project dependencies: `npm install`;
5. Start the server: `npm dev` (or `adonis serve --dev`);
6. Start an instance of the job listener: `adonis kue:listen`.
7. Send requests to the API address set in the `.env` file (`localhost:3333` by default).

## Running the tests

You can do `npm test` or `adonis test` to run the tests.

### Skills

NodeJS, AdonisJS, Redis, Sentry, JWT.

## Preview

### Adonis

This project was bootstrapped with [Adonisjs Framework](https://adonisjs.com/).

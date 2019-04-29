const kue = require('kue');
const Sentry = require('@sentry/node');
const redisConfig = require('../../config/redis');
const jobs = require('../jobs');

// Creates a jobs queue
const Queue = kue.createQueue({ redis: redisConfig });

// Process the queue for all the jobs that has the "key". For every job, call the "handle"
Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle);

// If there is an error when sending an email, log it on sentry
Queue.on('error', Sentry.captureException);

module.exports = Queue;

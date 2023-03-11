'use strict';

/**
 * garage-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::garage-service.garage-service');

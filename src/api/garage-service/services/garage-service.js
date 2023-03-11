'use strict';

/**
 * garage-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::garage-service.garage-service');

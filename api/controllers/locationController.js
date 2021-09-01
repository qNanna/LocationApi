import chalk from 'chalk';

import locationService from '../../services/locationService';

class LocationController {
  async transferLocation(req, res, next) {
    try {
      const result = await locationService.transferLocation(req.query.address);
      res.json(result);
    } catch (err) {
      console.error(chalk.red(err));
      next(err);
    }
  }
}

export default new LocationController();

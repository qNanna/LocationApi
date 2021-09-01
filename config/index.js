import dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3052,
  locationLqAPIUrl: process.env.LOCATIONLQ_API_URL || 'https://eu1.locationiq.com/v1/search.php?key=*KEY&q="*ADRESS"&format=json',
  locationLqAPIKey: process.env.LOCATIONLQ_API_KEY || 'pk.159a6a2e31219ffa77b5562a34bc3b5c',
};

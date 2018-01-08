import { Router } from 'express';
import * as Listing from './controllers/listing_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Hackactivity 1!' });
});

// on routes that end in /posts
// ----------------------------------------------------
router.route('/listing/')
      .post(Listing.addListing)
      .get(Listing.getAllListings);

router.route('/listing/:id')
      .put(Listing.favoriteListing)
      .get(Listing.getListing);

export default router;

import { Router } from 'express';
import * as Listing from './controllers/listing_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Hackactivity 1!' });
});

// on routes that end in /posts
// ----------------------------------------------------
router.route('/listing/')
      .get(Listing.getAllListings);

router.route('/listing/:id')
      .get(Listing.getListing)
      .post(Listing.addListing);

router.route('/listing/favorite/:id')
      .put(Listing.favoriteListing);

export default router;

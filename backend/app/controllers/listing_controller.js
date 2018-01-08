import Listing from '../models/listing_model';

function hasProps(props, obj) {
  for (let i = 0; i < props.length; i += 1) {
    const prop = props[i];

    if (!Object.prototype.hasOwnProperty.call(obj, prop)) { return false; }
  }

  return true;
}

export const addListing = (req, res) => {
  if (!hasProps(['title', 'price'], req.query)) {
    res.json({ error: 'Listings need a \'title\' and a \'price\'.' });
  } else {
    const { title, price } = req.query;
    const listing = new Listing();

    let msg = `Successfully added listing with title '${title}' and price $${price} (`;

    Object.assign(listing, { title, price });

    if (hasProps(['favorite'], req.query)) {
      const { favorite } = req.query;

      Object.assign(listing, { favorite });

      if (!favorite) {
        msg += 'not ';
      }
    } else {
      msg += 'not ';
    }

    msg += 'favorite).';

    listing.save()
    .then(({ _id }) => {
      res.json({ msg, id: _id });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
  }
};

export const getListing = (req, res) => {
  if (!hasProps(['id'], req.params)) {
    res.json({ error: 'Listing id not specified.' });
  } else {
    const { id } = req.params;

    Listing.findById(id)
    .then(listing => {
      const msg = `Found matching listing for id ${id} with title '${listing.title}' and price $${listing.price}.`;

      res.json({ msg, listing, id });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
  }
};

export const getAllListings = (req, res) => {
  Listing.find()
  .then(listings => {
    const n = listings.length;
    const msg = `Found ${n} listing${n === 1 ? '' : 's'}.`;

    res.json({ msg, listings });
  })
  .catch(err => {
    res.json({ error: err.message });
  });
};

export const favoriteListing = (req, res) => {
  if (!hasProps(['id'], req.params)) {
    res.json({ error: 'Listing id not specified.' });
  } else {
    const { id } = req.params;

    Listing.findById(id)
    .then(listing => (
      Listing.update({ _id: id }, { favorite: !listing.favorite })
    ))
    .then(response => {
      const { nModified } = response;
      const msg = `Updated ${nModified} document${nModified === 1 ? '' : 's'}.`;

      res.json({ msg, id });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
  }
};

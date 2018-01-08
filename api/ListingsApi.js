const listings = [
{
  "id": 1, 
  "title": "backpack",
  "price": 10, 
  "favorite": false
}, {
  "id": 2, 
  "title": "binoculars", 
  "price": 80, 
  "favorite": false
}, {
  "id": 3,
  "title": "chucks", 
  "price": 30,
  "favorite": false
}, {
  "id": 4,
  "title": "flippers", 
  "price": 10,
  "favorite": false
}, {
  "id": 5,
  "title": "heels", 
  "price": 50,
  "favorite": false
}];

class ListingsApi {
    // return all listings as an array of objects, see const listings above (expected to be in that format) 
    static getAllListings() {
        return new Promise((resolve, reject) => setTimeout(() => resolve(listings)), 1200);
    }
    
    // add listing to database
    static addListing(listing) {
      
    }
    
    // favorite listing with this id, change favorite to true 
    static favoriteListing(id) {
      
    }
    
}

export default ListingsApi;
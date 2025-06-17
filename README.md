
# Sekatsukan Ecommerce Platform

> Ecommerce full stack app built with Mongo DB, React, Node Js, Express & Redux.
>
<a ><img src="https://github.com/mitsumoristudio/sekatsukan-Ecommerce-App/blob/main/home.png" width= "1080" height = "600" /></a>

### Link
> https://www.sekatsukan.org
>
> This project was built from inspiration from Muji USA (Apparel and Furniture Company)

## Key Features
- Fully featured shopping cart
- Product Reviews and Ratings
- Product Pagination
- Product Search Features
- Authentication with user profile of orders placed
- Admin product management functionality
- Admin authenticated user management
- Authentication with JSON web token and caching user data
- Admin Order detail page
- Shipping and Tax input
- Checkout process (shipping, payment method, confirmation)
- Paypal/ Credit Card Integration
- Security features, and end-to-end testing

More details can be found [here](https://github.com/mitsumoristudio/sekatsukan-Ecommerce-App/blob/main/README_APP_FEATURES.md)

- ## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

  

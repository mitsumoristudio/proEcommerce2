
## Core Features of E-Commerce Application
1) Add to Cart
   * User can add products and specify quantity
   * The cart temporarily stores in cache when the user is autheticated and clears when user logs out
2) View Cart
   User can see when a item is added
   * Product name
   * Description
   * Brand
   * Image
   * Price
   * Subtotal
   * Total
   * Quantity
3) Update Cart
   * User can increase/decrease cart quantity
   * Remove Items
   * Updated prices are feed automatically
5) Persist Cart State
   * Cart contents are remembered even if the user navigates away or closes the browser (localStorage)
6) Apply Shipping and Tax Calculations
   * Cart should dynamically calculate shipping cost and taxes
7) Proceed to Checkout
    * The cart leads to a checkout page where users:
        * Enter shipping information
        * Choose shipping method
        * Enter payment details (credit card is processed through Paypal sandbox)
8) Cache (Save) Cart state for later
   * Redux manages the users state by caching the cart information so the cart can be viewed later
   * User must be registered in order to proceed through checkout.
9) Cart Security
    * Protext cart data with secure HTTPS connections
    * Validate cart data server-side before payment
10) Navigation Bar mini-cart dropdown button
    * A small cart summary accesible from home page. 
      

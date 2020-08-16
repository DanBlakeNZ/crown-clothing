export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // An item has already been added to the cart.
    // Matches the existingCartItem and returns raises the quantity + 1.
    // Returns a new array with all cart items.
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // This will run the first time an item is added to the cart.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

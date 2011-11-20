# In JavaScript, the this keyword is dynamically scoped to mean the object that
# the current function is attached to. If you pass a function as a callback or
# attach it to a different object, the original value of this will be lost. If
# you're not familiar with this behavior, this Digital Web article gives a good
# overview of the quirks.

#The fat arrow => can be used to both define a function, and to bind it to the
#current value of this, right on the spot. This is helpful when using
#callback-based libraries like Prototype or jQuery, for creating iterator
#functions to pass to each, or event-handler functions to use with bind.
#    Functions created with the fat arrow are able to access properties of the
#    this where they're defined.

Account = (customer, cart) ->
  @customer = customer
  @cart = cart

  $('.shopping_cart').bind 'click', (event) =>
    @customer.purchase @cart


# If we had used -> in the callback above, @customer would have referred to the
# undefined "customer" property of the DOM element, and trying to call
# purchase() on it would have raised an exception.
#
#

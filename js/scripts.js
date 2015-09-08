var factorial = function(bob) {
  if (bob == 0) {
    return 1;
  } else {
    return bob * factorial(bob - 1)
  }
};

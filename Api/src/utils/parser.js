exports.parseUser = (user) => {
  return {
    id: user._id,
    email: user.email,
    isVerified: user.isVerified,
  };
};

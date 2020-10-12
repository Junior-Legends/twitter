exports.login = async (req, res, next) => {
  try {
    res.send("login user");
  } catch (error) {
    console.log(error);
  }
};

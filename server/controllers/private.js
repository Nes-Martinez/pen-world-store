const getPrivateInfo = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: "Acess to data authorized",
  });
};

module.exports = {
  getPrivateInfo,
};

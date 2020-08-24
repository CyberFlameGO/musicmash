const errorMiddleware = (err, req, res, next) => {
  return res
    .status(500)
    .json({
      status: 500,
      message: 'An unknown error occurred'
    })
}

module.exports = errorMiddleware

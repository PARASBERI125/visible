function asyncHandler(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  }; //instead of writing try catch at every place where async await function is being used we once and for all channelize all the errors and resolve it by passing that function to asynchandler
}

export { asyncHandler };

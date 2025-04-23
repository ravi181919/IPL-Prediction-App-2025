export const serverErrorHandler = (req, res, error) => {
  try {
    if (error.message) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error", error: error });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Error :: serverErrorHandler",
        error: error.message,
      });
  }
};

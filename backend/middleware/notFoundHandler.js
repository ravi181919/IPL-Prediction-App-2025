export const notFoundHandler = (error) => {
    try {
      if (error.message) {
        res
          .status(404)
          .json({ message: "Not Found", error: error.message });
      } else {
        res.status(404).json({ message: "Not Found", error: error });
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
  
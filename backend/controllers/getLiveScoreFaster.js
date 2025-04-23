import {instance} from "../utils/axios.js";

const fastLiveScore = async (req, res) => {
  try {
    const { data } = await instance.get("/ipl-2025-live-score-s3");
    res.status(200).json({ message: "Fast Live Score data", data: data });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server Internal Error :: Fast Live score",
        error: error.message,
      });
  }
};

export default fastLiveScore;

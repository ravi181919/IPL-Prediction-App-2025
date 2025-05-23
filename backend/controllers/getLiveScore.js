import {instance} from "../utils/axios.js";

const liveScore = async (req, res) => {
  try {
    const { data } = await instance.get("/ipl-2025-live-score");
    res.status(200).json({ message: "Live Score data", data: data });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server Internal Error :: Live score",
        error: error.message,
      });
  }
};

export default liveScore;

import { predictMatchInstance } from "../utils/axios.js";

const predictMatch = async (req, res) => {
  try {
    const {
      batting_team,
      bowling_team,
      city,
      total_runs,
      current_score,
      wickets,
      overs_completed,
    } = req.body;

    const { data } = await predictMatchInstance.post("/", {
      batting_team,
      bowling_team,
      city,
      total_runs,
      current_score,
      wickets,
      overs_completed,
    });
    if (data) {
      res.status(200).json({ message: "Predicted Team", data: data });
    } else {
      res.status(404).json({ message: "Predicted Team found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error :: predict match",
      error: error.message,
    });
  }
};
export default predictMatch;

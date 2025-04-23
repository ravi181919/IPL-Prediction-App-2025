import {instance} from "../utils/axios.js";

const winnersTeams = async (req, res) => {
  try {
    const { data } = await instance.get("/ipl-winners");
    res.status(200).json({ message: "ipl winner teams data", data: data });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server Internal Error :: Winner teams",
        error: error.message,
      });
  }
};

export default winnersTeams;


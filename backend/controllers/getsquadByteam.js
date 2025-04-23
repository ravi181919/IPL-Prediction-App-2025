import instance from "../utils/axios.js";
const teamByTeamName = async (req, res) => {
  try {
    const teamName = req.query.term;
    const { data } = await instance.get(`/squad/${teamName}`);
    res.status(200).json({ message: "Team data", data: data });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Server internal Error :: teamByTeamName",
        error: error.message,
      });
  }
};

export default teamByTeamName;

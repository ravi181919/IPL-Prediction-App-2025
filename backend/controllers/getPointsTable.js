import {instance} from "../utils/axios.js";

const pointTable = async (req, res) => {
    try {
        const {data} = await instance.get('/ipl-2025-points-table');
         res.status(200).json({message: "schedule data", data: data})
    } catch (error) {
        res.status(500).json({message: "Not Found schedule data", error: error.message})
    }
}
export default pointTable;
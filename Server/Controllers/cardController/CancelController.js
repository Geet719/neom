const pool = require("../../Config/database");
require("dotenv").config();

const CancelController=async(req,res)=>{
    const {user_id,card_id}=req.body;
    
    try {
        const cancelQuery=`DELETE FROM user_schedule_events WHERE user_id=$1 AND card_id=$2;`;
        const {rowCount}=await pool.query(cancelQuery,[user_id,card_id]);
        if(rowCount>0){
            return res.json({ success: true, message: "event deleted" });
        }else{
            return res.json({ success: false, message: "event not found" });
        }
    } catch (error) {
        return res.json({ success: false, message: "event not deleted" });
    }
}

module.exports=CancelController;
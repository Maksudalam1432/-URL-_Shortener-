import shortid from "shortid"
import User from "../model/User.js"
 export const   handleGenerateNewUrl= async (req,res)=>{
     try{  

        const bodyurl=req.body;
        if(!bodyurl.url){
             return res.status(400).json({message:"url is reqiured"})
        }
        const Shortid0=shortid(8)
        await User.create ({
            shortId:Shortid0,
            redirectUrl:bodyurl.url,
          visitHistory:[],
        })
        return res.status(201).json({id:Shortid0})

     } catch(error){
      return  res.status(400).json({message:"error"})
     }
}

export const handleGet = async (req, res) => {
  try {
    const shortId = req.params.shortid;

    const result = await User.findOne({ shortId });

    

    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

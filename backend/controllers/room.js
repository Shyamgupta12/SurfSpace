export const createRoom = async(req,res) =>{
    //testing resources access
    res.status(201).json({success:true,result:{id:123,title:'test room'}})
}
import { NextApiRequest, NextApiResponse } from "next";
import { connectToMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToMongoDB().catch((err) => res.json(err));
    
    if(req.method == 'DELETE'){
        const id = req.query.id;

        try {
            const deletedUser = await User.findByIdAndDelete(id)

            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
        
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch(error){
            return res.status(500).json({ error: 'Failed to delete user' });
        }
    }
    else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

export default handler
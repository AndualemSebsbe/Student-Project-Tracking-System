import { NextApiRequest, NextApiResponse } from "next"
import { connectToMongoDB } from "../../../lib/mongodb"
import User from "../../../models/user";
import { FormData } from "../../../types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToMongoDB().catch((err) => res.json(err));

    const {_id} = req.query
    const { fullName, email, username, password, role }: FormData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
          _id,
          {
            fullName,
            email,
            username,
            password,
            role,
          },
          { new: true }
        );

        if (!updatedUser) {
          return res.status(404).json({ error: 'Student not found' });
        }

        return res.status(200).json({ user: updatedUser });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to update student' });
      }
}

export default handler
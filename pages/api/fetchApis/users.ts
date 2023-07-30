import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/user';
import { connectToMongoDB } from '../../../lib/mongodb';
async function getUserHandler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  try {
    await connectToMongoDB()
    const user = await User.findOne({username});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user by username' });
  }
}

export default getUserHandler;

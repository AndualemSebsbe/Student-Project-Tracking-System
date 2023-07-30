import { NextApiRequest, NextApiResponse } from "next";
import Project from "../../../models/projects";
import { connectToMongoDB } from "../../../lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'GET') {
      try {
        await connectToMongoDB(); // Connect to MongoDB
  
        const projects = await Project.find();
        res.status(200).json(projects);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error occurred' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}
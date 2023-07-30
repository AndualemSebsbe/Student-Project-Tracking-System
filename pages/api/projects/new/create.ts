import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Project, { ProjectDocument} from "../../../../models/projects";
import { connectToMongoDB } from "../../../../lib/mongodb";
import multer from "multer";
// import formidable, {IncomingForm} from "formidable";
import fs from 'fs'
import path from "path";
import mongoose from "mongoose";

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const filename = file.fieldname + '-' + uniqueSuffix + extension;
    cb(null, filename);
  },
});

const upload = multer({ storage })
export const config = {
  api: {
    bodyParser: false
  }
}

const uploadHandler = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 },
]);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await connectToMongoDB(); // Connect to MongoDB

      uploadHandler(req, res, async function (err: any) {
        if (err instanceof multer.MulterError) {
          console.error(err);
          return res.status(500).json({ message: 'Multer error occurred' });
        } else if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Unknown error occurred' });
        }

        const { projectTitle, description, academicYear } = req.body;

        const imageFile = req.files['image'] ? req.files['image'][0] : null;
        const pdfFile = req.files['pdf'] ? req.files['pdf'][0] : null;

        // Save project to MongoDB using Mongoose
        const project = new Project({
          projectTitle,
          description,
          academicYear,
          image: imageFile ? imageFile.filename : null,
          pdf: pdfFile ? pdfFile.filename : null,
        });
        await project.save();

        return res.status(200).json({ message: 'Project uploaded successfully' });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// export default async function uploadHandler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.status(405).json({ error: 'Method Not Allowed' });
//     return;
//   }

//   const form = new IncomingForm();
//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to parse form data' });
//       return;
//     }

//     const { projectTitle, description, academicYear }: Partial<ProjectDocument> = fields;
//     const imageFile = files.image as formidable.File;
//     const pdfFile = files.pdf as formidable.File;

//     const connection = await connectToMongoDB();

//     try {
//       const project: ProjectDocument = await Project.create({
//         projectTitle,
//         description,
//         academicYear,
//         image: imageFile.name,
//         pdf: pdfFile.name,
//       });

//       const imageBucket = new mongoose.mongo.GridFSBucket(connection.db, {
//         bucketName: 'images',
//       });

//       const pdfBucket = new mongoose.mongo.GridFSBucket(connection.db, {
//         bucketName: 'pdfs',
//       });

//       const imageUploadStream = imageBucket.openUploadStream(imageFile.name);
//       const pdfUploadStream = pdfBucket.openUploadStream(pdfFile.name);

//       const imageReadStream = fs.createReadStream(imageFile.path);
//       const pdfReadStream = fs.createReadStream(pdfFile.path);

//       const imageUploadPromise = new Promise<void>((resolve, reject) => {
//         imageUploadStream.once("finish", resolve);
//         imageUploadStream.once("error", reject);
//       });

//       const pdfUploadPromise = new Promise<void>((resolve, reject) => {
//         pdfUploadStream.once("finish", resolve);
//         pdfUploadStream.once("error", reject);
//       });

//       imageReadStream.pipe(imageUploadStream);
//       pdfReadStream.pipe(pdfUploadStream);

//       await Promise.all([imageUploadPromise, pdfUploadPromise]);

//       res.status(200).json({ success: true });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to upload project' });
//     } finally {
//       // Clean up temporary files
//       if (imageFile && imageFile.path) {
//         fs.unlinkSync(imageFile.path);
//       }
//       if (pdfFile && pdfFile.path) {
//         fs.unlinkSync(pdfFile.path);
//       }
//     }
//   });

//   // Make sure to include a default response in case the form parsing callback does not execute
//   res.status(201).json({ success: false });
// }


// export default async function uploadHandler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.status(405).end(); // Method Not Allowed
//     return;
//   }

//   const form = new formidable.IncomingForm();

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       res.status(400).json({ error: 'Failed to parse form data' });
//       return;
//     }

//     const projectData: Partial<ProjectDocument> = {
//       projectTitle: fields.projectTitle as string,
//       description: fields.description as string,
//       academicYear: parseInt(fields.academicYear as string, 10),
//     };

//     // Move the uploaded files to a desired location (e.g., /public/uploads)
//     const imageFile = files.image as formidable.File;
//     const pdfFile = files.pdf as formidable.File;

//     const imageFilename = imageFile.name;
//     const pdfFilename = pdfFile.name;

//     const imageFilePath = `/public/uploads/${imageFilename}`;
//     const pdfFilePath = `/public/uploads/${pdfFilename}`;

//     // Save the project data to MongoDB
//     try {
//       await connectToMongoDB();
//       const project = await Project.create({
//         ...projectData,
//         image: imageFilePath,
//         pdf: pdfFilePath,
//       });

//       // Move the files to the desired location
//       fs.renameSync(imageFile.path, `.${imageFilePath}`);
//       fs.renameSync(pdfFile.path, `.${pdfFilePath}`);

//       res.status(200).json({ message: 'Project uploaded successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to upload project' });
//     }
//   });
// }











// const mongoDB_URI = process.env.MONGODB_URI
// const conn = mongoose.createConnection(mongoDB_URI, { serverSelectionTimeoutMS: 30000, });

// let gfs
// conn.once('open', () => {
//   gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//     bucketName: 'uploads' // Name of the bucket where the files will be stored
//   });
// });

// const storage = new GridFsStorage({
//   url: mongoDB_URI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//       const extension = path.extname(file.originalname);
//       const filename = `${uniqueSuffix}${extension}`;

//       const fileInfo = {
//         filename: filename,
//         bucketName: 'uploads' // Same as the bucketName above
//       };

//       resolve(fileInfo);
//     });
//   }
// });

// const upload = multer({ storage })

// const  handler: NextApiHandler = async(req: NextApiRequest, res: NextApiResponse) =>{

//     try {
//       upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }])(req, res, (err: any) => {
//         if (err) {
//           return res.status(400).json({ error: err.message });
//         }

//         const { projectTitle, description, academicYear } = req.body;

//         const imageFileName = req.files['image'][0].filename;
//         const pdfFileName = req.files['pdf'][0].filename;

//         const project: ProjectDocument = Project.create(
//           {
//           projectTitle,
//           description,
//           academicYear,
//           image: imageFileName,
//           pdf: pdfFileName
//           },
//           {
//             maxTimeMs: 30000
//           }
//         );

//         return res.status(200).json({ message: 'Project uploaded successfully', project });
//       });

//     }catch(error){
//       return res.status(500).json({ error: error.message });
//     }

// }

// // const uploadMiddleware = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }])
// export default handler;

// export { config }
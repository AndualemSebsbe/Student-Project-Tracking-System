import { Schema, models, model, Model, Document} from "mongoose";

export interface ProjectDocument extends Document {
  projectTitle: string;
  description: string;
  academicYear: string;
  image: string | null;
  pdf: string | null;
}

const projectSchema = new Schema<ProjectDocument>(
  {
    projectTitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    academicYear: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    pdf: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Project: Model<ProjectDocument> = models.Project || model<ProjectDocument>('Project', projectSchema);
export default Project
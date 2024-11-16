import { Schema, models, model } from "mongoose";

// interface Submission {
//   friendName: string;
//   crushName: string;
//   submittedAt: Date;
// }

const SubmissionSchema = new Schema({
  friendName: { type: String, required: true },
  crushName: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const crushSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    user: { type: "string", required: true },
    submissions: { type: [SubmissionSchema], default: [] },
  },

  { timestamps: true }
);

const Crush = models.Crush || model('Crush', crushSchema);

export default Crush;;


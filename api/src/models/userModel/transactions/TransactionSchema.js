import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      require: true,
    },

    type: {
      type: String,
      require: true,
    },

    title: {
      type: String,
      require: true,
    },

    amount: {
      type: Number,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

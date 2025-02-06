import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";

// Define an interface for the User schema
export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (enteredPassword: string) => Promise<boolean>;
}

// Define the schema
const UserSchema: Schema<IUser> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving the user
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Define the comparePassword method
UserSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
  return bcrypt.compare(enteredPassword, this.password);
};

// Export the model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
})

userSchema.pre("save", async () => {
    if (!this.isModified('password')) return;

    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;
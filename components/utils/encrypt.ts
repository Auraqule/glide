import bcrypt from "bcryptjs";

// Generate a random salt
const salt = bcrypt.genSaltSync(10);

// Hash the password with the salt
const hashPassword = (password: string) => {
  return { password: bcrypt.hashSync(password, salt), salt };
};

export default hashPassword;

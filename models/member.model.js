import bcrypt from "bcrypt";
import { Member } from "./schemas/member.mongo.js";
class MemberModel {
  async encryptPassword() {
    const saltRounds = 12;
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
    return hash;
  }

  async registerAccount() {
    const { username } = this;
    const failureMsg = [403, `user already exist`];
    const existingUser = await Member.findOne({ username });
    existingUser && scream(...failureMsg);
    await this.encryptPassword();
    return await this.save();
  }

  static async validateCredentials({ username, password }) {
    const nonExistingUser = [404, `such a user doesn't exist`];
    const user = await Member.findOne({ username });
    !user && scream(...nonExistingUser);
      const isValid = await bcrypt.compare(password, user.password);
      console.log(isValid);

      return isValid ? [true, user] : [false, user];
  }
}

export { MemberModel };

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
    await this.encryptPassword();
    return await this.save();
  }

  static async validateCredentials({ username, password }) {
    const nonExistingUser = [404, `such a user doesn't exist`];
    const user = await Member.findOne({ username });
    !user && scream(...nonExistingUser);
    return await bcrypt.compare(password, user.password);
  }
}

export { MemberModel };

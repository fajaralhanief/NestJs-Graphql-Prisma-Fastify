import { compare, hash } from "bcrypt";

export class AuthHelper {
    static validate(pass : string, hashedPass : string): Promise<boolean>{
        return compare(pass,hashedPass);
    }

    static hash(pass:string): Promise<string>{
        return hash(pass, 10);
    }
}
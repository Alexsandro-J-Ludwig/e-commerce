import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity.js";
import { Repository } from "typeorm";

@Injectable()
export class UserProvider {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    createUser(user: any) {
        return this.userRepository.create(user);
    }
}
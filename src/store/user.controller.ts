import { Controller, HttpStatus, Post, Req, Inject } from "@nestjs/common";
import { UserProvider } from "./user.service.js";
import { Repository } from "typeorm";
import { User } from "./user.entity.js";

@Controller('')
export class UserController {
    provider: UserProvider;
    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: Repository<User>) {
        this.provider = new UserProvider(this.userRepository);
    }

    @Post('/users/create')
    createUser(@Req() body: Request) {
        const response = this.provider.createUser(body);
        return response;
    }
}
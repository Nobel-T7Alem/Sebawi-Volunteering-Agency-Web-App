/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Posts } from './schemas/posts.schema';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
export declare class PostsService {
    private readonly postsModel;
    constructor(postsModel: Model<Posts>);
    createPosts(posts: Posts, user: User): Promise<Posts>;
    readPosts(): Promise<void | (import("mongoose").Document<unknown, {}, Posts> & Posts & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll(): Promise<Posts[]>;
    findById(id: string): Promise<Posts>;
    updatePosts(id: string, posts: Posts): Promise<Posts>;
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import path from "path";
import { projectPath } from 'projectPath';

export default class UsersController {
    public async index({params, response}:HttpContextContract){

        return {image: path.join(projectPath, `/static/images`), levelaccess: "admin"}
    }
}

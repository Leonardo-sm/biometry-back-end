// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { data } from "../../../data/agricula";

export default class PublicsController {
    public async index(){
        return await data;
    }
}

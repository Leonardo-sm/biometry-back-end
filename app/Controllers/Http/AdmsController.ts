import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { data } from "../../../data/supervisor";

export default class AdmsController {
    public async index({params, response}:HttpContextContract){
        if(params.id === "admin" || params.id === "minister"){
            return await data;
        } else{
            response.status(401);
        }
    }
}

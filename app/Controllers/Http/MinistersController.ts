import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { data } from "../../../data/pesticide";

export default class MinistersController {
    public async index({params, response}:HttpContextContract){
        if(params.id === "minister"){
            return await data;
        } else{
            response.status(401);
        }
    }
}

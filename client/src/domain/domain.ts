import {Method} from "axios";

export interface Irequest {
    route: string
    data: object|undefined
    params:object|undefined
    method:Method
}

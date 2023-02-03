import { isObject } from "../utils/validation";
import { Question } from "./question";

class Feedback {
    id?: string | undefined;
    status: number; // chưa xử lý, đã xử lý
    idQuestion : string | undefined;
    idCourse: string | undefined;
    dataQuestion: Question | null;
    type : number | null; // loại feedback , 
    content: string;
    createDate?: number;
    updateDate?: number

    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.status = args?.status ?? 0; 
        this.idQuestion = isObject(args.idQuestion) ? new Question(args.idQuestion)?.id : (args?.idQuestion ?? undefined);
        this.dataQuestion = isObject(args.idQuestion) ? new Question(args.idQuestion) : null; 
        this.type = args?.type ?? null;
        this.content = args?.content ?? '';
        this.idCourse = args?.idCourse ?? undefined; 
        this.createDate = args?.createDate ?? undefined
        this.updateDate = args?.updateDate ?? undefined
    }
}

export { Feedback }
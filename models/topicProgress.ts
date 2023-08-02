import TTCSconfig from "../common/config";

class TopicProgress {
    _id?: string;
    idTopic?: string;
    idUser?: string;
    status: number; // trạng thái đã học, chưa học, đang học
    timeStudy: number | null; // thời gian học bài đó (tính bằng giây)
    score: number;
    correctQuestion: number;
    answers: {
        idQuestion: string,
        idAnswer: string
    }[];
    lastUpdate: number | null;
    createDate: number | null

    constructor(args?: any) {
        if (!args) {
            args = {}
        }
        this._id = args._id ?? undefined;
        this.idTopic = args.idTopic ?? undefined;
        this.idUser = args.idUser ?? undefined;
        this.status = args.status ?? TTCSconfig.STATUS_LEARN_NONE;
        this.timeStudy = args.timeStudy ?? null;
        this.score = args.score ?? 0;
        this.correctQuestion = args.correctQuestion ?? 0;
        this.answers = args.answers ?? [];
        this.lastUpdate = args.lastUpdate ?? null;
        this.createDate = args.createDate ?? null
    }
}

export { TopicProgress }
class Question {
    id: string | undefined;
    question: string;
    result: {
        index: number,
        text: string
    }[]; // đáp án đúng: có thể có nhiều đáp án đúng
    answer: {
        index: number,
        text: string
    }[]; // đáp án,
    questionChild : string[] | undefined;
    parentId: string|undefined;
    status: number;
    idTopic : string | undefined;
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?: any) {
        this.id = args?._id ?? undefined;
        this.question = args?.question ?? '';
        this.result = args?.result ?? [];
        this.answer = args?.answer ?? [];
        this.status = args?.status ?? 0; 
        this.idTopic = args?.idCourse ?? undefined;
        this.questionChild = args?.questionChild ?? undefined;
        this.parentId = args?.parentId ?? undefined;
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }

}

export { Question };
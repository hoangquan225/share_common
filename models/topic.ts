class Topic { 
    id?: string | undefined; 
    name: string; 
    status: number; 
    idCourse: string; 
    topicChild: string[];
    parentId: string | null;
    type: number; // type = 1 chương trình học , type = 2 đề kiểm tra
    topicType: number | null; // 1 : chuong, 2 : bài tập, 3: đề kiểm tra
    timeExam ?: number; // thời gian làm bài kiểm tra
    numQuestion ?: number;
    des: string;
    index: number;
    createDate ?: number;
    updateDate ?: number;

    constructor(args?:any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.name = args?.name ?? ''; 
        this.status = args?.status ?? 0; 
        this.idCourse = args?.idCourse ?? '';
        this.topicChild = args?.topicChild ?? [];
        this.parentId = args?.parentId ?? null;
        this.type = args?.type ?? 1;
        this.des = args?.des ?? '';
        this.index = args?.index ?? 0;
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
        this.topicType = args?.topicType ?? null;
        this.timeExam = args?.time ?? 0;
        this.numQuestion = args?.numQuestion ?? 0;
    }
}

export { Topic };
class Lesson {
    id?: string | undefined;
    status: number;
    idTopic : string | undefined;
    file?: string;
    createDate ?: number; 
    updateDate ?: number;
    des : string;
    type : number | null; // 1: video , 2: document

    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.status = args?.status ?? 0; 
        this.idTopic = args?.idCourse ?? undefined;
        this.file = args?.file ?? ''
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
        this.des = args?.des ?? '';
        this.type = args?.type ?? null;
    }

}

export { Lesson };
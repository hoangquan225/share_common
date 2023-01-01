class Lesson {
    id?: string | undefined;
    status: number;
    idTopic : string | undefined;
    file?: string;
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?: any) {
        this.id = args?._id ?? undefined;
        this.status = args?.status ?? 0; 
        this.idTopic = args?.idCourse ?? undefined;
        this.file = args?.file ?? ''
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }

}

export { Lesson };
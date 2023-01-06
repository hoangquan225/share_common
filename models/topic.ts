class Topic { 
    id?: string | undefined; 
    name: string; 
    status: number; 
    idCourse: string; 
    topicChild: string[];
    parentId: string | null;
    type: number;
    des: string;
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?:any) {
        this.id = args?._id ?? undefined; 
        this.name = args?.name ?? ''; 
        this.status = args?.status ?? 0; 
        this.idCourse = args?.idCourse ?? '';
        this.topicChild = args?.topicChild ?? [];
        this.parentId = args?.parentId ?? null;
        this.type = args?.type ?? 1;
        this.des = args?.des ?? '';
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }
}

export { Topic };
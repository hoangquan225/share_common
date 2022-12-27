class Topic { 
    id: string | undefined; 
    name: string; 
    status: number; 
    idCourse: string; 
    topicChild: string[] | undefined; 
    parentId: string | undefined; 
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?:any) {
        this.id = args?.id ?? undefined; 
        this.name = args?.name ?? ''; 
        this.status = args?.status ?? 0; 
        this.idCourse = args?.idCourse ?? '';
        this.topicChild = args?.topicChild ?? undefined;
        this.parentId = args?.parentId ?? undefined;
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }
}

export { Topic };
class Category {
    id: string | undefined; 
    name: string;
    status: number;
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?: any){
        this.id = args?.id ?? undefined;
        this.name = args?.name ?? '';
        this.status = args?.status ?? 0;
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }
}

export { Category };
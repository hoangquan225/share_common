class Category {
    id?: string | undefined; 
    name: string;
    status: number;
    slug: string;
    createDate ?: number;
    updateDate ?: number;

    constructor(args?: any){
        this.id = args?._id ?? undefined;
        this.name = args?.name ?? '';
        this.status = args?.status ?? 0;
        this.slug = args?.slug ?? '';
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }
}

export { Category };
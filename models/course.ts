
class Course {
    id: string | undefined;
    courseName: string;
    status: number;
    avatar: string | null;
    des: string;
    slug: string;
    idCategory: string | undefined; // danh mục : lớp 1,2,3,...
    idTag: string | undefined; // môn học vd : toán lý hóa ....
    createDate ?: number;
    updateDate ?: number; 

    constructor(args?: any) {
        this.id = args?._id ?? undefined;
        this.courseName = args?.courseName ?? ''
        this.status = args?.status ?? 0;
        this.avatar = args?.avatar ?? null;
        this.des = args?.des ?? '';
        this.slug = args?.slug ?? '';
        this.idCategory = args?.idCategory ?? undefined;
        this.idTag = args?.idTag ?? undefined;
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }

}

export { Course };

class Course {
    id: string | undefined;
    courseName: string;
    status: number;
    des: string;
    idCategory: string; // danh mục : lớp 1,2,3,...
    idTag: string; // môn học vd : toán lý hóa ....
    createDate ?: number;
    updateDate ?: number; 

    constructor(args?: any) {
        this.id = args?.id ?? undefined;
        this.courseName = args?.courseName ?? ''
        this.status = args?.status ?? 0;
        this.des = args?.des ?? ''
        this.idCategory = args?.idCategory ?? '';
        this.idTag = args?.idTag ?? '';
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }

}

export { Course };
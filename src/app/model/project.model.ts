
export class Project { 
    private id?: number;
    private nombre: string;
    private descripcion: string;
    private url_project: string;
    private imgProject: string;
  
    constructor(
      id?: number,
      nombre?: string,
      descripcion?: string,
      url_project?: string,
      imgProject?: string
    ) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.url_project = url_project;
      this.imgProject = imgProject;
    }
  
    public getId(): number {
      return this.id;
    }
    public getNombre(): string {
      return this.nombre;
    }
  
    public getDescripcion(): string {
      return this.descripcion;
    }
  
    public getUrl_project(): string {
      return this.url_project;
    }
  
    public getImgProject(): string {
      return this.imgProject;
    }
  
    public setId(value: number) {
      this.id = value;
    }
  
    public setNombre(value: string) {
      this.nombre = value;
    }
  
    public setDescripcion(value: string) {
      this.descripcion = value;
    }
  
    public setUrl_project(value: string) {
      this.url_project = value;
    }
  
    public setImgProject(value: string) {
      this.imgProject = value;
    }
  }
  
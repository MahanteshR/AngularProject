export class RecipesModel {
  public name: string;
  public desc: string;
  public imgpath: string;

  constructor(name: string, desc: string, imgpath: string) {
    this.name = name;
    this.desc = desc;
    this.imgpath = imgpath;
  }
}

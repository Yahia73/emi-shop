export class Produit{

    name:string;
    image:string;
    price: number;
    description :string;
    link: string;
    constructor(leNom: string,img :string,prix:number,desc:string,link :string){
        this.name=leNom;
        this.image=img;
        this.price=prix;
        this.description=desc;
        this.link=link;
    }
}
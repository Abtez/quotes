export class Quotes {

    public showDescription: boolean;

    constructor(
        public quote: string,
        public author: string,
        public submitter: string ,
        public date: Date, 
        public thumbsUp: Number,
        public thumbsDown: Number
        )

        {this.showDescription=false;}

}
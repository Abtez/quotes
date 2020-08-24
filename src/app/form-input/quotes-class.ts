export class Quotes {

    public showDescription: boolean;

    constructor(
        public quote: string,
        public author: string,
        public submitter: string ,
        public date: Date, 
        public upVote: number, 
        public downVote :number
        )

        {this.showDescription=false;}

}
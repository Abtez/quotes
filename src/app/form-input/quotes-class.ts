export class Quotes {

    public showDescription: boolean;

    constructor(
        public quote: string,
        public author: string,
        public submitter: string ,
        public date: Date, 
        public upVote: number = 0, 
        public downVote :number = 0
        )

        {this.showDescription=false;}

}
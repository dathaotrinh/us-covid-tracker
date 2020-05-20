export class state {
    constructor(            
        public state: string,
        public positive: number,
        public negative: number,
        public death: number,
        public recovered: number,
        public totalTestResults: number,
        public hospitalizedCurrently: number,
        public hospitalizedCumulative: number,) {}
}
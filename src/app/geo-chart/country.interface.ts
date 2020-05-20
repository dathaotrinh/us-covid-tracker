export interface Country {
    state: string,
    positive: number,
    negative: number,
    death: number,
    recovered: number,
    totalTestResults: number,
    hospitalizedCurrently: number,
    hospitalizedCumulative: number,
}
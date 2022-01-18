import { Stock } from "./stock.model";

export interface Market {
    readonly stocks: Stock[];
}
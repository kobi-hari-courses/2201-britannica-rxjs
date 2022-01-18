import { NumberValueAccessor } from "@angular/forms";

export interface Notification {
    readonly id: string;
    readonly oldValue: number;
    readonly newValue: number;
    
}
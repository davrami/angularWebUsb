import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
 
        state('*', style({
        })),

        transition(':enter', [
            style({ opacity: 0 }),
            animate('.3s', style({ opacity: 1 }))
        ]),
 
        transition(':leave', [ ])
    ]);
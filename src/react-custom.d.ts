import * as React  from 'react';

declare module 'react' {
    export function useState(defaultState: any): any
}

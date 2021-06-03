export const access: Handler & {
    register(type: Function, handler: Partial<Handler>): void;
    unregister(type: Function | undefined): void;
}

export default access;

export type Handler = {
    get(obj: any, key: any): any;
    set<T>(obj: T, key: any, value: any): T;
    has(obj: any, key: any): boolean;
    delete(obj: any, key: any): boolean;
    clear(obj: any, key: any): void;
    keys(obj: any): IterableIterator<any>
    values(obj: any): IterableIterator<any>
    entries(obj: any): IterableIterator<[any, any]>
}

export const types: Map<Function | undefined, Partial<Handler>>;
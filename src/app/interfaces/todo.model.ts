export interface Todo{
    id: number;
    content: string;
}
export interface User{
    uid: number;
    username: string;
    password: string;
    lastConnected?: string;
}
export interface Thought {
    id?: string,
    content: string,
    author: string,
    model: "modelo1" | "modelo2" | "modelo3"
    favorite: boolean
}
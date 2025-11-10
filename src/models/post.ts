export interface PostPreview {
    id: string;
    name: string;
    date: Date;
    title: string;
    description: string | null;
    image: string | null;
    video: string | null;
    published: boolean;
    url: string;
}

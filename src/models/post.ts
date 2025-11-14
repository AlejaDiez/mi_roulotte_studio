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

export interface Post extends PostPreview {
    content: any[];
    subposts: PostPreview[] | null;
    keywords: string[] | null;
    allowComments: boolean;
    comments: any[];
    createdAt: Date;
    updatedAt: Date | null;
}

export const parsePost = (val: any): Post | PostPreview => ({
    id: val.id,
    name: val.name,
    date: new Date(val.date),
    title: val.title,
    description: val.description,
    image: val.image,
    video: val.video,
    content: val.content,
    subposts:
        val["subposts"] !== undefined ? val["subposts"].map((e: any) => parsePost(e)) : undefined,
    keywords: val.keywords,
    published: val.published,
    allowComments: val.allowComments,
    comments: val.comments,
    url: val.url,
    createdAt: val["createdAt"] !== undefined ? new Date(val["createdAt"]) : undefined,
    updatedAt:
        val["updatedAt"] !== undefined
            ? val.updatedAt
                ? new Date(val.updatedAt)
                : null
            : undefined
});

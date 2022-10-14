export interface CurrentUserInterface {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    bio: string | null;
    imge: string | null;
    token: string | null;
}
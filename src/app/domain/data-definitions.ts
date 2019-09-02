export class Article {
    id: number;
    title: string;
    image: string;
    content: string;
    author: string;
    date: Date;
    tags: string[];

    photoCredit?: string;
    creditLink?: string;
}

export class Player {
    name: string;
    positions: string[];
    startedPlaying: Date;
    photo: string;
    info: string;
}

export class Fixture {
    opposition: string;
    score?: string;
    date: Date;
    location: string;
}

export class Video {
    description: string;
    url: string;
    thumbnail: string;
}

export class Config {
    contactEmail: string;
}

export class Email {
    name: string;
    userEmail: string;
    subject: string;
    body: string;

    application?: string;
    token?: string;
}

export class ServerResponse<T> {
    success: boolean;
    errors?: string[];
    data?: T;
}
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
    id: number;
    team: string;
    opposition: string;
    teamLogo: string;
    score?: string;
    date: Date;
    location: string;
    info: string;
    tournament: string;
}

export class Video {
    description: string;
    url: string;
    thumbnail: string;
}

export class CarouselImage {
    title: string;
    description?: string;
    routerLink?: string;

    src: string;
    photoCredit?: string;
    creditLink?: string;

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
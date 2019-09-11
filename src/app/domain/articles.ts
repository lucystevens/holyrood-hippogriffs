import { Article } from "./data-definitions";

export const ARTICLES : Article[] = [
    {
        id: 1,
        title: "Welcome Edinburgh students!",
        image: "welcomeweek.jpg",
        content: 
            `Whether you're a fresher in your first year of University or
            an aging PhD student looking for something new to try, come visit the UoE quidditch fan club
            at the Edinburgh University Students' Association Activities Fair! <br><br>
            We'll have club representatives there both days so come
            find the stall in the upper hall from 10am-4pm to sign up!
            `,
        author: "Luke Stevens",
        date: new Date(2019, 8, 11),
        tags: [
            "edinburgh",
            "freshers"
        ]
    }
];
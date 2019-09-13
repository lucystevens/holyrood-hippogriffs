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
    },
    {
        id: 2,
        title: "Open Training this weekend",
        image: "opentraining.jpg",
        content: 
            `Coming to Edinburgh in September? Want to play for the 3-time Scottish champions?
            Join Holyrood Hippogriffs, Edinburgh's premier quidditch club, for open training on
            14th September at 14:00 just off middle meadow walk.<br><br>
            Quidditch is a full contact, mixed gender sport, and not just for Harry Potter fans.
            Make sure to bring sports clothes and plenty of water.  Open to all abilities.<br><br>
            https://www.eusa.ed.ac.uk/ents/event/13927/
            `,
        author: "Luke Stevens",
        date: new Date(2019, 8, 13),
        tags: [
            "edinburgh",
            "freshers",
            "training"
        ]
    }
];
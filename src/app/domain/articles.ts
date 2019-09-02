import { Article } from "./data-definitions";

export const ARTICLES : Article[] = [
    {
        id : 1,
        title: "Scottish quidditch makes international debut",
        image: "debut.jpg",
        content: 
        `
        This weekend, a strong Scottish squad made their international
        debut in a series of friendly games against Catalonia hosted in Barcelona.
        Eighteen players, selected from the national training squad, travelled out to
        represent Scotland in the team’s first ever international fixture. 

        The first game was close, finishing with a narrow win for the hosts with
        the score Catalonia 70* - 50 Scotland. Scotland fought back, winning the second game
        of the series decisively 150 – 50*. 

        Captain Tev Wallace said:

        > Captaining in Catalonia was a fantastic experience, seeing everyone
        work and play together for the first time, and really giving an
        idea of how much potential we have as a national team.

        `,
        author: "Rix Dishington",
        date: new Date(2018, 10, 19),
        tags: ["team scotland", "international", "catalonia", "debut"],
        photoCredit: "Axel Casas",
        creditLink: "https://www.facebook.com/BocsFolls/"
    },
    {
        id : 2,
        title: "Glasgow Grim Reapers Qualify for European Quidditch Cup",
        image: "eqt.jpg",
        content: 
        `
        After a gruelling weekend competing against the best teams from across the UK,
        the Glasgow Grim Reapers finished in fourth place and qualified to represent
        QuidditchUK at Division 1 of the European Quidditch Cup which will take place
        in Harelbeke, Belgium on 11/12th May. This will be the first time that a Scottish
        team has competed at a European Quidditch Cup and we wish Glasgow the best of luck
        for their international debut.   

        Gavin Hughes, Head Coach of the Scottish national team and a Glasgow Grim Reapers player said: 

        > I think it'd be fair to say that nobody in the Glasgow Grim Reapers expected we'd
        perform quite so well at EQT. We've not quite caught up mentally with the club's rapid
        rise to the top tier of the UK game, and still tend to underestimate our own capabilities,
        but in some ways this is a good mentality to have. It stops us from becoming complacent,
        and I think it will permeate the way we approach EQC, especially as the first Scottish
        club ever to attend a tournament at that level. We want to do Scottish quidditch proud,
        and the fact that less than a season ago the club was still competing at Dev Cup will
        keep us grounded even as we brush shoulders with the finest teams in Europe.

        Edinburgh’s Holyrood Hippogriffs Firsts team also competed at the tournament,
        just missing out on qualification in a match with Southampton Quidditch Club. 

        `,
        author: "Rix Dishington",
        date: new Date(2019, 0, 30),
        tags: ["eqt", "eqc", "glasgow", "edinburgh", "quidditchuk"],
        photoCredit: "Sam Birkitt Photography",
        creditLink: "https://www.facebook.com/sbirkittphotography/"
    },
    {
        id : 3,
        title: "Edinburgh Holyrood Hippogriffs Firsts regain Scottish Cup title",
        image: "scottish-cup.jpg",
        content: 
        `
        After missing the tournament last season to compete at Hateful Eight in Coventry,
        the Edinburgh Holyrood Hippogriffs Firsts have regained the title of Scottish Champions
        from last year’s winners the Glasgow Grim Reapers.    

        In a dramatic finale, the result went down to tiebreakers after Edinburgh’s First and
        Second teams and Glasgow all came away with two wins each.  

        The tournament commenced with a shock upset as Edinburgh’s Second team clinched a snitch range
        victory over the heavily favoured Glasgow Grim Reapers. Both teams then went on to defeat the
        St Andrews Snidgets, who also lost to Edinburgh Firsts. The Edinburgh derby finished with a
        predictable heavy victory for the Edinburgh Firsts side, leading to the final match of the
        day between an undefeated Edinburgh Firsts squad and a resurgent Glasgow with a lot of ground to make up. 

        In the final nail-biting match, Glasgow pulled off their first ever defeat of their perennial rivals,
        levelling up the win/loss records and forcing the tournament to a three-way tiebreaker. 

        Unfortunately for Glasgow, their final victory wasn’t enough to upset the QPD scales and despite
        losing the final match of the day, Edinburgh Firsts were declared the tournament winners for
        the third time.

        Edinburgh Firsts Captain Gary Cassidy said:  

        > We had to take two much smaller squads than we would have liked this year, however I’m
        extremely happy with the result and I know that all our players gave 110% in each game
        which shows in the result and I’m very proud of everyone for the effort they put in to
        make it possible.

        `,
        author: "Rix Dishington",
        date: new Date(2019, 1, 19),
        tags: ["edinburgh", "glasgow", "st andrews", "stirling", "scottish cup"],
        photoCredit: "Lisa Dörner"
    },
    {
        id: 4,
        title: "Team Scotland is ready for any weather",
        image: "snow.jpg",
        content: 
        `
        The weather outside may have been frightful last weekend, but the Scottish National
        Quidditch Team's open training session was delightful! We had a magical morning in
        the winter snow (in March) perfecting our technique for the upcoming European Games
        in June - and afterwards we chatted tactics over many, many hot cups of hot chocolate.
        
        Thanks to all who came along, and we hope to see many more at our next session in
        APRIL in EDINBURGH - details to follow. Hopefully we'll get spring weather this time!
        `,
        author: "Hannah Glover",
        date: new Date(2019, 2, 18),
        tags: ["snow", "open training", "team scotland"],
        photoCredit: "Rebecca Norman"
    }
];
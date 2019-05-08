import { PlayersByPosition } from '../data/players';

export function bestHitters(pitcher) {
    let pbp = PlayersByPosition();
    for(let [i, position] of pbp.entries()) {
        for(let player of position) {
            if (!player.isHitter()) {
                continue;
            }

            console.log(`${i},${player.id},${player.runsPerGame(pitcher)},${JSON.stringify(player)}`)
        }
    }
}

// Results by position by player with 100,000 trials against average pitcher (Bronson Arroyo)
//
// Barry Bonds 2003 #252 is by far the best card.
// 16 OBP has to be a large contributing factor.
// 28 runs a game is twice as many as the next non-Barry Bonds card
// Card most recently sold for $140 on eBay. Frank Thomas and Bagwell seem to sell for $15.
//
// RUNS,R/PTS,ID,POS,YEAR,SET#,ED,SET,NAME,TEAM,PTS,OBC,BATS,SPD,IP
// 28.1,0.031,3461,7,2003,252,UL,,Barry Bonds,Giants,900,16,L,12,0
// 27.9,0.031,3461,9,2003,252,UL,,Barry Bonds,Giants,900,16,L,12,0
// 16.3,0.019,3590,7,2005,283,UL,,Barry Bonds,Giants,860,14,L,14,0
// 16.3,0.019,3590,9,2005,283,UL,,Barry Bonds,Giants,860,14,L,14,0
// 16,0.018,1296,9,2001,27,ASG,,Barry Bonds,Giants,910,14,L,14,0
// 15.9,0.017,1296,7,2001,27,ASG,,Barry Bonds,Giants,910,14,L,14,0
// 14.3,0.018,1546,3,2002,98,SS,,Jeff Bagwell '94,Astros,800,14,R,12,0
// 13.1,0.016,1575,3,2002,117,SS,,Frank Thomas '94,White Sox,810,15,R,12,0
// 13.1,0.020,1550,9,2002,102,SS,,Gary Sheffield '96,Marlins,640,14,R,15,0
// 13,0.020,1550,7,2002,102,SS,,Gary Sheffield '96,Marlins,640,14,R,15,0
// 12.7,0.017,1573,3,2002,115,SS,,John Olerud,Blue Jays,740,14,L,10,0
// 12.6,0.018,2431,3,2003,78,UL,,Craig Wilson,Pirates,690,14,R,10,0
// 12.6,0.018,2431,7,2003,78,UL,,Craig Wilson,Pirates,690,14,R,10,0
// 12.6,0.019,2839,7,2004,120,UL,,Larry Walker,Rockies,650,13,L,16,0
// 12.6,0.018,2431,9,2003,78,UL,,Craig Wilson,Pirates,690,14,R,10,0
// 12.6,0.019,2839,9,2004,120,UL,,Larry Walker,Rockies,650,13,L,16,0
// 12.2,0.017,1329,3,2001,120,CC,,Willy McCovey,Giants,700,13,L,11,0
// 12.2,0.021,2032,3,2002,42,UL,,Albert Pujols,Cardinals,590,13,R,11,0
// 12.2,0.019,2777,3,2004,113,UL,,Todd Helton,Rockies,650,14,L,11,0
// 12.2,0.020,2920,3,2004,131,UL,,Jim Thome,Phillies,620,13,L,10,0
// 12.2,0.017,1348,5,2001,174,CC,,Harmon Killebrew,Twins,730,13,R,12,0
// 12.2,0.025,2837,8,2004,120,UL,,Richie Ashburn,Phillies,480,14,L,20,0
// 12.1,0.015,3711,3,2005,314,UL,,Albert Pujols,Cardinals,810,14,R,11,0
// 12.1,0.015,3711,7,2005,314,UL,,Albert Pujols,Cardinals,810,14,R,11,0
// 12.1,0.015,3711,9,2005,314,UL,,Albert Pujols,Cardinals,810,14,R,11,0
// 12,0.017,1346,0,2001,172,CC,,Reggie Jackson,Yankees,700,13,L,13,0
// 12,0.017,2877,5,2004,125,UL,,Mike Schmidt,Phillies,690,13,R,14,0
// 11.8,0.021,945,3,2001,310,1st,TD,Jason Giambi,Athletics,570,11,L,C,0
// 11.8,0.021,1516,3,2002,310,P,,Jason Giambi,Athletics,570,11,L,C,0
// 11.8,0.021,3697,3,2005,310,UL,,Jason Giambi,Athletics,570,11,L,C,0
// 11.8,0.016,1564,7,2002,111,SS,,Larry Walker '97,Rockies,730,14,L,18,0
// 11.7,0.022,1552,3,2002,104,SS,,Jim Thome '96,Indians,530,14,L,12,0
// 11.7,0.022,1584,3,2002,1,UL,,Jason Giambi,Yankees,530,14,L,12,0
// 11.7,0.022,3412,3,2005,240,UL,,Jason Giambi,Athletics,530,14,L,12,0
// 11.7,0.018,1316,7,2001,47,ASG,,Sammy Sosa,Cubs,660,12,R,13,0
// 11.7,0.017,1554,7,2002,106,SS,,Rickey Henderson '90,Athletics,670,14,R,26,0
// 11.7,0.020,1779,7,2002,19,UL,,Luis Gonzalez,Diamondbacks,600,12,L,14,0
// 11.7,0.019,2798,7,2004,115,UL,,Manny Ramirez,Red Sox,610,14,R,11,0
// 11.7,0.017,1554,9,2002,106,SS,,Rickey Henderson '90,Athletics,670,14,R,26,0
// 11.7,0.016,1564,9,2002,111,SS,,Larry Walker '97,Rockies,730,14,L,18,0
// 11.7,0.019,2798,9,2004,115,UL,,Manny Ramirez,Red Sox,610,14,R,11,0
// 11.6,0.018,1316,9,2001,47,ASG,,Sammy Sosa,Cubs,660,12,R,13,0
// 11.6,0.019,1779,9,2002,19,UL,,Luis Gonzalez,Diamondbacks,600,12,L,14,0
// 11.6,0.020,2355,9,2003,71,UL,,Sammy Sosa,Cubs,580,12,R,13,0
// 11.5,0.022,1323,7,2001,117,CC,,Ralph Kiner,Pirates,530,13,R,12,0
// 11.5,0.020,2355,7,2003,71,UL,,Sammy Sosa,Cubs,580,12,R,13,0
// 11.5,0.022,1323,9,2001,117,CC,,Ralph Kiner,Pirates,530,13,R,12,0
// 11.4,0.018,3703,3,2005,311,UL,,Albert Pujols,Cardinals,640,13,R,11,0
// 11.3,0.021,2165,5,2003,54,UL,,Alex Rodriguez,Yankees,540,13,R,14,0
// 11.3,0.018,1852,7,2002,26,UL,,J.D. Drew,Dodgers,640,14,L,13,0
// 11.2,0.018,1225,3,2001,450,1st,TD,Carlos Delgado,Blue Jays,610,11,L,C,0
// 11.2,0.016,1347,3,2001,173,CC,,Rod Carew,Twins,720,14,L,22,0
// 11.2,0.022,2143,3,2003,52,UL,,Jason Giambi,Yankees,510,14,L,8,0
// 11.2,0.018,3842,3,2005,450,UL,,Carlos Delgado,Blue Jays,610,11,L,C,0
// 11.2,0.019,1826,7,2002,23,UL,,J.D. Drew,Braves,580,14,L,13,0
// 11.2,0.016,2972,7,2004,139,UL,,Lance Berkman,Astros,680,13,S,12,0
// 11.2,0.024,2986,7,2004,141,UL,,Lance Berkman,Astros,470,14,S,12,0
// 11.2,0.019,1826,9,2002,23,UL,,J.D. Drew,Braves,580,14,L,13,0
// 11.2,0.018,1852,9,2002,26,UL,,J.D. Drew,Dodgers,640,14,L,13,0
// 11.2,0.016,2972,9,2004,139,UL,,Lance Berkman,Astros,680,13,S,12,0
// 11.1,0.015,1336,3,2001,124,CC,,Rod Carew,Angels,720,14,L,20,0
// 11.1,0.018,1524,3,2002,450,P,,Carlos Delgado,Blue Jays,610,11,L,C,0
// 11.1,0.025,2659,3,2003,100,UL,,Jim Thome,Phillies,440,13,L,11,0
// 11.1,0.019,3838,3,2005,409,UL,,Mark McGwire,Cardinals,580,10,R,C,0
// 11.1,0.015,1336,4,2001,124,CC,,Rod Carew,Angels,720,14,L,20,0
// 11.1,0.017,1562,5,2002,110,SS,,Edgar Martinez '95,Mariners,660,15,R,12,0
// 11.1,0.017,1295,7,2001,26,ASG,,Lance Berkman,Astros,650,13,S,14,0
// 11.1,0.016,1542,7,2002,94,SS,,Barry Bonds '90,Pirates,680,13,L,21,0
// 11.1,0.017,1295,9,2001,26,ASG,,Lance Berkman,Astros,650,13,S,14,0
// 11.1,0.016,1542,9,2002,94,SS,,Barry Bonds '90,Pirates,680,13,L,21,0
// 11.1,0.024,2986,9,2004,141,UL,,Lance Berkman,Astros,470,14,S,12,0
// 11,0.019,1143,3,2001,409,1st,TD,Mark McGwire,Cardinals,580,10,R,C,0
// 11,0.017,2696,5,2003,104,UL,,Alex Rodriguez,Yankees,650,13,R,14,0
// 11,0.017,2696,6,2003,104,UL,,Alex Rodriguez,Yankees,650,13,R,14,0
// 11,0.016,2972,8,2004,139,UL,,Lance Berkman,Astros,680,13,S,12,0
// 10.9,0.019,2800,3,2004,115,UL,,Todd Helton,Rockies,580,12,L,14,0
// 10.9,0.017,1300,7,2001,31,ASG,,Luis Gonzalez,Diamondbacks,630,12,L,14,0
// 10.9,0.017,1300,9,2001,31,ASG,,Luis Gonzalez,Diamondbacks,630,12,L,14,0
// 10.7,0.020,1277,3,2001,8,ASG,TD,Jason Giambi,Yankees,540,13,L,12,0
// 10.7,0.016,1303,3,2001,34,ASG,,Todd Helton,Rockies,660,13,R,14,0
// 10.7,0.017,2783,3,2004,113,UL,,Todd Helton,Rockies,630,14,L,10,0
// 10.7,0.018,1335,5,2001,123,CC,,Eddie Mathews,Braves,600,13,L,13,0
// 10.7,0.021,1553,5,2002,105,SS,,Chipper Jones '98,Braves,500,13,S,15,0
// 10.7,0.017,1541,6,2002,93,SS,,Alex Rodriguez '96,Mariners,620,13,R,17,0
// 10.7,0.017,3770,6,2005,333,UL,,Alex Rodriguez,Rangers,620,13,R,16,0
// 10.7,0.019,540,7,2000,135,1st,PR,Manny Ramirez,Indians,560,10,R,C,0
// 10.7,0.019,2946,7,2004,135,UL,,Manny Ramirez,Indians,560,10,R,C,0
// 10.7,0.019,540,9,2000,135,1st,PR,Manny Ramirez,Indians,560,10,R,C,0
// 10.6,0.019,2711,3,2004,105,UL,,Jim Thome,Indians,570,13,L,8,0
// 10.6,0.019,1900,5,2002,30,UL,,Chipper Jones,Braves,550,12,S,15,0
// 10.6,0.017,1568,9,2002,113,SS,,Sammy Sosa '98,Cubs,610,13,R,15,0
// 10.6,0.019,2946,9,2004,135,UL,,Manny Ramirez,Indians,560,10,R,C,0
// 10.5,0.016,154,6,2000,39,1st,PR,Alex Rodriguez,Rangers,640,10,R,B,0
// 10.5,0.017,617,7,2000,156,1st,PR,Larry Walker,Rockies,620,10,L,B,0
// 10.5,0.017,1568,7,2002,113,SS,,Sammy Sosa '98,Cubs,610,13,R,15,0
// 10.5,0.019,1578,8,2002,120,SS,,Ken Griffey Jr. '97,Mariners,540,13,L,15,0
// 10.4,0.015,1334,3,2001,123,CC,,Harmon Killebrew,Twins,710,12,R,11,0
// 10.4,0.016,1065,7,2001,370,1st,TD,Barry Bonds,Giants,650,10,L,B,0
// 10.4,0.016,3830,7,2005,370,UL,,Barry Bonds,Giants,650,10,L,B,0
// 10.4,0.017,617,9,2000,156,1st,PR,Larry Walker,Rockies,620,10,L,B,0
// 10.4,0.016,1065,9,2001,370,1st,TD,Barry Bonds,Giants,650,10,L,B,0
// 10.4,0.016,3830,9,2005,370,UL,,Barry Bonds,Giants,650,10,L,B,0
// 10.3,0.020,2384,3,2003,74,UL,,Brad Wilkerson,Nationals,520,13,L,15,0
// 10.3,0.021,2741,3,2004,108,UL,,Todd Helton,Rockies,500,14,L,10,0
// 10.3,0.021,3082,5,2004,161,UL,,Vinny Castilla,Nationals,500,13,R,10,0
// 10.3,0.020,2384,7,2003,74,UL,,Brad Wilkerson,Nationals,520,13,L,15,0
// 10.3,0.020,3291,7,2004,210,UL,,Vladimir Guerrero,Expos,520,13,R,16,0
// 10.3,0.020,2384,8,2003,74,UL,,Brad Wilkerson,Nationals,520,13,L,15,0
// 10.3,0.020,3013,9,2004,146,UL,,Lance Berkman,Astros,520,13,S,14,0
// 10.3,0.020,3291,9,2004,210,UL,,Vladimir Guerrero,Expos,520,13,R,16,0
// 10.2,0.018,580,3,2000,145,1st,PR,Todd Helton,Rockies,560,10,L,B,0
// 10.2,0.022,1291,3,2001,22,ASG,,Mike Sweeney,Royals,470,13,R,14,0
// 10.2,0.018,3007,3,2004,145,UL,,Todd Helton,Rockies,560,10,L,B,0
// 10.2,0.015,1538,6,2002,145,RS,,Nomar Garciaparra '97,Red Sox,680,12,R,17,0
// 10.2,0.020,3013,7,2004,146,UL,,Lance Berkman,Astros,520,13,S,14,0
// 10.2,0.019,3691,7,2005,308,UL,,J.D. Drew,Cardinals,540,12,L,20,0
// 10.2,0.020,2384,9,2003,74,UL,,Brad Wilkerson,Nationals,520,13,L,15,0
// 10.2,0.019,3691,9,2005,308,UL,,J.D. Drew,Cardinals,540,12,L,20,0
// 10.1,0.019,2197,3,2003,57,UL,,Todd Helton,Rockies,540,14,L,11,0
// 10,0.017,2420,4,2003,77,UL,,Jack Wilson,Pirates,600,13,R,16,0
// 10,0.020,2222,7,2003,59,UL,,Manny Ramirez,Red Sox,490,13,R,8,0
// 9.9,0.025,3652,0,2005,298,UL,,Edgar Martinez,Mariners,390,12,R,12,0
// 9.9,0.017,1402,3,2002,4,P,,Carlos Delgado,Blue Jays,570,13,L,10,0
// 9.9,0.019,1458,3,2002,27,P,,Mike Sweeney,Royals,520,13,R,12,0
// 9.9,0.014,2688,3,2003,103,UL,,Carlos Delgado,Blue Jays,700,13,L,10,0
// 9.9,0.019,3047,3,2004,153,UL,,Mike Sweeney,Royals,520,13,R,12,0
// 9.9,0.019,3262,3,2004,203,UL,,Jason Giambi,Yankees,530,13,L,9,0
// 9.9,0.017,3789,3,2005,339,UL,,Carlos Delgado,Blue Jays,570,13,L,10,0
// 9.9,0.017,2420,6,2003,77,UL,,Jack Wilson,Pirates,600,13,R,16,0
// 9.9,0.020,613,7,2000,155,1st,PR,Manny Ramirez,Red Sox,490,10,R,C,0
// 9.9,0.020,1466,7,2002,31,P,,Manny Ramirez,Red Sox,490,13,R,8,0
// 9.9,0.019,1924,7,2002,32,UL,,Gary Sheffield,Braves,510,13,R,16,0
// 9.9,0.017,2168,7,2003,54,UL,,Manny Ramirez,Red Sox,570,13,R,10,0
// 9.9,0.014,2698,7,2003,104,UL,,Gary Sheffield,Braves,720,13,R,17,0
// 9.9,0.018,2809,7,2004,116,UL,,Larry Walker,Rockies,550,13,L,11,0
// 9.9,0.017,2845,7,2004,121,UL,,Al Kaline,Tigers,600,13,R,11,0
// 9.9,0.015,3187,7,2004,185,UL,,Vladimir Guerrero,Expos,660,13,R,21,0
// 9.9,0.022,3401,7,2005,237,UL,,Brian Giles,Pirates,460,13,L,14,0
// 9.9,0.016,3815,8,2005,347,UL,,Vernon Wells,Blue Jays,610,12,R,12,0
// 9.9,0.019,1924,9,2002,32,UL,,Gary Sheffield,Braves,510,13,R,16,0
// 9.9,0.017,2168,9,2003,54,UL,,Manny Ramirez,Red Sox,570,13,R,10,0
// 9.9,0.020,2222,9,2003,59,UL,,Manny Ramirez,Red Sox,490,13,R,8,0
// 9.9,0.014,2698,9,2003,104,UL,,Gary Sheffield,Braves,720,13,R,17,0
// 9.9,0.018,2809,9,2004,116,UL,,Larry Walker,Rockies,550,13,L,11,0
// 9.9,0.017,2913,9,2004,130,UL,,Hideki Matsui,Yankees,600,13,R,11,0
// 9.9,0.015,3187,9,2004,185,UL,,Vladimir Guerrero,Expos,660,13,R,21,0
// 9.9,0.022,3401,9,2005,237,UL,,Brian Giles,Pirates,460,13,L,14,0
// 9.8,0.019,2755,3,2004,110,UL,,Todd Helton,Rockies,510,13,L,11,0
// 9.8,0.016,2387,5,2003,74,UL,,Mike Lowell,Marlins,610,13,R,16,0
// 9.8,0.017,3709,5,2005,313,UL,,Scott Rolen,Cardinals,570,13,R,10,0
// 9.8,0.018,1344,6,2001,170,CC,,Robin Yount,Brewers,540,12,R,19,0
// 9.8,0.019,2086,7,2003,47,UL,,Cliff Floyd,Marlins,520,13,L,18,0
// 9.8,0.016,2913,7,2004,130,UL,,Hideki Matsui,Yankees,600,13,R,11,0
// 9.8,0.016,2861,8,2004,123,UL,,Willie Stargell,Pirates,620,12,L,10,0
// 9.8,0.020,3552,8,2005,274,UL,,Jim Edmonds,Cardinals,500,13,L,10,0
// 9.8,0.020,613,9,2000,155,1st,PR,Manny Ramirez,Red Sox,490,10,R,C,0
// 9.8,0.020,1466,9,2002,31,P,,Manny Ramirez,Red Sox,490,13,R,8,0
// 9.8,0.016,2845,9,2004,121,UL,,Al Kaline,Tigers,600,13,R,11,0
// 9.7,0.019,1558,2,2002,108,SS,,Mike Piazza '97,Dodgers,500,13,R,16,0
// 9.7,0.016,2861,3,2004,123,UL,,Willie Stargell,Pirates,620,12,L,10,0
// 9.7,0.020,2332,4,2003,69,UL,,Ronnie Belliard,Indians,490,13,R,16,0
// 9.7,0.013,2893,5,2004,127,UL,,Adrian Beltre,Mariners,740,13,R,12,0
// 9.7,0.016,2861,7,2004,123,UL,,Willie Stargell,Pirates,620,12,L,10,0
// 9.7,0.019,1582,8,2002,124,SS,,Ellis Burks '96,Rockies,500,13,R,18,0
// 9.7,0.019,2086,9,2003,47,UL,,Cliff Floyd,Marlins,520,13,L,18,0
// 9.6,0.017,697,3,2001,186,1st,PR,Jeff Bagwell,Astros,560,10,R,B,0
// 9.6,0.017,1570,4,2002,114,SS,,Roberto Alomar '93,Blue Jays,560,14,S,23,0
// 9.6,0.017,543,7,2000,136,1st,PR,Manny Ramirez,Indians,560,10,R,C,0
// 9.6,0.015,2861,9,2004,123,UL,,Willie Stargell,Pirates,620,12,L,10,0
// 9.5,0.014,2706,2,2004,105,UL,,Javy Lopez,Orioles,680,12,R,10,0
// 9.5,0.017,3190,3,2004,186,UL,,Jeff Bagwell,Astros,560,10,R,B,0
// 9.5,0.016,2343,4,2003,70,UL,,Alfonso Soriano,Rangers,590,12,R,20,0
// 9.5,0.019,1581,5,2002,123,SS,,Robin Ventura '96,White Sox,490,13,R,11,0
// 9.5,0.025,2552,6,2003,89,UL,,Melvin Mora,Orioles,380,13,R,13,0
// 9.5,0.017,1385,7,2001,136,HRH,,Manny Ramirez,Indians,560,10,R,C,0
// 9.5,0.020,2610,8,2003,95,UL,,Eric Byrnes,Athletics,470,13,R,14,0
// 9.5,0.017,543,9,2000,136,1st,PR,Manny Ramirez,Indians,560,10,R,C,0
// 9.5,0.017,1385,9,2001,136,HRH,,Manny Ramirez,Indians,560,10,R,C,0
// 9.5,0.020,2232,9,2003,60,UL,,J.D. Drew,Braves,480,13,L,16,0
// 9.5,0.020,2610,9,2003,95,UL,,Eric Byrnes,Athletics,470,13,R,14,0
// 9.4,0.028,1498,2,2002,47,P,,Todd Pratt,Phillies,330,13,R,12,0
// 9.4,0.014,1891,2,2002,29,UL,,Javy Lopez,Braves,680,12,R,10,0
// 9.4,0.028,1498,3,2002,47,P,,Todd Pratt,Phillies,330,13,R,12,0
// 9.4,0.016,1288,6,2001,19,ASG,,Alex Rodriguez,Rangers,600,12,R,16,0
// 9.4,0.017,3788,6,2005,339,UL,,Alex Rodriguez,Rangers,540,12,R,16,0
// 9.4,0.017,1067,7,2001,371,1st,TD,Ellis Burks,Giants,540,10,R,B,0
// 9.4,0.020,2232,7,2003,60,UL,,J.D. Drew,Braves,480,13,L,16,0
// 9.4,0.025,2552,7,2003,89,UL,,Melvin Mora,Orioles,380,13,R,13,0
// 9.4,0.020,2610,7,2003,95,UL,,Eric Byrnes,Athletics,470,13,R,14,0
// 9.4,0.030,2618,7,2003,96,UL,,Jeremy Giambi,Red Sox,310,13,L,10,0
// 9.4,0.025,2552,8,2003,89,UL,,Melvin Mora,Orioles,380,13,R,13,0
// 9.4,0.018,2906,8,2004,129,UL,,Rocco Baldelli,Devil Rays,520,12,R,13,0
// 9.4,0.025,2552,9,2003,89,UL,,Melvin Mora,Orioles,380,13,R,13,0
// 9.4,0.030,2618,9,2003,96,UL,,Jeremy Giambi,Red Sox,310,13,L,10,0
// 9.4,0.017,3366,9,2005,229,UL,,Gary Sheffield,Dodgers,550,10,R,B,0
// 9.3,0.016,1075,4,2001,375,1st,TD,Jeff Kent,Giants,580,10,R,B,0
// 9.3,0.017,783,7,2001,229,1st,TD,Gary Sheffield,Dodgers,550,10,R,B,0
// 9.3,0.017,1512,7,2002,229,P,,Gary Sheffield,Dodgers,550,10,R,B,0
// 9.3,0.017,3366,7,2005,229,UL,,Gary Sheffield,Dodgers,550,10,R,B,0
// 9.3,0.017,783,9,2001,229,1st,TD,Gary Sheffield,Dodgers,550,10,R,B,0
// 9.3,0.017,1512,9,2002,229,P,,Gary Sheffield,Dodgers,550,10,R,B,0
// 9.2,0.016,1520,4,2002,375,P,,Jeff Kent,Giants,580,10,R,B,0
// 9.2,0.016,3831,4,2005,375,UL,,Jeff Kent,Giants,580,10,R,B,0
// 9.2,0.017,1067,9,2001,371,1st,TD,Ellis Burks,Giants,540,10,R,B,0
// 9.1,0.023,2096,3,2003,48,UL,,Carlos Delgado,Marlins,390,12,L,10,0
// 9.1,0.023,2442,3,2003,79,UL,,Lyle Overbay,Brewers,400,12,L,11,0
// 9.1,0.021,3503,3,2005,262,UL,,Jim Thome,Phillies,440,12,L,8,0
// 9.1,0.018,1816,4,2002,23,UL,,Roberto Alomar,Mets,510,12,S,21,0
// 9.1,0.017,1330,6,2001,121,CC,,Robin Yount,Brewers,540,12,R,16,0
// 9.1,0.015,2760,6,2004,111,UL,,Nomar Garciaparra,Red Sox,590,12,R,15,0
// 9.1,0.013,3636,6,2005,294,UL,,Alex Rodriguez,Rangers,710,12,R,12,0
// 9.1,0.018,322,7,2000,81,1st,PR,Ellis Burks,Indians,520,10,R,B,0
// 9.1,0.022,3150,7,2004,176,UL,,Gary Sheffield,Dodgers,420,12,R,15,0
// 9.1,0.024,1646,9,2002,7,UL,,Moises Alou,Cubs,380,12,R,13,0
// 9,0.020,428,0,2000,107,1st,PR,Frank Thomas,White Sox,440,10,R,C,0
// 9,0.018,2625,0,2003,96,UL,,Travis Hafner,Indians,510,13,L,10,0
// 9,0.025,2745,3,2004,109,UL,,Jim Thome,Indians,360,12,L,10,0
// 9,0.025,3625,3,2005,291,UL,,J.T. Snow,Giants,360,13,L,10,0
// 9,0.017,2642,4,2003,98,UL,,Roberto Alomar,Indians,520,12,S,21,0
// 9,0.024,1646,7,2002,7,UL,,Moises Alou,Cubs,380,12,R,13,0
// 9,0.021,1695,7,2002,12,UL,,Gary Sheffield,Braves,420,12,R,15,0
// 9,0.018,2400,7,2003,75,UL,,Sammy Sosa,Cubs,490,13,R,9,0
// 9,0.016,2649,7,2003,99,UL,,Carl Everett,Rangers,550,13,S,12,0
// 9,0.014,2678,7,2003,102,UL,,Raul Mondesi,Yankees,630,12,R,22,0
// 9,0.017,1330,8,2001,121,CC,,Robin Yount,Brewers,540,12,R,16,0
// 9,0.016,2649,8,2003,99,UL,,Carl Everett,Rangers,550,13,S,12,0
// 9,0.024,2672,8,2003,101,UL,,Milton Bradley,Indians,370,13,S,15,0
// 9,0.017,322,9,2000,81,1st,PR,Ellis Burks,Indians,520,10,R,B,0
// 9,0.021,1695,9,2002,12,UL,,Gary Sheffield,Braves,420,12,R,15,0
// 9,0.018,2400,9,2003,75,UL,,Sammy Sosa,Cubs,490,13,R,9,0
// 9,0.016,2649,9,2003,99,UL,,Carl Everett,Rangers,550,13,S,12,0
// 9,0.021,3150,9,2004,176,UL,,Gary Sheffield,Dodgers,420,12,R,15,0
// 8.9,0.020,1507,0,2002,107,P,,Frank Thomas,White Sox,440,10,R,C,0
// 8.9,0.014,2678,9,2003,102,UL,,Raul Mondesi,Yankees,630,12,R,22,0
// 8.8,0.017,1392,0,2001,440,HRH,,Rafael Palmeiro,Rangers,520,10,L,C,0
// 8.8,0.020,2728,0,2004,107,UL,,Frank Thomas,White Sox,440,10,R,C,0
// 8.8,0.016,1119,6,2001,397,1st,TD,Alex Rodriguez,Mariners,550,10,R,B,0
// 8.7,0.019,1109,0,2001,392,1st,TD,Edgar Martinez,Mariners,460,10,R,B,0
// 8.7,0.020,1116,0,2001,396,1st,TD,Edgar Martinez,Mariners,430,10,R,B,0
// 8.7,0.017,1204,0,2001,440,1st,TD,Rafael Palmeiro,Rangers,520,10,L,C,0
// 8.7,0.020,1364,0,2001,396,DS,,Edgar Martinez,Mariners,430,10,R,B,0
// 8.7,0.023,3526,0,2005,268,UL,,Craig Wilson,Pirates,380,12,R,17,0
// 8.7,0.019,3833,0,2005,392,UL,,Edgar Martinez,Mariners,460,10,R,B,0
// 8.7,0.025,1721,2,2002,14,UL,,JORGE POSADA,Yankees,350,12,S,12,0
// 8.7,0.016,3533,6,2005,269,UL,,Jack Wilson,Pirates,560,11,R,12,0
// 8.7,0.014,1018,7,2001,347,1st,TD,Brian Giles,Pirates,610,10,L,B,0
// 8.7,0.018,1342,7,2001,168,CC,,Larry Doby,Indians,480,12,L,13,0
// 8.7,0.017,3797,7,2005,342,UL,,Brian Giles,Pirates,510,10,L,B,0
// 8.7,0.017,1009,8,2001,342,1st,TD,Brian Giles,Pirates,510,10,L,B,0
// 8.7,0.014,1018,8,2001,347,1st,TD,Brian Giles,Pirates,610,10,L,B,0
// 8.7,0.014,3075,8,2004,159,UL,,Carlos Beltran,Royals,630,12,S,23,0
// 8.7,0.017,3797,8,2005,342,UL,,Brian Giles,Pirates,510,10,L,B,0
// 8.7,0.017,1009,9,2001,342,1st,TD,Brian Giles,Pirates,510,10,L,B,0
// 8.7,0.018,1535,9,2002,142,RS,,Ichiro Suzuki '01,Mariners,490,13,L,25,0
// 8.7,0.019,3452,9,2005,250,UL,,Bobby Abreu,Phillies,450,12,L,18,0
// 8.6,0.015,1148,3,2001,412,1st,TD,Mark Mcgwire,Cardinals,570,10,R,C,0
// 8.6,0.016,2243,5,2003,61,UL,,Melvin Mora,Orioles,540,14,R,13,0
// 8.6,0.021,3721,5,2005,317,UL,,Albert Pujols,Cardinals,410,12,R,12,0
// 8.6,0.016,3834,6,2005,397,UL,,Alex Rodriguez,Mariners,550,10,R,B,0
// 8.6,0.017,1009,7,2001,342,1st,TD,Brian Giles,Pirates,510,10,L,B,0
// 8.6,0.017,1301,7,2001,32,ASG,,Shawn Green,Dodgers,500,11,L,18,0
// 8.6,0.013,1332,7,2001,122,CC,,Reggie Jackson,Athletics,650,11,L,13,0
// 8.6,0.028,2305,7,2003,67,UL,,Brian Giles,Padres,310,13,L,10,0
// 8.6,0.018,2876,7,2004,125,UL,,Chipper Jones,Braves,480,13,S,13,0
// 8.6,0.018,3183,7,2004,184,UL,,Cliff Floyd,Red Sox,480,12,L,14,0
// 8.6,0.020,3423,7,2005,242,UL,,Bobby Abreu,Phillies,440,13,L,21,0
// 8.6,0.019,3452,7,2005,250,UL,,Bobby Abreu,Phillies,450,12,L,18,0
// 8.6,0.025,3719,7,2005,316,UL,,Larry Walker,Cardinals,340,13,L,12,0
// 8.6,0.021,3721,7,2005,317,UL,,Albert Pujols,Cardinals,410,12,R,12,0
// 8.6,0.014,1018,9,2001,347,1st,TD,Brian Giles,Pirates,610,10,L,B,0
// 8.6,0.018,1342,9,2001,168,CC,,Larry Doby,Indians,480,12,L,13,0
// 8.6,0.028,2305,9,2003,67,UL,,Brian Giles,Padres,310,13,L,10,0
// 8.6,0.018,3183,9,2004,184,UL,,Cliff Floyd,Red Sox,480,12,L,14,0
// 8.6,0.025,3719,9,2005,316,UL,,Larry Walker,Cardinals,340,13,L,12,0
// 8.6,0.021,3721,9,2005,317,UL,,Albert Pujols,Cardinals,410,12,R,12,0
// 8.6,0.017,3797,9,2005,342,UL,,Brian Giles,Pirates,510,10,L,B,0
// 8.5,0.020,2718,2,2004,106,UL,,Ivan Rodriguez,Tigers,420,13,R,11,0
// 8.5,0.015,698,3,2001,187,1st,TD,Jeff Bagwell,Astros,570,10,L,A,0
// 8.5,0.015,1390,3,2001,412,HRH,,Mark Mcgwire,Cardinals,570,10,R,C,0
// 8.5,0.028,2580,3,2003,92,UL,,Jason Giambi,Yankees,300,13,L,11,0
// 8.5,0.020,2821,3,2004,118,UL,,Jeff Bagwell,Astros,420,13,R,13,0
// 8.5,0.037,3369,3,2005,229,UL,,Nick Johnson,Yankees,230,13,L,11,0
// 8.5,0.016,2409,5,2003,76,UL,,Adrian Beltre,Dodgers,540,13,R,13,0
// 8.5,0.017,1535,7,2002,142,RS,,Ichiro Suzuki '01,Mariners,490,13,L,25,0
// 8.5,0.015,3837,7,2005,404,UL,,Jim Edmonds,Cardinals,560,10,L,B,0
// 8.5,0.015,1133,8,2001,404,1st,TD,Jim Edmonds,Cardinals,560,10,L,B,0
// 8.5,0.018,3310,8,2005,215,UL,,Bernie Williams,Yankees,460,13,S,12,0
// 8.5,0.018,3687,8,2005,306,UL,,Jim Edmonds,Cardinals,480,13,L,12,0
// 8.5,0.015,3837,8,2005,404,UL,,Jim Edmonds,Cardinals,560,10,L,B,0
// 8.5,0.015,1133,9,2001,404,1st,TD,Jim Edmonds,Cardinals,560,10,L,B,0
// 8.5,0.017,1301,9,2001,32,ASG,,Shawn Green,Dodgers,500,11,L,18,0
// 8.5,0.013,1332,9,2001,122,CC,,Reggie Jackson,Athletics,650,11,L,13,0
// 8.5,0.018,2762,9,2004,111,UL,,Sammy Sosa,Cubs,480,11,R,11,0
// 8.5,0.018,2876,9,2004,125,UL,,Chipper Jones,Braves,480,13,S,13,0
// 8.5,0.019,3423,9,2005,242,UL,,Bobby Abreu,Phillies,440,13,L,21,0
// 8.5,0.015,3837,9,2005,404,UL,,Jim Edmonds,Cardinals,560,10,L,B,0
// 8.4,0.021,2709,2,2004,105,UL,,Mike Piazza,Mets,400,12,R,9,0
// 8.4,0.022,3467,3,2005,253,UL,,Jim Thome,Phillies,390,12,L,8,0
// 8.4,0.016,1644,4,2002,6,UL,,Adam Kennedy,Angels,520,12,L,14,0
// 8.4,0.013,3101,5,2004,164,UL,,Adrian Beltre,Dodgers,660,12,R,12,0
// 8.4,0.016,272,6,2000,68,1st,PR,Nomar Garciaparra,Red Sox,510,10,R,B,0
// 8.4,0.015,978,7,2001,327,1st,TD,Bobby Abreu,Phillies,550,10,L,A,0
// 8.4,0.015,1133,7,2001,404,1st,TD,Jim Edmonds,Cardinals,560,10,L,B,0
// 8.4,0.015,1376,7,2001,327,FS,,Bobby Abreu,Phillies,550,10,L,A,0
// 8.4,0.023,2245,7,2003,61,UL,,Manny Ramirez,Red Sox,360,12,R,11,0
// 8.4,0.018,2762,7,2004,111,UL,,Sammy Sosa,Cubs,480,11,R,11,0
// 8.4,0.015,1322,8,2001,117,CC,,Yogi Berra,Yankees,550,12,L,11,0
// 8.4,0.015,978,9,2001,327,1st,TD,Bobby Abreu,Phillies,550,10,L,A,0
// 8.4,0.023,2469,9,2003,82,UL,,Juan Gonzalez,Rangers,360,12,R,12,0
// 8.3,0.021,1408,0,2002,7,P,,Frank Thomas,White Sox,390,12,R,8,0
// 8.3,0.025,2414,0,2003,77,UL,,Frank Thomas,White Sox,330,12,R,10,0
// 8.3,0.015,1322,2,2001,117,CC,,Yogi Berra,Yankees,550,12,L,11,0
// 8.3,0.011,1571,2,2002,114,SS,,Ivan Rodriguez,Rangers,730,12,R,19,0
// 8.3,0.024,1422,3,2002,13,P,,Erubiel Durazo,Diamondbacks,350,12,L,10,0
// 8.3,0.024,1543,3,2002,95,SS,,Fred McGriff '92,Padres,340,12,L,14,0
// 8.3,0.020,1580,3,2002,122,SS,,Mo Vaughn '95,Red Sox,410,12,L,12,0
// 8.3,0.021,3628,3,2005,292,UL,,Rafael Palmeiro,Rangers,400,12,L,9,0
// 8.3,0.025,3811,3,2005,346,UL,,Carlos Delgado,Blue Jays,330,12,L,12,0
// 8.3,0.015,2621,5,2003,96,UL,,Hank Blalock,Rangers,540,12,L,10,0
// 8.3,0.016,2321,6,2003,68,UL,,Nomar Garciaparra,Red Sox,510,10,R,B,0
// 8.3,0.017,2398,6,2003,75,UL,,Juan Uribe,White Sox,480,12,R,16,0
// 8.3,0.017,1320,7,2001,116,CC,,Larry Doby,Indians,500,12,L,11,0
// 8.3,0.013,1654,7,2002,7,UL,,Vladimir Guerrero,Angels,640,12,R,15,0
// 8.3,0.023,2469,7,2003,82,UL,,Juan Gonzalez,Rangers,360,12,R,12,0
// 8.3,0.019,2479,7,2003,82,UL,,Adam Dunn,Reds,440,12,L,12,0
// 8.3,0.017,2531,7,2003,87,UL,,Sammy Sosa,Cubs,490,9,R,B,0
// 8.3,0.030,2551,7,2003,89,UL,,Jeremy Giambi,Phillies,280,12,L,10,0
// 8.3,0.022,2710,7,2004,105,UL,,Juan Gonzalez,Indians,380,12,R,12,0
// 8.3,0.021,3396,7,2005,236,UL,,Bernie Williams,Yankees,400,12,S,16,0
// 8.3,0.024,3540,7,2005,271,UL,,Matt Stairs,Pirates,340,12,L,8,0
// 8.3,0.023,3694,7,2005,309,UL,,Jim Edmonds,Cardinals,360,12,L,12,0
// 8.3,0.017,348,9,2000,87,1st,PR,Sammy Sosa,Cubs,490,9,R,B,0
// 8.3,0.017,1320,9,2001,116,CC,,Larry Doby,Indians,500,12,L,11,0
// 8.3,0.015,1322,9,2001,117,CC,,Yogi Berra,Yankees,550,12,L,11,0
// 8.3,0.015,1376,9,2001,327,FS,,Bobby Abreu,Phillies,550,10,L,A,0
// 8.3,0.013,1654,9,2002,7,UL,,Vladimir Guerrero,Angels,640,12,R,15,0
// 8.3,0.023,2245,9,2003,61,UL,,Manny Ramirez,Red Sox,360,12,R,11,0
// 8.3,0.019,2479,9,2003,82,UL,,Adam Dunn,Reds,440,12,L,12,0
// 8.3,0.017,2531,9,2003,87,UL,,Sammy Sosa,Cubs,490,9,R,B,0
// 8.3,0.030,2551,9,2003,89,UL,,Jeremy Giambi,Phillies,280,12,L,10,0
// 8.3,0.022,2710,9,2004,105,UL,,Juan Gonzalez,Indians,380,12,R,12,0
// 8.3,0.023,2995,9,2004,143,UL,,Moises Alou,Astros,360,12,R,13,0
// 8.3,0.021,3396,9,2005,236,UL,,Bernie Williams,Yankees,400,12,S,16,0
// 8.3,0.019,3501,9,2005,262,UL,,Brian Giles,Pirates,430,12,L,18,0
// 8.2,0.021,2489,0,2003,83,UL,,Frank Thomas,White Sox,390,12,R,8,0
// 8.2,0.017,1343,2,2001,169,CC,,Yogi Berra,Yankees,490,12,L,11,0
// 8.2,0.022,3385,2,2005,233,UL,,Jorge Posada,Yankees,380,13,S,13,0
// 8.2,0.021,2591,3,2003,93,UL,,Andres Galarraga,Giants,400,12,R,10,0
// 8.2,0.020,3008,3,2004,145,UL,,Jeff Bagwell,Astros,410,12,R,16,0
// 8.2,0.024,3540,3,2005,271,UL,,Matt Stairs,Pirates,340,12,L,8,0
// 8.2,0.024,3661,3,2005,300,UL,,Carlos Delgado,Blue Jays,340,12,L,9,0
// 8.2,0.017,1551,6,2002,103,SS,,Barry Larkin '95,Reds,490,13,R,20,0
// 8.2,0.017,348,7,2000,87,1st,PR,Sammy Sosa,Cubs,490,9,R,B,0
// 8.2,0.015,1322,7,2001,117,CC,,Yogi Berra,Yankees,550,12,L,11,0
// 8.2,0.022,1489,7,2002,43,P,,Gary Sheffield,Braves,370,13,R,12,0
// 8.2,0.022,1958,7,2002,35,UL,,Gary Sheffield,Braves,370,13,R,12,0
// 8.2,0.026,2607,7,2003,95,UL,,Bobby Kielty,Twins,310,13,S,10,0
// 8.2,0.013,2725,7,2004,107,UL,,Vladimir Guerrero,Expos,610,12,R,14,0
// 8.2,0.023,2995,7,2004,143,UL,,Moises Alou,Astros,360,12,R,13,0
// 8.2,0.019,3501,7,2005,262,UL,,Brian Giles,Pirates,430,12,L,18,0
// 8.2,0.017,3565,7,2005,277,UL,,Albert Pujols,Cardinals,470,12,R,9,0
// 8.2,0.026,2607,8,2003,95,UL,,Bobby Kielty,Twins,310,13,S,10,0
// 8.2,0.021,3396,8,2005,236,UL,,Bernie Williams,Yankees,400,12,S,16,0
// 8.2,0.023,3694,8,2005,309,UL,,Jim Edmonds,Cardinals,360,12,L,12,0
// 8.2,0.022,1958,9,2002,35,UL,,Gary Sheffield,Braves,370,13,R,12,0
// 8.2,0.022,2574,9,2003,91,UL,,Adam Dunn,Reds,370,11,L,15,0
// 8.2,0.026,2607,9,2003,95,UL,,Bobby Kielty,Twins,310,13,S,10,0
// 8.2,0.013,2725,9,2004,107,UL,,Vladimir Guerrero,Expos,610,12,R,14,0
// 8.2,0.024,3540,9,2005,271,UL,,Matt Stairs,Pirates,340,12,L,8,0
// 8.2,0.017,3565,9,2005,277,UL,,Albert Pujols,Cardinals,470,12,R,9,0
// 8.2,0.023,3694,9,2005,309,UL,,Jim Edmonds,Cardinals,360,12,L,12,0
// 8.1,0.019,2654,2,2003,99,UL,,Victor Martinez,Indians,420,11,S,8,0
// 8.1,0.023,1283,3,2001,14,ASG,,Paul Konerko,White Sox,350,11,R,11,0
// 8.1,0.027,2163,3,2003,54,UL,,Rafael Palmeiro,Rangers,300,12,L,10,0
// 8.1,0.018,2860,3,2004,123,UL,,Josh Phelps,Blue Jays,450,11,R,11,0
// 8.1,0.018,2186,4,2003,56,UL,,Ken Harvey,Royals,440,13,R,12,0
// 8.1,0.011,3290,4,2004,210,UL,,Alfonso Soriano,Yankees,710,11,R,23,0
// 8.1,0.014,2288,5,2003,65,UL,,Scott Rolen,Cardinals,560,12,R,11,0
// 8.1,0.017,2438,5,2003,79,UL,,Scott Rolen,Cardinals,490,11,R,14,0
// 8.1,0.017,2620,5,2003,96,UL,,Hank Blalock,Rangers,490,13,L,10,0
// 8.1,0.023,3573,5,2005,279,UL,,Phil Nevin,Padres,360,12,R,12,0
// 8.1,0.017,926,6,2001,301,1st,TD,Derek Jeter,Yankees,490,10,R,B,0
// 8.1,0.020,1799,6,2002,21,UL,,Carlos Guillen,Tigers,410,13,S,16,0
// 8.1,0.020,2403,6,2003,76,UL,,Nomar Garciaparra,Red Sox,400,11,R,15,0
// 8.1,0.021,2699,6,2003,104,UL,,Miguel Tejada,Orioles,380,11,R,14,0
// 8.1,0.016,1025,7,2001,350,1st,TD,John Vander Wal,Pirates,510,10,L,B,0
// 8.1,0.022,2574,7,2003,91,UL,,Adam Dunn,Reds,370,11,L,15,0
// 8.1,0.027,3368,7,2005,229,UL,,Jeremy Giambi,Phillies,300,13,L,8,0
// 8.1,0.020,1577,8,2002,119,SS,,Kenny Lofton '93,Indians,410,13,L,25,0
// 8.1,0.017,853,9,2001,264,1st,TD,Vladimir Guerrero,Expos,470,9,R,B,0
// 8.1,0.016,1025,9,2001,350,1st,TD,John Vander Wal,Pirates,510,10,L,B,0
// 8.1,0.022,1489,9,2002,43,P,,Gary Sheffield,Braves,370,13,R,12,0
// 8,0.018,2186,3,2003,56,UL,,Ken Harvey,Royals,440,13,R,12,0
// 8,0.027,3368,3,2005,229,UL,,Jeremy Giambi,Phillies,300,13,L,8,0
// 8,0.027,3785,3,2005,338,UL,,Rafael Palmeiro,Rangers,300,12,L,10,0
// 8,0.015,2631,5,2003,97,UL,,Vinny Castilla,Rockies,520,12,R,8,0
// 8,0.022,3378,5,2005,231,UL,,Eric Chavez,Athletics,360,12,L,12,0
// 8,0.017,853,7,2001,264,1st,TD,Vladimir Guerrero,Expos,470,9,R,B,0
// 8,0.015,2630,7,2003,97,UL,,Jacque Jones,Twins,520,12,L,18,0
// 8,0.015,2413,8,2003,76,UL,,Aaron Rowand,White Sox,530,11,R,16,0
// 8,0.023,2354,9,2003,71,UL,,Lew Ford,Twins,350,12,R,15,0
// 8,0.022,3361,9,2005,227,UL,,Gary Sheffield,Yankees,360,12,R,11,0
// 8,0.027,3368,9,2005,229,UL,,Jeremy Giambi,Phillies,300,13,L,8,0
// 8,0.017,3509,9,2005,264,UL,,Vladimir Guerrero,Expos,470,9,R,B,0
// 7.9,0.026,3326,2,2005,219,UL,,Mike Piazza,Mets,300,11,R,9,0
// 7.9,0.017,954,3,2001,315,1st,TD,Jason Giambi,Athletics,460,10,L,C,0
// 7.9,0.016,1333,3,2001,122,CC,,Orlando Cepeda,Cardinals,480,12,R,12,0
// 7.9,0.028,1757,3,2002,17,UL,,Erubiel Durazo,Diamondbacks,280,11,L,10,0
// 7.9,0.013,1352,5,2001,37,DS,,Chipper Jones,Braves,610,10,S,A,0
// 7.9,0.015,695,7,2001,185,1st,PR,Moises Alou,Astros,510,10,R,B,0
// 7.9,0.023,2354,7,2003,71,UL,,Lew Ford,Twins,350,12,R,15,0
// 7.9,0.020,3120,7,2004,169,UL,,Shawn Green,Dodgers,400,11,L,18,0
// 7.9,0.022,3361,7,2005,227,UL,,Gary Sheffield,Yankees,360,12,R,11,0
// 7.9,0.017,3509,7,2005,264,UL,,Vladimir Guerrero,Expos,470,9,R,B,0
// 7.9,0.015,2449,8,2003,80,UL,,Jim Edmonds,Cardinals,510,11,L,15,0
// 7.9,0.022,2689,8,2003,103,UL,,Ken Griffey Jr.,Reds,360,11,L,12,0
// 7.9,0.015,695,9,2001,185,1st,PR,Moises Alou,Astros,510,10,R,B,0
// 7.9,0.020,2097,9,2003,48,UL,,Shawn Green,Dodgers,400,11,L,18,0
// 7.9,0.015,2630,9,2003,97,UL,,Jacque Jones,Twins,520,12,L,18,0
// 7.8,0.022,3336,2,2005,221,UL,,Mike Piazza,Mets,350,11,R,8,0
// 7.8,0.017,1387,3,2001,315,HRH,,Jason Giambi,Athletics,460,10,L,C,0
// 7.8,0.030,1403,3,2002,5,P,,Aubrey Huff,Devil Rays,260,11,L,14,0
// 7.8,0.017,2444,3,2003,79,UL,,Paul Konerko,White Sox,450,11,R,8,0
// 7.8,0.013,3469,4,2005,254,UL,,Jeff Kent,Giants,600,11,R,11,0
// 7.8,0.017,3555,4,2005,275,UL,,Edgardo Alfonzo,Mets,460,10,R,B,0
// 7.8,0.013,147,5,2000,37,1st,PR,Chipper Jones,Braves,610,10,S,A,0
// 7.8,0.013,1381,5,2001,37,HRH,,Chipper Jones,Braves,610,10,S,A,0
// 7.8,0.024,1623,5,2002,4,UL,,Troy Glaus,Angels,330,11,R,14,0
// 7.8,0.017,3581,6,2005,281,UL,,Rich Aurilia,Giants,450,11,R,14,0
// 7.8,0.016,711,7,2001,193,1st,TD,Richard Hidalgo,Astros,500,9,R,B,0
// 7.8,0.016,1511,7,2002,193,P,,Richard Hidalgo,Astros,500,9,R,B,0
// 7.8,0.020,2097,7,2003,48,UL,,Shawn Green,Dodgers,400,11,L,18,0
// 7.8,0.016,711,8,2001,193,1st,TD,Richard Hidalgo,Astros,500,9,R,B,0
// 7.8,0.026,1431,8,2002,16,P,,Ken Griffey Jr.,Reds,300,11,L,9,0
// 7.8,0.016,1511,8,2002,193,P,,Richard Hidalgo,Astros,500,9,R,B,0
// 7.8,0.026,2556,8,2003,89,UL,,Ken Griffey Jr.,Reds,300,11,L,9,0
// 7.8,0.016,711,9,2001,193,1st,TD,Richard Hidalgo,Astros,500,9,R,B,0
// 7.8,0.016,1511,9,2002,193,P,,Richard Hidalgo,Astros,500,9,R,B,0
// 7.8,0.020,3120,9,2004,169,UL,,Shawn Green,Dodgers,400,11,L,18,0
// 7.7,0.019,964,0,2001,320,1st,TD,John Jaha,Athletics,400,10,R,C,0
// 7.7,0.022,1423,2,2002,13,P,,Mike Piazza,Mets,350,11,R,8,0
// 7.7,0.018,555,3,2000,139,1st,PR,Jim Thome,Indians,430,10,L,C,0
// 7.7,0.015,1368,3,2001,7,FS,,Erubiel Durazo,Diamondbacks,510,10,L,B,0
// 7.7,0.016,2365,3,2003,72,UL,,Sean Casey,Reds,490,13,L,13,0
// 7.7,0.017,875,4,2001,275,1st,TD,Edgardo Alfonzo,Mets,460,10,R,B,0
// 7.7,0.030,1403,5,2002,5,P,,Aubrey Huff,Devil Rays,260,11,L,14,0
// 7.7,0.018,1486,7,2002,41,P,,Shawn Green,Dodgers,430,11,L,12,0
// 7.7,0.020,2833,7,2004,119,UL,,Larry Walker,Rockies,380,13,L,12,0
// 7.7,0.018,3059,7,2004,156,UL,,Shawn Green,Dodgers,430,11,L,12,0
// 7.7,0.059,3168,7,2004,180,UL,,Brian Jordan,Dodgers,130,11,R,10,0
// 7.7,0.019,185,9,2000,47,1st,PR,Jeffrey Hammonds,Rockies,400,9,R,B,0
// 7.7,0.020,2833,9,2004,119,UL,,Larry Walker,Rockies,380,13,L,12,0
// 7.7,0.018,3059,9,2004,156,UL,,Shawn Green,Dodgers,430,11,L,12,0
// 7.7,0.059,3168,9,2004,180,UL,,Brian Jordan,Dodgers,130,11,R,10,0
// 7.6,0.017,891,2,2001,283,1st,TD,Mike Piazza,Mets,450,9,R,B,0
// 7.6,0.019,1285,2,2001,16,ASG,,Jorge Posada,Yankees,400,12,S,12,0
// 7.6,0.014,2640,4,2003,98,UL,,Michael Young,Rangers,540,12,R,15,0
// 7.6,0.017,16,5,2000,4,1st,PR,Troy Glaus,Angels,440,9,R,B,0
// 7.6,0.017,1622,5,2002,4,UL,,Troy Glaus,Angels,440,9,R,B,0
// 7.6,0.019,185,7,2000,47,1st,PR,Jeffrey Hammonds,Rockies,400,9,R,B,0
// 7.6,0.015,971,7,2001,323,1st,TD,Bobby Abreu,Phillies,510,10,L,A,0
// 7.6,0.020,1286,7,2001,17,ASG,,Manny Ramirez,Red Sox,380,12,R,10,0
// 7.6,0.015,1592,7,2002,1,UL,,Garret Anderson,Angels,520,11,L,11,0
// 7.6,0.018,2953,7,2004,136,UL,,Cliff Floyd,Marlins,420,12,L,18,0
// 7.6,0.020,1286,9,2001,17,ASG,,Manny Ramirez,Red Sox,380,12,R,10,0
// 7.6,0.018,1486,9,2002,41,P,,Shawn Green,Dodgers,430,11,L,12,0
// 7.6,0.020,2055,9,2002,44,UL,,Ichiro,Mariners,380,12,L,19,0
// 7.6,0.018,2953,9,2004,136,UL,,Cliff Floyd,Marlins,420,12,L,18,0
// 7.5,0.017,3589,2,2005,283,UL,,Mike Piazza,Mets,450,9,R,B,0
// 7.5,0.015,25,3,2000,7,1st,PR,Erubiel Durazo,Diamondbacks,510,10,L,B,0
// 7.5,0.015,45,3,2000,12,1st,PR,Andres Galarraga,Braves,510,9,R,B,0
// 7.5,0.017,1563,3,2002,110,SS,,Mark Grace,Cubs,440,12,L,12,0
// 7.5,0.017,2457,3,2003,80,UL,,Sean Casey,Reds,430,12,L,10,0
// 7.5,0.020,3563,4,2005,276,UL,,Mark Loretta,Padres,370,12,R,11,0
// 7.5,0.018,2135,5,2003,51,UL,,Bill Mueller,Red Sox,410,12,S,12,0
// 7.5,0.021,2286,5,2003,65,UL,,Eric Chavez,Athletics,360,11,L,14,0
// 7.5,0.021,2735,6,2004,108,UL,,Derek Jeter,Yankees,350,12,R,21,0
// 7.5,0.017,1321,7,2001,116,CC,,Billy Williams,Cubs,440,11,L,16,0
// 7.5,0.020,2055,7,2002,44,UL,,Ichiro,Mariners,380,12,L,19,0
// 7.5,0.017,2582,7,2003,92,UL,,Frank Catalanotto,Blue Jays,450,12,L,12,0
// 7.5,0.015,971,9,2001,323,1st,TD,Bobby Abreu,Phillies,510,10,L,A,0
// 7.5,0.017,1321,9,2001,116,CC,,Billy Williams,Cubs,440,11,L,16,0
// 7.5,0.014,1592,9,2002,1,UL,,Garret Anderson,Angels,520,11,L,11,0
// 7.4,0.017,1847,4,2002,25,UL,,Marcus Giles,Braves,440,12,R,14,0
// 7.4,0.012,1537,5,2002,144,RS,,Albert Pujols '01,Cardinals,600,13,R,10,0
// 7.4,0.016,1276,6,2001,7,ASG,TD,Nomar Garciaparra,Red Sox,450,11,R,15,0
// 7.4,0.013,2091,6,2003,47,UL,,Nomar Garciaparra,Red Sox,580,11,R,16,0
// 7.4,0.015,3340,6,2005,222,UL,,Jose Reyes,Mets,500,11,S,19,0
// 7.4,0.012,1537,7,2002,144,RS,,Albert Pujols '01,Cardinals,600,13,R,10,0
// 7.4,0.026,1869,7,2002,27,UL,,Chipper Jones,Braves,280,13,S,9,0
// 7.4,0.015,946,8,2001,311,1st,TD,Bernie Williams,Yankees,510,10,S,B,0
// 7.4,0.012,1537,9,2002,144,RS,,Albert Pujols '01,Cardinals,600,13,R,10,0
// 7.4,0.016,2582,9,2003,92,UL,,Frank Catalanotto,Blue Jays,450,12,L,12,0
// 7.4,0.019,3265,9,2004,204,UL,,Vladimir Guerrero,Expos,400,11,R,18,0
// 7.3,0.024,771,0,2001,223,1st,TD,Dave Hansen,Dodgers,310,9,L,C,0
// 7.3,0.032,2304,0,2003,67,UL,,Edgar Martinez,Mariners,230,13,R,10,0
// 7.3,0.029,3662,0,2005,300,UL,,Edgar Martinez,Mariners,250,13,R,8,0
// 7.3,0.016,2209,2,2003,58,UL,,Javy Lopez,Orioles,450,13,R,9,0
// 7.3,0.019,2337,2,2003,70,UL,,Gregg Zaun,Astros,390,12,S,11,0
// 7.3,0.021,3138,2,2004,173,UL,,Paul Lo Duca,Dodgers,340,12,R,11,0
// 7.3,0.023,3345,2,2005,223,UL,,Jorge Posada,Yankees,320,13,S,9,0
// 7.3,0.024,2599,3,2003,94,UL,,Frank Thomas,White Sox,310,13,R,10,0
// 7.3,0.018,2813,3,2004,117,UL,,Ryan Klesko,Padres,410,12,L,11,0
// 7.3,0.024,3523,3,2005,267,UL,,John Olerud,Mariners,300,13,L,8,0
// 7.3,0.018,1576,4,2002,118,SS,,Jeff Kent '98,Giants,400,12,R,12,0
// 7.3,0.017,3635,4,2005,294,UL,,Bret Boone,Mariners,440,12,R,14,0
// 7.3,0.019,1994,5,2002,38,UL,,Melvin Mora,Orioles,390,13,R,13,0
// 7.3,0.016,267,6,2000,67,1st,PR,Nomar Garciaparra,Red Sox,470,10,R,B,0
// 7.3,0.018,1293,6,2001,24,ASG,,Omar Vizquel,Indians,410,12,S,19,0
// 7.3,0.016,1382,6,2001,67,HRH,,Nomar Garciaparra,Red Sox,470,10,R,B,0
// 7.3,0.014,289,7,2000,73,1st,PR,Shawn Green,Dodgers,540,9,L,A,0
// 7.3,0.014,946,7,2001,311,1st,TD,Bernie Williams,Yankees,510,10,S,B,0
// 7.3,0.016,1298,7,2001,29,ASG,,Adam Dunn,Reds,470,12,L,15,0
// 7.3,0.016,1302,7,2001,33,ASG,,Vladimir Guerrero,Expos,450,11,R,18,0
// 7.3,0.014,1361,7,2001,311,DS,,Bernie Williams,Yankees,510,10,S,B,0
// 7.3,0.025,1758,7,2002,17,UL,,Luis Gonzalez,Diamondbacks,290,13,L,12,0
// 7.3,0.024,1864,7,2002,27,UL,,Ruben Sierra,Mariners,310,11,S,13,0
// 7.3,0.016,2147,7,2003,52,UL,,Manny Ramirez,Red Sox,450,12,R,10,0
// 7.3,0.019,2394,7,2003,75,UL,,Gary Sheffield,Yankees,380,13,R,16,0
// 7.3,0.020,2509,7,2003,85,UL,,Magglio Ordonez,White Sox,360,12,R,16,0
// 7.3,0.019,2575,7,2003,91,UL,,Austin Kearns,Reds,380,13,R,11,0
// 7.3,0.018,3265,7,2004,204,UL,,Vladimir Guerrero,Expos,400,11,R,18,0
// 7.3,0.021,3351,7,2005,225,UL,,Bobby Abreu,Phillies,340,13,L,18,0
// 7.3,0.021,3462,7,2005,252,UL,,Bobby Abreu,Phillies,340,13,L,17,0
// 7.3,0.014,1361,8,2001,311,DS,,Bernie Williams,Yankees,510,10,S,B,0
// 7.3,0.014,289,9,2000,73,1st,PR,Shawn Green,Dodgers,540,9,L,A,0
// 7.3,0.016,1298,9,2001,29,ASG,,Adam Dunn,Reds,470,12,L,15,0
// 7.3,0.016,1302,9,2001,33,ASG,,Vladimir Guerrero,Expos,450,11,R,18,0
// 7.3,0.014,1361,9,2001,311,DS,,Bernie Williams,Yankees,510,10,S,B,0
// 7.3,0.024,1748,9,2002,16,UL,,Luis Gonzalez,Diamondbacks,300,13,L,12,0
// 7.3,0.025,1758,9,2002,17,UL,,Luis Gonzalez,Diamondbacks,290,13,L,12,0
// 7.3,0.024,1864,9,2002,27,UL,,Ruben Sierra,Mariners,310,11,S,13,0
// 7.3,0.026,1869,9,2002,27,UL,,Chipper Jones,Braves,280,13,S,9,0
// 7.3,0.026,1955,9,2002,35,UL,,Hideki Matsui,Yankees,280,13,L,8,0
// 7.3,0.021,2146,9,2003,52,UL,,Trot Nixon,Red Sox,350,12,L,10,0
// 7.3,0.016,2147,9,2003,52,UL,,Manny Ramirez,Red Sox,450,12,R,10,0
// 7.3,0.021,2199,9,2003,57,UL,,Trot Nixon,Red Sox,340,12,L,16,0
// 7.3,0.019,2394,9,2003,75,UL,,Gary Sheffield,Yankees,380,13,R,16,0
// 7.3,0.020,2509,9,2003,85,UL,,Magglio Ordonez,White Sox,360,12,R,16,0
// 7.3,0.019,2575,9,2003,91,UL,,Austin Kearns,Reds,380,13,R,11,0
// 7.3,0.021,3351,9,2005,225,UL,,Bobby Abreu,Phillies,340,13,L,18,0
// 7.2,0.026,2670,0,2003,101,UL,,Ellis Burks,Indians,280,12,R,14,0
// 7.2,0.021,2461,2,2003,81,UL,,Doug Mirabelli,Red Sox,350,11,R,10,0
// 7.2,0.021,2679,2,2003,102,UL,,Victor Martinez,Indians,340,11,S,15,0
// 7.2,0.014,457,3,2000,115,1st,PR,Ryan Klesko,Padres,500,10,L,B,0
// 7.2,0.018,2136,3,2003,51,UL,,David Ortiz,Red Sox,410,11,L,8,0
// 7.2,0.018,2237,3,2003,61,UL,,Ryan Klesko,Padres,410,12,L,19,0
// 7.2,0.023,3094,3,2004,163,UL,,Mike Sweeney,Royals,310,11,R,14,0
// 7.2,0.023,3386,3,2005,233,UL,,Erubiel Durazo,Athletics,320,12,L,10,0
// 7.2,0.016,3787,3,2005,338,UL,,Mark Teixeira,Rangers,460,11,S,10,0
// 7.2,0.018,1293,4,2001,24,ASG,,Omar Vizquel,Indians,410,12,S,19,0
// 7.2,0.019,2207,5,2003,58,UL,,Eric Hinske,Blue Jays,380,11,L,16,0
// 7.2,0.022,3212,5,2004,191,UL,,Edgardo Alfonzo,Mets,330,12,R,11,0
// 7.2,0.020,3254,5,2004,201,UL,,Corey Koskie,Twins,360,12,L,13,0
// 7.2,0.018,3489,5,2005,259,UL,,Scott Rolen,Phillies,410,12,R,15,0
// 7.2,0.014,3715,6,2005,315,UL,,Edgar Renteria,Cardinals,530,12,R,21,0
// 7.2,0.014,209,7,2000,53,1st,PR,Juan Gonzalez,Tigers,520,9,R,B,0
// 7.2,0.015,794,7,2001,235,1st,TD,Jeromy Burnitz,Brewers,470,10,L,B,0
// 7.2,0.013,1234,7,2001,455,1st,TD,Shawn Green,Blue Jays,540,9,L,A,0
// 7.2,0.013,1383,7,2001,73,HRH,,Shawn Green,Dodgers,540,9,L,A,0
// 7.2,0.013,1388,7,2001,374,HRH,,Barry Bonds,Giants,560,9,L,A,0
// 7.2,0.013,1547,7,2002,99,SS,,Ron Gant '93,Braves,550,12,R,21,0
// 7.2,0.024,1748,7,2002,16,UL,,Luis Gonzalez,Diamondbacks,300,13,L,12,0
// 7.2,0.026,1955,7,2002,35,UL,,Hideki Matsui,Yankees,280,13,L,8,0
// 7.2,0.021,2146,7,2003,52,UL,,Trot Nixon,Red Sox,350,12,L,10,0
// 7.2,0.021,2199,7,2003,57,UL,,Trot Nixon,Red Sox,340,12,L,16,0
// 7.2,0.016,2357,7,2003,71,UL,,Sammy Sosa,Cubs,450,10,R,10,0
// 7.2,0.015,2466,7,2003,81,UL,,Magglio Ordonez,White Sox,470,11,R,11,0
// 7.2,0.012,2658,7,2003,100,UL,,Preston Wilson,Rockies,580,11,R,16,0
// 7.2,0.015,3058,7,2004,156,UL,,Carlos Beltran,Royals,470,11,S,22,0
// 7.2,0.011,81,8,2000,21,1st,PR,Carl Everett,Red Sox,650,10,S,A,0
// 7.2,0.014,1918,8,2002,32,UL,,Carlos Beltran,Mets,520,11,S,23,0
// 7.2,0.012,2658,8,2003,100,UL,,Preston Wilson,Rockies,580,11,R,16,0
// 7.2,0.015,3058,8,2004,156,UL,,Carlos Beltran,Royals,470,11,S,22,0
// 7.2,0.014,209,9,2000,53,1st,PR,Juan Gonzalez,Tigers,520,9,R,B,0
// 7.2,0.015,794,9,2001,235,1st,TD,Jeromy Burnitz,Brewers,470,10,L,B,0
// 7.2,0.014,946,9,2001,311,1st,TD,Bernie Williams,Yankees,510,10,S,B,0
// 7.2,0.013,1234,9,2001,455,1st,TD,Shawn Green,Blue Jays,540,9,L,A,0
// 7.2,0.013,1383,9,2001,73,HRH,,Shawn Green,Dodgers,540,9,L,A,0
// 7.2,0.013,1388,9,2001,374,HRH,,Barry Bonds,Giants,560,9,L,A,0
// 7.2,0.013,1547,9,2002,99,SS,,Ron Gant '93,Braves,550,12,R,21,0
// 7.2,0.018,1583,9,2002,125,SS,,Tim Raines '83,Expos,390,12,S,24,0
// 7.2,0.016,2357,9,2003,71,UL,,Sammy Sosa,Cubs,450,10,R,10,0
// 7.2,0.015,2466,9,2003,81,UL,,Magglio Ordonez,White Sox,470,11,R,11,0
// 7.2,0.014,2478,9,2003,82,UL,,Magglio Ordonez,White Sox,500,11,R,12,0
// 7.2,0.012,2658,9,2003,100,UL,,Preston Wilson,Rockies,580,11,R,16,0
// 7.2,0.015,2737,9,2004,108,UL,,Carl Crawford,Devil Rays,470,11,L,22,0
// 7.2,0.015,3058,9,2004,156,UL,,Carlos Beltran,Royals,470,11,S,22,0
// 7.2,0.021,3462,9,2005,252,UL,,Bobby Abreu,Phillies,340,13,L,17,0
// 7.2,0.015,3740,9,2005,323,UL,,Aubrey Huff,Devil Rays,490,11,L,9,0
// 7.1,0.015,388,2,2000,97,1st,PR,Charles Johnson,White Sox,460,9,R,B,0
// 7.1,0.013,1213,2,2001,444,1st,TD,Ivan Rodriguez,Rangers,530,9,R,B,0
// 7.1,0.020,2088,2,2003,47,UL,,Paul Lo Duca,Dodgers,360,13,R,10,0
// 7.1,0.020,2190,2,2003,56,UL,,Jason Varitek,Red Sox,360,12,S,13,0
// 7.1,0.015,2842,2,2004,120,UL,,Ivan Rodriguez,Tigers,460,12,R,12,0
// 7.1,0.017,2844,2,2004,121,UL,,Ivan Rodriguez,Marlins,410,11,R,11,0
// 7.1,0.025,3492,2,2005,259,UL,,Jason Kendall,Pirates,280,12,R,13,0
// 7.1,0.013,3840,2,2005,444,UL,,Ivan Rodriguez,Rangers,530,9,R,B,0
// 7.1,0.030,2015,3,2002,41,UL,,David Segui,Orioles,240,12,S,12,0
// 7.1,0.018,2356,3,2003,71,UL,,Fred McGriff,Cubs,400,10,L,9,0
// 7.1,0.022,2537,3,2003,88,UL,,Travis Hafner,Indians,320,12,L,11,0
// 7.1,0.027,3191,3,2004,186,UL,,Richie Sexson,Brewers,260,10,R,13,0
// 7.1,0.034,3633,3,2005,293,UL,,J. T. Snow,Giants,210,12,L,8,0
// 7.1,0.027,3668,3,2005,302,UL,,John Olerud,Mariners,260,12,L,12,0
// 7.1,0.013,1565,4,2002,111,SS,,Carlos Baerga,Indians,540,12,S,14,0
// 7.1,0.022,2581,4,2003,92,UL,,Jose Vidro,Nationals,320,11,S,16,0
// 7.1,0.022,3303,4,2004,213,UL,,Jose Vidro,Expos,330,12,S,10,0
// 7.1,0.018,3602,4,2005,286,UL,,Jeff Kent,Giants,390,11,R,14,0
// 7.1,0.012,1156,5,2001,416,1st,TD,Fernando Tatis,Cardinals,570,10,R,A,0
// 7.1,0.020,2119,5,2003,50,UL,,Edgardo Alfonzo,Mets,360,12,R,14,0
// 7.1,0.022,2705,5,2004,105,UL,,Edgardo Alfonzo,Giants,320,12,R,11,0
// 7.1,0.011,81,7,2000,21,1st,PR,Carl Everett,Red Sox,650,10,S,A,0
// 7.1,0.015,241,7,2000,61,1st,PR,Moises Alou,Astros,470,9,R,B,0
// 7.1,0.015,375,7,2000,94,1st,PR,Sammy Sosa,Cubs,480,8,R,B,0
// 7.1,0.019,731,7,2001,203,1st,TD,Jermaine Dye,Royals,370,9,R,C,0
// 7.1,0.013,1072,7,2001,374,1st,TD,Barry Bonds,Giants,560,9,L,A,0
// 7.1,0.015,1384,7,2001,94,HRH,,Sammy Sosa,Cubs,480,8,R,B,0
// 7.1,0.018,1583,7,2002,125,SS,,Tim Raines '83,Expos,390,12,S,24,0
// 7.1,0.020,2088,7,2003,47,UL,,Paul Lo Duca,Dodgers,360,13,R,10,0
// 7.1,0.015,2307,7,2003,67,UL,,Austin Kearns,Reds,460,12,R,14,0
// 7.1,0.022,2463,7,2003,81,UL,,Jose Cruz,Giants,330,12,S,13,0
// 7.1,0.014,2478,7,2003,82,UL,,Magglio Ordonez,White Sox,500,11,R,12,0
// 7.1,0.015,2737,7,2004,108,UL,,Carl Crawford,Devil Rays,470,11,L,22,0
// 7.1,0.030,3416,7,2005,241,UL,,Jeremy Giambi,Athletics,240,12,L,10,0
// 7.1,0.023,3613,7,2005,288,UL,,Dustan Mohr,Giants,310,12,R,12,0
// 7.1,0.014,3740,7,2005,323,UL,,Aubrey Huff,Devil Rays,490,11,L,9,0
// 7.1,0.019,3766,7,2005,332,UL,,Frank Catalanotto,Rangers,370,12,L,18,0
// 7.1,0.011,81,9,2000,21,1st,PR,Carl Everett,Red Sox,650,10,S,A,0
// 7.1,0.020,84,9,2000,21,1st,PR,Luis Gonzalez,Diamondbacks,360,9,L,C,0
// 7.1,0.019,731,9,2001,203,1st,TD,Jermaine Dye,Royals,370,9,R,C,0
// 7.1,0.013,1072,9,2001,374,1st,TD,Barry Bonds,Giants,560,9,L,A,0
// 7.1,0.015,1384,9,2001,94,HRH,,Sammy Sosa,Cubs,480,8,R,B,0
// 7.1,0.020,2088,9,2003,47,UL,,Paul Lo Duca,Dodgers,360,13,R,10,0
// 7.1,0.015,2307,9,2003,67,UL,,Austin Kearns,Reds,460,12,R,14,0
// 7.1,0.022,2463,9,2003,81,UL,,Jose Cruz,Giants,330,12,S,13,0
// 7.1,0.030,3416,9,2005,241,UL,,Jeremy Giambi,Athletics,240,12,L,10,0
// 7.1,0.023,3613,9,2005,288,UL,,Dustan Mohr,Giants,310,12,R,12,0
// 7.1,0.019,3766,9,2005,332,UL,,Frank Catalanotto,Rangers,370,12,L,18,0
// 7,0.016,931,2,2001,303,1st,TD,Jorge Posada,Yankees,430,10,S,C,0
// 7,0.013,1523,2,2002,444,P,,Ivan Rodriguez,Rangers,530,9,R,B,0
// 7,0.015,2632,2,2003,97,UL,,Charles Johnson,White Sox,460,9,R,B,0
// 7,0.019,497,3,2000,125,1st,PR,John Olerud,Mariners,360,10,L,C,0
// 7,0.018,1129,3,2001,402,1st,TD,Will Clark,Cardinals,400,10,L,B,0
// 7,0.028,2863,3,2004,123,UL,,Tony Clark,Tigers,250,11,S,12,0
// 7,0.013,503,4,2000,126,1st,PR,Roberto Alomar,Indians,560,10,S,A,0
// 7,0.023,3518,5,2005,266,UL,,Aramis Ramirez,Pirates,310,11,R,12,0
// 7,0.019,3364,6,2005,228,UL,,Derek Jeter,Yankees,360,12,R,13,0
// 7,0.014,8,7,2000,2,1st,PR,Darin Erstad,Angels,510,10,L,A,0
// 7,0.019,84,7,2000,21,1st,PR,Luis Gonzalez,Diamondbacks,360,9,L,C,0
// 7,0.016,257,7,2000,65,1st,PR,Daryle Ward,Astros,450,9,L,C,0
// 7,0.017,917,7,2001,296,1st,TD,Dave Justice,Yankees,420,9,L,B,0
// 7,0.012,1106,7,2001,391,1st,TD,Ken Griffey Jr.,Mariners,590,9,L,A,0
// 7,0.017,1515,7,2002,296,P,,Dave Justice,Yankees,420,9,L,B,0
// 7,0.014,1601,7,2002,2,UL,,Darin Erstad,Angels,510,10,L,A,0
// 7,0.030,2270,7,2003,63,UL,,Todd Hollandsworth,Cubs,230,12,L,11,0
// 7,0.016,3250,7,2004,200,UL,,Jacque Jones,Twins,440,11,L,16,0
// 7,0.012,1106,8,2001,391,1st,TD,Ken Griffey Jr.,Mariners,590,9,L,A,0
// 7,0.014,8,9,2000,2,1st,PR,Darin Erstad,Angels,510,10,L,A,0
// 7,0.015,241,9,2000,61,1st,PR,Moises Alou,Astros,470,9,R,B,0
// 7,0.016,257,9,2000,65,1st,PR,Daryle Ward,Astros,450,9,L,C,0
// 7,0.015,375,9,2000,94,1st,PR,Sammy Sosa,Cubs,480,8,R,B,0
// 7,0.017,917,9,2001,296,1st,TD,Dave Justice,Yankees,420,9,L,B,0
// 7,0.012,1106,9,2001,391,1st,TD,Ken Griffey Jr.,Mariners,590,9,L,A,0
// 7,0.017,1515,9,2002,296,P,,Dave Justice,Yankees,420,9,L,B,0
// 7,0.014,1601,9,2002,2,UL,,Darin Erstad,Angels,510,10,L,A,0
// 7,0.016,3250,9,2004,200,UL,,Jacque Jones,Twins,440,11,L,16,0
// 7,0.023,3689,9,2005,307,UL,,J. D. Drew,Cardinals,300,11,L,12,0
// 6.9,0.022,548,3,2000,137,1st,PR,Jim Thome,Indians,310,9,L,C,0
// 6.9,0.016,1174,3,2001,425,1st,TD,Fred Mcgriff,Devil Rays,430,10,L,C,0
// 6.9,0.028,1618,3,2002,4,UL,,Nick Johnson,Nationals,250,11,L,11,0
// 6.9,0.029,2322,3,2003,68,UL,,Fred McGriff,Cubs,240,12,L,11,0
// 6.9,0.021,2328,3,2003,69,UL,,Derrek Lee,Cubs,330,11,R,18,0
// 6.9,0.020,2716,3,2004,106,UL,,Tino Martinez,Yankees,350,11,L,10,0
// 6.9,0.020,2935,3,2004,133,UL,,Derrek Lee,Marlins,340,11,R,15,0
// 6.9,0.019,2961,3,2004,137,UL,,Derrek Lee,Marlins,360,11,R,17,0
// 6.9,0.022,2974,3,2004,139,UL,,Jeff Bagwell,Astros,320,11,R,12,0
// 6.9,0.019,3022,3,2004,148,UL,,Shawn Green,Diamondbacks,370,11,L,13,0
// 6.9,0.019,3222,3,2004,193,UL,,Richie Sexson,Brewers,360,11,R,10,0
// 6.9,0.035,3354,3,2005,226,UL,,Nick Johnson,Yankees,200,12,L,8,0
// 6.9,0.023,3800,3,2005,342,UL,,Carlos Delgado,Blue Jays,300,11,L,8,0
// 6.9,0.012,611,4,2000,154,1st,PR,Terry Shumpert,Rockies,560,10,R,A,0
// 6.9,0.024,2279,4,2003,64,UL,,Mark Bellhorn,Cubs,290,11,S,12,0
// 6.9,0.019,3642,4,2005,295,UL,,Bret Boone,Mariners,370,11,R,15,0
// 6.9,0.017,148,5,2000,37,1st,PR,Chipper Jones,Braves,400,9,S,B,0
// 6.9,0.024,2279,5,2003,64,UL,,Mark Bellhorn,Cubs,290,11,S,12,0
// 6.9,0.015,2325,5,2003,68,UL,,Aramis Ramirez,Cubs,450,11,R,8,0
// 6.9,0.020,3755,5,2005,328,UL,,Hank Blalock,Rangers,350,11,L,9,0
// 6.9,0.014,3343,6,2005,223,UL,,Miguel Tejada,Athletics,480,11,R,14,0
// 6.9,0.020,44,7,2000,11,1st,PR,Tim Salmon,Angels,340,9,R,C,0
// 6.9,0.014,1534,7,2002,141,RS,,Tim Salmon '93,Angels,480,11,R,11,0
// 6.9,0.015,1629,7,2002,5,UL,,Carlos Lee,Brewers,460,11,R,13,0
// 6.9,0.030,1720,7,2002,14,UL,,Mark Sweeney,Padres,230,11,L,10,0
// 6.9,0.019,2077,7,2003,46,UL,,Eric Chavez,Athletics,360,10,L,13,0
// 6.9,0.018,2110,7,2003,49,UL,,Miguel Cabrera,Marlins,390,10,R,13,0
// 6.9,0.019,2373,7,2003,73,UL,,Carl Everett,Expos,360,11,S,12,0
// 6.9,0.020,2628,7,2003,97,UL,,Jay Payton,Padres,350,11,R,11,0
// 6.9,0.033,2784,7,2004,113,UL,,Mark Sweeney,Rockies,210,11,L,12,0
// 6.9,0.017,2810,7,2004,116,UL,,Jay Payton,Rockies,410,11,R,11,0
// 6.9,0.017,2904,7,2004,128,UL,,Miguel Cabrera,Marlins,400,11,R,11,0
// 6.9,0.019,3022,7,2004,148,UL,,Shawn Green,Diamondbacks,370,11,L,13,0
// 6.9,0.020,3205,7,2004,189,UL,,Geoff Jenkins,Brewers,340,11,L,8,0
// 6.9,0.016,452,8,2000,113,1st,PR,Ken Griffey Jr.,Reds,420,9,L,B,0
// 6.9,0.019,2373,8,2003,73,UL,,Carl Everett,Expos,360,11,S,12,0
// 6.9,0.026,2593,8,2003,93,UL,,Ken Griffey Jr.,Reds,270,11,L,14,0
// 6.9,0.020,44,9,2000,11,1st,PR,Tim Salmon,Angels,340,9,R,C,0
// 6.9,0.017,699,9,2001,187,1st,TD,Lance Berkman,Astros,400,9,S,B,0
// 6.9,0.014,1534,9,2002,141,RS,,Tim Salmon '93,Angels,480,11,R,11,0
// 6.9,0.015,1629,9,2002,5,UL,,Carlos Lee,Brewers,460,11,R,13,0
// 6.9,0.020,2036,9,2002,42,UL,,Melvin Mora,Orioles,350,13,R,14,0
// 6.9,0.019,2077,9,2003,46,UL,,Eric Chavez,Athletics,360,10,L,13,0
// 6.9,0.018,2110,9,2003,49,UL,,Miguel Cabrera,Marlins,390,10,R,13,0
// 6.9,0.030,2270,9,2003,63,UL,,Todd Hollandsworth,Cubs,230,12,L,11,0
// 6.9,0.019,2373,9,2003,73,UL,,Carl Everett,Expos,360,11,S,12,0
// 6.9,0.015,2391,9,2003,74,UL,,Carlos Lee,White Sox,460,11,R,13,0
// 6.9,0.018,2743,9,2004,109,UL,,Brandon Larson,Reds,380,11,R,10,0
// 6.9,0.033,2784,9,2004,113,UL,,Mark Sweeney,Rockies,210,11,L,12,0
// 6.9,0.017,2810,9,2004,116,UL,,Jay Payton,Rockies,410,11,R,11,0
// 6.9,0.017,2904,9,2004,128,UL,,Miguel Cabrera,Marlins,400,11,R,11,0
// 6.9,0.019,3022,9,2004,148,UL,,Shawn Green,Diamondbacks,370,11,L,13,0
// 6.9,0.020,3205,9,2004,189,UL,,Geoff Jenkins,Brewers,340,11,L,8,0
// 6.9,0.019,3359,9,2005,227,UL,,Pat Burrell,Phillies,370,11,R,8,0
// 6.8,0.015,808,2,2001,242,1st,TD,David Nilsson,Brewers,450,10,L,C,0
// 6.8,0.012,1536,2,2002,143,RS,,Mike Piazza '93,Dodgers,580,11,R,10,0
// 6.8,0.016,599,3,2000,150,1st,PR,Todd Helton,Rockies,420,9,L,B,0
// 6.8,0.017,1211,3,2001,443,1st,TD,Rafael Palmeiro,Rangers,390,9,L,B,0
// 6.8,0.016,1370,3,2001,150,FS,,Todd Helton,Rockies,420,9,L,B,0
// 6.8,0.019,3567,3,2005,277,UL,,Phil Nevin,Padres,350,11,R,8,0
// 6.8,0.017,2562,4,2003,90,UL,,Todd Walker,Red Sox,410,11,L,10,0
// 6.8,0.012,2899,4,2004,128,UL,,Jeff Kent,Astros,550,11,R,13,0
// 6.8,0.022,1271,5,2001,2,ASG,TD,Tony Batista,Orioles,310,10,R,17,0
// 6.8,0.017,1979,5,2002,37,UL,,Chipper Jones,Braves,400,9,S,B,0
// 6.8,0.016,3574,5,2005,279,UL,,Scott Rolen,Cardinals,420,10,R,12,0
// 6.8,0.013,2048,6,2002,43,UL,,Miguel Tejada,Orioles,510,11,R,12,0
// 6.8,0.018,262,7,2000,66,1st,PR,Ron Gant,Rockies,370,8,R,B,0
// 6.8,0.016,452,7,2000,113,1st,PR,Ken Griffey Jr.,Reds,420,9,L,B,0
// 6.8,0.017,699,7,2001,187,1st,TD,Lance Berkman,Astros,400,9,S,B,0
// 6.8,0.015,894,7,2001,285,1st,TD,Rickey Henderson,Mets,450,10,R,A,0
// 6.8,0.016,937,7,2001,306,1st,TD,Bernie Williams,Yankees,430,9,S,B,0
// 6.8,0.015,1074,7,2001,375,1st,TD,Ellis Burks,Giants,440,9,R,B,0
// 6.8,0.019,2036,7,2002,42,UL,,Melvin Mora,Orioles,350,13,R,14,0
// 6.8,0.015,2391,7,2003,74,UL,,Carlos Lee,White Sox,460,11,R,13,0
// 6.8,0.021,2533,7,2003,87,UL,,Adam Dunn,Reds,330,13,L,15,0
// 6.8,0.025,2593,7,2003,93,UL,,Ken Griffey Jr.,Reds,270,11,L,14,0
// 6.8,0.018,2743,7,2004,109,UL,,Brandon Larson,Reds,380,11,R,10,0
// 6.8,0.016,2780,7,2004,113,UL,,Ken Griffey Jr.,Reds,420,9,L,B,0
// 6.8,0.018,3359,7,2005,227,UL,,Pat Burrell,Phillies,370,11,R,8,0
// 6.8,0.023,3689,7,2005,307,UL,,J. D. Drew,Cardinals,300,11,L,12,0
// 6.8,0.019,2036,8,2002,42,UL,,Melvin Mora,Orioles,350,13,R,14,0
// 6.8,0.016,2780,8,2004,113,UL,,Ken Griffey Jr.,Reds,420,9,L,B,0
// 6.8,0.016,2980,8,2004,140,UL,,Carlos Beltran,Astros,420,11,S,22,0
// 6.8,0.016,452,9,2000,113,1st,PR,Ken Griffey Jr.,Reds,420,9,L,B,0
// 6.8,0.015,894,9,2001,285,1st,TD,Rickey Henderson,Mets,450,10,R,A,0
// 6.8,0.016,937,9,2001,306,1st,TD,Bernie Williams,Yankees,430,9,S,B,0
// 6.8,0.015,1074,9,2001,375,1st,TD,Ellis Burks,Giants,440,9,R,B,0
// 6.8,0.031,1433,9,2002,17,P,,Lenny Harris,Brewers,220,11,L,13,0
// 6.8,0.030,1720,9,2002,14,UL,,Mark Sweeney,Padres,230,11,L,10,0
// 6.8,0.021,2533,9,2003,87,UL,,Adam Dunn,Reds,330,13,L,15,0
// 6.8,0.025,2593,9,2003,93,UL,,Ken Griffey Jr.,Reds,270,11,L,14,0
// 6.8,0.019,2628,9,2003,97,UL,,Jay Payton,Padres,350,11,R,11,0
// 6.8,0.016,2780,9,2004,113,UL,,Ken Griffey Jr.,Reds,420,9,L,B,0
// 6.7,0.024,2425,2,2003,78,UL,,Mitch Meluskey,Tigers,280,11,S,10,0
// 6.7,0.017,3171,2,2004,181,UL,,A. J. Pierzynski,Twins,400,11,L,9,0
// 6.7,0.018,751,3,2001,213,1st,TD,Mike Sweeney,Royals,380,10,R,B,0
// 6.7,0.019,1824,4,2002,23,UL,,Junior Spivey,Diamondbacks,350,11,R,13,0
// 6.7,0.030,1433,5,2002,17,P,,Lenny Harris,Brewers,220,11,L,13,0
// 6.7,0.013,2666,6,2003,101,UL,,Kazuo Matsui,Mets,500,12,S,18,0
// 6.7,0.015,780,7,2001,228,1st,TD,Gary Sheffield,Dodgers,460,10,R,B,0
// 6.7,0.015,1359,7,2001,228,DS,,Gary Sheffield,Dodgers,460,10,R,B,0
// 6.7,0.030,1433,7,2002,17,P,,Lenny Harris,Brewers,220,11,L,13,0
// 6.7,0.026,1866,7,2002,27,UL,,Gary Sheffield,Yankees,260,12,R,10,0
// 6.7,0.024,2503,7,2003,85,UL,,Matt Stairs,Pirates,280,10,L,10,0
// 6.7,0.027,3149,7,2004,175,UL,,Brady Clark,Brewers,250,11,R,15,0
// 6.7,0.032,3515,7,2005,265,UL,,Mark McLemore,Mariners,210,11,S,15,0
// 6.7,0.016,3684,7,2005,306,UL,,Bernie Williams,Yankees,430,9,S,B,0
// 6.7,0.016,937,8,2001,306,1st,TD,Bernie Williams,Yankees,430,9,S,B,0
// 6.7,0.019,3474,8,2005,255,UL,,Marlon Byrd,Phillies,350,11,R,12,0
// 6.7,0.016,3684,8,2005,306,UL,,Bernie Williams,Yankees,430,9,S,B,0
// 6.7,0.015,780,9,2001,228,1st,TD,Gary Sheffield,Dodgers,460,10,R,B,0
// 6.7,0.015,1359,9,2001,228,DS,,Gary Sheffield,Dodgers,460,10,R,B,0
// 6.7,0.027,3149,9,2004,175,UL,,Brady Clark,Brewers,250,11,R,15,0
// 6.7,0.016,3684,9,2005,306,UL,,Bernie Williams,Yankees,430,9,S,B,0
// 6.6,0.021,342,3,2000,86,1st,PR,Erubiel Durazo,Diamondbacks,320,9,L,C,0
// 6.6,0.017,1530,3,2002,137,RS,,Jeff Bagwell '91,Astros,390,11,R,12,0
// 6.6,0.017,2750,3,2004,110,UL,,Randall Simon,Pirates,380,11,L,10,0
// 6.6,0.017,558,5,2000,140,1st,PR,Ken Caminiti,Rangers,380,9,S,B,0
// 6.6,0.028,2333,5,2003,69,UL,,Bill Mueller,Cubs,240,12,S,13,0
// 6.6,0.025,3298,5,2004,212,UL,,Robin Ventura,Yankees,260,11,L,10,0
// 6.6,0.018,3454,6,2005,250,UL,,Miguel Tejada,Athletics,360,10,R,12,0
// 6.6,0.013,3790,6,2005,339,UL,,Michael Young,Rangers,490,11,R,13,0
// 6.6,0.014,264,7,2000,66,1st,PR,Carl Everett,Red Sox,460,9,S,B,0
// 6.6,0.021,342,7,2000,86,1st,PR,Erubiel Durazo,Diamondbacks,320,9,L,C,0
// 6.6,0.019,606,7,2000,152,1st,PR,Larry Walker,Rockies,340,9,L,B,0
// 6.6,0.015,1976,7,2002,37,UL,,Adam Dunn,Reds,440,11,L,15,0
// 6.6,0.021,3090,7,2004,162,UL,,Aaron Guiel,Royals,320,10,L,10,0
// 6.6,0.017,3529,7,2005,268,UL,,Craig Wilson,Pirates,380,10,R,13,0
// 6.6,0.022,3543,7,2005,272,UL,,Ichiro Suzuki,Mariners,300,12,L,19,0
// 6.6,0.015,3671,7,2005,302,UL,,Ichiro Suzuki,Mariners,450,13,L,21,0
// 6.6,0.018,2066,8,2002,45,UL,,Milton Bradley,Dodgers,360,10,S,15,0
// 6.6,0.019,2520,8,2003,86,UL,,Jose Valentin,White Sox,340,10,S,16,0
// 6.6,0.015,3151,8,2004,176,UL,,Torii Hunter,Twins,430,10,R,16,0
// 6.6,0.015,91,9,2000,23,1st,PR,Luis Gonzalez,Diamondbacks,450,10,R,B,0
// 6.6,0.018,262,9,2000,66,1st,PR,Ron Gant,Rockies,370,8,R,B,0
// 6.6,0.021,342,9,2000,86,1st,PR,Erubiel Durazo,Diamondbacks,320,9,L,C,0
// 6.6,0.019,606,9,2000,152,1st,PR,Larry Walker,Rockies,340,9,L,B,0
// 6.6,0.017,1450,9,2002,23,P,,Reggie Sanders,Pirates,390,10,R,14,0
// 6.6,0.025,1866,9,2002,27,UL,,Gary Sheffield,Yankees,260,12,R,10,0
// 6.6,0.015,1976,9,2002,37,UL,,Adam Dunn,Reds,440,11,L,15,0
// 6.6,0.015,2405,9,2003,76,UL,,Juan Gonzalez,Royals,440,10,R,9,0
// 6.6,0.017,2507,9,2003,85,UL,,Jose Guillen,Reds,380,10,R,11,0
// 6.6,0.021,3090,9,2004,162,UL,,Aaron Guiel,Royals,320,10,L,10,0
// 6.6,0.031,3515,9,2005,265,UL,,Mark McLemore,Mariners,210,11,S,15,0
// 6.6,0.017,3529,9,2005,268,UL,,Craig Wilson,Pirates,380,10,R,13,0
// 6.6,0.022,3543,9,2005,272,UL,,Ichiro Suzuki,Mariners,300,12,L,19,0
// 6.5,0.017,2121,2,2003,50,UL,,Johnny Estrada,Braves,390,12,S,11,0
// 6.5,0.020,2452,2,2003,80,UL,,Rod Barajas,Diamondbacks,330,11,R,10,0
// 6.5,0.015,3791,2,2005,340,UL,,Ivan Rodriguez,Rangers,420,10,R,16,0
// 6.5,0.016,1366,3,2001,451,DS,,Carlos Delgado,Blue Jays,410,9,L,C,0
// 6.5,0.020,1443,3,2002,21,P,,Olmedo Saenz,Athletics,320,10,R,11,0
// 6.5,0.041,1917,3,2002,32,UL,,Brad Fullmer,Rangers,160,11,L,11,0
// 6.5,0.031,2476,3,2003,82,UL,,Paul Konerko,White Sox,210,10,R,11,0
// 6.5,0.017,3529,3,2005,268,UL,,Craig Wilson,Pirates,380,10,R,13,0
// 6.5,0.020,1317,4,2001,48,ASG,,Junior Spivey,Diamondbacks,330,11,R,16,0
// 6.5,0.014,3783,4,2005,337,UL,,Michael Young,Rangers,470,11,R,13,0
// 6.5,0.022,1306,5,2001,37,ASG,,Mike Lowell,Marlins,290,11,R,10,0
// 6.5,0.025,1635,5,2002,5,UL,,Troy Glaus,Angels,260,10,R,10,0
// 6.5,0.016,1715,5,2002,13,UL,,Alex Cintron,Diamondbacks,400,11,S,13,0
// 6.5,0.024,1764,5,2002,18,UL,,Troy Glaus,Diamondbacks,270,10,R,10,0
// 6.5,0.025,1908,5,2002,31,UL,,Mike Lowell,Marlins,260,11,R,11,0
// 6.5,0.019,2520,5,2003,86,UL,,Jose Valentin,White Sox,340,10,S,16,0
// 6.5,0.020,2665,5,2003,101,UL,,Mark Teixeira,Rangers,330,10,S,12,0
// 6.5,0.015,2931,5,2004,132,UL,,Mike Lowell,Marlins,430,10,R,11,0
// 6.5,0.016,3357,5,2005,226,UL,,Alex Rodriguez,Yankees,400,11,R,19,0
// 6.5,0.013,1124,6,2001,400,1st,TD,Alex Rodriguez,Mariners,510,8,R,A,0
// 6.5,0.020,1304,6,2001,35,ASG,,Jose Hernandez,Brewers,320,10,R,14,0
// 6.5,0.013,1389,6,2001,400,HRH,,Alex Rodriguez,Mariners,510,8,R,A,0
// 6.5,0.016,1715,6,2002,13,UL,,Alex Cintron,Diamondbacks,400,11,S,13,0
// 6.5,0.022,2253,6,2003,62,UL,,Jose Hernandez,Brewers,300,10,R,14,0
// 6.5,0.020,2339,6,2003,70,UL,,Miguel Tejada,Orioles,330,10,R,14,0
// 6.5,0.020,2341,6,2003,70,UL,,Derek Jeter,Yankees,330,12,R,19,0
// 6.5,0.019,2520,6,2003,86,UL,,Jose Valentin,White Sox,340,10,S,16,0
// 6.5,0.014,2793,6,2004,114,UL,,Carlos Guillen,Tigers,450,11,S,13,0
// 6.5,0.015,2814,6,2004,117,UL,,Luis Aparicio,White Sox,420,11,R,25,0
// 6.5,0.014,91,7,2000,23,1st,PR,Luis Gonzalez,Diamondbacks,450,10,R,B,0
// 6.5,0.014,642,7,2000,164,1st,PR,Bobby Higginson,Tigers,450,9,L,A,0
// 6.5,0.015,669,7,2001,173,1st,PR,Cliff Floyd,Marlins,440,9,L,A,0
// 6.5,0.012,712,7,2001,194,1st,TD,Carl Everett,Astros,540,9,S,A,0
// 6.5,0.014,1192,7,2001,434,1st,TD,Juan Gonzalez,Rangers,460,9,R,B,0
// 6.5,0.017,1450,7,2002,23,P,,Reggie Sanders,Pirates,390,10,R,14,0
// 6.5,0.030,1685,7,2002,11,UL,,Jeromy Burnitz,Mets,220,10,L,13,0
// 6.5,0.019,1831,7,2002,24,UL,,Kenny Lofton,White Sox,340,12,L,20,0
// 6.5,0.023,1904,7,2002,31,UL,,Reggie Sanders,Giants,280,10,R,18,0
// 6.5,0.023,1967,7,2002,36,UL,,Ray Lankford,Cardinals,280,12,L,8,0
// 6.5,0.022,2273,7,2003,64,UL,,Jody Gerut,Indians,290,10,L,14,0
// 6.5,0.022,2397,7,2003,75,UL,,John Vander Wal,Brewers,300,10,L,11,0
// 6.5,0.015,2405,7,2003,76,UL,,Juan Gonzalez,Royals,440,10,R,9,0
// 6.5,0.014,2407,7,2003,76,UL,,Bobby Abreu,Phillies,450,11,L,18,0
// 6.5,0.019,2520,7,2003,86,UL,,Jose Valentin,White Sox,340,10,S,16,0
// 6.5,0.030,3162,7,2004,179,UL,,Jeromy Burnitz,Brewers,220,10,L,13,0
// 6.5,0.023,3208,7,2004,190,UL,,Brad Wilkerson,Expos,280,11,L,11,0
// 6.5,0.017,3536,7,2005,270,UL,,Reggie Sanders,Pirates,390,10,R,14,0
// 6.5,0.018,3764,7,2005,331,UL,,Juan Gonzalez,Rangers,370,10,R,9,0
// 6.5,0.014,264,8,2000,66,1st,PR,Carl Everett,Red Sox,460,9,S,B,0
// 6.5,0.012,712,8,2001,194,1st,TD,Carl Everett,Astros,540,9,S,A,0
// 6.5,0.019,1831,8,2002,24,UL,,Kenny Lofton,White Sox,340,12,L,20,0
// 6.5,0.023,1967,8,2002,36,UL,,Ray Lankford,Cardinals,280,12,L,8,0
// 6.5,0.020,2850,8,2004,121,UL,,Alex Sanchez,Tigers,330,12,L,17,0
// 6.5,0.020,3090,8,2004,162,UL,,Aaron Guiel,Royals,320,10,L,10,0
// 6.5,0.023,3208,8,2004,190,UL,,Brad Wilkerson,Expos,280,11,L,11,0
// 6.5,0.014,264,9,2000,66,1st,PR,Carl Everett,Red Sox,460,9,S,B,0
// 6.5,0.014,642,9,2000,164,1st,PR,Bobby Higginson,Tigers,450,9,L,A,0
// 6.5,0.015,669,9,2001,173,1st,PR,Cliff Floyd,Marlins,440,9,L,A,0
// 6.5,0.012,712,9,2001,194,1st,TD,Carl Everett,Astros,540,9,S,A,0
// 6.5,0.014,1510,9,2002,164,P,,Bobby Higginson,Tigers,450,9,L,A,0
// 6.5,0.030,1685,9,2002,11,UL,,Jeromy Burnitz,Mets,220,10,L,13,0
// 6.5,0.019,1831,9,2002,24,UL,,Kenny Lofton,White Sox,340,12,L,20,0
// 6.5,0.023,1904,9,2002,31,UL,,Reggie Sanders,Giants,280,10,R,18,0
// 6.5,0.023,1967,9,2002,36,UL,,Ray Lankford,Cardinals,280,12,L,8,0
// 6.5,0.022,2273,9,2003,64,UL,,Jody Gerut,Indians,290,10,L,14,0
// 6.5,0.022,2397,9,2003,75,UL,,John Vander Wal,Brewers,300,10,L,11,0
// 6.5,0.023,2503,9,2003,85,UL,,Matt Stairs,Pirates,280,10,L,10,0
// 6.5,0.019,2520,9,2003,86,UL,,Jose Valentin,White Sox,340,10,S,16,0
// 6.5,0.030,3162,9,2004,179,UL,,Jeromy Burnitz,Brewers,220,10,L,13,0
// 6.5,0.023,3208,9,2004,190,UL,,Brad Wilkerson,Expos,280,11,L,11,0
// 6.5,0.017,3536,9,2005,270,UL,,Reggie Sanders,Pirates,390,10,R,14,0
// 6.5,0.014,3671,9,2005,302,UL,,Ichiro Suzuki,Mariners,450,13,L,21,0
// 6.5,0.018,3764,9,2005,331,UL,,Juan Gonzalez,Rangers,370,10,R,9,0
// 6.4,0.024,2331,2,2003,69,UL,,Ben Davis,Mariners,270,9,S,10,0
// 6.4,0.021,434,3,2000,109,1st,PR,Mark Grace,Diamondbacks,300,10,L,C,0
// 6.4,0.016,1226,3,2001,451,1st,TD,Carlos Delgado,Blue Jays,410,9,L,C,0
// 6.4,0.021,2157,3,2003,53,UL,,David Ortiz,Red Sox,300,11,L,8,0
// 6.4,0.016,995,5,2001,335,1st,TD,Scott Rolen,Phillies,390,8,R,B,0
// 6.4,0.014,1002,5,2001,339,1st,TD,Scott Rolen,Phillies,460,9,R,B,0
// 6.4,0.016,1230,5,2001,453,1st,TD,Tony Fernandez,Blue Jays,390,10,S,B,0
// 6.4,0.018,3656,5,2005,299,UL,,Mark McLemore,Mariners,350,12,S,23,0
// 6.4,0.016,3775,5,2005,335,UL,,Scott Rolen,Phillies,390,8,R,B,0
// 6.4,0.016,1281,7,2001,12,ASG,TD,Ichiro Suzuki,Mariners,400,13,L,22,0
// 6.4,0.014,1510,7,2002,164,P,,Bobby Higginson,Tigers,450,9,L,A,0
// 6.4,0.017,2507,7,2003,85,UL,,Jose Guillen,Reds,380,10,R,11,0
// 6.4,0.014,1192,9,2001,434,1st,TD,Juan Gonzalez,Rangers,460,9,R,B,0
// 6.4,0.021,2285,9,2003,65,UL,,David Newhan,Orioles,310,11,L,13,0
// 6.4,0.015,2374,9,2003,73,UL,,Moises Alou,Giants,420,10,R,10,0
// 6.4,0.014,2407,9,2003,76,UL,,Bobby Abreu,Phillies,450,11,L,18,0
// 6.3,0.020,212,0,2000,53,1st,PR,Trenidad Hubbard,Orioles,320,9,R,C,0
// 6.3,0.021,3809,0,2005,345,UL,,Josh Phelps,Blue Jays,300,10,R,9,0
// 6.3,0.020,3312,2,2005,215,UL,,Mike Piazza,Mets,310,10,R,8,0
// 6.3,0.020,544,3,2000,136,1st,PR,David Segui,Indians,320,9,S,C,0
// 6.3,0.014,1036,3,2001,356,1st,TD,Kevin Young,Pirates,440,9,R,A,0
// 6.3,0.017,1045,3,2001,360,1st,TD,Ryan Klesko,Padres,380,9,L,A,0
// 6.3,0.035,1483,3,2002,39,P,,Mike Kinkade,Dodgers,180,10,R,12,0
// 6.3,0.020,2340,3,2003,70,UL,,Tino Martinez,Yankees,320,10,L,10,0
// 6.3,0.020,3312,3,2005,215,UL,,Mike Piazza,Mets,310,10,R,8,0
// 6.3,0.024,3756,3,2005,328,UL,,Tino Martinez,Devil Rays,260,10,L,10,0
// 6.3,0.045,2018,4,2002,41,UL,,Todd Walker,Cubs,140,10,L,10,0
// 6.3,0.022,3197,4,2004,187,UL,,Keith Ginter,Brewers,290,10,R,9,0
// 6.3,0.024,3268,4,2004,204,UL,,Todd Walker,Cubs,260,10,L,8,0
// 6.3,0.017,526,5,2000,132,1st,PR,Fernando Tatis,Expos,370,9,R,B,0
// 6.3,0.011,1345,5,2001,171,CC,,Brooks Robinson,Orioles,590,11,R,16,0
// 6.3,0.012,1326,6,2001,119,CC,,Pee Wee Reese,Dodgers,520,12,R,21,0
// 6.3,0.014,1341,6,2001,167,CC,,Pee Wee Reese,Yankees,460,12,R,23,0
// 6.3,0.017,3117,6,2004,168,UL,,Jose Hernandez,Brewers,370,10,R,10,0
// 6.3,0.012,141,7,2000,36,1st,PR,Ken Griffey Jr.,Reds,530,9,L,A,0
// 6.3,0.016,203,7,2000,51,1st,PR,Albert Belle,Orioles,390,9,R,B,0
// 6.3,0.015,404,7,2000,101,1st,PR,Magglio Ordonez,White Sox,420,9,R,A,0
// 6.3,0.020,1099,7,2001,387,1st,TD,Jay Buhner,Mariners,310,8,R,C,0
// 6.3,0.017,1180,7,2001,428,1st,TD,Bubba Trammell,Devil Rays,370,9,R,C,0
// 6.3,0.018,1196,7,2001,436,1st,TD,Rusty Greer,Rangers,360,10,L,C,0
// 6.3,0.019,1305,7,2001,36,ASG,,Andruw Jones,Braves,340,10,L,16,0
// 6.3,0.018,1365,7,2001,436,DS,,Rusty Greer,Rangers,360,10,L,C,0
// 6.3,0.012,1379,7,2001,36,HRH,,Ken Griffey Jr.,Reds,530,9,L,A,0
// 6.3,0.035,1483,7,2002,39,P,,Mike Kinkade,Dodgers,180,10,R,12,0
// 6.3,0.019,2202,7,2003,57,UL,,Moises Alou,Cubs,330,10,R,10,0
// 6.3,0.020,2285,7,2003,65,UL,,David Newhan,Orioles,310,11,L,13,0
// 6.3,0.015,2374,7,2003,73,UL,,Moises Alou,Giants,420,10,R,10,0
// 6.3,0.018,2819,7,2004,117,UL,,Craig Monroe,Tigers,350,10,R,10,0
// 6.3,0.018,3656,7,2005,299,UL,,Mark McLemore,Mariners,350,12,S,23,0
// 6.3,0.019,80,8,2000,20,1st,PR,Steve Finley,Diamondbacks,340,8,L,B,0
// 6.3,0.012,141,8,2000,36,1st,PR,Ken Griffey Jr.,Reds,530,9,L,A,0
// 6.3,0.012,1379,8,2001,36,HRH,,Ken Griffey Jr.,Reds,530,9,L,A,0
// 6.3,0.018,1468,8,2002,32,P,,Steve Finley,Diamondbacks,350,10,L,14,0
// 6.3,0.018,1747,8,2002,16,UL,,Steve Finley,Diamondbacks,350,10,L,14,0
// 6.3,0.015,2572,8,2003,91,UL,,Torii Hunter,Twins,420,10,R,17,0
// 6.3,0.017,2950,8,2004,135,UL,,Juan Pierre,Marlins,370,12,L,22,0
// 6.3,0.018,3218,8,2004,192,UL,,Scott Podsednik,Brewers,360,12,L,23,0
// 6.3,0.019,80,9,2000,20,1st,PR,Steve Finley,Diamondbacks,340,8,L,B,0
// 6.3,0.012,141,9,2000,36,1st,PR,Ken Griffey Jr.,Reds,530,9,L,A,0
// 6.3,0.020,1099,9,2001,387,1st,TD,Jay Buhner,Mariners,310,8,R,C,0
// 6.3,0.017,1180,9,2001,428,1st,TD,Bubba Trammell,Devil Rays,370,9,R,C,0
// 6.3,0.018,1196,9,2001,436,1st,TD,Rusty Greer,Rangers,360,10,L,C,0
// 6.3,0.016,1281,9,2001,12,ASG,TD,Ichiro Suzuki,Mariners,400,13,L,22,0
// 6.3,0.018,1365,9,2001,436,DS,,Rusty Greer,Rangers,360,10,L,C,0
// 6.3,0.012,1379,9,2001,36,HRH,,Ken Griffey Jr.,Reds,530,9,L,A,0
// 6.3,0.035,1483,9,2002,39,P,,Mike Kinkade,Dodgers,180,10,R,12,0
// 6.3,0.019,2202,9,2003,57,UL,,Moises Alou,Cubs,330,10,R,10,0
// 6.3,0.015,2445,9,2003,79,UL,,Carlos Lee,White Sox,410,10,R,16,0
// 6.3,0.018,2485,9,2003,83,UL,,Rondell White,Padres,350,10,R,10,0
// 6.3,0.018,2819,9,2004,117,UL,,Craig Monroe,Tigers,350,10,R,10,0
// 6.3,0.020,3271,9,2004,205,UL,,Shannon Stewart,Twins,320,11,R,13,0
// 6.3,0.018,3656,9,2005,299,UL,,Mark McLemore,Mariners,350,12,S,23,0
// 6.3,0.017,3679,9,2005,304,UL,,Ichiro Suzuki,Mariners,370,11,L,21,0
// 6.2,0.018,65,0,2000,17,1st,PR,Harold Baines,Orioles,340,9,L,C,0
// 6.2,0.017,402,2,2000,101,1st,PR,Charles Johnson,Marlins,370,9,R,C,0
// 6.2,0.022,1482,2,2002,39,P,,Jorge Posada,Yankees,280,11,S,9,0
// 6.2,0.017,1529,2,2002,136,RS,,Benito Santiago '87,Padres,370,11,R,16,0
// 6.2,0.016,2213,2,2003,58,UL,,Michael Barrett,Cubs,390,10,R,9,0
// 6.2,0.021,2383,2,2003,74,UL,,A. J. Pierzynski,Giants,300,11,L,12,0
// 6.2,0.018,3263,2,2004,203,UL,,A. J. Pierzynski,Twins,350,11,L,10,0
// 6.2,0.022,3282,2,2004,208,UL,,Jorge Posada,Yankees,280,11,S,9,0
// 6.2,0.024,3332,2,2005,220,UL,,Jason Phillips,Mets,260,11,R,8,0
// 6.2,0.017,3641,2,2005,295,UL,,Ivan Rodriguez,Rangers,360,11,R,11,0
// 6.2,0.021,278,3,2000,70,1st,PR,David Segui,Orioles,300,9,S,C,0
// 6.2,0.062,1471,3,2002,33,P,,Hee Seop Choi,Cubs,100,11,L,10,0
// 6.2,0.018,1760,3,2002,17,UL,,Shea Hillenbrand,Diamondbacks,340,11,R,10,0
// 6.2,0.030,1790,3,2002,20,UL,,Mark Grace,Diamondbacks,210,12,L,12,0
// 6.2,0.028,2554,3,2003,89,UL,,Sean Casey,Reds,220,11,L,12,0
// 6.2,0.028,2605,3,2003,94,UL,,Ben Broussard,Indians,220,11,L,10,0
// 6.2,0.030,3224,3,2004,194,UL,,Doug Mientkiewicz,Twins,210,12,L,11,0
// 6.2,0.024,3332,3,2005,220,UL,,Jason Phillips,Mets,260,11,R,8,0
// 6.2,0.015,63,4,2000,16,1st,PR,Jay Bell,Diamondbacks,410,9,R,B,0
// 6.2,0.017,1574,4,2002,116,SS,,Chuck Knoblauch '97,Twins,370,12,R,22,0
// 6.2,0.019,2419,4,2003,77,UL,,D'Angelo Jimenez,White Sox,320,11,S,12,0
// 6.2,0.018,2432,4,2003,78,UL,,Ray Durham,White Sox,340,10,S,20,0
// 6.2,0.013,2590,4,2003,93,UL,,Jeff Kent,Dodgers,480,10,R,12,0
// 6.2,0.020,2669,4,2003,101,UL,,Mark Loretta,Padres,310,11,R,11,0
// 6.2,0.014,3020,4,2004,147,UL,,Jeff Kent,Astros,430,10,R,12,0
// 6.2,0.023,3289,4,2004,210,UL,,Jose Vidro,Expos,270,11,S,14,0
// 6.2,0.013,3394,4,2005,235,UL,,Alfonso Soriano,Yankees,460,10,R,21,0
// 6.2,0.024,1484,5,2002,40,P,,Corey Koskie,Twins,260,11,L,12,0
// 6.2,0.016,1532,5,2002,139,RS,,Scott Rolen '97,Phillies,400,11,R,15,0
// 6.2,0.024,3159,5,2004,178,UL,,Corey Koskie,Twins,260,11,L,12,0
// 6.2,0.021,3197,5,2004,187,UL,,Keith Ginter,Brewers,290,10,R,9,0
// 6.2,0.021,3216,5,2004,192,UL,,Corey Koskie,Twins,300,11,L,17,0
// 6.2,0.016,1282,6,2001,13,ASG,TD,Derek Jeter,Yankees,380,12,R,19,0
// 6.2,0.020,3350,6,2005,225,UL,,Derek Jeter,Yankees,310,12,R,19,0
// 6.2,0.018,80,7,2000,20,1st,PR,Steve Finley,Diamondbacks,340,8,L,B,0
// 6.2,0.014,144,7,2000,36,1st,PR,Andruw Jones,Braves,450,9,R,A,0
// 6.2,0.026,1609,7,2002,3,UL,,Raul Mondesi,Blue Jays,240,10,R,19,0
// 6.2,0.025,1693,7,2002,11,UL,,Tim Salmon,Angels,250,11,R,11,0
// 6.2,0.015,2445,7,2003,79,UL,,Carlos Lee,White Sox,410,10,R,16,0
// 6.2,0.018,2485,7,2003,83,UL,,Rondell White,Padres,350,10,R,10,0
// 6.2,0.030,2564,7,2003,90,UL,,Brady Clark,Reds,210,11,R,13,0
// 6.2,0.022,2894,7,2004,127,UL,,Bobby Higginson,Tigers,280,11,L,18,0
// 6.2,0.022,3028,7,2004,149,UL,,Richard Hidalgo,Astros,280,11,R,13,0
// 6.2,0.019,3271,7,2004,205,UL,,Shannon Stewart,Twins,320,11,R,13,0
// 6.2,0.024,3332,7,2005,220,UL,,Jason Phillips,Mets,260,11,R,8,0
// 6.2,0.020,3568,7,2005,278,UL,,Mark Kotsay,Padres,310,11,L,16,0
// 6.2,0.018,3640,7,2005,295,UL,,Mike Cameron,Mariners,340,11,R,20,0
// 6.2,0.017,3679,7,2005,304,UL,,Ichiro Suzuki,Mariners,370,11,L,21,0
// 6.2,0.014,144,8,2000,36,1st,PR,Andruw Jones,Braves,450,9,R,A,0
// 6.2,0.018,1305,8,2001,36,ASG,,Andruw Jones,Braves,340,10,L,16,0
// 6.2,0.016,2312,8,2003,67,UL,,Corey Patterson,Cubs,380,10,L,15,0
// 6.2,0.018,3403,8,2005,237,UL,,Mark Kotsay,Athletics,350,11,L,16,0
// 6.2,0.020,3568,8,2005,278,UL,,Mark Kotsay,Padres,310,11,L,16,0
// 6.2,0.021,3808,8,2005,345,UL,,Jose Cruz,Blue Jays,300,10,S,19,0
// 6.2,0.014,144,9,2000,36,1st,PR,Andruw Jones,Braves,450,9,R,A,0
// 6.2,0.016,203,9,2000,51,1st,PR,Albert Belle,Orioles,390,9,R,B,0
// 6.2,0.015,404,9,2000,101,1st,PR,Magglio Ordonez,White Sox,420,9,R,A,0
// 6.2,0.018,1305,9,2001,36,ASG,,Andruw Jones,Braves,340,10,L,16,0
// 6.2,0.026,1609,9,2002,3,UL,,Raul Mondesi,Blue Jays,240,10,R,19,0
// 6.2,0.025,1693,9,2002,11,UL,,Tim Salmon,Angels,250,11,R,11,0
// 6.2,0.030,2564,9,2003,90,UL,,Brady Clark,Reds,210,11,R,13,0
// 6.2,0.022,2894,9,2004,127,UL,,Bobby Higginson,Tigers,280,11,L,18,0
// 6.2,0.024,3332,9,2005,220,UL,,Jason Phillips,Mets,260,11,R,8,0
// 6.2,0.020,3568,9,2005,278,UL,,Mark Kotsay,Padres,310,11,L,16,0
// 6.2,0.018,3640,9,2005,295,UL,,Mike Cameron,Mariners,340,11,R,20,0
// 6.2,0.021,3808,9,2005,345,UL,,Jose Cruz,Blue Jays,300,10,S,19,0
// 6.1,0.018,507,0,2000,127,1st,PR,Harold Baines,Indians,340,9,L,C,0
// 6.1,0.017,197,2,2000,50,1st,PR,Brent Mayne,Rockies,350,10,R,B,0
// 6.1,0.015,904,2,2001,290,1st,TD,Mike Piazza,Mets,410,8,R,B,0
// 6.1,0.015,1011,2,2001,343,1st,TD,Jason Kendall,Pirates,420,10,R,A,0
// 6.1,0.015,1386,2,2001,290,HRH,,Mike Piazza,Mets,410,8,R,B,0
// 6.1,0.017,1837,2,2002,24,UL,,Johnny Estrada,Braves,360,11,S,8,0
// 6.1,0.024,3379,2,2005,232,UL,,Jorge Posada,Yankees,250,11,S,11,0
// 6.1,0.015,3801,2,2005,343,UL,,Jason Kendall,Pirates,420,10,R,A,0
// 6.1,0.023,76,3,2000,19,1st,PR,Greg Colbrunn,Diamondbacks,270,9,R,C,0
// 6.1,0.027,1636,3,2002,6,UL,,Tony Clark,Red Sox,230,11,S,12,0
// 6.1,0.027,2491,3,2003,84,UL,,Matt Stairs,Brewers,230,11,L,11,0
// 6.1,0.020,3181,3,2004,183,UL,,Lyle Overbay,Brewers,300,11,L,10,0
// 6.1,0.029,3259,3,2004,202,UL,,Doug Mientkiewicz,Twins,210,12,L,10,0
// 6.1,0.023,3049,4,2004,154,UL,,Jose Hernandez,Indians,260,11,R,10,0
// 6.1,0.016,177,5,2000,45,1st,PR,Jeff Cirillo,Rockies,390,10,R,B,0
// 6.1,0.017,1311,5,2001,42,ASG,,Scott Rolen,Phillies,350,11,R,15,0
// 6.1,0.017,1630,5,2002,5,UL,,Scott Rolen,Phillies,350,11,R,15,0
// 6.1,0.017,2436,5,2003,79,UL,,Morgan Ensberg,Astros,350,11,R,15,0
// 6.1,0.023,2532,5,2003,87,UL,,Aaron Boone,Reds,260,11,R,15,0
// 6.1,0.023,3400,5,2005,237,UL,,Eric Chavez,Athletics,270,10,L,14,0
// 6.1,0.015,915,6,2001,295,1st,TD,Derek Jeter,Yankees,410,10,R,A,0
// 6.1,0.015,3639,6,2005,295,UL,,Derek Jeter,Yankees,410,10,R,A,0
// 6.1,0.012,199,7,2000,50,1st,PR,Brady Anderson,Orioles,500,10,L,A,0
// 6.1,0.017,531,7,2000,133,1st,PR,David Justice,Indians,350,10,L,C,0
// 6.1,0.016,576,7,2000,144,1st,PR,Jeffrey Hammonds,Rockies,380,9,R,A,0
// 6.1,0.017,800,7,2001,238,1st,TD,Geoff Jenkins,Brewers,360,8,L,B,0
// 6.1,0.028,1706,7,2002,13,UL,,Marty Cordova,Orioles,220,11,R,12,0
// 6.1,0.024,1903,7,2002,30,UL,,Eli Marrero,Braves,250,12,R,10,0
// 6.1,0.019,2162,7,2003,54,UL,,Sammy Sosa,Orioles,320,11,R,10,0
// 6.1,0.023,2326,7,2003,69,UL,,Matt Lawton,Indians,270,12,L,16,0
// 6.1,0.027,2371,7,2003,73,UL,,Rondell White,Yankees,230,11,R,12,0
// 6.1,0.034,2576,7,2003,91,UL,,Austin Kearns,Reds,180,10,R,11,0
// 6.1,0.028,2690,7,2003,103,UL,,Marty Cordova,Indians,220,11,R,12,0
// 6.1,0.027,3315,7,2005,216,UL,,Cliff Floyd,Mets,230,11,L,13,0
// 6.1,0.029,3559,7,2005,275,UL,,Ryan Klesko,Padres,210,12,L,10,0
// 6.1,0.020,3808,7,2005,345,UL,,Jose Cruz,Blue Jays,300,10,S,19,0
// 6.1,0.022,3028,8,2004,149,UL,,Richard Hidalgo,Astros,280,11,R,13,0
// 6.1,0.016,576,9,2000,144,1st,PR,Jeffrey Hammonds,Rockies,380,9,R,A,0
// 6.1,0.017,800,9,2001,238,1st,TD,Geoff Jenkins,Brewers,360,8,L,B,0
// 6.1,0.028,1706,9,2002,13,UL,,Marty Cordova,Orioles,220,11,R,12,0
// 6.1,0.024,1903,9,2002,30,UL,,Eli Marrero,Braves,250,12,R,10,0
// 6.1,0.019,2162,9,2003,54,UL,,Sammy Sosa,Orioles,320,11,R,10,0
// 6.1,0.023,2326,9,2003,69,UL,,Matt Lawton,Indians,270,12,L,16,0
// 6.1,0.027,2371,9,2003,73,UL,,Rondell White,Yankees,230,11,R,12,0
// 6.1,0.028,2690,9,2003,103,UL,,Marty Cordova,Indians,220,11,R,12,0
// 6.1,0.022,3028,9,2004,149,UL,,Richard Hidalgo,Astros,280,11,R,13,0
// 6.1,0.027,3315,9,2005,216,UL,,Cliff Floyd,Mets,230,11,L,13,0
// 6.1,0.029,3559,9,2005,275,UL,,Ryan Klesko,Padres,210,12,L,10,0
// 6,0.017,1391,0,2001,421,HRH,,Jose Canseco,Devil Rays,350,8,R,B,0
// 6,0.015,253,2,2000,64,1st,PR,Mitch Meluskey,Astros,400,10,S,B,0
// 6,0.013,1020,2,2001,348,1st,TD,Jason Kendall,Pirates,460,10,R,A,0
// 6,0.015,155,3,2000,39,1st,PR,Ryan Klesko,Braves,410,9,L,B,0
// 6,0.021,900,3,2001,288,1st,TD,John Olerud,Mets,290,10,L,C,0
// 6,0.025,2494,3,2003,84,UL,,Richie Sexson,Mariners,240,9,R,10,0
// 6,0.017,3601,4,2005,285,UL,,Ray Durham,Giants,360,10,S,13,0
// 6,0.020,528,5,2000,132,1st,PR,Travis Fryman,Indians,300,9,R,C,0
// 6,0.030,1892,5,2002,29,UL,,Chipper Jones,Braves,200,10,S,10,0
// 6,0.025,2660,5,2003,100,UL,,Russell Branyan,Indians,240,9,L,14,0
// 6,0.017,972,7,2001,324,1st,TD,Matt Stairs,Athletics,360,8,L,B,0
// 6,0.013,1058,7,2001,367,1st,TD,Reggie Sanders,Padres,470,9,R,A,0
// 6,0.017,1139,7,2001,407,1st,TD,Ray Lankford,Cardinals,350,9,L,B,0
// 6,0.027,1746,7,2002,16,UL,,David Delucci,Diamondbacks,220,10,L,15,0
// 6,0.027,3178,7,2004,183,UL,,Geoff Jenkins,Brewers,220,10,L,14,0
// 6,0.029,3431,7,2005,244,UL,,Pat Burrell,Phillies,210,10,R,10,0
// 6,0.012,199,8,2000,50,1st,PR,Brady Anderson,Orioles,500,10,L,A,0
// 6,0.019,1737,8,2002,15,UL,,Steve Finley,Diamondbacks,310,10,L,14,0
// 6,0.019,2108,8,2003,49,UL,,Torii Hunter,Twins,310,10,R,17,0
// 6,0.012,2255,8,2003,62,UL,,Danny Bautista,Diamondbacks,510,13,R,16,0
// 6,0.018,3640,8,2005,295,UL,,Mike Cameron,Mariners,340,11,R,20,0
// 6,0.015,155,9,2000,39,1st,PR,Ryan Klesko,Braves,410,9,L,B,0
// 6,0.012,199,9,2000,50,1st,PR,Brady Anderson,Orioles,500,10,L,A,0
// 6,0.016,805,9,2001,240,1st,TD,Geoff Jenkins,Brewers,380,8,L,A,0
// 6,0.013,1058,9,2001,367,1st,TD,Reggie Sanders,Padres,470,9,R,A,0
// 6,0.017,1139,9,2001,407,1st,TD,Ray Lankford,Cardinals,350,9,L,B,0
// 6,0.019,2108,9,2003,49,UL,,Torii Hunter,Twins,310,10,R,17,0
// 6,0.033,2576,9,2003,91,UL,,Austin Kearns,Reds,180,10,R,11,0
// 6,0.025,2660,9,2003,100,UL,,Russell Branyan,Indians,240,9,L,14,0
// 6,0.029,3431,9,2005,244,UL,,Pat Burrell,Phillies,210,10,R,10,0
// 5.9,0.017,1166,0,2001,421,1st,TD,Jose Canseco,Devil Rays,350,8,R,B,0
// 5.9,0.021,1624,0,2002,4,UL,,Brad Fullmer,Angels,280,10,L,12,0
// 5.9,0.026,1310,2,2001,41,ASG,,Mike Piazza,Mets,230,10,R,9,0
// 5.9,0.030,1619,2,2002,4,UL,,Mike Piazza,Mets,200,10,R,9,0
// 5.9,0.023,1921,2,2002,32,UL,,Gerald Laird,Rangers,260,13,R,8,0
// 5.9,0.020,2178,2,2003,55,UL,,Jason Varitek,Red Sox,300,10,S,10,0
// 5.9,0.018,2991,2,2004,142,UL,,Ivan Rodriguez,Marlins,320,11,R,12,0
// 5.9,0.020,3524,2,2005,267,UL,,Jason Kendall,Pirates,300,12,R,15,0
// 5.9,0.021,3539,2,2005,271,UL,,Dan Wilson,Mariners,280,11,R,9,0
// 5.9,0.020,136,3,2000,34,1st,PR,Andres Galarraga,Braves,300,8,R,B,0
// 5.9,0.028,1776,3,2002,19,UL,,Sean Casey,Reds,210,11,L,12,0
// 5.9,0.022,2459,3,2003,81,UL,,Scott Spiezio,Angels,270,11,S,11,0
// 5.9,0.020,3024,3,2004,148,UL,,Raul Ibanez,Royals,300,10,L,10,0
// 5.9,0.033,3163,3,2004,179,UL,,Doug Mientkiewicz,Twins,180,11,L,9,0
// 5.9,0.015,873,4,2001,274,1st,TD,Jose Vidro,Expos,400,9,S,B,0
// 5.9,0.015,1290,4,2001,21,ASG,,Alfonso Soriano,Yankees,400,10,R,18,0
// 5.9,0.019,1870,4,2002,27,UL,,Marcus Giles,Braves,310,11,R,16,0
// 5.9,0.018,2614,4,2003,95,UL,,Todd Walker,Reds,330,11,L,12,0
// 5.9,0.016,2768,4,2004,112,UL,,Ray Durham,Giants,380,11,S,18,0
// 5.9,0.020,2788,4,2004,114,UL,,Mark Grudzielanek,Cardinals,300,11,R,10,0
// 5.9,0.018,3204,4,2004,189,UL,,Jose Vidro,Expos,330,11,S,9,0
// 5.9,0.015,3550,4,2005,274,UL,,Jose Vidro,Expos,400,9,S,B,0
// 5.9,0.021,3575,4,2005,279,UL,,Mark Loretta,Padres,280,11,R,11,0
// 5.9,0.025,2073,5,2002,46,UL,,Miguel Cabrera,Marlins,240,10,R,14,0
// 5.9,0.022,2470,5,2003,82,UL,,Ty Wigginton,Mets,270,10,R,11,0
// 5.9,0.020,3077,5,2004,160,UL,,Corey Koskie,Blue Jays,300,10,L,12,0
// 5.9,0.021,3219,5,2004,192,UL,,Corey Koskie,Twins,280,10,L,12,0
// 5.9,0.019,3321,5,2005,217,UL,,David Wright,Mets,310,10,R,12,0
// 5.9,0.019,1756,6,2002,17,UL,,Edgar Renteria,Cardinals,310,11,R,16,0
// 5.9,0.025,2248,6,2003,61,UL,,Nomar Garciaparra,Cubs,240,11,R,12,0
// 5.9,0.018,2799,6,2004,115,UL,,Barry Larkin,Reds,320,9,R,A,0
// 5.9,0.016,3203,6,2004,189,UL,,Christian Guzman,Twins,360,10,S,22,0
// 5.9,0.014,155,7,2000,39,1st,PR,Ryan Klesko,Braves,410,9,L,B,0
// 5.9,0.016,805,7,2001,240,1st,TD,Geoff Jenkins,Brewers,380,8,L,A,0
// 5.9,0.016,858,7,2001,267,1st,TD,Vladimir Guerrero,Expos,370,8,R,B,0
// 5.9,0.020,1185,7,2001,430,1st,TD,Greg Vaughn,Devil Rays,300,8,R,B,0
// 5.9,0.021,1270,7,2001,1,ASG,TD,Garret Anderson,Angels,280,10,L,15,0
// 5.9,0.015,1280,7,2001,11,ASG,TD,Torii Hunter,Twins,400,10,R,19,0
// 5.9,0.020,1522,7,2002,430,P,,Greg Vaughn,Devil Rays,300,8,R,B,0
// 5.9,0.027,1801,7,2002,21,UL,,Quinton McCracken,Diamondbacks,220,11,S,11,0
// 5.9,0.030,1895,7,2002,30,UL,,Jose Cruz,Devil Rays,200,11,R,14,0
// 5.9,0.025,2073,7,2002,46,UL,,Miguel Cabrera,Marlins,240,10,R,14,0
// 5.9,0.019,2108,7,2003,49,UL,,Torii Hunter,Twins,310,10,R,17,0
// 5.9,0.012,2255,7,2003,62,UL,,Danny Bautista,Diamondbacks,510,13,R,16,0
// 5.9,0.025,2660,7,2003,100,UL,,Russell Branyan,Indians,240,9,L,14,0
// 5.9,0.016,2822,7,2004,118,UL,,Lou Brock,Cardinals,360,11,L,28,0
// 5.9,0.035,3600,7,2005,285,UL,,Jose Cruz,Giants,170,11,S,13,0
// 5.9,0.020,3678,7,2005,304,UL,,Shannon Stewart,Blue Jays,300,11,R,13,0
// 5.9,0.027,1801,8,2002,21,UL,,Quinton McCracken,Diamondbacks,220,11,S,11,0
// 5.9,0.022,2024,8,2002,41,UL,,Luis Matos,Orioles,270,11,R,14,0
// 5.9,0.018,2070,8,2002,45,UL,,Johnny Damon,Red Sox,320,11,L,17,0
// 5.9,0.018,2841,8,2004,120,UL,,Preston Willson,Rockies,320,10,R,14,0
// 5.9,0.015,3014,8,2004,146,UL,,Carlos Beltran,Royals,390,10,S,20,0
// 5.9,0.017,531,9,2000,133,1st,PR,David Justice,Indians,350,10,L,C,0
// 5.9,0.016,972,9,2001,324,1st,TD,Matt Stairs,Athletics,360,8,L,B,0
// 5.9,0.020,1185,9,2001,430,1st,TD,Greg Vaughn,Devil Rays,300,8,R,B,0
// 5.9,0.021,1270,9,2001,1,ASG,TD,Garret Anderson,Angels,280,10,L,15,0
// 5.9,0.015,1280,9,2001,11,ASG,TD,Torii Hunter,Twins,400,10,R,19,0
// 5.9,0.020,1470,9,2002,33,P,,Shannon Stewart,Blue Jays,300,11,R,13,0
// 5.9,0.020,1522,9,2002,430,P,,Greg Vaughn,Devil Rays,300,8,R,B,0
// 5.9,0.027,1746,9,2002,16,UL,,David Delucci,Diamondbacks,220,10,L,15,0
// 5.9,0.025,2073,9,2002,46,UL,,Miguel Cabrera,Marlins,240,10,R,14,0
// 5.9,0.012,2255,9,2003,62,UL,,Danny Bautista,Diamondbacks,510,13,R,16,0
// 5.9,0.016,2822,9,2004,118,UL,,Lou Brock,Cardinals,360,11,L,28,0
// 5.9,0.027,3178,9,2004,183,UL,,Geoff Jenkins,Brewers,220,10,L,14,0
// 5.9,0.021,3202,9,2004,188,UL,,Lew Ford,Twins,280,11,R,17,0
// 5.9,0.035,3307,9,2005,214,UL,,Brad Wilkerson,Expos,170,11,L,13,0
// 5.9,0.020,3678,9,2005,304,UL,,Shannon Stewart,Blue Jays,300,11,R,13,0
// 5.8,0.016,158,0,2000,40,1st,PR,Andres Galarraga,Rangers,370,9,R,B,0
// 5.8,0.015,261,0,2000,66,1st,PR,Mark Quinn,Royals,390,9,R,B,0
// 5.8,0.031,2639,2,2003,98,UL,,Gregg Zaun,Blue Jays,190,11,S,10,0
// 5.8,0.034,3272,2,2004,205,UL,,Gregg Zaun,Blue Jays,170,11,S,8,0
// 5.8,0.021,444,3,2000,111,1st,PR,Sean Casey,Reds,280,9,L,C,0
// 5.8,0.018,451,3,2000,113,1st,PR,Sean Casey,Reds,320,9,L,C,0
// 5.8,0.017,756,3,2001,216,1st,TD,Mike Sweeney,Royals,340,9,R,B,0
// 5.8,0.018,1369,3,2001,113,FS,,Sean Casey,Reds,320,9,L,C,0
// 5.8,0.021,1508,3,2002,111,P,,Sean Casey,Reds,280,9,L,C,0
// 5.8,0.032,1848,3,2002,25,UL,,Julio Franco,Braves,180,11,R,10,0
// 5.8,0.026,2034,3,2002,42,UL,,Jeff Conine,Orioles,220,12,R,15,0
// 5.8,0.022,2287,3,2003,65,UL,,Wil Cordero,Expos,260,11,R,10,0
// 5.8,0.021,2447,3,2003,80,UL,,Mo Vaughn,Mets,280,11,L,10,0
// 5.8,0.048,3111,3,2004,166,UL,,Hee-Seop Choi,Dodgers,120,11,L,9,0
// 5.8,0.039,3131,3,2004,171,UL,,Mike Sweeney,Royals,150,12,R,10,0
// 5.8,0.034,3674,3,2005,303,UL,,John Olerud,Mariners,170,11,L,8,0
// 5.8,0.017,243,5,2000,61,1st,PR,Cal Ripken Jr.,Orioles,350,8,R,C,0
// 5.8,0.019,568,5,2000,142,1st,PR,Jeff Cirillo,Rockies,300,9,R,B,0
// 5.8,0.021,829,5,2001,252,1st,TD,Corey Koskie,Twins,280,9,L,B,0
// 5.8,0.016,908,5,2001,292,1st,TD,Robin Ventura,Mets,370,9,L,C,0
// 5.8,0.016,1047,5,2001,361,1st,TD,Phil Nevin,Padres,360,9,R,B,0
// 5.8,0.016,1360,5,2001,292,DS,,Robin Ventura,Mets,370,9,L,C,0
// 5.8,0.025,1860,5,2002,27,UL,,Robin Ventura,Yankees,230,11,L,11,0
// 5.8,0.018,2781,5,2004,113,UL,,Jeff Cirillo,Rockies,320,11,R,17,0
// 5.8,0.021,3673,5,2005,303,UL,,Eric Hinske,Blue Jays,270,11,L,13,0
// 5.8,0.016,3829,5,2005,361,UL,,Phil Nevin,Padres,360,9,R,B,0
// 5.8,0.018,460,6,2000,115,1st,PR,Barry Larkin,Reds,320,9,R,A,0
// 5.8,0.017,2104,6,2003,49,UL,,Juan Uribe,Rockies,350,9,R,18,0
// 5.8,0.018,3569,6,2005,278,UL,,Edgar Renteria,Cardinals,320,11,R,16,0
// 5.8,0.015,509,7,2000,128,1st,PR,Jim Edmonds,Cardinals,380,9,L,B,0
// 5.8,0.015,655,7,2000,169,1st,PR,Ichiro Suzuki,Mariners,400,10,L,A,0
// 5.8,0.017,1131,7,2001,403,1st,TD,J. D. Drew,Cardinals,340,9,L,A,0
// 5.8,0.019,1470,7,2002,33,P,,Shannon Stewart,Blue Jays,300,11,R,13,0
// 5.8,0.019,1664,7,2002,8,UL,,Jose Guillen,Angels,310,10,R,11,0
// 5.8,0.026,2034,7,2002,42,UL,,Jeff Conine,Orioles,220,12,R,15,0
// 5.8,0.021,3202,7,2004,188,UL,,Lew Ford,Twins,280,11,R,17,0
// 5.8,0.034,3307,7,2005,214,UL,,Brad Wilkerson,Expos,170,11,L,13,0
// 5.8,0.021,3541,7,2005,271,UL,,Brian Giles,Padres,270,11,L,13,0
// 5.8,0.021,3655,7,2005,298,UL,,Raul Ibanez,Mariners,270,11,L,9,0
// 5.8,0.015,509,8,2000,128,1st,PR,Jim Edmonds,Cardinals,380,9,L,B,0
// 5.8,0.015,1280,8,2001,11,ASG,TD,Torii Hunter,Twins,400,10,R,19,0
// 5.8,0.016,3612,8,2005,288,UL,,Marquis Grissom,Giants,370,11,R,13,0
// 5.8,0.015,509,9,2000,128,1st,PR,Jim Edmonds,Cardinals,380,9,L,B,0
// 5.8,0.016,858,9,2001,267,1st,TD,Vladimir Guerrero,Expos,370,8,R,B,0
// 5.8,0.017,1131,9,2001,403,1st,TD,J. D. Drew,Cardinals,340,9,L,A,0
// 5.8,0.026,1801,9,2002,21,UL,,Quinton McCracken,Diamondbacks,220,11,S,11,0
// 5.8,0.029,1895,9,2002,30,UL,,Jose Cruz,Devil Rays,200,11,R,14,0
// 5.8,0.021,3541,9,2005,271,UL,,Brian Giles,Padres,270,11,L,13,0
// 5.8,0.034,3600,9,2005,285,UL,,Jose Cruz,Giants,170,11,S,13,0
// 5.8,0.021,3655,9,2005,298,UL,,Raul Ibanez,Mariners,270,11,L,9,0
// 5.7,0.026,2128,0,2003,51,UL,,Ellis Burks,Red Sox,220,10,R,9,0
// 5.7,0.020,2643,0,2003,98,UL,,Ellis Burks,Indians,290,10,R,9,0
// 5.7,0.036,2682,0,2003,102,UL,,Ellis Burks,Indians,160,10,R,9,0
// 5.7,0.029,2808,0,2004,116,UL,,Greg Norton,Rockies,200,9,S,14,0
// 5.7,0.022,3091,0,2004,162,UL,,Mike Sweeney,Royals,260,10,R,10,0
// 5.7,0.017,996,2,2001,336,1st,TD,Mike Lieberthal,Phillies,340,8,R,C,0
// 5.7,0.016,1052,2,2001,364,1st,TD,Phil Nevin,Padres,350,8,R,C,0
// 5.7,0.019,3245,2,2004,199,UL,,Mike Piazza,Mets,300,10,R,8,0
// 5.7,0.027,3806,2,2005,344,UL,,Greg Myers,Blue Jays,210,11,L,8,0
// 5.7,0.022,56,3,2000,14,1st,PR,Mo Vaughn,Angels,260,8,L,C,0
// 5.7,0.017,69,3,2000,18,1st,PR,Will Clark,Orioles,340,9,L,B,0
// 5.7,0.022,677,3,2001,176,1st,PR,Derrek Lee,Marlins,260,8,R,C,0
// 5.7,0.016,772,3,2001,224,1st,TD,Eric Karros,Dodgers,360,8,R,B,0
// 5.7,0.032,1625,3,2002,4,UL,,Chone Figgins,Angels,180,10,S,21,0
// 5.7,0.034,1842,3,2002,25,UL,,Steve Cox,Devil Rays,170,10,L,10,0
// 5.7,0.034,1938,3,2002,34,UL,,Tino Martinez,Cardinals,170,10,L,13,0
// 5.7,0.026,2180,3,2003,56,UL,,Derrek Lee,Marlins,220,10,R,15,0
// 5.7,0.027,2504,3,2003,85,UL,,Lyle Overbay,Brewers,210,10,L,9,0
// 5.7,0.018,2638,3,2003,98,UL,,Fred McGriff,Dodgers,320,10,L,10,0
// 5.7,0.022,3119,3,2004,168,UL,,Shawn Green,Dodgers,260,10,L,11,0
// 5.7,0.020,3130,3,2004,171,UL,,Richie Sexson,Brewers,290,10,R,8,0
// 5.7,0.034,3362,3,2005,228,UL,,Tino Martinez,Yankees,170,10,L,13,0
// 5.7,0.034,3481,3,2005,257,UL,,Travis Lee,Phillies,170,10,L,12,0
// 5.7,0.022,3608,3,2005,287,UL,,Andres Galarraga,Giants,260,10,R,9,0
// 5.7,0.017,1363,4,2001,379,DS,,Jeff Kent,Giants,340,8,R,B,0
// 5.7,0.032,1625,4,2002,4,UL,,Chone Figgins,Angels,180,10,S,21,0
// 5.7,0.019,2201,4,2003,57,UL,,Todd Walker,Red Sox,300,10,L,10,0
// 5.7,0.018,2430,4,2003,78,UL,,Desi Relaford,Royals,320,10,S,18,0
// 5.7,0.021,2765,4,2004,111,UL,,Ronnie Belliard,Rockies,270,10,R,12,0
// 5.7,0.025,3018,4,2004,147,UL,,Craig Biggio,Astros,230,12,R,15,0
// 5.7,0.021,3604,4,2005,286,UL,,Ray Durham,Giants,270,10,S,12,0
// 5.7,0.018,3784,4,2005,337,UL,,Alfonso Soriano,Rangers,310,10,R,16,0
// 5.7,0.021,1462,5,2002,29,P,,Troy Glaus,Angels,270,10,R,12,0
// 5.7,0.016,1559,5,2002,108,SS,,Matt Williams,Giants,350,10,R,12,0
// 5.7,0.032,1625,5,2002,4,UL,,Chone Figgins,Angels,180,10,S,21,0
// 5.7,0.021,1634,5,2002,5,UL,,Troy Glaus,Angels,270,10,R,12,0
// 5.7,0.024,1984,5,2002,38,UL,,Dmitri Young,Tigers,240,10,S,15,0
// 5.7,0.020,2335,5,2003,69,UL,,Aramis Ramirez,Cubs,280,10,R,11,0
// 5.7,0.018,2430,5,2003,78,UL,,Desi Relaford,Royals,320,10,S,18,0
// 5.7,0.020,2596,5,2003,93,UL,,Casey Blake,Indians,290,10,R,11,0
// 5.7,0.024,2633,5,2003,97,UL,,Dmitri Young,Reds,240,10,S,15,0
// 5.7,0.030,2971,5,2004,139,UL,,Mike Lowell,Marlins,190,10,R,10,0
// 5.7,0.032,1625,6,2002,4,UL,,Chone Figgins,Angels,180,10,S,21,0
// 5.7,0.018,1919,6,2002,32,UL,,Omar Vizquel,Indians,310,11,S,19,0
// 5.7,0.016,3092,6,2004,163,UL,,Edgar Renteria,Red Sox,350,10,R,15,0
// 5.7,0.016,3093,6,2004,163,UL,,Edgar Renteria,Red Sox,350,10,R,15,0
// 5.7,0.023,3444,6,2005,248,UL,,Miguel Tejada,Athletics,250,10,R,17,0
// 5.7,0.017,3706,6,2005,312,UL,,Edgar Renteria,Cardinals,340,10,R,16,0
// 5.7,0.015,363,7,2000,91,1st,PR,Henry Rodriguez,Cubs,390,9,L,B,0
// 5.7,0.016,579,7,2000,145,1st,PR,Dante Bichette,Rockies,350,8,R,B,0
// 5.7,0.020,621,7,2000,157,1st,PR,Rich Becker,Tigers,280,9,L,B,0
// 5.7,0.029,1626,7,2002,5,UL,,Brian Jordan,Dodgers,200,10,R,14,0
// 5.7,0.030,1797,7,2002,21,UL,,Dustan Mohr,Twins,190,10,R,11,0
// 5.7,0.032,2006,7,2002,40,UL,,Brian Buchanan,Twins,180,10,R,11,0
// 5.7,0.025,2126,7,2003,51,UL,,Aaron Rowand,White Sox,230,12,R,14,0
// 5.7,0.025,2455,7,2003,80,UL,,Carlos Lee,White Sox,230,10,R,9,0
// 5.7,0.024,2633,7,2003,97,UL,,Dmitri Young,Reds,240,10,S,15,0
// 5.7,0.016,2677,7,2003,102,UL,,Jose Guillen,Nationals,350,10,R,11,0
// 5.7,0.022,3119,7,2004,168,UL,,Shawn Green,Dodgers,260,10,L,11,0
// 5.7,0.034,3464,7,2005,253,UL,,Pat Burrell,Phillies,170,10,R,12,0
// 5.7,0.024,3484,7,2005,257,UL,,Jason Bay,Pirates,240,10,R,10,0
// 5.7,0.030,3577,7,2005,280,UL,,Bubba Trammell,Padres,190,10,R,14,0
// 5.7,0.032,1625,8,2002,4,UL,,Chone Figgins,Angels,180,10,S,21,0
// 5.7,0.030,1797,8,2002,21,UL,,Dustan Mohr,Twins,190,10,R,11,0
// 5.7,0.022,1881,8,2002,28,UL,,Andruw Jones,Braves,260,10,R,15,0
// 5.7,0.025,2126,8,2003,51,UL,,Aaron Rowand,White Sox,230,12,R,14,0
// 5.7,0.022,3119,8,2004,168,UL,,Shawn Green,Dodgers,260,10,L,11,0
// 5.7,0.024,3199,8,2004,188,UL,,Devon White,Brewers,240,10,S,17,0
// 5.7,0.032,3243,8,2004,198,UL,,Ken GriffeyJr.,Reds,180,10,L,9,0
// 5.7,0.015,363,9,2000,91,1st,PR,Henry Rodriguez,Cubs,390,9,L,B,0
// 5.7,0.016,579,9,2000,145,1st,PR,Dante Bichette,Rockies,350,8,R,B,0
// 5.7,0.014,655,9,2000,169,1st,PR,Ichiro Suzuki,Mariners,400,10,L,A,0
// 5.7,0.020,1400,9,2002,3,P,,Larry Bigbie,Orioles,280,10,L,12,0
// 5.7,0.029,1626,9,2002,5,UL,,Brian Jordan,Dodgers,200,10,R,14,0
// 5.7,0.030,1797,9,2002,21,UL,,Dustan Mohr,Twins,190,10,R,11,0
// 5.7,0.029,1911,9,2002,31,UL,,Brian Jordan,Braves,200,10,R,14,0
// 5.7,0.024,1984,9,2002,38,UL,,Dmitri Young,Tigers,240,10,S,15,0
// 5.7,0.032,2006,9,2002,40,UL,,Brian Buchanan,Twins,180,10,R,11,0
// 5.7,0.026,2034,9,2002,42,UL,,Jeff Conine,Orioles,220,12,R,15,0
// 5.7,0.025,2126,9,2003,51,UL,,Aaron Rowand,White Sox,230,12,R,14,0
// 5.7,0.025,2455,9,2003,80,UL,,Carlos Lee,White Sox,230,10,R,9,0
// 5.7,0.024,2633,9,2003,97,UL,,Dmitri Young,Reds,240,10,S,15,0
// 5.7,0.022,3119,9,2004,168,UL,,Shawn Green,Dodgers,260,10,L,11,0
// 5.7,0.027,3408,9,2005,239,UL,,Jermaine Dye,Athletics,210,10,R,15,0
// 5.7,0.034,3464,9,2005,253,UL,,Pat Burrell,Phillies,170,10,R,12,0
// 5.7,0.024,3484,9,2005,257,UL,,Jason Bay,Pirates,240,10,R,10,0
// 5.7,0.030,3577,9,2005,280,UL,,Bubba Trammell,Padres,190,10,R,14,0
// 5.6,0.025,631,0,2000,161,1st,PR,Olmedo Saenz,Athletics,220,9,R,C,0
// 5.6,0.017,601,2,2000,151,1st,PR,Todd Hundley,Cubs,330,8,S,C,0
// 5.6,0.019,2376,2,2003,73,UL,,Ramon Hernandez,Athletics,300,10,R,11,0
// 5.6,0.028,2480,2,2003,83,UL,,Tom Wilson,Blue Jays,200,10,R,11,0
// 5.6,0.025,2816,2,2004,117,UL,,Ben Petrick,Rockies,220,10,R,17,0
// 5.6,0.027,324,3,2000,81,1st,PR,Mark Grace,Cubs,210,9,L,C,0
// 5.6,0.017,601,3,2000,151,1st,PR,Todd Hundley,Cubs,330,8,S,C,0
// 5.6,0.019,1356,3,2001,85,DS,,Mark Grace,Cubs,300,9,L,B,0
// 5.6,0.019,2281,3,2003,64,UL,,Derrek Lee,Cubs,300,10,R,13,0
// 5.6,0.027,2827,3,2004,118,UL,,Carlos Pena,Tigers,210,10,L,12,0
// 5.6,0.021,3061,3,2004,156,UL,,Ken Harvey,Royals,270,10,R,9,0
// 5.6,0.029,3270,3,2004,205,UL,,Nick Johnson,Yankees,190,10,L,9,0
// 5.6,0.016,1082,4,2001,379,1st,TD,Jeff Kent,Giants,340,8,R,B,0
// 5.6,0.014,1509,4,2002,125,P,,Roberto Alomar,Indians,410,9,S,A,0
// 5.6,0.016,2064,4,2002,45,UL,,Ray Durham,White Sox,350,10,S,20,0
// 5.6,0.016,830,5,2001,253,1st,TD,Corey Koskie,Twins,350,9,L,B,0
// 5.6,0.016,1052,5,2001,364,1st,TD,Phil Nevin,Padres,350,8,R,C,0
// 5.6,0.016,1374,5,2001,253,FS,,Corey Koskie,Twins,350,9,L,B,0
// 5.6,0.028,1750,5,2002,17,UL,,Vinny Castilla,Braves,200,9,R,11,0
// 5.6,0.021,2353,5,2003,71,UL,,Chris Stynes,Rockies,270,10,R,12,0
// 5.6,0.022,2887,5,2004,126,UL,,Shane Halter,Tigers,250,10,R,15,0
// 5.6,0.022,2973,5,2004,139,UL,,Mike Lowell,Marlins,250,10,R,10,0
// 5.6,0.025,3025,5,2004,148,UL,,Mike Lamb,Astros,220,10,L,9,0
// 5.6,0.016,3750,5,2005,326,UL,,Aubrey Huff,Devil Rays,340,10,L,11,0
// 5.6,0.018,3762,5,2005,330,UL,,Hank Blalock,Rangers,310,10,L,10,0
// 5.6,0.022,2887,6,2004,126,UL,,Shane Halter,Tigers,250,10,R,15,0
// 5.6,0.014,487,7,2000,122,1st,PR,Greg Vaughn,Reds,410,8,R,A,0
// 5.6,0.019,831,7,2001,253,1st,TD,Matt Lawton,Twins,300,9,L,A,0
// 5.6,0.020,1400,7,2002,3,P,,Larry Bigbie,Orioles,280,10,L,12,0
// 5.6,0.028,1911,7,2002,31,UL,,Brian Jordan,Braves,200,10,R,14,0
// 5.6,0.023,1984,7,2002,38,UL,,Dmitri Young,Tigers,240,10,S,15,0
// 5.6,0.023,3199,7,2004,188,UL,,Devon White,Brewers,240,10,S,17,0
// 5.6,0.024,3284,7,2004,208,UL,,Cliff Floyd,Mets,230,10,L,13,0
// 5.6,0.027,3408,7,2005,239,UL,,Jermaine Dye,Athletics,210,10,R,15,0
// 5.6,0.020,621,8,2000,157,1st,PR,Rich Becker,Tigers,280,9,L,B,0
// 5.6,0.020,1901,8,2002,30,UL,,Andruw Jones,Braves,280,10,R,12,0
// 5.6,0.014,487,9,2000,122,1st,PR,Greg Vaughn,Reds,410,8,R,A,0
// 5.6,0.020,621,9,2000,157,1st,PR,Rich Becker,Tigers,280,9,L,B,0
// 5.6,0.018,1664,9,2002,8,UL,,Jose Guillen,Angels,310,10,R,11,0
// 5.6,0.016,2677,9,2003,102,UL,,Jose Guillen,Nationals,350,10,R,11,0
// 5.6,0.023,3199,9,2004,188,UL,,Devon White,Brewers,240,10,S,17,0
// 5.6,0.024,3284,9,2004,208,UL,,Cliff Floyd,Mets,230,10,L,13,0
// 5.5,0.015,49,2,2000,13,1st,PR,Javy Lopez,Braves,370,8,R,B,0
// 5.5,0.017,475,2,2000,119,1st,PR,Eddie Taubensee,Reds,330,8,L,C,0
// 5.5,0.012,1206,2,2001,441,1st,TD,Ivan Rodriguez,Rangers,450,8,R,A,0
// 5.5,0.028,2109,2,2003,49,UL,,Gregg Zaun,Astros,200,11,S,10,0
// 5.5,0.029,3542,2,2005,272,UL,,Wiki Gonzalez,Padres,190,10,R,11,0
// 5.5,0.019,307,3,2000,77,1st,PR,Mike Stanley,Red Sox,290,9,R,C,0
// 5.5,0.018,339,3,2000,85,1st,PR,Mark Grace,Cubs,300,9,L,B,0
// 5.5,0.017,405,3,2000,102,1st,PR,Olmedo Saenz,Athletics,320,8,R,B,0
// 5.5,0.018,811,3,2001,243,1st,TD,Richie Sexson,Brewers,300,8,R,B,0
// 5.5,0.023,975,3,2001,325,1st,TD,Pat Burrell,Phillies,240,8,R,C,0
// 5.5,0.024,1113,3,2001,394,1st,TD,John Olerud,Mariners,230,9,L,C,0
// 5.5,0.021,1165,3,2001,420,1st,TD,Steve Cox,Devil Rays,260,9,L,C,0
// 5.5,0.023,1517,3,2002,325,P,,Pat Burrell,Phillies,240,8,R,C,0
// 5.5,0.016,194,4,2000,49,1st,PR,Chris Stynes,Red Sox,350,9,R,B,0
// 5.5,0.013,500,4,2000,125,1st,PR,Roberto Alomar,Indians,410,9,S,A,0
// 5.5,0.019,1749,4,2002,16,UL,,Scott Hairston,Diamondbacks,290,9,R,12,0
// 5.5,0.016,2685,4,2003,103,UL,,Chris Woodward,Blue Jays,340,9,R,13,0
// 5.5,0.013,2879,4,2004,125,UL,,Roberto Alomar,Indians,410,9,S,A,0
// 5.5,0.025,3027,4,2004,149,UL,,Damion Easley,Marlins,220,9,R,10,0
// 5.5,0.016,194,5,2000,49,1st,PR,Chris Stynes,Red Sox,350,9,R,B,0
// 5.5,0.017,405,5,2000,102,1st,PR,Olmedo Saenz,Athletics,320,8,R,B,0
// 5.5,0.024,2429,5,2003,78,UL,,Tony Batista,Orioles,230,9,R,17,0
// 5.5,0.020,1603,6,2002,2,UL,,David Eckstein,Angels,280,11,R,16,0
// 5.5,0.016,2685,6,2003,103,UL,,Chris Woodward,Blue Jays,340,9,R,13,0
// 5.5,0.020,3266,6,2004,204,UL,,Derek Jeter,Yankees,280,11,R,20,0
// 5.5,0.022,26,7,2000,7,1st,PR,Ben Grieve,Devil Rays,250,8,L,C,0
// 5.5,0.016,75,7,2000,19,1st,PR,Steve Finley,Diamondbacks,350,7,L,B,0
// 5.5,0.013,535,7,2000,134,1st,PR,Kenny Lofton,Indians,440,10,L,A,0
// 5.5,0.018,811,7,2001,243,1st,TD,Richie Sexson,Brewers,300,8,R,B,0
// 5.5,0.020,949,7,2001,312,1st,TD,Ben Grieve,Athletics,270,8,L,B,0
// 5.5,0.023,975,7,2001,325,1st,TD,Pat Burrell,Phillies,240,8,R,C,0
// 5.5,0.021,1165,7,2001,420,1st,TD,Steve Cox,Devil Rays,260,9,L,C,0
// 5.5,0.023,1517,7,2002,325,P,,Pat Burrell,Phillies,240,8,R,C,0
// 5.5,0.032,1672,7,2002,9,UL,,Tim Salmon,Angels,170,11,R,14,0
// 5.5,0.026,1786,7,2002,20,UL,,B.J. Surhoff,Orioles,210,11,L,10,0
// 5.5,0.029,2037,7,2002,42,UL,,B.J. Surhoff,Orioles,190,11,L,10,0
// 5.5,0.022,2636,7,2003,97,UL,,Matt Lawton,Indians,250,11,L,18,0
// 5.5,0.020,3477,7,2005,256,UL,,Reggie Sanders,Giants,280,9,R,15,0
// 5.5,0.025,3546,7,2005,273,UL,,Rickey Henderson,Padres,220,11,R,20,0
// 5.5,0.023,3826,7,2005,355,UL,,Shannon Stewart,Blue Jays,240,11,R,19,0
// 5.5,0.020,1428,8,2002,15,P,,Juan Pierre,Marlins,280,11,L,24,0
// 5.5,0.014,2518,8,2003,86,UL,,Kenny Lofton,Pirates,380,11,L,20,0
// 5.5,0.032,2707,8,2004,105,UL,,Jeff DaVanon,Angels,170,11,S,16,0
// 5.5,0.020,2979,8,2004,140,UL,,Juan Pierre,Marlins,280,11,L,24,0
// 5.5,0.019,3280,8,2004,207,UL,,Mike Cameron,Mets,290,9,R,18,0
// 5.5,0.022,26,9,2000,7,1st,PR,Ben Grieve,Devil Rays,250,8,L,C,0
// 5.5,0.014,465,9,2000,117,1st,PR,Al Martin,Padres,380,8,L,A,0
// 5.5,0.018,811,9,2001,243,1st,TD,Richie Sexson,Brewers,300,8,R,B,0
// 5.5,0.016,812,9,2001,244,1st,TD,Alex Ochoa,Brewers,340,10,R,B,0
// 5.5,0.018,831,9,2001,253,1st,TD,Matt Lawton,Twins,300,9,L,A,0
// 5.5,0.020,949,9,2001,312,1st,TD,Ben Grieve,Athletics,270,8,L,B,0
// 5.5,0.023,975,9,2001,325,1st,TD,Pat Burrell,Phillies,240,8,R,C,0
// 5.5,0.021,1165,9,2001,420,1st,TD,Steve Cox,Devil Rays,260,9,L,C,0
// 5.5,0.023,1517,9,2002,325,P,,Pat Burrell,Phillies,240,8,R,C,0
// 5.5,0.032,1672,9,2002,9,UL,,Tim Salmon,Angels,170,11,R,14,0
// 5.5,0.029,2037,9,2002,42,UL,,B.J. Surhoff,Orioles,190,11,L,10,0
// 5.5,0.022,2636,9,2003,97,UL,,Matt Lawton,Indians,250,11,L,18,0
// 5.5,0.034,3293,9,2004,211,UL,,Brad Wilkerson,Expos,160,11,L,13,0
// 5.5,0.020,3477,9,2005,256,UL,,Reggie Sanders,Giants,280,9,R,15,0
// 5.5,0.025,3546,9,2005,273,UL,,Rickey Henderson,Padres,220,11,R,20,0
// 5.5,0.023,3826,9,2005,355,UL,,Shannon Stewart,Blue Jays,240,11,R,19,0
// 5.4,0.028,1472,0,2002,34,P,,Frank Thomas,White Sox,190,10,R,10,0
// 5.4,0.028,2477,0,2003,82,UL,,Frank Thomas,White Sox,190,10,R,10,0
// 5.4,0.021,1932,2,2002,33,UL,,Joe Mauer,Twins,260,11,L,11,0
// 5.4,0.025,2219,2,2003,59,UL,,Tom Wilson,Blue Jays,220,11,R,10,0
// 5.4,0.019,2514,2,2003,86,UL,,Miguel Olivo,White Sox,280,10,R,18,0
// 5.4,0.016,435,3,2000,109,1st,PR,Frank Thomas,White Sox,340,10,R,B,0
// 5.4,0.019,768,3,2001,222,1st,TD,Dave Hansen,Dodgers,290,10,L,C,0
// 5.4,0.030,2017,3,2002,41,UL,,Rafael Palmeiro,Orioles,180,10,L,9,0
// 5.4,0.023,2349,3,2003,71,UL,,Lyle Overbay,Diamondbacks,240,11,L,13,0
// 5.4,0.036,2502,3,2003,85,UL,,Andres Galarraga,Expos,150,10,R,11,0
// 5.4,0.030,3253,3,2004,201,UL,,Mo Vaughn,Mets,180,10,L,8,0
// 5.4,0.017,291,4,2000,73,1st,PR,Jose Offerman,Red Sox,320,9,S,B,0
// 5.4,0.042,1439,4,2002,19,P,,Mark Ellis,Athletics,130,10,R,15,0
// 5.4,0.026,1867,4,2002,27,UL,,Marcus Giles,Braves,210,10,R,16,0
// 5.4,0.016,2275,4,2003,64,UL,,Alfonso Soriano,Yankees,340,10,R,18,0
// 5.4,0.019,2392,4,2003,75,UL,,Desi Relaford,Mariners,290,11,S,15,0
// 5.4,0.023,2512,4,2003,85,UL,,D Angelo Jimenez,Reds,240,10,S,14,0
// 5.4,0.021,3471,4,2005,254,UL,,Chase Utley,Phillies,260,9,L,12,0
// 5.4,0.019,768,5,2001,222,1st,TD,Dave Hansen,Dodgers,290,10,L,C,0
// 5.4,0.015,796,5,2001,236,1st,TD,Jeff Cirillo,Brewers,370,10,R,B,0
// 5.4,0.009,1328,5,2001,120,CC,,Brooks Robinson,Orioles,600,11,R,15,0
// 5.4,0.019,1915,5,2002,32,UL,,Jeff Cirillo,Mariners,280,10,R,17,0
// 5.4,0.021,2404,5,2003,76,UL,,Todd Zeile,Yankees,260,10,R,10,0
// 5.4,0.022,3427,5,2005,243,UL,,David Bell,Phillies,250,10,R,9,0
// 5.4,0.034,3654,5,2005,298,UL,,Carlos Guillen,Mariners,160,10,S,10,0
// 5.4,0.014,70,6,2000,18,1st,PR,Jose Valentin,White Sox,400,8,S,A,0
// 5.4,0.014,432,6,2000,108,1st,PR,Jose Valentin,White Sox,390,8,S,A,0
// 5.4,0.015,1447,6,2002,22,P,,Rafael Furcal,Braves,360,10,S,20,0
// 5.4,0.016,1527,6,2002,134,RS,,Rafael Furcal '00,Braves,340,12,S,24,0
// 5.4,0.015,1836,6,2002,24,UL,,Rafael Furcal,Braves,360,10,S,20,0
// 5.4,0.015,2167,6,2003,54,UL,,Nomar Garciaparra,Red Sox,360,11,R,11,0
// 5.4,0.019,2392,6,2003,75,UL,,Desi Relaford,Mariners,290,11,S,15,0
// 5.4,0.028,2523,6,2003,86,UL,,Barry Larkin,Reds,190,10,R,12,0
// 5.4,0.018,2650,6,2003,99,UL,,Derek Jeter,Yankees,300,11,R,15,0
// 5.4,0.016,3463,6,2005,252,UL,,Jimmy Rollins,Phillies,330,10,S,20,0
// 5.4,0.034,3654,6,2005,298,UL,,Carlos Guillen,Mariners,160,10,S,10,0
// 5.4,0.014,70,7,2000,18,1st,PR,Jose Valentin,White Sox,400,8,S,A,0
// 5.4,0.016,464,7,2000,116,1st,PR,Alex Ochoa,Reds,330,8,R,A,0
// 5.4,0.014,465,7,2000,117,1st,PR,Al Martin,Padres,380,8,L,A,0
// 5.4,0.016,812,7,2001,244,1st,TD,Alex Ochoa,Brewers,340,10,R,B,0
// 5.4,0.017,1375,7,2001,316,FS,,Ben Grieve,Athletics,320,8,L,B,0
// 5.4,0.028,1440,7,2002,19,P,,Moises Alou,Cubs,190,10,R,12,0
// 5.4,0.028,1490,7,2002,43,P,,Roger Cedeno,Mets,190,10,S,16,0
// 5.4,0.025,1591,7,2002,1,UL,,Garret Anderson,Angels,220,9,L,15,0
// 5.4,0.030,1608,7,2002,3,UL,,Magglio Ordonez,Tigers,180,10,R,10,0
// 5.4,0.021,1716,7,2002,13,UL,,Danny Bautista,Diamondbacks,260,10,R,12,0
// 5.4,0.034,1995,7,2002,39,UL,,Jay Gibbons,Orioles,160,9,L,9,0
// 5.4,0.028,2223,7,2003,59,UL,,Moises Alou,Cubs,190,10,R,12,0
// 5.4,0.030,2271,7,2003,64,UL,,Rusty Greer,Rangers,180,10,L,12,0
// 5.4,0.023,2381,7,2003,74,UL,,Armando Rios,Pirates,240,9,L,15,0
// 5.4,0.049,2534,7,2003,87,UL,,Adam Dunn,Reds,110,10,L,12,0
// 5.4,0.020,2989,7,2004,142,UL,,Preston Wilson,Marlins,270,10,R,17,0
// 5.4,0.034,3293,7,2004,211,UL,,Brad Wilkerson,Expos,160,11,L,13,0
// 5.4,0.039,3441,7,2005,247,UL,,Ray Lankford,Padres,140,10,L,9,0
// 5.4,0.026,3824,7,2005,353,UL,,Raul Mondesi,Blue Jays,210,10,R,19,0
// 5.4,0.014,70,8,2000,18,1st,PR,Jose Valentin,White Sox,400,8,S,A,0
// 5.4,0.028,1490,8,2002,43,P,,Roger Cedeno,Mets,190,10,S,16,0
// 5.4,0.014,1531,8,2002,138,RS,,Carlos Beltran '99,Royals,400,10,S,19,0
// 5.4,0.017,2145,8,2003,52,UL,,Johnny Damon,Red Sox,320,10,L,19,0
// 5.4,0.019,2251,8,2003,62,UL,,Kenny Lofton,Yankees,280,10,L,22,0
// 5.4,0.014,2759,8,2004,111,UL,,Randy Winn,Mariners,380,10,S,19,0
// 5.4,0.017,2824,8,2004,118,UL,,Juan Pierre,Rockies,310,12,L,22,0
// 5.4,0.020,2989,8,2004,142,UL,,Preston Wilson,Marlins,270,10,R,17,0
// 5.4,0.016,3615,8,2005,289,UL,,Randy Winn,Devil Rays,340,10,S,18,0
// 5.4,0.014,70,9,2000,18,1st,PR,Jose Valentin,White Sox,400,8,S,A,0
// 5.4,0.015,75,9,2000,19,1st,PR,Steve Finley,Diamondbacks,350,7,L,B,0
// 5.4,0.016,464,9,2000,116,1st,PR,Alex Ochoa,Reds,330,8,R,A,0
// 5.4,0.017,956,9,2001,316,1st,TD,Ben Grieve,Athletics,320,8,L,B,0
// 5.4,0.017,1375,9,2001,316,FS,,Ben Grieve,Athletics,320,8,L,B,0
// 5.4,0.028,1440,9,2002,19,P,,Moises Alou,Cubs,190,10,R,12,0
// 5.4,0.028,1490,9,2002,43,P,,Roger Cedeno,Mets,190,10,S,16,0
// 5.4,0.030,1608,9,2002,3,UL,,Magglio Ordonez,Tigers,180,10,R,10,0
// 5.4,0.021,1716,9,2002,13,UL,,Danny Bautista,Diamondbacks,260,10,R,12,0
// 5.4,0.026,1786,9,2002,20,UL,,B.J. Surhoff,Orioles,210,11,L,10,0
// 5.4,0.034,1995,9,2002,39,UL,,Jay Gibbons,Orioles,160,9,L,9,0
// 5.4,0.028,2223,9,2003,59,UL,,Moises Alou,Cubs,190,10,R,12,0
// 5.4,0.030,2271,9,2003,64,UL,,Rusty Greer,Rangers,180,10,L,12,0
// 5.4,0.049,2534,9,2003,87,UL,,Adam Dunn,Reds,110,10,L,12,0
// 5.4,0.020,2989,9,2004,142,UL,,Preston Wilson,Marlins,270,10,R,17,0
// 5.4,0.039,3441,9,2005,247,UL,,Ray Lankford,Padres,140,10,L,9,0
// 5.4,0.018,3685,9,2005,306,UL,,Ichiro,Mariners,300,12,L,22,0
// 5.4,0.026,3824,9,2005,353,UL,,Raul Mondesi,Blue Jays,210,10,R,19,0
// 5.3,0.020,1231,0,2001,453,1st,TD,Brad Fullmer,Blue Jays,270,8,L,B,0
// 5.3,0.041,3232,0,2004,196,UL,,David Ortiz,Twins,130,9,L,12,0
// 5.3,0.018,719,2,2001,197,1st,TD,Mitch Meluskey,Astros,290,9,S,C,0
// 5.3,0.016,2107,2,2003,49,UL,,A.J. Pierzynski,White Sox,330,9,L,10,0
// 5.3,0.029,2595,2,2003,93,UL,,Jason LaRue,Reds,180,9,R,10,0
// 5.3,0.018,3617,2,2005,289,UL,,A.J. Pierzynski,Giants,300,9,L,8,0
// 5.3,0.020,1181,3,2001,428,1st,TD,Fred McGriff,Devil Rays,270,9,L,C,0
// 5.3,0.018,1193,3,2001,434,1st,TD,Frank Catalanotto,Rangers,300,9,L,B,0
// 5.3,0.027,3087,3,2004,162,UL,,Tony Clark,Diamondbacks,200,9,S,10,0
// 5.3,0.020,701,4,2001,188,1st,TD,Craig Biggio,Astros,260,9,R,B,0
// 5.3,0.018,1193,4,2001,434,1st,TD,Frank Catalanotto,Rangers,300,9,L,B,0
// 5.3,0.016,1527,4,2002,134,RS,,Rafael Furcal '00,Braves,340,12,S,24,0
// 5.3,0.015,2435,4,2003,78,UL,,Juan Uribe,White Sox,350,9,R,12,0
// 5.3,0.025,2566,4,2003,90,UL,,D’Angelo Jimenez,Reds,210,9,S,10,0
// 5.3,0.017,659,5,2001,170,1st,PR,Dean Palmer,Tigers,320,7,R,B,0
// 5.3,0.020,1153,5,2001,414,1st,TD,Fernando Tatis,Cardinals,260,8,R,B,0
// 5.3,0.029,2125,5,2003,50,UL,,Bill Mueller,Red Sox,180,10,S,10,0
// 5.3,0.028,3525,5,2005,267,UL,,Eric Munson,Tigers,190,9,L,9,0
// 5.3,0.022,2446,6,2003,79,UL,,Jose Valentin,White Sox,240,9,L,12,0
// 5.3,0.020,2921,6,2004,131,UL,,Jose Valentin,Dodgers,260,9,L,12,0
// 5.3,0.016,3080,6,2004,160,UL,,Angel Berroa,Royals,330,10,R,17,0
// 5.3,0.018,47,7,2000,12,1st,PR,Tim Salmon,Angels,290,8,R,B,0
// 5.3,0.018,74,7,2000,19,1st,PR,Juan Gonzalez,Indians,290,8,R,C,0
// 5.3,0.016,87,7,2000,22,1st,PR,Bernard Gilkey,Diamondbacks,330,9,R,B,0
// 5.3,0.014,143,7,2000,36,1st,PR,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.016,192,7,2000,48,1st,PR,Brady Anderson,Orioles,330,9,L,A,0
// 5.3,0.016,474,7,2000,119,1st,PR,Johnny Damon,Athletics,340,9,L,A,0
// 5.3,0.016,488,7,2000,122,1st,PR,Michael Tucker,Reds,330,9,L,A,0
// 5.3,0.016,499,7,2000,125,1st,PR,Dmitri Young,Reds,330,8,S,B,0
// 5.3,0.015,545,7,2000,137,1st,PR,Greg Vaughn,Devil Rays,360,7,R,A,0
// 5.3,0.015,729,7,2001,202,1st,TD,Johnny Damon,Royals,350,9,L,A,0
// 5.3,0.019,767,7,2001,221,1st,TD,Shawn Green,Dodgers,280,8,L,A,0
// 5.3,0.017,956,7,2001,316,1st,TD,Ben Grieve,Athletics,320,8,L,B,0
// 5.3,0.016,988,7,2001,332,1st,TD,Ron Gant,Phillies,330,9,R,B,0
// 5.3,0.020,1100,7,2001,388,1st,TD,Jay Buhner,Mariners,260,9,R,C,0
// 5.3,0.013,1142,7,2001,409,1st,TD,Ray Lankford,Cardinals,410,9,L,A,0
// 5.3,0.014,1247,7,2001,461,1st,TD,Shannon Stewart,Blue Jays,370,9,R,A,0
// 5.3,0.018,1982,7,2002,37,UL,,Jay Gibbons,Orioles,290,9,L,8,0
// 5.3,0.031,2144,7,2003,52,UL,,Dante Bichette,Red Sox,170,10,R,12,0
// 5.3,0.021,2205,7,2003,58,UL,,Jeromy Burnitz,Rockies,250,9,L,11,0
// 5.3,0.020,2298,7,2003,66,UL,,Cliff Floyd,Mets,260,9,L,12,0
// 5.3,0.020,2702,7,2004,104,UL,,Jody Gerut,Indians,270,9,L,13,0
// 5.3,0.014,2759,7,2004,111,UL,,Randy Winn,Mariners,380,10,S,19,0
// 5.3,0.017,2824,7,2004,118,UL,,Juan Pierre,Rockies,310,12,L,22,0
// 5.3,0.017,2992,7,2004,142,UL,,Craig Biggio,Astros,310,9,R,15,0
// 5.3,0.015,3256,7,2004,202,UL,,Johnny Damon,Royals,350,9,L,A,0
// 5.3,0.018,3685,7,2005,306,UL,,Ichiro,Mariners,300,12,L,22,0
// 5.3,0.015,3738,7,2005,322,UL,,Carl Crawford,Devil Rays,360,10,L,24,0
// 5.3,0.020,3771,7,2005,333,UL,,Kevin Mench,Rangers,270,9,R,12,0
// 5.3,0.015,75,8,2000,19,1st,PR,Steve Finley,Diamondbacks,350,7,L,B,0
// 5.3,0.014,143,8,2000,36,1st,PR,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.016,192,8,2000,48,1st,PR,Brady Anderson,Orioles,330,9,L,A,0
// 5.3,0.016,474,8,2000,119,1st,PR,Johnny Damon,Athletics,340,9,L,A,0
// 5.3,0.012,535,8,2000,134,1st,PR,Kenny Lofton,Indians,440,10,L,A,0
// 5.3,0.014,1350,8,2001,36,DS,,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.014,1351,8,2001,36,DS,,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.014,1380,8,2001,36,HRH,,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.017,2992,8,2004,142,UL,,Craig Biggio,Astros,310,9,R,15,0
// 5.3,0.017,3210,8,2004,190,UL,,Torii Hunter,Twins,310,9,R,18,0
// 5.3,0.015,3256,8,2004,202,UL,,Johnny Damon,Royals,350,9,L,A,0
// 5.3,0.019,3437,8,2005,246,UL,,Mark Kotsay,Padres,280,10,L,13,0
// 5.3,0.018,47,9,2000,12,1st,PR,Tim Salmon,Angels,290,8,R,B,0
// 5.3,0.018,74,9,2000,19,1st,PR,Juan Gonzalez,Indians,290,8,R,C,0
// 5.3,0.014,143,9,2000,36,1st,PR,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.016,192,9,2000,48,1st,PR,Brady Anderson,Orioles,330,9,L,A,0
// 5.3,0.016,488,9,2000,122,1st,PR,Michael Tucker,Reds,330,9,L,A,0
// 5.3,0.012,535,9,2000,134,1st,PR,Kenny Lofton,Indians,440,10,L,A,0
// 5.3,0.016,988,9,2001,332,1st,TD,Ron Gant,Phillies,330,9,R,B,0
// 5.3,0.020,1100,9,2001,388,1st,TD,Jay Buhner,Mariners,260,9,R,C,0
// 5.3,0.013,1142,9,2001,409,1st,TD,Ray Lankford,Cardinals,410,9,L,A,0
// 5.3,0.020,1201,9,2001,438,1st,TD,Rusty Greer,Rangers,270,9,L,B,0
// 5.3,0.014,1350,9,2001,36,DS,,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.014,1351,9,2001,36,DS,,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.014,1380,9,2001,36,HRH,,Andruw Jones,Braves,390,8,R,A,0
// 5.3,0.024,1591,9,2002,1,UL,,Garret Anderson,Angels,220,9,L,15,0
// 5.3,0.018,1982,9,2002,37,UL,,Jay Gibbons,Orioles,290,9,L,8,0
// 5.3,0.031,2144,9,2003,52,UL,,Dante Bichette,Red Sox,170,10,R,12,0
// 5.3,0.021,2205,9,2003,58,UL,,Jeromy Burnitz,Rockies,250,9,L,11,0
// 5.3,0.022,2381,9,2003,74,UL,,Armando Rios,Pirates,240,9,L,15,0
// 5.3,0.014,2759,9,2004,111,UL,,Randy Winn,Mariners,380,10,S,19,0
// 5.3,0.017,2824,9,2004,118,UL,,Juan Pierre,Rockies,310,12,L,22,0
// 5.3,0.015,3256,9,2004,202,UL,,Johnny Damon,Royals,350,9,L,A,0
// 5.3,0.015,3738,9,2005,322,UL,,Carl Crawford,Devil Rays,360,10,L,24,0
// 5.3,0.020,3771,9,2005,333,UL,,Kevin Mench,Rangers,270,9,R,12,0
// 5.2,0.018,3439,2,2005,246,UL,,Mike Lieberthal,Phillies,290,9,R,9,0
// 5.2,0.022,2293,3,2003,66,UL,,Carlos Pena,Athletics,240,10,L,16,0
// 5.2,0.019,757,5,2001,216,1st,TD,Adrian Beltre,Dodgers,280,8,R,B,0
// 5.2,0.031,2490,5,2003,83,UL,,Ryan Freel,Reds,170,11,R,21,0
// 5.2,0.031,2984,5,2004,141,UL,,Geoff Blum,Astros,170,11,S,9,0
// 5.2,0.014,217,7,2000,55,1st,PR,Luis Polonia,Tigers,370,8,L,A,0
// 5.2,0.019,1201,7,2001,438,1st,TD,Rusty Greer,Rangers,270,9,L,B,0
// 5.2,0.013,1350,7,2001,36,DS,,Andruw Jones,Braves,390,8,R,A,0
// 5.2,0.013,1351,7,2001,36,DS,,Andruw Jones,Braves,390,8,R,A,0
// 5.2,0.013,1380,7,2001,36,HRH,,Andruw Jones,Braves,390,8,R,A,0
// 5.2,0.058,1738,7,2002,15,UL,,Luis Gonzalez,Diamondbacks,90,11,L,10,0
// 5.2,0.015,729,8,2001,202,1st,TD,Johnny Damon,Royals,350,9,L,A,0
// 5.2,0.022,3776,8,2005,335,UL,,Gabe Kapler,Rangers,240,11,R,17,0
// 5.2,0.019,3819,8,2005,348,UL,,Vernon Wells,Blue Jays,280,9,R,12,0
// 5.2,0.016,87,9,2000,22,1st,PR,Bernard Gilkey,Diamondbacks,330,9,R,B,0
// 5.2,0.014,217,9,2000,55,1st,PR,Luis Polonia,Tigers,370,8,L,A,0
// 5.2,0.015,474,9,2000,119,1st,PR,Johnny Damon,Athletics,340,9,L,A,0
// 5.2,0.016,499,9,2000,125,1st,PR,Dmitri Young,Reds,330,8,S,B,0
// 5.2,0.014,545,9,2000,137,1st,PR,Greg Vaughn,Devil Rays,360,7,R,A,0
// 5.2,0.015,729,9,2001,202,1st,TD,Johnny Damon,Royals,350,9,L,A,0
// 5.2,0.019,767,9,2001,221,1st,TD,Shawn Green,Dodgers,280,8,L,A,0
// 5.2,0.014,1247,9,2001,461,1st,TD,Shannon Stewart,Blue Jays,370,9,R,A,0
// 5.2,0.058,1738,9,2002,15,UL,,Luis Gonzalez,Diamondbacks,90,11,L,10,0
// 5.2,0.033,1761,9,2002,18,UL,,Craig Paquette,Tigers,160,10,R,12,0
// 5.2,0.020,2298,9,2003,66,UL,,Cliff Floyd,Mets,260,9,L,12,0
// 5.2,0.019,2702,9,2004,104,UL,,Jody Gerut,Indians,270,9,L,13,0
// 5.2,0.017,2992,9,2004,142,UL,,Craig Biggio,Astros,310,9,R,15,0
// 5.1,0.020,52,0,2000,13,1st,PR,Scott Spiezio,Angels,250,8,S,B,0
// 5.1,0.057,1465,0,2002,30,P,,David Segui,Orioles,90,11,L,10,0
// 5.1,0.036,1675,0,2002,10,UL,,Brad Fullmer,Angels,140,10,L,14,0
// 5.1,0.020,1274,2,2001,5,ASG,TD,Robert Fick,Tigers,250,10,L,12,0
// 5.1,0.021,2148,2,2003,53,UL,,Robert Fick,Tigers,240,10,L,12,0
// 5.1,0.022,2182,2,2003,56,UL,,Ivan Rodriguez,Tigers,230,11,R,12,0
// 5.1,0.032,2622,2,2003,96,UL,,Kelly Stinnett,Reds,160,10,R,12,0
// 5.1,0.020,3376,2,2005,231,UL,,Mike Lieberthal,Phillies,250,10,R,8,0
// 5.1,0.024,3549,2,2005,273,UL,,Ramon Hernandez,Padres,210,10,R,9,0
// 5.1,0.023,3624,2,2005,291,UL,,Benito Santiago,Giants,220,9,R,8,0
// 5.1,0.018,624,3,2000,158,1st,PR,Tony Clark,Tigers,280,8,S,C,0
// 5.1,0.020,1096,3,2001,386,1st,TD,J. T. Snow,Giants,260,8,L,C,0
// 5.1,0.039,1426,3,2002,14,P,,Justin Morneau,Twins,130,10,L,8,0
// 5.1,0.023,2196,3,2003,57,UL,,Travis Lee,Devil Rays,220,10,L,10,0
// 5.1,0.039,2214,3,2003,59,UL,,Lee Stevens,Expos,130,10,L,12,0
// 5.1,0.018,2525,3,2003,87,UL,,Tino Martinez,Cardinals,280,9,L,10,0
// 5.1,0.032,2528,3,2003,87,UL,,Doug Mientkiewicz,Twins,160,11,L,10,0
// 5.1,0.020,2881,3,2004,125,UL,,Randall Simon,Tigers,260,10,L,8,0
// 5.1,0.043,3739,3,2005,323,UL,,Steve Cox,Devil Rays,120,10,L,11,0
// 5.1,0.016,188,4,2000,47,1st,PR,Quilvio Veras,Braves,320,9,S,A,0
// 5.1,0.013,529,4,2000,133,1st,PR,Fernando Vina,Cardinals,400,10,L,A,0
// 5.1,0.015,880,4,2001,278,1st,TD,Edgardo Alfonzo,Mets,350,9,R,B,0
// 5.1,0.013,976,4,2001,326,1st,TD,Randy Velarde,Athletics,380,9,R,A,0
// 5.1,0.032,1655,4,2002,8,UL,,Todd Walker,Reds,160,11,L,12,0
// 5.1,0.028,1724,4,2002,14,UL,,Jay Bell,Diamondbacks,180,11,R,11,0
// 5.1,0.028,1879,4,2002,28,UL,,Marcus Giles,Braves,180,9,R,9,0
// 5.1,0.030,2059,4,2002,44,UL,,Mark Bellhorn,Red Sox,170,11,S,12,0
// 5.1,0.020,2151,4,2003,53,UL,,Miguel Cairo,Mets,260,10,R,13,0
// 5.1,0.026,2269,4,2003,63,UL,,Mark Grudzielanek,Cubs,200,11,R,11,0
// 5.1,0.021,2587,4,2003,92,UL,,Ronnie Belliard,Indians,240,10,R,12,0
// 5.1,0.018,3494,4,2005,260,UL,,Bret Boone,Mariners,290,9,R,13,0
// 5.1,0.027,94,5,2000,24,1st,PR,Dave Magadan,Padres,190,9,L,C,0
// 5.1,0.016,476,5,2000,119,1st,PR,Chris Stynes,Reds,320,9,R,B,0
// 5.1,0.018,681,5,2001,178,1st,PR,Mike Lowell,Marlins,280,8,R,B,0
// 5.1,0.018,744,5,2001,210,1st,TD,Joe Randa,Royals,290,8,R,B,0
// 5.1,0.020,941,5,2001,308,1st,TD,Eric Chavez,Athletics,260,8,L,B,0
// 5.1,0.019,1279,5,2001,10,ASG,TD,Shea Hillenbrand,Red Sox,270,10,R,14,0
// 5.1,0.028,1724,5,2002,14,UL,,Jay Bell,Diamondbacks,180,11,R,11,0
// 5.1,0.032,1761,5,2002,18,UL,,Craig Paquette,Tigers,160,10,R,12,0
// 5.1,0.022,1793,5,2002,20,UL,,Chad Tracy,Diamondbacks,230,10,L,10,0
// 5.1,0.024,2160,5,2003,54,UL,,Joe Crede,White Sox,210,10,R,13,0
// 5.1,0.016,2177,5,2003,55,UL,,Shea Hillenbrand,Red Sox,310,10,R,10,0
// 5.1,0.022,2348,5,2003,71,UL,,Eric Hinske,Blue Jays,230,10,L,16,0
// 5.1,0.034,2421,5,2003,77,UL,,Joe Crede,White Sox,150,10,R,9,0
// 5.1,0.026,2924,5,2004,131,UL,,Dmitri Young,Tigers,200,11,S,10,0
// 5.1,0.020,2941,5,2004,134,UL,,Mike Lowell,Marlins,250,10,R,10,0
// 5.1,0.022,3042,5,2004,152,UL,,Joe Randa,Royals,230,10,R,9,0
// 5.1,0.032,3714,5,2005,315,UL,,Craig Paquette,Cardinals,160,10,R,12,0
// 5.1,0.020,2216,6,2003,59,UL,,Rich Aurilia,Mariners,260,9,R,9,0
// 5.1,0.016,3279,6,2004,207,UL,,Orlando Cabrera,Expos,310,10,R,18,0
// 5.1,0.019,12,7,2000,3,1st,PR,Ron Gant,Angels,270,8,R,B,0
// 5.1,0.015,61,7,2000,16,1st,PR,Reggie Sanders,Braves,350,8,R,A,0
// 5.1,0.012,245,7,2000,62,1st,PR,Roger Cedeno,Astros,430,10,S,A,0
// 5.1,0.020,622,7,2000,158,1st,PR,Tony Gwynn,Padres,260,9,L,B,0
// 5.1,0.015,876,7,2001,276,1st,TD,Rondell White,Expos,340,8,R,B,0
// 5.1,0.020,1732,7,2002,15,UL,,Mark Kotsay,Giants,250,10,L,16,0
// 5.1,0.032,1761,7,2002,18,UL,,Craig Paquette,Tigers,160,10,R,12,0
// 5.1,0.023,1862,7,2002,27,UL,,Kevin Mench,Rangers,220,10,R,10,0
// 5.1,0.020,1889,7,2002,29,UL,,Andruw Jones,Braves,260,9,R,16,0
// 5.1,0.028,2038,7,2002,43,UL,,John Vander Wal,Yankees,180,11,L,15,0
// 5.1,0.028,2079,7,2003,46,UL,,Gary Matthews Jr.,Orioles,180,10,S,14,0
// 5.1,0.021,2193,7,2003,57,UL,,Raul Mondesi,Pirates,240,10,R,20,0
// 5.1,0.018,2364,7,2003,72,UL,,Jay Payton,Rockies,290,10,R,12,0
// 5.1,0.027,2487,7,2003,83,UL,,Carlos Lee,White Sox,190,10,R,16,0
// 5.1,0.030,2490,7,2003,83,UL,,Ryan Freel,Reds,170,11,R,21,0
// 5.1,0.023,2526,7,2003,87,UL,,Rondell White,Tigers,220,10,R,12,0
// 5.1,0.022,2703,7,2004,104,UL,,Jeromy Burnitz,Rockies,230,10,L,11,0
// 5.1,0.018,2916,7,2004,130,UL,,Juan Encarnacion,Marlins,280,9,R,16,0
// 5.1,0.026,2924,7,2004,131,UL,,Dmitri Young,Tigers,200,11,S,10,0
// 5.1,0.017,3155,7,2004,177,UL,,Jacque Jones,Twins,300,10,L,11,0
// 5.1,0.020,3374,7,2005,230,UL,,Eric Byrnes,Athletics,260,10,R,16,0
// 5.1,0.028,3631,7,2005,293,UL,,John Vander Wal,Giants,180,11,L,15,0
// 5.1,0.032,3714,7,2005,315,UL,,Craig Paquette,Cardinals,160,10,R,12,0
// 5.1,0.032,3757,7,2005,329,UL,,Greg Vaughn,Devil Rays,160,10,R,14,0
// 5.1,0.021,3776,7,2005,335,UL,,Gabe Kapler,Rangers,240,11,R,17,0
// 5.1,0.015,876,8,2001,276,1st,TD,Rondell White,Expos,340,8,R,B,0
// 5.1,0.024,1593,8,2002,1,UL,,Garret Anderson,Angels,210,11,L,12,0
// 5.1,0.022,1649,8,2002,7,UL,,Shannon Stewart,Blue Jays,230,11,R,19,0
// 5.1,0.017,1858,8,2002,26,UL,,Andruw Jones,Braves,300,9,R,10,0
// 5.1,0.020,1889,8,2002,29,UL,,Andruw Jones,Braves,260,9,R,16,0
// 5.1,0.023,1949,8,2002,35,UL,,Carl Everett,Rangers,220,9,S,18,0
// 5.1,0.023,2166,8,2003,54,UL,,Carl Everett,Red Sox,220,9,S,18,0
// 5.1,0.030,2490,8,2003,83,UL,,Ryan Freel,Reds,170,11,R,21,0
// 5.1,0.023,2960,8,2004,137,UL,,Preston Wilson,Marlins,220,9,R,16,0
// 5.1,0.034,3057,8,2004,156,UL,,Ricky Ledee,Dodgers,150,9,L,10,0
// 5.1,0.015,61,9,2000,16,1st,PR,Reggie Sanders,Braves,350,8,R,A,0
// 5.1,0.015,876,9,2001,276,1st,TD,Rondell White,Expos,340,8,R,B,0
// 5.1,0.015,1101,9,2001,388,1st,TD,Mike Cameron,Mariners,350,9,R,A,0
// 5.1,0.020,1732,9,2002,15,UL,,Mark Kotsay,Giants,250,10,L,16,0
// 5.1,0.020,1889,9,2002,29,UL,,Andruw Jones,Braves,260,9,R,16,0
// 5.1,0.028,2038,9,2002,43,UL,,John Vander Wal,Yankees,180,11,L,15,0
// 5.1,0.028,2079,9,2003,46,UL,,Gary Matthews Jr.,Orioles,180,10,S,14,0
// 5.1,0.021,2193,9,2003,57,UL,,Raul Mondesi,Pirates,240,10,R,20,0
// 5.1,0.024,2211,9,2003,58,UL,,Trot Nixon,Red Sox,210,10,L,10,0
// 5.1,0.018,2364,9,2003,72,UL,,Jay Payton,Rockies,290,10,R,12,0
// 5.1,0.019,2472,9,2003,82,UL,,Jeromy Burnitz,Cubs,270,10,L,11,0
// 5.1,0.027,2487,9,2003,83,UL,,Carlos Lee,White Sox,190,10,R,16,0
// 5.1,0.030,2490,9,2003,83,UL,,Ryan Freel,Reds,170,11,R,21,0
// 5.1,0.023,2526,9,2003,87,UL,,Rondell White,Tigers,220,10,R,12,0
// 5.1,0.022,2703,9,2004,104,UL,,Jeromy Burnitz,Rockies,230,10,L,11,0
// 5.1,0.018,2916,9,2004,130,UL,,Juan Encarnacion,Marlins,280,9,R,16,0
// 5.1,0.026,2924,9,2004,131,UL,,Dmitri Young,Tigers,200,11,S,10,0
// 5.1,0.023,3084,9,2004,161,UL,,Brian Jordan,Dodgers,220,9,R,9,0
// 5.1,0.017,3155,9,2004,177,UL,,Jacque Jones,Twins,300,10,L,11,0
// 5.1,0.026,3160,9,2004,178,UL,,Shawn Green,Dodgers,200,10,L,11,0
// 5.1,0.028,3631,9,2005,293,UL,,John Vander Wal,Giants,180,11,L,15,0
// 5.1,0.032,3714,9,2005,315,UL,,Craig Paquette,Cardinals,160,10,R,12,0
// 5.1,0.032,3757,9,2005,329,UL,,Greg Vaughn,Devil Rays,160,10,R,14,0
// 5.1,0.021,3776,9,2005,335,UL,,Gabe Kapler,Rangers,240,11,R,17,0
// 5,0.036,3820,0,2005,349,UL,,Brad Fullmer,Blue Jays,140,10,L,14,0
// 5,0.021,777,2,2001,226,1st,TD,Chad Kreuter,Dodgers,240,9,S,C,0
// 5,0.020,1229,2,2001,452,1st,TD,Darrin Fletcher,Blue Jays,250,8,L,C,0
// 5,0.019,2016,2,2002,41,UL,,Josh Bard,Indians,270,10,S,10,0
// 5,0.018,2239,2,2003,61,UL,,Ramon Hernandez,Padres,280,9,R,10,0
// 5,0.017,3145,2,2004,174,UL,,Javy Lopez,Orioles,290,11,R,8,0
// 5,0.019,3430,2,2005,244,UL,,Ramon Hernandez,Athletics,260,9,R,11,0
// 5,0.017,55,3,2000,14,1st,PR,Mo Vaughn,Angels,300,8,L,C,0
// 5,0.026,94,3,2000,24,1st,PR,Dave Magadan,Padres,190,9,L,C,0
// 5,0.019,365,3,2000,92,1st,PR,Todd Zeile,Mets,270,8,R,C,0
// 5,0.020,396,3,2000,99,1st,PR,Paul Konerko,White Sox,250,9,R,C,0
// 5,0.019,403,3,2000,101,1st,PR,Paul Konerko,White Sox,270,8,R,C,0
// 5,0.020,1093,3,2001,384,1st,TD,J. T. Snow,Giants,250,9,L,C,0
// 5,0.023,1692,3,2002,11,UL,,Scott Spiezio,Angels,220,10,S,15,0
// 5,0.026,1825,3,2002,23,UL,,Robert Fick,Braves,190,9,L,9,0
// 5,0.028,2883,3,2004,125,UL,,Dmitri Young,Tigers,180,9,S,8,0
// 5,0.017,1318,4,2001,49,ASG,,Jose Vidro,Expos,290,10,S,14,0
// 5,0.022,3154,4,2004,177,UL,,Ronnie Belliard,Brewers,230,10,R,17,0
// 5,0.021,3329,4,2005,219,UL,,Miguel Cairo,Yankees,240,10,R,13,0
// 5,0.015,119,5,2000,30,1st,PR,Matt Williams,Diamondbacks,330,7,R,B,0
// 5,0.019,654,5,2000,168,1st,PR,Dean Palmer,Tigers,260,8,R,B,0
// 5,0.018,1216,5,2001,446,1st,TD,Todd Zeile,Rangers,280,8,R,C,0
// 5,0.025,1845,5,2002,25,UL,,Matt Williams,Diamondbacks,200,9,R,12,0
// 5,0.025,2009,5,2002,40,UL,,Joe Randa,Royals,200,10,R,13,0
// 5,0.023,3201,5,2004,188,UL,,Wes Helms,Brewers,220,9,R,8,0
// 5,0.016,3314,5,2005,216,UL,,Eric Chavez,Athletics,310,10,L,12,0
// 5,0.021,3457,5,2005,251,UL,,David Bell,Giants,240,9,R,9,0
// 5,0.019,967,6,2001,321,1st,TD,Miguel Tejada,Athletics,270,8,R,B,0
// 5,0.015,2441,6,2003,79,UL,,Rich Aurilia,Giants,330,9,R,12,0
// 5,0.017,3337,6,2005,221,UL,,Derek Jeter,Yankees,300,10,R,18,0
// 5,0.022,3597,6,2005,284,UL,,Deivi Cruz,Giants,230,10,R,11,0
// 5,0.019,295,7,2000,74,1st,PR,Troy OLeary,Red Sox,270,8,L,C,0
// 5,0.016,415,7,2000,104,1st,PR,Magglio Ordonez,White Sox,320,8,R,B,0
// 5,0.014,696,7,2001,186,1st,PR,Preston Wilson,Marlins,350,8,R,B,0
// 5,0.016,734,7,2001,205,1st,TD,Jermaine Dye,Royals,310,8,R,B,0
// 5,0.014,1101,7,2001,388,1st,TD,Mike Cameron,Mariners,350,9,R,A,0
// 5,0.056,1697,7,2002,12,UL,,Jeffrey Hammonds,Giants,90,9,R,9,0
// 5,0.023,1949,7,2002,35,UL,,Carl Everett,Rangers,220,9,S,18,0
// 5,0.023,2166,7,2003,54,UL,,Carl Everett,Red Sox,220,9,S,18,0
// 5,0.024,2211,7,2003,58,UL,,Trot Nixon,Red Sox,210,10,L,10,0
// 5,0.028,2233,7,2003,60,UL,,Troy O'Leary,Red Sox,180,8,L,17,0
// 5,0.019,2472,7,2003,82,UL,,Jeromy Burnitz,Cubs,270,10,L,11,0
// 5,0.024,2866,7,2004,123,UL,,Rondell White,Tigers,210,9,R,9,0
// 5,0.028,3073,7,2004,159,UL,,Mark Quinn,Royals,180,8,R,15,0
// 5,0.023,3084,7,2004,161,UL,,Brian Jordan,Dodgers,220,9,R,9,0
// 5,0.025,3160,7,2004,178,UL,,Shawn Green,Dodgers,200,10,L,11,0
// 5,0.050,3399,7,2005,236,UL,,Bobby Kielty,Athletics,100,9,S,11,0
// 5,0.025,3786,7,2005,338,UL,,Frank Catalanotto,Blue Jays,200,10,L,9,0
// 5,0.012,245,8,2000,62,1st,PR,Roger Cedeno,Astros,430,10,S,A,0
// 5,0.014,696,8,2001,186,1st,PR,Preston Wilson,Marlins,350,8,R,B,0
// 5,0.014,1101,8,2001,388,1st,TD,Mike Cameron,Mariners,350,9,R,A,0
// 5,0.016,1587,8,2002,1,UL,,Steve Finley,Angels,320,9,L,12,0
// 5,0.056,1697,8,2002,12,UL,,Jeffrey Hammonds,Giants,90,9,R,9,0
// 5,0.020,1732,8,2002,15,UL,,Mark Kotsay,Giants,250,10,L,16,0
// 5,0.017,2657,8,2003,100,UL,,Scott Podsednik,White Sox,300,10,L,24,0
// 5,0.019,3374,8,2005,230,UL,,Eric Byrnes,Athletics,260,10,R,16,0
// 5,0.025,3414,8,2005,240,UL,,Eric Byrnes,Athletics,200,9,R,12,0
// 5,0.019,12,9,2000,3,1st,PR,Ron Gant,Angels,270,8,R,B,0
// 5,0.012,245,9,2000,62,1st,PR,Roger Cedeno,Astros,430,10,S,A,0
// 5,0.019,400,9,2000,100,1st,PR,Carlos Lee,White Sox,260,8,R,B,0
// 5,0.019,622,9,2000,158,1st,PR,Tony Gwynn,Padres,260,9,L,B,0
// 5,0.014,696,9,2001,186,1st,PR,Preston Wilson,Marlins,350,8,R,B,0
// 5,0.016,734,9,2001,205,1st,TD,Jermaine Dye,Royals,310,8,R,B,0
// 5,0.021,791,9,2001,233,1st,TD,Jeromy Burnitz,Brewers,240,8,L,B,0
// 5,0.056,1697,9,2002,12,UL,,Jeffrey Hammonds,Giants,90,9,R,9,0
// 5,0.023,1862,9,2002,27,UL,,Kevin Mench,Rangers,220,10,R,10,0
// 5,0.023,1949,9,2002,35,UL,,Carl Everett,Rangers,220,9,S,18,0
// 5,0.023,2166,9,2003,54,UL,,Carl Everett,Red Sox,220,9,S,18,0
// 5,0.024,2866,9,2004,123,UL,,Rondell White,Tigers,210,9,R,9,0
// 5,0.028,3073,9,2004,159,UL,,Mark Quinn,Royals,180,8,R,15,0
// 5,0.019,3374,9,2005,230,UL,,Eric Byrnes,Athletics,260,10,R,16,0
// 5,0.050,3399,9,2005,236,UL,,Bobby Kielty,Athletics,100,9,S,11,0
// 5,0.025,3786,9,2005,338,UL,,Frank Catalanotto,Blue Jays,200,10,L,9,0
// 4.9,0.054,1871,0,2002,28,UL,,David Justice,Athletics,90,10,L,12,0
// 4.9,0.021,893,2,2001,284,1st,TD,Todd Pratt,Mets,230,8,R,C,0
// 4.9,0.020,2029,2,2002,42,UL,,Jason Kendall,Athletics,250,12,R,13,0
// 4.9,0.020,2170,2,2003,55,UL,,Charles Johnson,Marlins,250,9,R,9,0
// 4.9,0.016,626,3,2000,159,1st,PR,Tony Clark,Tigers,300,8,S,B,0
// 4.9,0.029,1778,3,2002,19,UL,,Carlos Pena,Tigers,170,9,L,16,0
// 4.9,0.023,2117,3,2003,50,UL,,Scott Spiezio,Mariners,210,9,S,11,0
// 4.9,0.014,2380,3,2003,73,UL,,Paul Konerko,White Sox,340,10,R,9,0
// 4.9,0.023,2120,4,2003,50,UL,,Ronnie Belliard,Rockies,210,12,R,10,0
// 4.9,0.031,3297,4,2004,212,UL,,Edgardo Alfonzo,Mets,160,10,R,13,0
// 4.9,0.020,438,5,2000,110,1st,PR,Russ Branyan,Indians,240,7,L,C,0
// 4.9,0.023,2117,5,2003,50,UL,,Scott Spiezio,Mariners,210,9,S,11,0
// 4.9,0.033,2433,5,2003,78,UL,,Tony Graffanino,White Sox,150,9,R,9,0
// 4.9,0.035,2936,5,2004,133,UL,,Miguel Cabrera,Marlins,140,9,R,8,0
// 4.9,0.017,3841,5,2005,448,UL,,Tony Batista,Blue Jays,290,7,R,B,0
// 4.9,0.027,2247,6,2003,61,UL,,Alex Gonzalez,Cubs,180,9,R,14,0
// 4.9,0.021,3746,6,2005,325,UL,,Julio Lugo,Devil Rays,230,9,R,12,0
// 4.9,0.019,256,7,2000,64,1st,PR,Dante Bichette,Red Sox,260,8,R,B,0
// 4.9,0.019,400,7,2000,100,1st,PR,Carlos Lee,White Sox,260,8,R,B,0
// 4.9,0.020,438,7,2000,110,1st,PR,Russ Branyan,Indians,240,7,L,C,0
// 4.9,0.015,485,7,2000,122,1st,PR,Mike Cameron,Mariners,330,8,R,A,0
// 4.9,0.020,791,7,2001,233,1st,TD,Jeromy Burnitz,Brewers,240,8,L,B,0
// 4.9,0.019,1171,7,2001,423,1st,TD,Jose Guillen,Devil Rays,260,8,R,B,0
// 4.9,0.020,1205,7,2001,440,1st,TD,Gabe Kapler,Rangers,240,8,R,B,0
// 4.9,0.018,1241,7,2001,458,1st,TD,Raul Mondesi,Blue Jays,280,7,R,A,0
// 4.9,0.020,3207,7,2004,190,UL,,Torii Hunter,Twins,250,9,R,17,0
// 4.9,0.014,447,8,2000,112,1st,PR,Mike Cameron,Reds,340,8,R,A,0
// 4.9,0.029,3064,8,2004,157,UL,,Marquis Grissom,Dodgers,170,9,R,11,0
// 4.9,0.020,3207,8,2004,190,UL,,Torii Hunter,Twins,250,9,R,17,0
// 4.9,0.020,3680,8,2005,304,UL,,Randy Winn,Mariners,250,10,S,18,0
// 4.9,0.019,256,9,2000,64,1st,PR,Dante Bichette,Red Sox,260,8,R,B,0
// 4.9,0.018,295,9,2000,74,1st,PR,Troy OLeary,Red Sox,270,8,L,C,0
// 4.9,0.015,415,9,2000,104,1st,PR,Magglio Ordonez,White Sox,320,8,R,B,0
// 4.9,0.020,438,9,2000,110,1st,PR,Russ Branyan,Indians,240,7,L,C,0
// 4.9,0.014,447,9,2000,112,1st,PR,Mike Cameron,Reds,340,8,R,A,0
// 4.9,0.015,485,9,2000,122,1st,PR,Mike Cameron,Mariners,330,8,R,A,0
// 4.9,0.015,668,9,2001,173,1st,PR,Bruce Aven,Marlins,320,9,R,B,0
// 4.9,0.015,1022,9,2001,349,1st,TD,Al Martin,Pirates,320,7,L,A,0
// 4.9,0.019,1171,9,2001,423,1st,TD,Jose Guillen,Devil Rays,260,8,R,B,0
// 4.9,0.020,1205,9,2001,440,1st,TD,Gabe Kapler,Rangers,240,8,R,B,0
// 4.9,0.018,1241,9,2001,458,1st,TD,Raul Mondesi,Blue Jays,280,7,R,A,0
// 4.9,0.027,2233,9,2003,60,UL,,Troy O'Leary,Red Sox,180,8,L,17,0
// 4.9,0.035,2936,9,2004,133,UL,,Miguel Cabrera,Marlins,140,9,R,8,0
// 4.9,0.020,3207,9,2004,190,UL,,Torii Hunter,Twins,250,9,R,17,0
// 4.9,0.038,3470,9,2005,254,UL,,Pat Burrell,Phillies,130,9,R,8,0
// 4.8,0.030,218,0,2000,55,1st,PR,Billy McMillon,Tigers,160,9,L,C,0
// 4.8,0.027,837,0,2001,256,1st,TD,David Ortiz,Twins,180,9,L,C,0
// 4.8,0.025,2484,0,2003,83,UL,,Ellis Burks,Indians,190,11,R,14,0
// 4.8,0.053,3358,0,2005,227,UL,,David Justice,Yankees,90,10,L,12,0
// 4.8,0.034,3659,0,2005,299,UL,,Edgar Martinez,Mariners,140,10,R,9,0
// 4.8,0.027,542,2,2000,136,1st,PR,Scott Hatteberg,Red Sox,180,9,L,C,0
// 4.8,0.014,1114,2,2001,395,1st,TD,Tom Lampkin,Mariners,340,8,L,B,0
// 4.8,0.017,1232,2,2001,454,1st,TD,Darrin Fletcher,Blue Jays,290,8,L,C,0
// 4.8,0.025,1412,2,2002,9,P,,Corky Miller,Reds,190,9,R,8,0
// 4.8,0.032,1934,2,2002,33,UL,,Javy Lopez,Braves,150,10,R,11,0
// 4.8,0.025,2535,2,2003,87,UL,,Jason LaRue,Reds,190,9,R,8,0
// 4.8,0.030,3175,2,2004,182,UL,,Michael Barrett,Expos,160,10,R,11,0
// 4.8,0.023,3260,2,2004,202,UL,,Paul Lo Duca,Marlins,210,10,R,10,0
// 4.8,0.023,735,3,2001,205,1st,TD,Dave McCarty,Royals,210,7,R,C,0
// 4.8,0.021,1445,3,2002,21,P,,Pedro Feliz,Giants,230,9,R,11,0
// 4.8,0.028,1614,3,2002,3,UL,,Darin Erstad,Angels,170,10,L,15,0
// 4.8,0.034,1818,3,2002,23,UL,,Tino Martinez,Devil Rays,140,10,L,10,0
// 4.8,0.030,1928,3,2002,33,UL,,Eric Karros,Athletics,160,10,R,12,0
// 4.8,0.037,2005,3,2002,39,UL,,Rafael Palmeiro,Orioles,130,10,L,10,0
// 4.8,0.040,2058,3,2002,44,UL,,B. J. Surhoff,Orioles,120,10,L,9,0
// 4.8,0.024,2062,3,2002,45,UL,,Ben Broussard,Indians,200,9,L,13,0
// 4.8,0.044,2280,3,2003,64,UL,,Eric Karros,Cubs,110,10,R,9,0
// 4.8,0.018,2437,3,2003,79,UL,,Wes Helms,Brewers,270,9,R,10,0
// 4.8,0.030,2712,3,2004,105,UL,,Travis Hafner,Indians,160,9,L,13,0
// 4.8,0.034,3323,3,2005,218,UL,,Scott Hatteberg,Athletics,140,11,L,8,0
// 4.8,0.028,3534,3,2005,270,UL,,Kevin Young,Pirates,170,9,R,14,0
// 4.8,0.069,3566,3,2005,277,UL,,Ryan Klesko,Padres,70,10,L,9,0
// 4.8,0.040,3627,3,2005,292,UL,,J.T. Snow,Giants,120,11,L,12,0
// 4.8,0.037,3702,3,2005,311,UL,,Tino Martinez,Cardinals,130,10,L,9,0
// 4.8,0.034,3743,3,2005,324,UL,,Travis Lee,Devil Rays,140,10,L,11,0
// 4.8,0.015,928,4,2001,302,1st,TD,Chuck Knoblauch,Yankees,330,9,R,A,0
// 4.8,0.013,1297,4,2001,28,ASG,,Luis Castillo,Marlins,380,11,S,21,0
// 4.8,0.034,1436,4,2002,18,P,,Mark Derosa,Braves,140,10,R,15,0
// 4.8,0.025,1674,4,2002,9,UL,,Adam Kennedy,Angels,190,10,L,15,0
// 4.8,0.017,1952,4,2002,35,UL,,Placido Polanco,Phillies,290,10,R,12,0
// 4.8,0.023,2106,4,2003,49,UL,,Ronnie Belliard,Indians,210,10,R,14,0
// 4.8,0.020,2265,4,2003,63,UL,,Mark Loretta,Padres,240,10,R,12,0
// 4.8,0.032,2433,4,2003,78,UL,,Tony Graffanino,White Sox,150,9,R,9,0
// 4.8,0.018,2627,4,2003,97,UL,,Brandon Phillips,Indians,260,11,R,18,0
// 4.8,0.018,2629,4,2003,97,UL,,Tony Womack,Yankees,270,11,L,18,0
// 4.8,0.018,3455,4,2005,250,UL,,Placido Polanco,Phillies,270,10,R,12,0
// 4.8,0.018,3456,4,2005,251,UL,,Marlon Anderson,Phillies,260,10,L,15,0
// 4.8,0.021,3491,4,2005,259,UL,,Placido Polanco,Phillies,230,10,R,14,0
// 4.8,0.016,577,5,2000,145,1st,PR,Tony Batista,Blue Jays,300,7,R,B,0
// 4.8,0.015,706,5,2001,191,1st,TD,Ken Caminiti,Astros,330,9,S,B,0
// 4.8,0.017,1221,5,2001,448,1st,TD,Tony Batista,Blue Jays,290,7,R,B,0
// 4.8,0.018,1292,5,2001,23,ASG,,Robin Ventura,Yankees,270,10,L,11,0
// 4.8,0.021,1445,5,2002,21,P,,Pedro Feliz,Giants,230,9,R,11,0
// 4.8,0.028,1798,5,2002,21,UL,,Eric Munson,Tigers,170,9,L,14,0
// 4.8,0.018,1981,5,2002,37,UL,,Tony Batista,Orioles,260,9,R,11,0
// 4.8,0.030,1985,5,2002,38,UL,,Bill Mueller,Red Sox,160,10,S,10,0
// 4.8,0.023,2106,5,2003,49,UL,,Ronnie Belliard,Indians,210,10,R,14,0
// 4.8,0.040,2368,5,2003,72,UL,,Bill Mueller,Cubs,120,10,S,8,0
// 4.8,0.017,2569,5,2003,91,UL,,Placido Polanco,Phillies,290,10,R,14,0
// 4.8,0.018,2713,5,2004,105,UL,,Vinny Castilla,Rockies,260,9,R,8,0
// 4.8,0.028,2817,5,2004,117,UL,,Todd Zeile,Rockies,170,10,R,8,0
// 4.8,0.024,2914,5,2004,130,UL,,Joe Randa,Reds,200,10,R,10,0
// 4.8,0.024,3588,5,2005,282,UL,,Edgardo Alfonzo,Giants,200,10,R,9,0
// 4.8,0.015,1220,6,2001,448,1st,TD,Tony Batista,Blue Jays,310,7,R,B,0
// 4.8,0.022,1420,6,2002,12,P,,Jimmy Rollins,Phillies,220,9,S,16,0
// 4.8,0.027,2090,6,2003,47,UL,,Melvin Mora,Orioles,180,10,R,14,0
// 4.8,0.028,2289,6,2003,65,UL,,Ricky Gutierrez,Cubs,170,11,R,15,0
// 4.8,0.021,2720,6,2004,106,UL,,Omar Vizquel,Indians,230,10,S,15,0
// 4.8,0.021,2732,6,2004,107,UL,,Royce Clayton,Rockies,230,10,R,13,0
// 4.8,0.021,3382,6,2005,232,UL,,Bobby Crosby,Athletics,230,9,R,12,0
// 4.8,0.022,3495,6,2005,260,UL,,Jimmy Rollins,Phillies,220,9,S,16,0
// 4.8,0.034,3545,6,2005,272,UL,,Khalil Greene,Padres,140,10,R,12,0
// 4.8,0.014,229,7,2000,58,1st,PR,Cliff Floyd,Marlins,350,8,L,A,0
// 4.8,0.017,271,7,2000,68,1st,PR,Butch Huskey,Red Sox,290,7,R,B,0
// 4.8,0.018,287,7,2000,72,1st,PR,Trot Nixon,Red Sox,260,8,L,B,0
// 4.8,0.019,296,7,2000,74,1st,PR,Trot Nixon,Red Sox,250,9,L,B,0
// 4.8,0.014,447,7,2000,112,1st,PR,Mike Cameron,Reds,340,8,R,A,0
// 4.8,0.015,668,7,2001,173,1st,PR,Bruce Aven,Marlins,320,9,R,B,0
// 4.8,0.013,732,7,2001,204,1st,TD,Johnny Damon,Royals,360,9,L,A,0
// 4.8,0.018,737,7,2001,206,1st,TD,Mark Quinn,Royals,260,8,R,B,0
// 4.8,0.014,774,7,2001,225,1st,TD,Raul Mondesi,Dodgers,340,7,R,A,0
// 4.8,0.015,920,7,2001,298,1st,TD,Chad Curtis,Yankees,310,10,R,B,0
// 4.8,0.012,990,7,2001,333,1st,TD,Doug Glanville,Phillies,390,9,R,A,0
// 4.8,0.015,1022,7,2001,349,1st,TD,Al Martin,Pirates,320,7,L,A,0
// 4.8,0.028,1413,7,2002,9,P,,Hideki Matsui,Yankees,170,10,L,9,0
// 4.8,0.034,1436,7,2002,18,P,,Mark Derosa,Braves,140,10,R,15,0
// 4.8,0.028,1678,7,2002,10,UL,,Juan Gonzalez,Indians,170,9,R,10,0
// 4.8,0.053,1708,7,2002,13,UL,,Bobby Kielty,Athletics,90,10,S,12,0
// 4.8,0.032,1851,7,2002,26,UL,,Hideki Matsui,Yankees,150,10,L,9,0
// 4.8,0.040,1987,7,2002,38,UL,,So Taguchi,Cardinals,120,10,R,11,0
// 4.8,0.025,2028,7,2002,42,UL,,Reed Johnson,Blue Jays,190,10,R,11,0
// 4.8,0.040,2058,7,2002,44,UL,,B. J. Surhoff,Orioles,120,10,L,9,0
// 4.8,0.024,2084,7,2003,47,UL,,Raul Ibanez,Mariners,200,10,L,12,0
// 4.8,0.027,2090,7,2003,47,UL,,Melvin Mora,Orioles,180,10,R,14,0
// 4.8,0.027,2268,7,2003,63,UL,,Moises Alou,Cubs,180,10,R,12,0
// 4.8,0.018,2458,7,2003,81,UL,,Adrian Brown,Pirates,270,10,S,19,0
// 4.8,0.037,2563,7,2003,90,UL,,Rob Mackowiak,Pirates,130,9,L,13,0
// 4.8,0.037,2671,7,2003,101,UL,,Matt Lawton,Indians,130,10,L,12,0
// 4.8,0.044,2721,7,2004,106,UL,,Matt Lawton,Indians,110,10,L,15,0
// 4.8,0.037,2807,7,2004,116,UL,,Jayson Werth,Dodgers,130,10,R,10,0
// 4.8,0.040,2815,7,2004,117,UL,,John Mabry,Cardinals,120,10,L,10,0
// 4.8,0.023,2840,7,2004,120,UL,,Bobby Higginson,Tigers,210,10,L,13,0
// 4.8,0.034,2936,7,2004,133,UL,,Miguel Cabrera,Marlins,140,9,R,8,0
// 4.8,0.044,2994,7,2004,143,UL,,Jerry Hairston Jr.,Cubs,110,11,R,13,0
// 4.8,0.040,3054,7,2004,155,UL,,Daryle Ward,Astros,120,9,L,9,0
// 4.8,0.028,3064,7,2004,157,UL,,Marquis Grissom,Dodgers,170,9,R,11,0
// 4.8,0.022,3100,7,2004,164,UL,,Raul Ibanez,Royals,220,10,L,12,0
// 4.8,0.040,3102,7,2004,165,UL,,David Dellucci,Rangers,120,10,L,12,0
// 4.8,0.034,3121,7,2004,169,UL,,Geoff Jenkins,Brewers,140,9,L,9,0
// 4.8,0.028,3373,7,2005,230,UL,,Hideki Matsui,Yankees,170,10,L,9,0
// 4.8,0.037,3421,7,2005,242,UL,,Craig Wilson,Pirates,130,10,R,9,0
// 4.8,0.037,3470,7,2005,254,UL,,Pat Burrell,Phillies,130,9,R,8,0
// 4.8,0.040,3634,7,2005,293,UL,,Michael Tucker,Giants,120,10,L,18,0
// 4.8,0.022,3686,7,2005,306,UL,,Randy Winn,Mariners,220,10,S,18,0
// 4.8,0.022,3712,7,2005,314,UL,,Reggie Sanders,Cardinals,220,9,R,18,0
// 4.8,0.037,3742,7,2005,324,UL,,Ben Grieve,Devil Rays,130,11,L,14,0
// 4.8,0.015,485,8,2000,122,1st,PR,Mike Cameron,Mariners,330,8,R,A,0
// 4.8,0.012,990,8,2001,333,1st,TD,Doug Glanville,Phillies,390,9,R,A,0
// 4.8,0.020,1205,8,2001,440,1st,TD,Gabe Kapler,Rangers,240,8,R,B,0
// 4.8,0.016,1273,8,2001,4,ASG,TD,Johnny Damon,Red Sox,300,11,L,20,0
// 4.8,0.034,1436,8,2002,18,P,,Mark Derosa,Braves,140,10,R,15,0
// 4.8,0.017,1613,8,2002,3,UL,,Darin Erstad,Angels,280,10,L,16,0
// 4.8,0.030,1940,8,2002,34,UL,,Mark Kotsay,Athletics,160,10,L,11,0
// 4.8,0.025,2028,8,2002,42,UL,,Reed Johnson,Blue Jays,190,10,R,11,0
// 4.8,0.040,2058,8,2002,44,UL,,B. J. Surhoff,Orioles,120,10,L,9,0
// 4.8,0.024,2069,8,2002,45,UL,,Johnny Damon,Red Sox,200,10,L,19,0
// 4.8,0.018,2458,8,2003,81,UL,,Adrian Brown,Pirates,270,10,S,19,0
// 4.8,0.027,3107,8,2004,165,UL,,Milton Bradley,Dodgers,180,10,S,15,0
// 4.8,0.022,3241,8,2004,198,UL,,Timo Perez,Mets,220,10,L,12,0
// 4.8,0.053,3402,8,2005,237,UL,,Bernie Williams,Yankees,90,11,S,15,0
// 4.8,0.023,3498,8,2005,261,UL,,Mike Cameron,Mariners,210,10,R,19,0
// 4.8,0.023,3646,8,2005,296,UL,,Mike Cameron,Mariners,210,10,R,15,0
// 4.8,0.016,151,9,2000,38,1st,PR,Brian Jordan,Braves,300,8,R,B,0
// 4.8,0.014,229,9,2000,58,1st,PR,Cliff Floyd,Marlins,350,8,L,A,0
// 4.8,0.017,271,9,2000,68,1st,PR,Butch Huskey,Red Sox,290,7,R,B,0
// 4.8,0.019,296,9,2000,74,1st,PR,Trot Nixon,Red Sox,250,9,L,B,0
// 4.8,0.015,565,9,2000,142,1st,PR,Ruben Mateo,Rangers,320,7,R,B,0
// 4.8,0.013,732,9,2001,204,1st,TD,Johnny Damon,Royals,360,9,L,A,0
// 4.8,0.014,774,9,2001,225,1st,TD,Raul Mondesi,Dodgers,340,7,R,A,0
// 4.8,0.015,920,9,2001,298,1st,TD,Chad Curtis,Yankees,310,10,R,B,0
// 4.8,0.012,990,9,2001,333,1st,TD,Doug Glanville,Phillies,390,9,R,A,0
// 4.8,0.034,1436,9,2002,18,P,,Mark Derosa,Braves,140,10,R,15,0
// 4.8,0.028,1678,9,2002,10,UL,,Juan Gonzalez,Indians,170,9,R,10,0
// 4.8,0.053,1708,9,2002,13,UL,,Bobby Kielty,Athletics,90,10,S,12,0
// 4.8,0.040,1987,9,2002,38,UL,,So Taguchi,Cardinals,120,10,R,11,0
// 4.8,0.025,2028,9,2002,42,UL,,Reed Johnson,Blue Jays,190,10,R,11,0
// 4.8,0.040,2058,9,2002,44,UL,,B. J. Surhoff,Orioles,120,10,L,9,0
// 4.8,0.024,2084,9,2003,47,UL,,Raul Ibanez,Mariners,200,10,L,12,0
// 4.8,0.027,2090,9,2003,47,UL,,Melvin Mora,Orioles,180,10,R,14,0
// 4.8,0.027,2268,9,2003,63,UL,,Moises Alou,Cubs,180,10,R,12,0
// 4.8,0.018,2458,9,2003,81,UL,,Adrian Brown,Pirates,270,10,S,19,0
// 4.8,0.037,2563,9,2003,90,UL,,Rob Mackowiak,Pirates,130,9,L,13,0
// 4.8,0.037,2671,9,2003,101,UL,,Matt Lawton,Indians,130,10,L,12,0
// 4.8,0.044,2721,9,2004,106,UL,,Matt Lawton,Indians,110,10,L,15,0
// 4.8,0.037,2807,9,2004,116,UL,,Jayson Werth,Dodgers,130,10,R,10,0
// 4.8,0.040,2815,9,2004,117,UL,,John Mabry,Cardinals,120,10,L,10,0
// 4.8,0.023,2840,9,2004,120,UL,,Bobby Higginson,Tigers,210,10,L,13,0
// 4.8,0.044,2994,9,2004,143,UL,,Jerry Hairston Jr.,Cubs,110,11,R,13,0
// 4.8,0.040,3054,9,2004,155,UL,,Daryle Ward,Astros,120,9,L,9,0
// 4.8,0.028,3064,9,2004,157,UL,,Marquis Grissom,Dodgers,170,9,R,11,0
// 4.8,0.040,3102,9,2004,165,UL,,David Dellucci,Rangers,120,10,L,12,0
// 4.8,0.034,3121,9,2004,169,UL,,Geoff Jenkins,Brewers,140,9,L,9,0
// 4.8,0.022,3241,9,2004,198,UL,,Timo Perez,Mets,220,10,L,12,0
// 4.8,0.028,3373,9,2005,230,UL,,Hideki Matsui,Yankees,170,10,L,9,0
// 4.8,0.032,3547,9,2005,273,UL,,J. D. Drew,Cardinals,150,10,L,12,0
// 4.8,0.030,3599,9,2005,285,UL,,Ben Grieve,Devil Rays,160,10,L,12,0
// 4.8,0.040,3634,9,2005,293,UL,,Michael Tucker,Giants,120,10,L,18,0
// 4.8,0.022,3686,9,2005,306,UL,,Randy Winn,Mariners,220,10,S,18,0
// 4.8,0.022,3712,9,2005,314,UL,,Reggie Sanders,Cardinals,220,9,R,18,0
// 4.8,0.037,3742,9,2005,324,UL,,Ben Grieve,Devil Rays,130,11,L,14,0
// 4.7,0.020,573,0,2000,144,1st,PR,David Segui,Rangers,240,8,S,C,0
// 4.7,0.017,989,2,2001,332,1st,TD,Mike Lieberthal,Phillies,270,8,R,B,0
// 4.7,0.018,325,3,2000,82,1st,PR,David Ortiz,Twins,260,8,L,C,0
// 4.7,0.016,547,3,2000,137,1st,PR,Richie Sexson,Indians,290,6,R,B,0
// 4.7,0.036,3421,3,2005,242,UL,,Craig Wilson,Pirates,130,10,R,9,0
// 4.7,0.019,72,4,2000,18,1st,PR,Jay Bell,Diamondbacks,250,8,R,B,0
// 4.7,0.015,327,4,2000,82,1st,PR,Jeff Blauser,Cubs,320,8,R,B,0
// 4.7,0.013,376,4,2000,94,1st,PR,Ray Durham,White Sox,360,9,S,A,0
// 4.7,0.016,970,4,2001,323,1st,TD,Tony Phillips,Athletics,300,8,S,B,0
// 4.7,0.026,2137,4,2003,52,UL,,Jose Ortiz,Rockies,180,8,R,17,0
// 4.7,0.019,2372,4,2003,73,UL,,Orlando Hudson,Blue Jays,250,9,S,13,0
// 4.7,0.020,3726,4,2005,318,UL,,Tony Womack,Cardinals,240,11,L,19,0
// 4.7,0.015,327,5,2000,82,1st,PR,Jeff Blauser,Cubs,320,8,R,B,0
// 4.7,0.025,3071,5,2004,158,UL,,Joe Randa,Royals,190,10,R,8,0
// 4.7,0.026,3122,5,2004,169,UL,,Joe Randa,Royals,180,10,R,9,0
// 4.7,0.020,3491,5,2005,259,UL,,Placido Polanco,Phillies,230,10,R,14,0
// 4.7,0.025,3553,5,2005,274,UL,,Sean Burroughs,Padres,190,10,L,12,0
// 4.7,0.013,463,6,2000,116,1st,PR,Barry Larkin,Reds,360,9,R,A,0
// 4.7,0.016,1528,6,2002,135,RS,,Derek Jeter '96,Yankees,300,11,R,14,0
// 4.7,0.015,1659,6,2002,8,UL,,DAVID ECKSTIEN,Angels,310,11,R,20,0
// 4.7,0.028,1665,6,2002,9,UL,,Ricky Gutierrez,Indians,170,11,R,15,0
// 4.7,0.020,1859,6,2002,26,UL,,Rafael Furcal,Braves,240,10,S,20,0
// 4.7,0.020,2173,6,2003,55,UL,,Royce Clayton,Diamondbacks,240,10,R,12,0
// 4.7,0.024,3511,6,2005,264,UL,,Carlos Guillen,Mariners,200,9,S,10,0
// 4.7,0.016,151,7,2000,38,1st,PR,Brian Jordan,Braves,300,8,R,B,0
// 4.7,0.020,196,7,2000,49,1st,PR,Albert Belle,Orioles,240,8,R,C,0
// 4.7,0.020,360,7,2000,90,1st,PR,Rondell White,Cubs,230,8,R,B,0
// 4.7,0.015,565,7,2000,142,1st,PR,Ruben Mateo,Rangers,320,7,R,B,0
// 4.7,0.012,884,7,2001,280,1st,TD,Roger Cedeno,Mets,400,10,S,A,0
// 4.7,0.016,970,7,2001,323,1st,TD,Tony Phillips,Athletics,300,8,S,B,0
// 4.7,0.014,1070,7,2001,373,1st,TD,Marvin Benard,Giants,340,8,L,A,0
// 4.7,0.024,1087,7,2001,381,1st,TD,Armando Rios,Giants,200,7,L,B,0
// 4.7,0.020,1506,7,2002,90,P,,Rondell White,Cubs,230,8,R,B,0
// 4.7,0.047,1960,7,2002,35,UL,,Jerry Hairston,Orioles,100,11,R,14,0
// 4.7,0.034,2546,7,2003,88,UL,,Wily MoPena,Reds,140,9,R,16,0
// 4.7,0.021,3241,7,2004,198,UL,,Timo Perez,Mets,220,10,L,12,0
// 4.7,0.031,3547,7,2005,273,UL,,J. D. Drew,Cardinals,150,10,L,12,0
// 4.7,0.029,3599,7,2005,285,UL,,Ben Grieve,Devil Rays,160,10,L,12,0
// 4.7,0.015,565,8,2000,142,1st,PR,Ruben Mateo,Rangers,320,7,R,B,0
// 4.7,0.016,970,8,2001,323,1st,TD,Tony Phillips,Athletics,300,8,S,B,0
// 4.7,0.014,1070,8,2001,373,1st,TD,Marvin Benard,Giants,340,8,L,A,0
// 4.7,0.059,1487,8,2002,41,P,,Ricky Ledee,Phillies,80,9,L,15,0
// 4.7,0.028,1974,8,2002,37,UL,,Mike Cameron,Mets,170,10,R,15,0
// 4.7,0.024,2616,8,2003,95,UL,,Coco Crisp,Indians,200,10,S,17,0
// 4.7,0.020,196,9,2000,49,1st,PR,Albert Belle,Orioles,240,8,R,C,0
// 4.7,0.018,287,9,2000,72,1st,PR,Trot Nixon,Red Sox,260,8,L,B,0
// 4.7,0.020,360,9,2000,90,1st,PR,Rondell White,Cubs,230,8,R,B,0
// 4.7,0.016,547,9,2000,137,1st,PR,Richie Sexson,Indians,290,6,R,B,0
// 4.7,0.018,737,9,2001,206,1st,TD,Mark Quinn,Royals,260,8,R,B,0
// 4.7,0.012,884,9,2001,280,1st,TD,Roger Cedeno,Mets,400,10,S,A,0
// 4.7,0.016,970,9,2001,323,1st,TD,Tony Phillips,Athletics,300,8,S,B,0
// 4.7,0.014,1070,9,2001,373,1st,TD,Marvin Benard,Giants,340,8,L,A,0
// 4.7,0.024,1087,9,2001,381,1st,TD,Armando Rios,Giants,200,7,L,B,0
// 4.7,0.028,1413,9,2002,9,P,,Hideki Matsui,Yankees,170,10,L,9,0
// 4.7,0.020,1506,9,2002,90,P,,Rondell White,Cubs,230,8,R,B,0
// 4.7,0.031,1851,9,2002,26,UL,,Hideki Matsui,Yankees,150,10,L,9,0
// 4.7,0.047,1960,9,2002,35,UL,,Jerry Hairston,Orioles,100,11,R,14,0
// 4.7,0.034,2546,9,2003,88,UL,,Wily MoPena,Reds,140,9,R,16,0
// 4.7,0.021,3100,9,2004,164,UL,,Raul Ibanez,Royals,220,10,L,12,0
// 4.7,0.036,3421,9,2005,242,UL,,Craig Wilson,Pirates,130,10,R,9,0
// 4.7,0.021,3585,9,2005,282,UL,,Marvin Benard,Giants,220,9,L,18,0
// 4.6,0.033,1894,0,2002,30,UL,,Dean Palmer,Tigers,140,9,R,10,0
// 4.6,0.019,164,2,2000,41,1st,PR,Javy Lopez,Braves,240,8,R,C,0
// 4.6,0.024,673,2,2001,175,1st,PR,Ben Petrick,Rockies,190,8,R,B,0
// 4.6,0.018,752,2,2001,214,1st,TD,Tim Spehr,Royals,260,7,R,B,0
// 4.6,0.029,1884,2,2002,29,UL,,Michael Barrett,Cubs,160,9,R,10,0
// 4.6,0.031,2465,2,2003,81,UL,,Mark Johnson,White Sox,150,10,L,15,0
// 4.6,0.024,2594,2,2003,93,UL,,Jason LaRue,Reds,190,9,R,9,0
// 4.6,0.042,2792,2,2004,114,UL,,Charles Johnson,Rockies,110,9,R,9,0
// 4.6,0.027,3420,2,2005,242,UL,,Ramon Hernandez,Athletics,170,9,R,11,0
// 4.6,0.026,867,3,2001,271,1st,TD,Lee Stevens,Expos,180,7,L,C,0
// 4.6,0.017,1210,3,2001,443,1st,TD,Lee Stevens,Rangers,270,7,L,B,0
// 4.6,0.038,1438,3,2002,18,P,,Eric Valent,Mets,120,9,L,8,0
// 4.6,0.042,1770,3,2002,18,UL,,Shea Hillenbrand,Diamondbacks,110,9,R,10,0
// 4.6,0.023,2095,3,2003,48,UL,,Randall Simon,Pirates,200,9,L,10,0
// 4.6,0.038,2434,3,2003,78,UL,,Paul Konerko,White Sox,120,9,R,8,0
// 4.6,0.031,2864,3,2004,123,UL,,Carlos Pena,Tigers,150,9,L,9,0
// 4.6,0.046,3176,3,2004,182,UL,,Fred McGriff,Dodgers,100,9,L,8,0
// 4.6,0.029,3773,3,2005,334,UL,,Mark Teixeira,Rangers,160,9,S,12,0
// 4.6,0.012,391,4,2000,98,1st,PR,Ray Durham,White Sox,370,9,S,A,0
// 4.6,0.021,2172,4,2003,55,UL,,Todd Walker,Cubs,220,9,L,11,0
// 4.6,0.023,3638,4,2005,294,UL,,Bret Boone,Mariners,200,9,R,13,0
// 4.6,0.016,591,5,2000,148,1st,PR,Vinny Castilla,Rockies,290,7,R,B,0
// 4.6,0.016,1032,5,2001,354,1st,TD,Ed Sprague,Pirates,280,8,R,B,0
// 4.6,0.042,1770,5,2002,18,UL,,Shea Hillenbrand,Diamondbacks,110,9,R,10,0
// 4.6,0.020,1814,5,2002,22,UL,,Vinny Castilla,Braves,230,9,R,9,0
// 4.6,0.027,2011,5,2002,40,UL,,Tony Batista,Orioles,170,8,R,17,0
// 4.6,0.020,2294,5,2003,66,UL,,Aramis Ramirez,Pirates,230,9,R,10,0
// 4.6,0.029,2358,5,2003,71,UL,,Joe Crede,White Sox,160,9,R,9,0
// 4.6,0.027,3140,5,2004,173,UL,,Adrian Beltre,Dodgers,170,9,R,9,0
// 4.6,0.033,3196,5,2004,187,UL,,Fernando Tatis,Expos,140,9,R,9,0
// 4.6,0.023,3632,5,2005,293,UL,,Herbert Perry,Rangers,200,9,R,10,0
// 4.6,0.014,327,6,2000,82,1st,PR,Jeff Blauser,Cubs,320,8,R,B,0
// 4.6,0.024,2022,6,2002,41,UL,,Mike Bordick,Orioles,190,9,R,15,0
// 4.6,0.027,2996,6,2004,143,UL,,Julio Lugo,Astros,170,9,R,12,0
// 4.6,0.018,137,7,2000,35,1st,PR,Dante Bichette,Reds,260,7,R,B,0
// 4.6,0.015,247,7,2000,62,1st,PR,B. J. Surhoff,Orioles,300,8,L,B,0
// 4.6,0.018,378,7,2000,95,1st,PR,Jacob Cruz,Indians,250,9,L,B,0
// 4.6,0.024,520,7,2000,130,1st,PR,Wil Cordero,Indians,190,7,R,C,0
// 4.6,0.016,547,7,2000,137,1st,PR,Richie Sexson,Indians,290,6,R,B,0
// 4.6,0.024,636,7,2000,162,1st,PR,Juan Gonzalez,Tigers,190,7,R,C,0
// 4.6,0.017,693,7,2001,184,1st,PR,Preston Wilson,Marlins,270,7,R,A,0
// 4.6,0.023,947,7,2001,311,1st,TD,Jeremy Giambi,Athletics,200,8,L,B,0
// 4.6,0.015,1354,7,2001,62,DS,,B. J. Surhoff,Orioles,300,8,L,B,0
// 4.6,0.038,1438,7,2002,18,P,,Eric Valent,Mets,120,9,L,8,0
// 4.6,0.058,1487,7,2002,41,P,,Ricky Ledee,Phillies,80,9,L,15,0
// 4.6,0.024,1739,7,2002,16,UL,,Kenny Lofton,White Sox,190,10,L,20,0
// 4.6,0.029,1906,7,2002,31,UL,,Robert Fick,Devil Rays,160,9,L,11,0
// 4.6,0.029,2012,7,2002,40,UL,,Marty Cordova,Orioles,160,9,R,9,0
// 4.6,0.024,2263,7,2003,63,UL,,Jermaine Dye,White Sox,190,9,R,10,0
// 4.6,0.035,2351,7,2003,71,UL,,Ruben Sierra,Yankees,130,9,S,10,0
// 4.6,0.031,2990,7,2004,142,UL,,Richard Hidalgo,Astros,150,9,R,11,0
// 4.6,0.024,3165,7,2004,179,UL,,Geoff Jenkins,Brewers,190,9,L,10,0
// 4.6,0.022,3214,7,2004,191,UL,,Jacque Jones,Twins,210,9,L,14,0
// 4.6,0.026,3309,7,2005,215,UL,,Alex Escobar,Mets,180,9,R,12,0
// 4.6,0.029,3319,7,2005,217,UL,,Jermaine Dye,Athletics,160,9,R,9,0
// 4.6,0.027,3391,7,2005,234,UL,,Jermaine Dye,Athletics,170,9,R,10,0
// 4.6,0.021,3585,7,2005,282,UL,,Marvin Benard,Giants,220,9,L,18,0
// 4.6,0.022,3813,7,2005,346,UL,,Reed Johnson,Blue Jays,210,9,R,12,0
// 4.6,0.018,378,8,2000,95,1st,PR,Jacob Cruz,Indians,250,9,L,B,0
// 4.6,0.017,693,8,2001,184,1st,PR,Preston Wilson,Marlins,270,7,R,A,0
// 4.6,0.020,2313,8,2003,67,UL,,Corey Patterson,Cubs,230,9,L,20,0
// 4.6,0.018,2393,8,2003,75,UL,,Craig Biggio,Astros,260,9,R,18,0
// 4.6,0.026,3309,8,2005,215,UL,,Alex Escobar,Mets,180,9,R,12,0
// 4.6,0.021,3585,8,2005,282,UL,,Marvin Benard,Giants,220,9,L,18,0
// 4.6,0.033,3774,8,2005,334,UL,,Laynce Nix,Rangers,140,9,L,17,0
// 4.6,0.018,137,9,2000,35,1st,PR,Dante Bichette,Reds,260,7,R,B,0
// 4.6,0.015,247,9,2000,62,1st,PR,B. J. Surhoff,Orioles,300,8,L,B,0
// 4.6,0.015,597,9,2000,150,1st,PR,Raul Mondesi,Blue Jays,300,7,R,A,0
// 4.6,0.024,636,9,2000,162,1st,PR,Juan Gonzalez,Tigers,190,7,R,C,0
// 4.6,0.017,693,9,2001,184,1st,PR,Preston Wilson,Marlins,270,7,R,A,0
// 4.6,0.015,1354,9,2001,62,DS,,B. J. Surhoff,Orioles,300,8,L,B,0
// 4.6,0.038,1438,9,2002,18,P,,Eric Valent,Mets,120,9,L,8,0
// 4.6,0.058,1487,9,2002,41,P,,Ricky Ledee,Phillies,80,9,L,15,0
// 4.6,0.092,1504,9,2002,50,P,,Troy O'Leary,Cubs,50,12,L,11,0
// 4.6,0.029,2012,9,2002,40,UL,,Marty Cordova,Orioles,160,9,R,9,0
// 4.6,0.024,2263,9,2003,63,UL,,Jermaine Dye,White Sox,190,9,R,10,0
// 4.6,0.035,2351,9,2003,71,UL,,Ruben Sierra,Yankees,130,9,S,10,0
// 4.6,0.031,2990,9,2004,142,UL,,Richard Hidalgo,Astros,150,9,R,11,0
// 4.6,0.024,3165,9,2004,179,UL,,Geoff Jenkins,Brewers,190,9,L,10,0
// 4.6,0.022,3214,9,2004,191,UL,,Jacque Jones,Twins,210,9,L,14,0
// 4.6,0.029,3319,9,2005,217,UL,,Jermaine Dye,Athletics,160,9,R,9,0
// 4.6,0.027,3391,9,2005,234,UL,,Jermaine Dye,Athletics,170,9,R,10,0
// 4.5,0.035,2895,0,2004,127,UL,,Dmitri Young,Tigers,130,9,S,9,0
// 4.5,0.018,3767,0,2005,332,UL,,Rafael Palmeiro,Rangers,250,10,L,9,0
// 4.5,0.018,753,2,2001,214,1st,TD,Gregg Zaun,Royals,250,9,S,B,0
// 4.5,0.018,1084,2,2001,380,1st,TD,Brent Mayne,Giants,250,9,L,B,0
// 4.5,0.035,1605,2,2002,3,UL,,Ben Davis,Mariners,130,10,S,11,0
// 4.5,0.113,2958,2,2004,137,UL,,Todd Pratt,Phillies,40,10,R,10,0
// 4.5,0.020,3236,2,2004,197,UL,,A.J. Pierzynski,Twins,220,9,L,13,0
// 4.5,0.035,3538,2,2005,271,UL,,Ben Davis,Padres,130,10,S,11,0
// 4.5,0.024,775,3,2001,225,1st,TD,Eric Karros,Dodgers,190,7,R,B,0
// 4.5,0.024,905,3,2001,290,1st,TD,Todd Zeile,Mets,190,8,R,B,0
// 4.5,0.018,932,3,2001,304,1st,TD,Tino Martinez,Yankees,250,7,L,B,0
// 4.5,0.016,1060,3,2001,368,1st,TD,John Vander Wal,Padres,280,9,L,B,0
// 4.5,0.056,1502,3,2002,49,P,,Tony Graffanino,White Sox,80,11,R,14,0
// 4.5,0.038,1857,3,2002,26,UL,,Julio Franco,Braves,120,10,R,11,0
// 4.5,0.014,204,4,2000,51,1st,PR,Delino Deshields,Orioles,320,9,L,A,0
// 4.5,0.013,702,4,2001,189,1st,TD,Craig Biggio,Astros,350,9,R,A,0
// 4.5,0.017,823,4,2001,249,1st,TD,Denny Hocking,Twins,260,9,S,B,0
// 4.5,0.017,874,4,2001,275,1st,TD,Jose Vidro,Expos,260,8,S,C,0
// 4.5,0.013,1358,4,2001,189,DS,,Craig Biggio,Astros,350,9,R,A,0
// 4.5,0.021,1432,4,2002,16,P,,Luis Rivas,Twins,210,9,R,15,0
// 4.5,0.041,1473,4,2002,34,P,,Henry Mateo,Expos,110,10,S,16,0
// 4.5,0.020,2046,4,2002,43,UL,,Jerry Hairston,Orioles,220,9,R,16,0
// 4.5,0.024,2054,4,2002,44,UL,,Miguel Cairo,Cardinals,190,9,R,14,0
// 4.5,0.017,2393,4,2003,75,UL,,Craig Biggio,Astros,260,9,R,18,0
// 4.5,0.035,2878,4,2004,125,UL,,Alex Cora,Indians,130,10,L,10,0
// 4.5,0.023,514,5,2000,129,1st,PR,Aubrey Huff,Devil Rays,200,8,L,C,0
// 4.5,0.020,899,5,2001,287,1st,TD,Robin Ventura,Mets,220,7,L,B,0
// 4.5,0.056,1502,5,2002,49,P,,Tony Graffanino,White Sox,80,11,R,14,0
// 4.5,0.020,1514,5,2002,287,P,,Robin Ventura,Mets,220,7,L,B,0
// 4.5,0.024,2412,5,2003,76,UL,,Joe Crede,White Sox,190,9,R,9,0
// 4.5,0.023,3108,5,2004,166,UL,,Adrian Beltre,Dodgers,200,9,R,18,0
// 4.5,0.020,332,6,2000,83,1st,PR,Ricky Gutierrez,Cubs,230,9,R,B,0
// 4.5,0.015,766,6,2001,221,1st,TD,Mark Grudzielanek,Dodgers,300,9,R,B,0
// 4.5,0.056,1502,6,2002,49,P,,Tony Graffanino,White Sox,80,11,R,14,0
// 4.5,0.016,3261,6,2004,203,UL,,Orlando Cabrera,Expos,280,10,R,17,0
// 4.5,0.017,3493,6,2005,260,UL,,Jimmy Rollins,Phillies,270,10,S,23,0
// 4.5,0.014,204,7,2000,51,1st,PR,Delino Deshields,Orioles,320,9,L,A,0
// 4.5,0.016,373,7,2000,94,1st,PR,Roberto Kelly,Yankees,280,8,R,B,0
// 4.5,0.020,494,7,2000,124,1st,PR,Felipe Crespo,Giants,230,8,S,B,0
// 4.5,0.020,496,7,2000,124,1st,PR,Dmitri Young,Reds,230,8,S,C,0
// 4.5,0.020,522,7,2000,131,1st,PR,Eric Davis,Giants,220,9,R,B,0
// 4.5,0.016,536,7,2000,134,1st,PR,Kenny Lofton,Indians,290,9,L,A,0
// 4.5,0.015,597,7,2000,150,1st,PR,Raul Mondesi,Blue Jays,300,7,R,A,0
// 4.5,0.017,625,7,2000,159,1st,PR,Roger Cedeno,Tigers,260,9,S,A,0
// 4.5,0.017,823,7,2001,249,1st,TD,Denny Hocking,Twins,260,9,S,B,0
// 4.5,0.016,892,7,2001,284,1st,TD,Darryl Hamilton,Mets,290,9,L,B,0
// 4.5,0.017,936,7,2001,306,1st,TD,Paul O'Neill,Yankees,260,8,L,B,0
// 4.5,0.016,1060,7,2001,368,1st,TD,John Vander Wal,Padres,280,9,L,B,0
// 4.5,0.013,1094,7,2001,385,1st,TD,F. P. Santangelo,Giants,350,10,S,A,0
// 4.5,0.017,1223,7,2001,449,1st,TD,Jose Cruz Jr.,Blue Jays,270,7,S,A,0
// 4.5,0.090,1504,7,2002,50,P,,Troy O'Leary,Cubs,50,12,L,11,0
// 4.5,0.024,1772,7,2002,19,UL,,Michael Tucker,Royals,190,10,L,20,0
// 4.5,0.038,2184,7,2003,56,UL,,Tim Salmon,Angels,120,10,R,14,0
// 4.5,0.113,2206,7,2003,58,UL,,Orlando Palmeiro,Astros,40,10,L,10,0
// 4.5,0.028,2218,7,2003,59,UL,,Rickey Henderson,Red Sox,160,10,R,18,0
// 4.5,0.017,2448,7,2003,80,UL,,Robert Fick,Braves,270,9,L,11,0
// 4.5,0.020,2832,7,2004,119,UL,,Robert Fick,Tigers,220,9,L,8,0
// 4.5,0.050,3230,7,2004,195,UL,,John Vander Wal,Brewers,90,10,L,9,0
// 4.5,0.075,3443,7,2005,247,UL,,Jason Michaels,Phillies,60,10,R,15,0
// 4.5,0.025,3827,7,2005,356,UL,,Vernon Wells,Blue Jays,180,10,R,16,0
// 4.5,0.016,373,8,2000,94,1st,PR,Roberto Kelly,Yankees,280,8,R,B,0
// 4.5,0.016,536,8,2000,134,1st,PR,Kenny Lofton,Indians,290,9,L,A,0
// 4.5,0.017,823,8,2001,249,1st,TD,Denny Hocking,Twins,260,9,S,B,0
// 4.5,0.016,892,8,2001,284,1st,TD,Darryl Hamilton,Mets,290,9,L,B,0
// 4.5,0.017,1223,8,2001,449,1st,TD,Jose Cruz Jr.,Blue Jays,270,7,S,A,0
// 4.5,0.041,1473,8,2002,34,P,,Henry Mateo,Expos,110,10,S,16,0
// 4.5,0.050,1729,8,2002,15,UL,,Ken Griffey Jr.,Reds,90,10,L,15,0
// 4.5,0.024,1739,8,2002,16,UL,,Kenny Lofton,White Sox,190,10,L,20,0
// 4.5,0.024,1772,8,2002,19,UL,,Michael Tucker,Royals,190,10,L,20,0
// 4.5,0.020,2112,8,2003,49,UL,,Chris Singleton,Orioles,220,9,L,16,0
// 4.5,0.032,2687,8,2003,103,UL,,Grady Sizemore,Indians,140,10,L,12,0
// 4.5,0.075,3443,8,2005,247,UL,,Jason Michaels,Phillies,60,10,R,15,0
// 4.5,0.014,204,9,2000,51,1st,PR,Delino Deshields,Orioles,320,9,L,A,0
// 4.5,0.016,373,9,2000,94,1st,PR,Roberto Kelly,Yankees,280,8,R,B,0
// 4.5,0.018,378,9,2000,95,1st,PR,Jacob Cruz,Indians,250,9,L,B,0
// 4.5,0.020,494,9,2000,124,1st,PR,Felipe Crespo,Giants,230,8,S,B,0
// 4.5,0.020,496,9,2000,124,1st,PR,Dmitri Young,Reds,230,8,S,C,0
// 4.5,0.024,520,9,2000,130,1st,PR,Wil Cordero,Indians,190,7,R,C,0
// 4.5,0.020,522,9,2000,131,1st,PR,Eric Davis,Giants,220,9,R,B,0
// 4.5,0.016,536,9,2000,134,1st,PR,Kenny Lofton,Indians,290,9,L,A,0
// 4.5,0.017,625,9,2000,159,1st,PR,Roger Cedeno,Tigers,260,9,S,A,0
// 4.5,0.016,892,9,2001,284,1st,TD,Darryl Hamilton,Mets,290,9,L,B,0
// 4.5,0.017,936,9,2001,306,1st,TD,Paul O'Neill,Yankees,260,8,L,B,0
// 4.5,0.023,947,9,2001,311,1st,TD,Jeremy Giambi,Athletics,200,8,L,B,0
// 4.5,0.016,1060,9,2001,368,1st,TD,John Vander Wal,Padres,280,9,L,B,0
// 4.5,0.013,1094,9,2001,385,1st,TD,F. P. Santangelo,Giants,350,10,S,A,0
// 4.5,0.017,1223,9,2001,449,1st,TD,Jose Cruz Jr.,Blue Jays,270,7,S,A,0
// 4.5,0.041,1473,9,2002,34,P,,Henry Mateo,Expos,110,10,S,16,0
// 4.5,0.024,1739,9,2002,16,UL,,Kenny Lofton,White Sox,190,10,L,20,0
// 4.5,0.024,1772,9,2002,19,UL,,Michael Tucker,Royals,190,10,L,20,0
// 4.5,0.028,1906,9,2002,31,UL,,Robert Fick,Devil Rays,160,9,L,11,0
// 4.5,0.038,2184,9,2003,56,UL,,Tim Salmon,Angels,120,10,R,14,0
// 4.5,0.113,2206,9,2003,58,UL,,Orlando Palmeiro,Astros,40,10,L,10,0
// 4.5,0.028,2218,9,2003,59,UL,,Rickey Henderson,Red Sox,160,10,R,18,0
// 4.5,0.017,2448,9,2003,80,UL,,Robert Fick,Braves,270,9,L,11,0
// 4.5,0.025,2540,9,2003,88,UL,,Jeffrey Hammonds,Brewers,180,10,R,14,0
// 4.5,0.028,2823,9,2004,118,UL,,Alexis Rios,Blue Jays,160,10,R,14,0
// 4.5,0.020,2832,9,2004,119,UL,,Robert Fick,Tigers,220,9,L,8,0
// 4.5,0.035,3229,9,2004,195,UL,,Jeromy Burnitz,Mets,130,9,L,12,0
// 4.5,0.050,3230,9,2004,195,UL,,John Vander Wal,Brewers,90,10,L,9,0
// 4.5,0.025,3309,9,2005,215,UL,,Alex Escobar,Mets,180,9,R,12,0
// 4.5,0.075,3443,9,2005,247,UL,,Jason Michaels,Phillies,60,10,R,15,0
// 4.5,0.021,3813,9,2005,346,UL,,Reed Johnson,Blue Jays,210,9,R,12,0
// 4.5,0.025,3827,9,2005,356,UL,,Vernon Wells,Blue Jays,180,10,R,16,0
// 4.4,0.018,620,2,2000,157,1st,PR,Brad Ausmus,Tigers,240,8,R,B,0
// 4.4,0.023,1069,2,2001,372,1st,TD,Bobby Estalella,Giants,190,7,R,B,0
// 4.4,0.022,2098,2,2003,48,UL,,Eddie Perez,Brewers,200,9,R,10,0
// 4.4,0.020,139,3,2000,35,1st,PR,Brian Hunter,Braves,220,8,R,C,0
// 4.4,0.029,2511,3,2003,85,UL,,Sean Casey,Reds,150,10,L,10,0
// 4.4,0.063,3579,3,2005,280,UL,,Phil Nevin,Padres,70,9,R,9,0
// 4.4,0.024,202,4,2000,51,1st,PR,Todd Walker,Rockies,180,8,L,B,0
// 4.4,0.019,350,4,2000,88,1st,PR,Jose Ortiz,Athletics,230,8,R,B,0
// 4.4,0.013,663,4,2001,171,1st,PR,Luis Castillo,Marlins,340,10,S,A,0
// 4.4,0.055,1502,4,2002,49,P,,Tony Graffanino,White Sox,80,11,R,14,0
// 4.4,0.020,2909,4,2004,129,UL,,Luis Castillo,Marlins,220,11,S,24,0
// 4.4,0.029,2911,4,2004,129,UL,,Luis Castillo,Marlins,150,11,S,18,0
// 4.4,0.037,3076,4,2004,159,UL,,Desi Relaford,Royals,120,9,S,14,0
// 4.4,0.013,3128,4,2004,171,UL,,Luis Castillo,Marlins,340,10,S,A,0
// 4.4,0.019,3733,4,2005,321,UL,,Fernando Vina,Cardinals,230,11,L,20,0
// 4.4,0.022,3798,4,2005,342,UL,,Michael Young,Rangers,200,9,R,18,0
// 4.4,0.018,412,5,2000,103,1st,PR,Hebert Perry,White Sox,240,8,R,B,0
// 4.4,0.037,1781,5,2002,19,UL,,Matt Kata,Diamondbacks,120,9,S,12,0
// 4.4,0.031,1916,5,2002,32,UL,,Matt Williams,Diamondbacks,140,9,R,10,0
// 4.4,0.015,83,6,2000,21,1st,PR,Hanley Frias,Diamondbacks,290,10,S,B,0
// 4.4,0.011,559,6,2000,140,1st,PR,Omar Vizquel,Indians,410,10,S,A,0
// 4.4,0.016,1149,6,2001,412,1st,TD,Edgar Renteria,Cardinals,270,8,R,A,0
// 4.4,0.023,687,7,2001,181,1st,PR,Henry Rodriguez,Marlins,190,7,L,C,0
// 4.4,0.023,943,7,2001,309,1st,TD,Ryan Christenson,Athletics,190,8,R,B,0
// 4.4,0.021,1107,7,2001,391,1st,TD,Al Martin,Mariners,210,8,L,B,0
// 4.4,0.040,1473,7,2002,34,P,,Henry Mateo,Expos,110,10,S,16,0
// 4.4,0.023,1725,7,2002,14,UL,,Danny Bautista,Diamondbacks,190,10,R,10,0
// 4.4,0.024,2540,7,2003,88,UL,,Jeffrey Hammonds,Brewers,180,10,R,14,0
// 4.4,0.028,2823,7,2004,118,UL,,Alexis Rios,Blue Jays,160,10,R,14,0
// 4.4,0.034,3229,7,2004,195,UL,,Jeromy Burnitz,Mets,130,9,L,12,0
// 4.4,0.021,959,8,2001,317,1st,TD,Terrence Long,Athletics,210,8,L,B,0
// 4.4,0.013,1094,8,2001,385,1st,TD,F. P. Santangelo,Giants,350,10,S,A,0
// 4.4,0.040,2258,8,2003,62,UL,,Tom Goodwin,Cubs,110,10,L,21,0
// 4.4,0.031,3136,8,2004,172,UL,,Michael Tucker,Royals,140,9,L,12,0
// 4.4,0.024,3609,8,2005,287,UL,,Marquis Grissom,Giants,180,9,R,10,0
// 4.4,0.024,3827,8,2005,356,UL,,Vernon Wells,Blue Jays,180,10,R,16,0
// 4.4,0.023,687,9,2001,181,1st,PR,Henry Rodriguez,Marlins,190,7,L,C,0
// 4.4,0.017,823,9,2001,249,1st,TD,Denny Hocking,Twins,260,9,S,B,0
// 4.4,0.021,1107,9,2001,391,1st,TD,Al Martin,Mariners,210,8,L,B,0
// 4.4,0.014,1224,9,2001,450,1st,TD,Jose Cruz Jr.,Blue Jays,320,8,S,A,0
// 4.4,0.023,1725,9,2002,14,UL,,Danny Bautista,Diamondbacks,190,10,R,10,0
// 4.4,0.031,3136,9,2004,172,UL,,Michael Tucker,Royals,140,9,L,12,0
// 4.4,0.063,3579,9,2005,280,UL,,Phil Nevin,Padres,70,9,R,9,0
// 4.4,0.021,3720,9,2005,317,UL,,Terrence Long,Athletics,210,8,L,B,0
// 4.3,0.019,922,0,2001,299,1st,TD,Chili Davis,Yankees,230,8,S,B,0
// 4.3,0.023,634,2,2000,162,1st,PR,Brook Fordyce,Orioles,190,7,R,C,0
// 4.3,0.018,2303,2,2003,67,UL,,Toby Hall,Devil Rays,240,9,R,13,0
// 4.3,0.023,574,3,2000,144,1st,PR,Doug Mientkiewicz,Twins,190,8,L,B,0
// 4.3,0.017,1244,3,2001,460,1st,TD,David Segui,Blue Jays,250,8,S,C,0
// 4.3,0.025,1710,3,2002,13,UL,,Mike Sweeney,Royals,170,9,R,14,0
// 4.3,0.072,1769,3,2002,18,UL,,Mark Grace,Diamondbacks,60,10,L,9,0
// 4.3,0.036,2510,3,2003,85,UL,,Sean Casey,Reds,120,9,L,9,0
// 4.3,0.013,368,4,2000,92,1st,PR,Eric Young,Cubs,320,9,R,A,0
// 4.3,0.023,572,4,2000,143,1st,PR,Jeff Frye,Rockies,190,9,R,B,0
// 4.3,0.015,630,4,2000,160,1st,PR,Damion Easley,Tigers,280,8,R,A,0
// 4.3,0.013,674,4,2001,175,1st,PR,Luis Castillo,Marlins,330,9,S,A,0
// 4.3,0.016,790,4,2001,233,1st,TD,Ron Belliard,Brewers,270,9,R,B,0
// 4.3,0.012,1062,4,2001,369,1st,TD,Quilvio Veras,Padres,360,9,S,A,0
// 4.3,0.013,1371,4,2001,175,FS,,Luis Castillo,Marlins,330,9,S,A,0
// 4.3,0.016,1373,4,2001,233,FS,,Ron Belliard,Brewers,270,9,R,B,0
// 4.3,0.014,1434,4,2002,17,P,,Luis Castillo,Marlins,300,11,S,20,0
// 4.3,0.022,1491,4,2002,44,P,,Craig Biggio,Astros,200,10,R,14,0
// 4.3,0.036,1781,4,2002,19,UL,,Matt Kata,Diamondbacks,120,9,S,12,0
// 4.3,0.022,2803,4,2004,115,UL,,Omar Infante,Tigers,200,9,R,14,0
// 4.3,0.027,2896,4,2004,127,UL,,Warren Morris,Tigers,160,9,L,10,0
// 4.3,0.014,2942,4,2004,134,UL,,Luis Castillo,Marlins,300,11,S,20,0
// 4.3,0.022,3388,4,2005,234,UL,,Alfonso Soriano,Yankees,200,9,R,19,0
// 4.3,0.024,3803,4,2005,343,UL,,Orlando Hudson,Blue Jays,180,9,S,11,0
// 4.3,0.018,411,5,2000,103,1st,PR,Greg Norton,White Sox,240,8,S,B,0
// 4.3,0.018,440,5,2000,110,1st,PR,Aaron Boone,Reds,240,8,R,B,0
// 4.3,0.019,739,5,2001,207,1st,TD,Joe Randa,Royals,230,8,R,B,0
// 4.3,0.018,1367,5,2001,6,FS,,Troy Glaus,Angels,240,7,R,B,0
// 4.3,0.023,2244,5,2003,61,UL,,Cal Ripken Jr.,Orioles,190,7,R,C,0
// 4.3,0.023,2506,5,2003,85,UL,,Adrian Beltre,Dodgers,190,9,R,18,0
// 4.3,0.039,2560,5,2003,90,UL,,Desi Relaford,Rockies,110,9,S,11,0
// 4.3,0.036,3076,5,2004,159,UL,,Desi Relaford,Royals,120,9,S,14,0
// 4.3,0.061,3466,5,2005,253,UL,,David Bell,Phillies,70,9,R,8,0
// 4.3,0.039,3799,5,2005,342,UL,,Eric Hinske,Blue Jays,110,9,L,14,0
// 4.3,0.019,570,6,2000,143,1st,PR,Mike Bordick,Orioles,230,8,R,B,0
// 4.3,0.010,1331,6,2001,121,CC,,Phil Rizzuto,Yankees,440,11,R,18,0
// 4.3,0.039,1728,6,2002,15,UL,,Alex Gonzalez,Cubs,110,9,R,12,0
// 4.3,0.019,2282,6,2003,65,UL,,Felipe Lopez,Blue Jays,230,9,S,19,0
// 4.3,0.015,2559,6,2003,90,UL,,Jimmy Rollins,Phillies,290,9,S,21,0
// 4.3,0.022,3048,6,2004,153,UL,,Angel Berroa,Royals,200,9,R,14,0
// 4.3,0.027,3592,6,2005,283,UL,,Rich Aurilia,Giants,160,9,R,9,0
// 4.3,0.022,78,7,2000,20,1st,PR,Derek Bell,Pirates,200,8,R,B,0
// 4.3,0.017,293,7,2000,74,1st,PR,Todd Hollandsworth,Dodgers,260,7,L,B,0
// 4.3,0.014,647,7,2000,166,1st,PR,Gabe Kapler,Tigers,310,7,R,A,0
// 4.3,0.022,877,7,2001,276,1st,TD,Derek Bell,Mets,200,8,R,B,0
// 4.3,0.025,897,7,2001,286,1st,TD,Bubba Trammell,Mets,170,7,R,B,0
// 4.3,0.020,959,7,2001,317,1st,TD,Terrence Long,Athletics,210,8,L,B,0
// 4.3,0.015,1042,7,2001,359,1st,TD,Tony Gwynn,Padres,290,9,L,B,0
// 4.3,0.013,1224,7,2001,450,1st,TD,Jose Cruz Jr.,Blue Jays,320,8,S,A,0
// 4.3,0.015,1362,7,2001,359,DS,,Tony Gwynn,Padres,290,9,L,B,0
// 4.3,0.029,1734,7,2002,15,UL,,Ryan Freel,Reds,150,9,R,19,0
// 4.3,0.036,1741,7,2002,16,UL,,David Dellucci,Rangers,120,9,L,13,0
// 4.3,0.025,2027,7,2002,42,UL,,Xavier Nady,Padres,170,9,R,13,0
// 4.3,0.023,2116,7,2003,50,UL,,Todd Hollandsworth,Marlins,190,10,L,12,0
// 4.3,0.020,2297,7,2003,66,UL,,B.J. Surhoff,Braves,210,9,L,15,0
// 4.3,0.031,3136,7,2004,172,UL,,Michael Tucker,Royals,140,9,L,12,0
// 4.3,0.036,3211,7,2004,191,UL,,Jacque Jones,Twins,120,10,L,12,0
// 4.3,0.061,3579,7,2005,280,UL,,Phil Nevin,Padres,70,9,R,9,0
// 4.3,0.020,3720,7,2005,317,UL,,Terrence Long,Athletics,210,8,L,B,0
// 4.3,0.017,293,8,2000,74,1st,PR,Todd Hollandsworth,Dodgers,260,7,L,B,0
// 4.3,0.013,1224,8,2001,450,1st,TD,Jose Cruz Jr.,Blue Jays,320,8,S,A,0
// 4.3,0.014,1897,8,2002,30,UL,,Carlos Beltran,Royals,300,9,S,21,0
// 4.3,0.020,3720,8,2005,317,UL,,Terrence Long,Athletics,210,8,L,B,0
// 4.3,0.022,78,9,2000,20,1st,PR,Derek Bell,Pirates,200,8,R,B,0
// 4.3,0.017,293,9,2000,74,1st,PR,Todd Hollandsworth,Dodgers,260,7,L,B,0
// 4.3,0.025,897,9,2001,286,1st,TD,Bubba Trammell,Mets,170,7,R,B,0
// 4.3,0.018,930,9,2001,303,1st,TD,Ricky Ledee,Yankees,240,7,L,B,0
// 4.3,0.023,943,9,2001,309,1st,TD,Ryan Christenson,Athletics,190,8,R,B,0
// 4.3,0.020,959,9,2001,317,1st,TD,Terrence Long,Athletics,210,8,L,B,0
// 4.3,0.015,1042,9,2001,359,1st,TD,Tony Gwynn,Padres,290,9,L,B,0
// 4.3,0.015,1362,9,2001,359,DS,,Tony Gwynn,Padres,290,9,L,B,0
// 4.3,0.014,1378,9,2001,407,FS,,J. D. Drew,Cardinals,310,8,L,A,0
// 4.3,0.029,1734,9,2002,15,UL,,Ryan Freel,Reds,150,9,R,19,0
// 4.3,0.036,1741,9,2002,16,UL,,David Dellucci,Rangers,120,9,L,13,0
// 4.3,0.025,2027,9,2002,42,UL,,Xavier Nady,Padres,170,9,R,13,0
// 4.3,0.020,2297,9,2003,66,UL,,B.J. Surhoff,Braves,210,9,L,15,0
// 4.3,0.033,2918,9,2004,130,UL,,Jeff Conine,Marlins,130,10,R,13,0
// 4.3,0.043,3081,9,2004,160,UL,,Matt Stairs,Royals,100,10,L,9,0
// 4.3,0.024,3432,9,2005,245,UL,,Terrance Long,Athletics,180,10,R,16,0
// 4.2,0.020,17,0,2000,5,1st,PR,Scott Spiezio,Angels,210,7,S,C,0
// 4.2,0.020,1313,2,2001,44,ASG,,Benito Santiago,Giants,210,9,R,15,0
// 4.2,0.070,2235,2,2003,60,UL,,Paul Bako,Cubs,60,9,L,8,0
// 4.2,0.035,2542,2,2003,88,UL,,Mike Lieberthal,Phillies,120,9,R,8,0
// 4.2,0.420,2757,2,2004,110,UL,,Charles Johnson,Rockies,10,10,R,10,0
// 4.2,0.023,3688,2,2005,307,UL,,Dan Wilson,Mariners,180,9,R,13,0
// 4.2,0.038,1597,3,2002,2,UL,,Josh Phelps,Devil Rays,110,9,R,10,0
// 4.2,0.030,1953,3,2002,35,UL,,Eric Karros,Dodgers,140,9,R,11,0
// 4.2,0.014,2130,3,2003,51,UL,,Carlos Pena,Athletics,310,9,L,16,0
// 4.2,0.038,2301,3,2003,66,UL,,Ramon Martinez,Cubs,110,10,R,11,0
// 4.2,0.032,2918,3,2004,130,UL,,Jeff Conine,Marlins,130,10,R,13,0
// 4.2,0.035,3076,3,2004,159,UL,,Desi Relaford,Royals,120,9,S,14,0
// 4.2,0.035,3134,3,2004,172,UL,,Eric Karros,Dodgers,120,9,R,11,0
// 4.2,0.070,3198,3,2004,187,UL,,Michael Cuddyer,Twins,60,10,R,11,0
// 4.2,0.084,3311,3,2005,215,UL,,Tony Clark,Mets,50,9,S,8,0
// 4.2,0.047,3426,3,2005,243,UL,,Scott Hatteberg,Athletics,90,10,L,8,0
// 4.2,0.047,3490,3,2005,259,UL,,J. T. Snow,Giants,90,10,L,8,0
// 4.2,0.060,3517,3,2005,265,UL,,Daryle Ward,Pirates,70,9,L,8,0
// 4.2,0.018,1159,4,2001,417,1st,TD,Fernando Vina,Cardinals,240,9,L,B,0
// 4.2,0.047,1691,4,2002,11,UL,,Willie Harris,White Sox,90,10,L,20,0
// 4.2,0.025,1794,4,2002,21,UL,,Eric Young,Brewers,170,10,R,19,0
// 4.2,0.021,1855,4,2002,26,UL,,Marco Scutaro,Athletics,200,10,R,13,0
// 4.2,0.026,2014,4,2002,40,UL,,Brian Roberts,Orioles,160,10,S,20,0
// 4.2,0.019,2185,4,2003,56,UL,,Alex Cora,Dodgers,220,10,L,12,0
// 4.2,0.047,2195,4,2003,57,UL,,Craig Biggio,Astros,90,10,R,14,0
// 4.2,0.023,2388,4,2003,74,UL,,Eric Young,Cubs,180,10,R,19,0
// 4.2,0.021,2440,4,2003,79,UL,,Rey Sanchez,Red Sox,200,10,R,12,0
// 4.2,0.021,2978,4,2004,140,UL,,Craig Biggio,Astros,200,10,R,14,0
// 4.2,0.070,3198,4,2004,187,UL,,Michael Cuddyer,Twins,60,10,R,11,0
// 4.2,0.028,3695,4,2005,309,UL,,Bo Hart,Cardinals,150,9,R,12,0
// 4.2,0.018,23,5,2000,6,1st,PR,Troy Glaus,Angels,240,7,R,B,0
// 4.2,0.022,206,5,2000,52,1st,PR,Fernando Seguignol,Expos,190,7,S,C,0
// 4.2,0.022,244,5,2000,61,1st,PR,Cal Ripken Jr.,Orioles,190,7,R,C,0
// 4.2,0.018,441,5,2000,111,1st,PR,Aramis Ramirez,Pirates,240,8,R,B,0
// 4.2,0.014,760,5,2001,218,1st,TD,Adrian Beltre,Dodgers,310,8,R,A,0
// 4.2,0.025,1827,5,2002,24,UL,,David Bell,Giants,170,9,R,12,0
// 4.2,0.018,2282,5,2003,65,UL,,Felipe Lopez,Blue Jays,230,9,S,19,0
// 4.2,0.070,3198,5,2004,187,UL,,Michael Cuddyer,Twins,60,10,R,11,0
// 4.2,0.017,132,6,2000,33,1st,PR,Rafael Furcal,Braves,250,9,S,A,0
// 4.2,0.015,1188,6,2001,432,1st,TD,Royce Clayton,Rangers,280,8,R,B,0
// 4.2,0.017,1933,6,2002,33,UL,,Rafael Furcal,Braves,250,9,S,A,0
// 4.2,0.030,2500,6,2003,84,UL,,Jose Valentin,White Sox,140,9,S,12,0
// 4.2,0.035,3076,6,2004,159,UL,,Desi Relaford,Royals,120,9,S,14,0
// 4.2,0.026,3174,6,2004,182,UL,,Jose Hernandez,Brewers,160,8,R,14,0
// 4.2,0.070,3198,6,2004,187,UL,,Michael Cuddyer,Twins,60,10,R,11,0
// 4.2,0.018,3389,6,2005,234,UL,,Jimmy Rollins,Phillies,240,9,S,18,0
// 4.2,0.020,3648,6,2005,297,UL,,Carlos Guillen,Mariners,210,10,S,17,0
// 4.2,0.019,184,7,2000,46,1st,PR,B.J. Surhoff,Braves,220,8,L,B,0
// 4.2,0.014,427,7,2000,107,1st,PR,Chris Singleton,White Sox,310,7,L,A,0
// 4.2,0.018,930,7,2001,303,1st,TD,Ricky Ledee,Yankees,240,7,L,B,0
// 4.2,0.014,1006,7,2001,341,1st,TD,Kevin Sefcik,Phillies,310,9,R,A,0
// 4.2,0.014,1138,7,2001,407,1st,TD,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.014,1378,7,2001,407,FS,,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.014,1521,7,2002,407,P,,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.023,1768,7,2002,18,UL,,Steve Finley,Diamondbacks,180,10,L,17,0
// 4.2,0.030,1829,7,2002,24,UL,,Laynce Nix,Rangers,140,9,L,10,0
// 4.2,0.020,1849,7,2002,26,UL,,Roger Cedeno,Mets,210,10,S,23,0
// 4.2,0.028,1941,7,2002,34,UL,,Richard Hidalgo,Rangers,150,9,R,10,0
// 4.2,0.028,1961,7,2002,36,UL,,Danny Bautista,Diamondbacks,150,10,R,16,0
// 4.2,0.030,2023,7,2002,41,UL,,Jay Gibbons,Orioles,140,9,L,9,0
// 4.2,0.030,2089,7,2003,47,UL,,Chris Richard,Orioles,140,10,L,16,0
// 4.2,0.025,2256,7,2003,62,UL,,Delino DeShields,Cubs,170,10,L,22,0
// 4.2,0.032,2918,7,2004,130,UL,,Jeff Conine,Marlins,130,10,R,13,0
// 4.2,0.042,3081,7,2004,160,UL,,Matt Stairs,Royals,100,10,L,9,0
// 4.2,0.032,3292,7,2004,210,UL,,Richard Hidalgo,Mets,130,9,R,10,0
// 4.2,0.023,3432,7,2005,245,UL,,Terrance Long,Athletics,180,10,R,16,0
// 4.2,0.025,3769,7,2005,333,UL,,Chad Curtis,Rangers,170,10,R,17,0
// 4.2,0.014,427,8,2000,107,1st,PR,Chris Singleton,White Sox,310,7,L,A,0
// 4.2,0.014,647,8,2000,166,1st,PR,Gabe Kapler,Tigers,310,7,R,A,0
// 4.2,0.014,1006,8,2001,341,1st,TD,Kevin Sefcik,Phillies,310,9,R,A,0
// 4.2,0.014,1138,8,2001,407,1st,TD,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.014,1378,8,2001,407,FS,,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.014,1521,8,2002,407,P,,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.023,1768,8,2002,18,UL,,Steve Finley,Diamondbacks,180,10,L,17,0
// 4.2,0.030,1829,8,2002,24,UL,,Laynce Nix,Rangers,140,9,L,10,0
// 4.2,0.020,1849,8,2002,26,UL,,Roger Cedeno,Mets,210,10,S,23,0
// 4.2,0.022,2094,8,2003,48,UL,,Dave Roberts,Dodgers,190,10,L,24,0
// 4.2,0.016,2415,8,2003,77,UL,,Vernon Wells,Blue Jays,260,9,R,13,0
// 4.2,0.020,2855,8,2004,122,UL,,Roger Cedeno,Tigers,210,10,S,23,0
// 4.2,0.028,3246,8,2004,199,UL,,Torii Hunter,Twins,150,9,R,16,0
// 4.2,0.023,3432,8,2005,245,UL,,Terrance Long,Athletics,180,10,R,16,0
// 4.2,0.025,3769,8,2005,333,UL,,Chad Curtis,Rangers,170,10,R,17,0
// 4.2,0.014,647,9,2000,166,1st,PR,Gabe Kapler,Tigers,310,7,R,A,0
// 4.2,0.021,877,9,2001,276,1st,TD,Derek Bell,Mets,200,8,R,B,0
// 4.2,0.020,890,9,2001,283,1st,TD,Matt Franco,Mets,210,8,L,C,0
// 4.2,0.014,1006,9,2001,341,1st,TD,Kevin Sefcik,Phillies,310,9,R,A,0
// 4.2,0.014,1138,9,2001,407,1st,TD,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.014,1521,9,2002,407,P,,J. D. Drew,Cardinals,310,8,L,A,0
// 4.2,0.023,1768,9,2002,18,UL,,Steve Finley,Diamondbacks,180,10,L,17,0
// 4.2,0.030,1829,9,2002,24,UL,,Laynce Nix,Rangers,140,9,L,10,0
// 4.2,0.028,1941,9,2002,34,UL,,Richard Hidalgo,Rangers,150,9,R,10,0
// 4.2,0.028,1961,9,2002,36,UL,,Danny Bautista,Diamondbacks,150,10,R,16,0
// 4.2,0.030,2023,9,2002,41,UL,,Jay Gibbons,Orioles,140,9,L,9,0
// 4.2,0.030,2089,9,2003,47,UL,,Chris Richard,Orioles,140,10,L,16,0
// 4.2,0.022,2116,9,2003,50,UL,,Todd Hollandsworth,Marlins,190,10,L,12,0
// 4.2,0.025,2256,9,2003,62,UL,,Delino DeShields,Cubs,170,10,L,22,0
// 4.2,0.020,2855,9,2004,122,UL,,Roger Cedeno,Tigers,210,10,S,23,0
// 4.2,0.035,3211,9,2004,191,UL,,Jacque Jones,Twins,120,10,L,12,0
// 4.2,0.032,3292,9,2004,210,UL,,Richard Hidalgo,Mets,130,9,R,10,0
// 4.2,0.025,3769,9,2005,333,UL,,Chad Curtis,Rangers,170,10,R,17,0
// 4.2,0.070,3796,9,2005,341,UL,,Frank Catalanotto,Blue Jays,60,10,L,9,0
// 4.1,0.037,588,0,2000,147,1st,PR,Butch Huskey,Rockies,110,8,R,C,0
// 4.1,0.016,205,2,2000,52,1st,PR,Robert Fick,Tigers,250,7,R,B,0
// 4.1,0.018,315,2,2000,79,1st,PR,Jason Varitek,Red Sox,230,7,S,C,0
// 4.1,0.023,359,2,2000,90,1st,PR,Jeff Reed,Cubs,180,9,L,C,0
// 4.1,0.020,618,2,2000,156,1st,PR,Brad Ausmus,Tigers,210,8,R,B,0
// 4.1,0.018,1355,2,2001,79,DS,,Jason Varitek,Red Sox,230,7,S,C,0
// 4.1,0.041,2467,2,2003,81,UL,,Miguel Olivo,White Sox,100,9,R,15,0
// 4.1,0.020,3095,2,2004,163,UL,,Paul Lo Duca,Dodgers,210,9,R,10,0
// 4.1,0.082,3275,2,2004,206,UL,,Michael Barrett,Expos,50,10,R,10,0
// 4.1,0.022,206,3,2000,52,1st,PR,Fernando Seguignol,Expos,190,7,S,C,0
// 4.1,0.021,594,3,2000,149,1st,PR,Brad Ausmus,Astros,200,8,R,B,0
// 4.1,0.021,723,3,2001,199,1st,TD,Daryle Ward,Astros,200,6,L,C,0
// 4.1,0.020,890,3,2001,283,1st,TD,Matt Franco,Mets,210,8,L,C,0
// 4.1,0.017,984,3,2001,330,1st,TD,Rico Brogna,Phillies,240,7,L,B,0
// 4.1,0.068,1500,3,2002,48,P,,Tom Wilson,Blue Jays,60,9,R,11,0
// 4.1,0.034,1717,3,2002,14,UL,,Todd Zeile,Rockies,120,11,R,11,0
// 4.1,0.023,1977,3,2002,37,UL,,Casey Blake,Indians,180,9,R,12,0
// 4.1,0.051,3395,3,2005,235,UL,,Scott Hatteberg,Athletics,80,11,L,8,0
// 4.1,0.029,300,4,2000,75,1st,PR,Jose Offerman,Red Sox,140,8,S,C,0
// 4.1,0.017,717,4,2001,196,1st,TD,Julio Lugo,Astros,240,8,R,A,0
// 4.1,0.022,787,4,2001,231,1st,TD,Ron Belliard,Brewers,190,8,R,B,0
// 4.1,0.016,1024,4,2001,350,1st,TD,Warren Morris,Pirates,260,8,L,B,0
// 4.1,0.017,1200,4,2001,438,1st,TD,Mark Mclemore,Rangers,240,8,S,B,0
// 4.1,0.016,1377,4,2001,350,FS,,Warren Morris,Pirates,260,8,L,B,0
// 4.1,0.024,1407,4,2002,7,P,,Carlos Baerga,Red Sox,170,10,S,15,0
// 4.1,0.026,1449,4,2002,23,P,,Tomas Perez,Phillies,160,9,S,16,0
// 4.1,0.023,1822,4,2002,23,UL,,Aaron Miles,Rockies,180,9,S,11,0
// 4.1,0.027,1999,4,2002,39,UL,,Marcus Giles,Braves,150,10,R,12,0
// 4.1,0.037,2301,4,2003,66,UL,,Ramon Martinez,Cubs,110,10,R,11,0
// 4.1,0.026,3415,4,2005,240,UL,,Marco Scutaro,Athletics,160,9,R,8,0
// 4.1,0.032,3532,4,2005,269,UL,,Abraham Nunez,Pirates,130,9,S,12,0
// 4.1,0.020,890,5,2001,283,1st,TD,Matt Franco,Mets,210,8,L,C,0
// 4.1,0.059,1469,5,2002,32,P,,Greg Norton,Rockies,70,9,S,11,0
// 4.1,0.037,2301,5,2003,66,UL,,Ramon Martinez,Cubs,110,10,R,11,0
// 4.1,0.021,3051,5,2004,154,UL,,Adrian Beltre,Dodgers,200,9,R,12,0
// 4.1,0.034,3078,5,2004,160,UL,,Joe Randa,Royals,120,9,R,13,0
// 4.1,0.027,3352,5,2005,225,UL,,Ty Wigginton,Mets,150,9,R,15,0
// 4.1,0.027,3749,5,2005,326,UL,,Damian Rolls,Devil Rays,150,9,R,13,0
// 4.1,0.017,717,6,2001,196,1st,TD,Julio Lugo,Astros,240,8,R,A,0
// 4.1,0.026,1449,6,2002,23,P,,Tomas Perez,Phillies,160,9,S,16,0
// 4.1,0.021,1855,6,2002,26,UL,,Marco Scutaro,Athletics,200,10,R,13,0
// 4.1,0.029,2249,6,2003,62,UL,,Chris Gomez,Devil Rays,140,9,R,13,0
// 4.1,0.019,2250,6,2003,62,UL,,Royce Clayton,Brewers,220,9,R,14,0
// 4.1,0.037,2301,6,2003,66,UL,,Ramon Martinez,Cubs,110,10,R,11,0
// 4.1,0.022,3127,6,2004,170,UL,,Cesar Izturis,Dodgers,190,10,S,19,0
// 4.1,0.026,3304,6,2004,213,UL,,Kazuo Matsui,Mets,160,9,S,14,0
// 4.1,0.034,3564,6,2005,277,UL,,D'Angelo Jimenez,Padres,120,11,S,12,0
// 4.1,0.017,3821,6,2005,350,UL,,Alex S. Gonzalez,Blue Jays,240,9,R,18,0
// 4.1,0.018,4,7,2000,1,1st,PR,Garret Anderson,Angels,230,7,L,B,0
// 4.1,0.022,206,7,2000,52,1st,PR,Fernando Seguignol,Expos,190,7,S,C,0
// 4.1,0.021,584,7,2000,146,1st,PR,Todd Hollandsworth,Rockies,200,7,L,A,0
// 4.1,0.018,675,7,2001,175,1st,PR,Mark Kotsay,Marlins,230,8,L,A,0
// 4.1,0.021,723,7,2001,199,1st,TD,Daryle Ward,Astros,200,6,L,C,0
// 4.1,0.013,730,7,2001,203,1st,TD,Carlos Beltran,Royals,320,7,S,A,0
// 4.1,0.020,890,7,2001,283,1st,TD,Matt Franco,Mets,210,8,L,C,0
// 4.1,0.018,1063,7,2001,369,1st,TD,Marvin Benard,Giants,230,8,L,A,0
// 4.1,0.016,1134,7,2001,405,1st,TD,Darren Bragg,Cardinals,260,9,L,B,0
// 4.1,0.022,1176,7,2001,426,1st,TD,Paul Sorrento,Devil Rays,190,8,L,C,0
// 4.1,0.041,1457,7,2002,26,P,,Brady Clark,Brewers,100,9,R,14,0
// 4.1,0.082,1688,7,2002,11,UL,,Eric Young,Padres,50,11,R,14,0
// 4.1,0.041,1809,7,2002,22,UL,,David Dellucci,Diamondbacks,100,10,L,19,0
// 4.1,0.027,1991,7,2002,38,UL,,B.J. Surhoff,Braves,150,9,L,15,0
// 4.1,0.037,2103,7,2003,48,UL,,Gabe Kapler,Red Sox,110,9,R,13,0
// 4.1,0.020,2855,7,2004,122,UL,,Roger Cedeno,Tigers,210,10,S,23,0
// 4.1,0.024,2949,7,2004,135,UL,,Juan Encarnacion,Marlins,170,9,R,16,0
// 4.1,0.082,3036,7,2004,151,UL,,Raul Mondesi,Braves,50,9,R,10,0
// 4.1,0.034,3619,7,2005,290,UL,,Juan Gonzalez,Rangers,120,9,R,9,0
// 4.1,0.034,3741,7,2005,323,UL,,Jose Cruz,Devil Rays,120,9,S,13,0
// 4.1,0.068,3796,7,2005,341,UL,,Frank Catalanotto,Blue Jays,60,10,L,9,0
// 4.1,0.018,4,8,2000,1,1st,PR,Garret Anderson,Angels,230,7,L,B,0
// 4.1,0.013,730,8,2001,203,1st,TD,Carlos Beltran,Royals,320,7,S,A,0
// 4.1,0.018,1063,8,2001,369,1st,TD,Marvin Benard,Giants,230,8,L,A,0
// 4.1,0.016,1134,8,2001,405,1st,TD,Darren Bragg,Cardinals,260,9,L,B,0
// 4.1,0.029,1712,8,2002,13,UL,,Aaron Rowand,White Sox,140,9,R,11,0
// 4.1,0.068,2886,8,2004,126,UL,,Kenny Lofton,Phillies,60,10,L,12,0
// 4.1,0.023,3125,8,2004,170,UL,,Alex Sanchez,Brewers,180,10,L,22,0
// 4.1,0.103,3341,8,2005,222,UL,,Kenny Lofton,Yankees,40,10,L,12,0
// 4.1,0.018,4,9,2000,1,1st,PR,Garret Anderson,Angels,230,7,L,B,0
// 4.1,0.019,184,9,2000,46,1st,PR,B.J. Surhoff,Braves,220,8,L,B,0
// 4.1,0.022,206,9,2000,52,1st,PR,Fernando Seguignol,Expos,190,7,S,C,0
// 4.1,0.018,675,9,2001,175,1st,PR,Mark Kotsay,Marlins,230,8,L,A,0
// 4.1,0.021,723,9,2001,199,1st,TD,Daryle Ward,Astros,200,6,L,C,0
// 4.1,0.013,730,9,2001,203,1st,TD,Carlos Beltran,Royals,320,7,S,A,0
// 4.1,0.032,965,9,2001,320,1st,TD,Matt Stairs,Athletics,130,7,L,B,0
// 4.1,0.018,1063,9,2001,369,1st,TD,Marvin Benard,Giants,230,8,L,A,0
// 4.1,0.016,1134,9,2001,405,1st,TD,Darren Bragg,Cardinals,260,9,L,B,0
// 4.1,0.022,1176,9,2001,426,1st,TD,Paul Sorrento,Devil Rays,190,8,L,C,0
// 4.1,0.013,1246,9,2001,461,1st,TD,Shannon Stewart,Blue Jays,320,9,R,A,0
// 4.1,0.041,1457,9,2002,26,P,,Brady Clark,Brewers,100,9,R,14,0
// 4.1,0.041,1809,9,2002,22,UL,,David Dellucci,Diamondbacks,100,10,L,19,0
// 4.1,0.020,1849,9,2002,26,UL,,Roger Cedeno,Mets,210,10,S,23,0
// 4.1,0.037,2103,9,2003,48,UL,,Gabe Kapler,Red Sox,110,9,R,13,0
// 4.1,0.041,2530,9,2003,87,UL,,Larry Bigbie,Orioles,100,9,L,16,0
// 4.1,0.024,2949,9,2004,135,UL,,Juan Encarnacion,Marlins,170,9,R,16,0
// 4.1,0.082,3036,9,2004,151,UL,,Raul Mondesi,Braves,50,9,R,10,0
// 4.1,0.034,3619,9,2005,290,UL,,Juan Gonzalez,Rangers,120,9,R,9,0
// 4.1,0.034,3741,9,2005,323,UL,,Jose Cruz,Devil Rays,120,9,S,13,0
// 4,0.020,594,2,2000,149,1st,PR,Brad Ausmus,Astros,200,8,R,B,0
// 4,0.017,607,2,2000,153,1st,PR,Tyler Houston,Brewers,240,6,L,B,0
// 4,0.017,770,2,2001,223,1st,TD,Todd Hundley,Dodgers,240,6,L,B,0
// 4,0.067,1500,2,2002,48,P,,Tom Wilson,Blue Jays,60,9,R,11,0
// 4,0.100,2299,2,2003,66,UL,,Todd Hundley,Cubs,40,7,S,9,0
// 4,0.057,2334,2,2003,69,UL,,Todd Hundley,Cubs,70,9,S,8,0
// 4,0.029,300,3,2000,75,1st,PR,Jose Offerman,Red Sox,140,8,S,C,0
// 4,0.057,1469,3,2002,32,P,,Greg Norton,Rockies,70,9,S,11,0
// 4,0.067,1479,3,2002,37,P,,Kevin Witt,Tigers,60,9,L,11,0
// 4,0.033,1488,3,2002,42,P,,Phil Nevin,Padres,120,10,R,10,0
// 4,0.057,2230,3,2003,60,UL,,Nick Johnson,Yankees,70,10,L,8,0
// 4,0.033,3449,3,2005,249,UL,,Phil Nevin,Padres,120,10,R,10,0
// 4,0.019,2,4,2000,1,1st,PR,Randy Velarde,Rangers,210,8,R,B,0
// 4,0.017,266,4,2000,67,1st,PR,Jerry Hairston Jr.,Orioles,240,8,R,A,0
// 4,0.020,603,4,2000,151,1st,PR,Terry Shumpert,Rockies,200,7,R,A,0
// 4,0.017,632,4,2000,161,1st,PR,Damion Easley,Tigers,240,8,R,B,0
// 4,0.017,1357,4,2001,161,DS,,Damion Easley,Tigers,240,8,R,B,0
// 4,0.027,3129,4,2004,171,UL,,Mark Grudzielanek,Dodgers,150,10,R,16,0
// 4,0.031,3810,4,2005,345,UL,,Orlando Hudson,Blue Jays,130,10,S,12,0
// 4,0.018,200,5,2000,50,1st,PR,Jeff Conine,Orioles,220,8,R,B,0
// 4,0.020,603,5,2000,151,1st,PR,Terry Shumpert,Rockies,200,7,R,A,0
// 4,0.017,607,5,2000,153,1st,PR,Tyler Houston,Brewers,240,6,L,B,0
// 4,0.019,950,5,2001,313,1st,TD,Eric Chavez,Athletics,210,7,L,C,0
// 4,0.018,1162,5,2001,419,1st,TD,Wade Boggs,Devil Rays,220,9,L,C,0
// 4,0.067,1479,5,2002,37,P,,Kevin Witt,Tigers,60,9,L,11,0
// 4,0.033,1488,5,2002,42,P,,Phil Nevin,Padres,120,10,R,10,0
// 4,0.033,1795,5,2002,21,UL,,Hank Blalock,Rangers,120,9,L,10,0
// 4,0.022,1977,5,2002,37,UL,,Casey Blake,Indians,180,9,R,12,0
// 4,0.033,2826,5,2004,118,UL,,Chris Stynes,Rockies,120,9,R,10,0
// 4,0.033,3449,5,2005,249,UL,,Phil Nevin,Padres,120,10,R,10,0
// 4,0.050,3779,5,2005,336,UL,,Mike Lamb,Rangers,80,11,L,12,0
// 4,0.018,881,6,2001,278,1st,TD,Mike Bordick,Mets,220,8,R,B,0
// 4,0.020,1061,6,2001,368,1st,TD,Rich Aurilia,Giants,200,8,R,C,0
// 4,0.033,2026,6,2002,42,UL,,Barry Larkin,Reds,120,11,R,14,0
// 4,0.024,22,7,2000,6,1st,PR,Adam Piatt,Athletics,170,8,R,B,0
// 4,0.015,191,7,2000,48,1st,PR,Gerald Williams,Braves,260,7,R,A,0
// 4,0.018,200,7,2000,50,1st,PR,Jeff Conine,Orioles,220,8,R,B,0
// 4,0.021,370,7,2000,93,1st,PR,Bubba Trammell,Padres,190,8,R,B,0
// 4,0.015,483,7,2000,121,1st,PR,Michael Tucker,Reds,260,7,L,A,0
// 4,0.021,575,7,2000,144,1st,PR,Jeff Barry,Rockies,190,7,S,C,0
// 4,0.020,603,7,2000,151,1st,PR,Terry Shumpert,Rockies,200,7,R,A,0
// 4,0.018,889,7,2001,282,1st,TD,Jay Payton,Mets,220,8,R,B,0
// 4,0.031,965,7,2001,320,1st,TD,Matt Stairs,Athletics,130,7,L,B,0
// 4,0.013,1246,7,2001,461,1st,TD,Shannon Stewart,Blue Jays,320,9,R,A,0
// 4,0.033,1909,7,2002,31,UL,,Craig Monroe,Tigers,120,9,R,10,0
// 4,0.029,1926,7,2002,33,UL,,Juan Encarnacion,Reds,140,8,R,19,0
// 4,0.040,2530,7,2003,87,UL,,Larry Bigbie,Orioles,100,9,L,16,0
// 4,0.057,3002,7,2004,144,UL,,Orlando Merced,Astros,70,10,L,10,0
// 4,0.020,584,8,2000,146,1st,PR,Todd Hollandsworth,Rockies,200,7,L,A,0
// 4,0.024,22,9,2000,6,1st,PR,Adam Piatt,Athletics,170,8,R,B,0
// 4,0.015,191,9,2000,48,1st,PR,Gerald Williams,Braves,260,7,R,A,0
// 4,0.018,200,9,2000,50,1st,PR,Jeff Conine,Orioles,220,8,R,B,0
// 4,0.021,370,9,2000,93,1st,PR,Bubba Trammell,Padres,190,8,R,B,0
// 4,0.013,427,9,2000,107,1st,PR,Chris Singleton,White Sox,310,7,L,A,0
// 4,0.015,483,9,2000,121,1st,PR,Michael Tucker,Reds,260,7,L,A,0
// 4,0.021,575,9,2000,144,1st,PR,Jeff Barry,Rockies,190,7,S,C,0
// 4,0.020,584,9,2000,146,1st,PR,Todd Hollandsworth,Rockies,200,7,L,A,0
// 4,0.018,889,9,2001,282,1st,TD,Jay Payton,Mets,220,8,R,B,0
// 4,0.080,1688,9,2002,11,UL,,Eric Young,Padres,50,11,R,14,0
// 4,0.029,1926,9,2002,33,UL,,Juan Encarnacion,Reds,140,8,R,19,0
// 4,0.027,1991,9,2002,38,UL,,B.J. Surhoff,Braves,150,9,L,15,0
// 4,0.057,3002,9,2004,144,UL,,Orlando Merced,Astros,70,10,L,10,0
// 3.9,0.024,2831,0,2004,119,UL,,Terry Shumpert,Rockies,160,10,R,22,0
// 3.9,0.021,377,2,2000,95,1st,PR,Jim Leyritz,Yankees,190,7,R,C,0
// 3.9,0.018,842,2,2001,259,1st,TD,Terry Steinbach,Twins,220,8,R,B,0
// 3.9,0.019,878,2,2001,277,1st,TD,Chris Widger,Expos,210,7,R,C,0
// 3.9,0.028,1442,2,2002,20,P,,Paul Lo Duca,Dodgers,140,9,R,8,0
// 3.9,0.021,2065,2,2002,45,UL,,Mike Matheny,Cardinals,190,9,R,11,0
// 3.9,0.026,2573,2,2003,91,UL,,Kevin Cash,Blue Jays,150,9,R,8,0
// 3.9,0.035,2739,2,2004,108,UL,,Gary Bennett,Rockies,110,9,R,9,0
// 3.9,0.030,2965,2,2004,138,UL,,Brad Ausmus,Astros,130,9,R,9,0
// 3.9,0.043,3034,2,2004,150,UL,,Brent Mayne,Royals,90,9,L,10,0
// 3.9,0.065,3118,2,2004,168,UL,,Brent Mayne,Royals,60,9,L,8,0
// 3.9,0.028,3172,2,2004,181,UL,,Paul Lo Duca,Dodgers,140,9,R,8,0
// 3.9,0.023,3405,2,2005,238,UL,,Jason Kendall,Pirates,170,10,R,14,0
// 3.9,0.017,337,3,2000,85,1st,PR,Lee Stevens,Expos,230,7,L,B,0
// 3.9,0.021,377,3,2000,95,1st,PR,Jim Leyritz,Yankees,190,7,R,C,0
// 3.9,0.022,398,3,2000,100,1st,PR,Julio Zuleta,Cubs,180,7,R,B,0
// 3.9,0.016,623,3,2000,158,1st,PR,Frank Catalanotto,Tigers,250,7,L,B,0
// 3.9,0.028,1442,3,2002,20,P,,Paul Lo Duca,Dodgers,140,9,R,8,0
// 3.9,0.056,2701,3,2004,104,UL,,Lee Stevens,Indians,70,9,L,9,0
// 3.9,0.022,3044,3,2004,153,UL,,Carlos Baerga,Nationals,180,9,S,10,0
// 3.9,0.026,3126,3,2004,170,UL,,Desi Relaford,Royals,150,9,S,17,0
// 3.9,0.043,3148,3,2004,175,UL,,Ron Coomer,Dodgers,90,10,R,10,0
// 3.9,0.035,3496,3,2005,260,UL,,Rob Mackowiak,Pirates,110,9,L,14,0
// 3.9,0.016,623,4,2000,158,1st,PR,Frank Catalanotto,Tigers,250,7,L,B,0
// 3.9,0.033,1752,4,2002,17,UL,,Eric Young,Rangers,120,9,R,19,0
// 3.9,0.024,1951,4,2002,35,UL,,Fernando Vina,Tigers,160,9,L,10,0
// 3.9,0.023,2007,4,2002,40,UL,,Brent Butler,Rockies,170,9,R,10,0
// 3.9,0.019,2152,4,2003,53,UL,,Placido Polanco,Cardinals,210,10,R,18,0
// 3.9,0.013,2385,4,2003,74,UL,,Luis Castillo,Marlins,300,10,S,21,0
// 3.9,0.039,2522,4,2003,86,UL,,Juan Castro,Reds,100,9,R,9,0
// 3.9,0.023,2880,4,2004,125,UL,,Damion Easley,Tigers,170,10,R,18,0
// 3.9,0.024,2940,4,2004,134,UL,,Luis Castillo,Marlins,160,10,S,21,0
// 3.9,0.026,3126,4,2004,170,UL,,Desi Relaford,Royals,150,9,S,17,0
// 3.9,0.022,3217,4,2004,192,UL,,Roberto Alomar,Mets,180,9,S,14,0
// 3.9,0.026,3355,4,2005,226,UL,,Marlon Anderson,Phillies,150,9,L,11,0
// 3.9,0.035,3496,4,2005,260,UL,,Rob Mackowiak,Pirates,110,9,L,14,0
// 3.9,0.028,234,5,2000,59,1st,PR,Joe Crede,White Sox,140,7,R,C,0
// 3.9,0.020,557,5,2000,140,1st,PR,Tom Evans,Rangers,200,8,R,B,0
// 3.9,0.016,623,5,2000,158,1st,PR,Frank Catalanotto,Tigers,250,7,L,B,0
// 3.9,0.018,726,5,2001,201,1st,TD,Bill Spiers,Astros,220,8,L,B,0
// 3.9,0.390,1448,5,2002,22,P,,Willie Bloomquist,Mariners,10,9,R,14,0
// 3.9,0.078,1477,5,2002,36,P,,Jeff Reboulet,Pirates,50,10,R,11,0
// 3.9,0.030,1736,5,2002,15,UL,,Craig Counsell,Diamondbacks,130,10,L,12,0
// 3.9,0.023,2007,5,2002,40,UL,,Brent Butler,Rockies,170,9,R,10,0
// 3.9,0.039,2522,5,2003,86,UL,,Juan Castro,Reds,100,9,R,9,0
// 3.9,0.049,3587,5,2005,282,UL,,Edgardo Alfonzo,Giants,80,9,R,11,0
// 3.9,0.016,3717,5,2005,316,UL,,Placido Polanco,Cardinals,240,10,R,18,0
// 3.9,0.018,974,6,2001,325,1st,TD,Miguel Tejada,Athletics,220,7,R,B,0
// 3.9,0.017,1068,6,2001,372,1st,TD,Rich Aurilia,Giants,230,7,R,B,0
// 3.9,0.021,2105,6,2003,49,UL,,Deivi Cruz,Orioles,190,9,R,13,0
// 3.9,0.024,2323,6,2003,68,UL,,Alex Gonzalez,Cubs,160,9,R,11,0
// 3.9,0.016,2410,6,2003,76,UL,,Royce Clayton,White Sox,240,9,R,18,0
// 3.9,0.039,2522,6,2003,86,UL,,Juan Castro,Reds,100,9,R,9,0
// 3.9,0.033,2683,6,2003,102,UL,,Omar Vizquel,Indians,120,10,S,17,0
// 3.9,0.065,2756,6,2004,110,UL,,Omar Vizquel,Indians,60,10,S,12,0
// 3.9,0.035,2900,6,2004,128,UL,,David Eckstein,Cardinals,110,10,R,15,0
// 3.9,0.026,3126,6,2004,170,UL,,Desi Relaford,Royals,150,9,S,17,0
// 3.9,0.035,3496,6,2005,260,UL,,Rob Mackowiak,Pirates,110,9,L,14,0
// 3.9,0.016,3717,6,2005,316,UL,,Placido Polanco,Cardinals,240,10,R,18,0
// 3.9,0.016,3,7,2000,1,1st,PR,Garret Anderson,Angels,250,7,L,B,0
// 3.9,0.026,68,7,2000,17,1st,PR,Danny Bautista,Diamondbacks,150,7,R,B,0
// 3.9,0.014,329,7,2000,83,1st,PR,Peter Bergeron,Expos,280,8,L,A,0
// 3.9,0.020,716,7,2001,196,1st,TD,Richard Hidalgo,Astros,200,7,R,B,0
// 3.9,0.017,1007,7,2001,341,1st,TD,Adrian Brown,Pirates,230,8,S,A,0
// 3.9,0.017,1172,7,2001,424,1st,TD,Dave Martinez,Devil Rays,230,8,L,B,0
// 3.9,0.020,1430,7,2002,16,P,,Kerry Robinson,Cardinals,200,10,L,18,0
// 3.9,0.056,1492,7,2002,44,P,,Ron Calloway,Expos,70,9,L,14,0
// 3.9,0.021,1594,7,2002,2,UL,,Chris Singleton,Orioles,190,10,L,19,0
// 3.9,0.023,1615,7,2002,4,UL,,Tsuyoshi Shinjo,Giants,170,9,R,13,0
// 3.9,0.026,2260,7,2003,63,UL,,Randy Winn,Devil Rays,150,10,S,18,0
// 3.9,0.023,2359,7,2003,72,UL,,Alex Ochoa,Brewers,170,10,R,19,0
// 3.9,0.030,2603,7,2003,94,UL,,Reggie Taylor,Reds,130,9,L,13,0
// 3.9,0.023,3334,7,2005,221,UL,,Tsuyoshi Shinjo,Mets,170,9,R,13,0
// 3.9,0.056,3438,7,2005,246,UL,,Terrence Long,Athletics,70,9,L,16,0
// 3.9,0.016,3,8,2000,1,1st,PR,Garret Anderson,Angels,250,7,L,B,0
// 3.9,0.014,329,8,2000,83,1st,PR,Peter Bergeron,Expos,280,8,L,A,0
// 3.9,0.021,575,8,2000,144,1st,PR,Jeff Barry,Rockies,190,7,S,C,0
// 3.9,0.013,786,8,2001,231,1st,TD,Devon White,Dodgers,290,7,S,A,0
// 3.9,0.018,889,8,2001,282,1st,TD,Jay Payton,Mets,220,8,R,B,0
// 3.9,0.017,1007,8,2001,341,1st,TD,Adrian Brown,Pirates,230,8,S,A,0
// 3.9,0.017,1172,8,2001,424,1st,TD,Dave Martinez,Devil Rays,230,8,L,B,0
// 3.9,0.020,1430,8,2002,16,P,,Kerry Robinson,Cardinals,200,10,L,18,0
// 3.9,0.021,1594,8,2002,2,UL,,Chris Singleton,Orioles,190,10,L,19,0
// 3.9,0.023,1615,8,2002,4,UL,,Tsuyoshi Shinjo,Giants,170,9,R,13,0
// 3.9,0.065,1673,8,2002,9,UL,,Orlando Palmeiro,Angels,60,10,L,11,0
// 3.9,0.023,2318,8,2003,68,UL,,Jacob Cruz,Tigers,170,10,L,16,0
// 3.9,0.030,2603,8,2003,94,UL,,Reggie Taylor,Reds,130,9,L,13,0
// 3.9,0.035,2619,8,2003,96,UL,,Jay Payton,Red Sox,110,9,R,10,0
// 3.9,0.030,3185,8,2004,184,UL,,Scott Podsednik,Brewers,130,9,L,24,0
// 3.9,0.021,3732,8,2005,320,UL,,Rocco Baldelli,Devil Rays,190,9,R,16,0
// 3.9,0.016,3,9,2000,1,1st,PR,Garret Anderson,Angels,250,7,L,B,0
// 3.9,0.014,329,9,2000,83,1st,PR,Peter Bergeron,Expos,280,8,L,A,0
// 3.9,0.020,603,9,2000,151,1st,PR,Terry Shumpert,Rockies,200,7,R,A,0
// 3.9,0.013,786,9,2001,231,1st,TD,Devon White,Dodgers,290,7,S,A,0
// 3.9,0.017,1007,9,2001,341,1st,TD,Adrian Brown,Pirates,230,8,S,A,0
// 3.9,0.017,1172,9,2001,424,1st,TD,Dave Martinez,Devil Rays,230,8,L,B,0
// 3.9,0.024,1199,9,2001,437,1st,TD,Chad Curtis,Rangers,160,8,R,B,0
// 3.9,0.020,1430,9,2002,16,P,,Kerry Robinson,Cardinals,200,10,L,18,0
// 3.9,0.056,1492,9,2002,44,P,,Ron Calloway,Expos,70,9,L,14,0
// 3.9,0.021,1594,9,2002,2,UL,,Chris Singleton,Orioles,190,10,L,19,0
// 3.9,0.023,1615,9,2002,4,UL,,Tsuyoshi Shinjo,Giants,170,9,R,13,0
// 3.9,0.022,1647,9,2002,7,UL,,Roger Cedeno,Mets,180,9,S,18,0
// 3.9,0.065,1673,9,2002,9,UL,,Orlando Palmeiro,Angels,60,10,L,11,0
// 3.9,0.033,1909,9,2002,31,UL,,Craig Monroe,Tigers,120,9,R,10,0
// 3.9,0.030,1954,9,2002,35,UL,,Eli Marrero,Cardinals,130,9,R,12,0
// 3.9,0.026,2260,9,2003,63,UL,,Randy Winn,Devil Rays,150,10,S,18,0
// 3.9,0.023,2359,9,2003,72,UL,,Alex Ochoa,Brewers,170,10,R,19,0
// 3.9,0.030,2603,9,2003,94,UL,,Reggie Taylor,Reds,130,9,L,13,0
// 3.9,0.056,3438,9,2005,246,UL,,Terrence Long,Athletics,70,9,L,16,0
// 3.9,0.035,3496,9,2005,260,UL,,Rob Mackowiak,Pirates,110,9,L,14,0
// 3.8,0.076,3440,0,2005,247,UL,,Olmedo Saenz,Athletics,50,8,R,11,0
// 3.8,0.017,111,2,2000,28,1st,PR,Kelly Stinnett,Diamondbacks,230,6,R,B,0
// 3.8,0.017,223,2,2000,56,1st,PR,Charles Johnson,Orioles,220,8,R,C,0
// 3.8,0.014,361,2,2000,91,1st,PR,Todd Pratt,Mets,270,9,R,B,0
// 3.8,0.038,1704,2,2002,12,UL,,Rod Barajas,Diamondbacks,100,10,R,8,0
// 3.8,0.016,2082,2,2003,47,UL,,Jason Larue,Reds,240,8,R,13,0
// 3.8,0.029,2217,2,2003,59,UL,,Bengie Molina,Angels,130,9,R,10,0
// 3.8,0.032,2257,2,2003,62,UL,,Jason Varitek,Red Sox,120,9,S,10,0
// 3.8,0.048,2644,2,2003,98,UL,,Josh Bard,Indians,80,9,S,8,0
// 3.8,0.063,3308,2,2005,214,UL,,Jason Phillips,Mets,60,9,R,8,0
// 3.8,0.035,3705,2,2005,312,UL,,Mike Matheny,Cardinals,110,9,R,9,0
// 3.8,0.029,3734,2,2005,321,UL,,Toby Hall,Devil Rays,130,9,R,8,0
// 3.8,0.021,211,3,2000,53,1st,PR,Jeff Conine,Orioles,180,7,R,C,0
// 3.8,0.022,738,3,2001,207,1st,TD,Jeremy Giambi,Royals,170,8,L,C,0
// 3.8,0.021,1461,3,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.029,1950,3,2002,35,UL,,Hee Seop Choi,Cubs,130,9,L,10,0
// 3.8,0.021,2061,3,2002,45,UL,,Eric Karros,Cubs,180,9,R,10,0
// 3.8,0.038,2522,3,2003,86,UL,,Juan Castro,Reds,100,9,R,9,0
// 3.8,0.029,3089,3,2004,162,UL,,Eric Karros,Dodgers,130,9,R,10,0
// 3.8,0.027,3172,3,2004,181,UL,,Paul Lo Duca,Dodgers,140,9,R,8,0
// 3.8,0.029,3591,3,2005,283,UL,,Steve Cox,Devil Rays,130,9,L,11,0
// 3.8,0.032,3616,3,2005,289,UL,,Neifi Perez,Giants,120,9,S,14,0
// 3.8,0.015,9,4,2000,3,1st,PR,Adam Kennedy,Angels,260,7,L,A,0
// 3.8,0.017,445,4,2000,112,1st,PR,Bret Boone,Padres,230,7,R,B,0
// 3.8,0.014,736,4,2001,206,1st,TD,Carlos Febles,Royals,270,8,R,A,0
// 3.8,0.020,1191,4,2001,433,1st,TD,Luis Alicea,Rangers,190,9,S,C,0
// 3.8,0.014,1372,4,2001,206,FS,,Carlos Febles,Royals,270,8,R,A,0
// 3.8,0.021,1461,4,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.076,1477,4,2002,36,P,,Jeff Reboulet,Pirates,50,10,R,11,0
// 3.8,0.035,2047,4,2002,43,UL,,Brian Roberts,Orioles,110,10,S,18,0
// 3.8,0.022,3139,4,2004,173,UL,,Eric Young,Brewers,170,10,R,20,0
// 3.8,0.035,3418,4,2005,241,UL,,Mark Ellis,Athletics,110,9,R,11,0
// 3.8,0.032,3616,4,2005,289,UL,,Neifi Perez,Giants,120,9,S,14,0
// 3.8,0.019,688,5,2001,182,1st,PR,Mike Lowell,Marlins,200,7,R,C,0
// 3.8,0.017,1102,5,2001,389,1st,TD,Russ Davis,Mariners,220,6,R,B,0
// 3.8,0.021,1461,5,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.018,2152,5,2003,53,UL,,Placido Polanco,Cardinals,210,10,R,18,0
// 3.8,0.038,3004,5,2004,144,UL,,Morgan Ensberg,Astros,100,9,R,12,0
// 3.8,0.025,3126,5,2004,170,UL,,Desi Relaford,Royals,150,9,S,17,0
// 3.8,0.190,3277,5,2004,207,UL,,Fernando Tatis,Expos,20,10,R,10,0
// 3.8,0.035,3496,5,2005,260,UL,,Rob Mackowiak,Pirates,110,9,L,14,0
// 3.8,0.032,3502,5,2005,262,UL,,Jeff Cirillo,Mariners,120,9,R,12,0
// 3.8,0.032,3616,5,2005,289,UL,,Neifi Perez,Giants,120,9,S,14,0
// 3.8,0.025,3657,5,2005,299,UL,,Dave Berg,Blue Jays,150,9,R,8,0
// 3.8,0.017,133,6,2000,34,1st,PR,Jose Valentin,White Sox,220,7,S,B,0
// 3.8,0.017,135,6,2000,34,1st,PR,Jose Hernandez,Braves,230,7,R,B,0
// 3.8,0.021,285,6,2000,72,1st,PR,Kevin Elster,Dodgers,180,7,R,C,0
// 3.8,0.018,814,6,2001,245,1st,TD,Jose Valentin,Brewers,210,7,S,B,0
// 3.8,0.021,1461,6,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.017,1505,6,2002,56,P,,Melvin Mora,Orioles,220,8,R,A,0
// 3.8,0.042,1604,6,2002,2,UL,,David Eckstein,Angels,90,10,R,15,0
// 3.8,0.048,1677,6,2002,10,UL,,Khalil Greene,Padres,80,9,R,13,0
// 3.8,0.029,1736,6,2002,15,UL,,Craig Counsell,Diamondbacks,130,10,L,12,0
// 3.8,0.027,2118,6,2003,50,UL,,Omar Vizquel,Giants,140,10,S,16,0
// 3.8,0.054,2194,6,2003,57,UL,,Rich Aurilia,Reds,70,9,R,10,0
// 3.8,0.038,2925,6,2004,131,UL,,Alex Gonzalez,Marlins,100,9,R,14,0
// 3.8,0.029,3010,6,2004,145,UL,,Adam Everett,Astros,130,9,R,14,0
// 3.8,0.054,3255,6,2004,201,UL,,Chris Woodward,Blue Jays,70,9,R,14,0
// 3.8,0.032,3616,6,2005,289,UL,,Neifi Perez,Giants,120,9,S,14,0
// 3.8,0.027,128,7,2000,32,1st,PR,Bobby Bonilla,Braves,140,8,S,C,0
// 3.8,0.021,152,7,2000,38,1st,PR,Brian Jordan,Braves,180,7,R,B,0
// 3.8,0.017,321,7,2000,81,1st,PR,Jacque Jones,Twins,220,7,L,B,0
// 3.8,0.014,561,7,2000,141,1st,PR,Gabe Kapler,Rangers,270,7,R,A,0
// 3.8,0.021,633,7,2000,161,1st,PR,Juan Encarnacion,Tigers,180,7,R,A,0
// 3.8,0.018,641,7,2000,164,1st,PR,Bobby Higginson,Tigers,210,8,L,B,0
// 3.8,0.013,786,7,2001,231,1st,TD,Devon White,Dodgers,290,7,S,A,0
// 3.8,0.022,827,7,2001,251,1st,TD,Jacque Jones,Twins,170,7,L,B,0
// 3.8,0.019,927,7,2001,301,1st,TD,Paul O'Neill,Yankees,200,8,L,B,0
// 3.8,0.024,1199,7,2001,437,1st,TD,Chad Curtis,Rangers,160,8,R,B,0
// 3.8,0.021,1461,7,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.021,1647,7,2002,7,UL,,Roger Cedeno,Mets,180,9,S,18,0
// 3.8,0.063,1673,7,2002,9,UL,,Orlando Palmeiro,Angels,60,10,L,11,0
// 3.8,0.029,1954,7,2002,35,UL,,Eli Marrero,Cardinals,130,9,R,12,0
// 3.8,0.018,2153,7,2003,53,UL,,Michael Tucker,Royals,210,9,L,15,0
// 3.8,0.035,3496,7,2005,260,UL,,Rob Mackowiak,Pirates,110,9,L,14,0
// 3.8,0.032,3535,7,2005,270,UL,,Ruben Sierra,Mariners,120,9,S,10,0
// 3.8,0.017,321,8,2000,81,1st,PR,Jacque Jones,Twins,220,7,L,B,0
// 3.8,0.017,578,8,2000,145,1st,PR,Darryl Hamilton,Mets,220,9,L,B,0
// 3.8,0.021,633,8,2000,161,1st,PR,Juan Encarnacion,Tigers,180,7,R,A,0
// 3.8,0.021,1461,8,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.018,2153,8,2003,53,UL,,Michael Tucker,Royals,210,9,L,15,0
// 3.8,0.024,2181,8,2003,56,UL,,Tsuyoshi Shinjo,Mets,160,9,R,11,0
// 3.8,0.035,2291,8,2003,65,UL,,Kenny Lofton,Cubs,110,9,L,20,0
// 3.8,0.048,3188,8,2004,185,UL,,Dave Roberts,Dodgers,80,9,L,23,0
// 3.8,0.022,3334,8,2005,221,UL,,Tsuyoshi Shinjo,Mets,170,9,R,13,0
// 3.8,0.054,3438,8,2005,246,UL,,Terrence Long,Athletics,70,9,L,16,0
// 3.8,0.042,3576,8,2005,279,UL,,Jay Payton,Padres,90,9,R,16,0
// 3.8,0.013,3725,8,2005,318,UL,,Rocco Baldelli,Devil Rays,290,10,R,18,0
// 3.8,0.025,68,9,2000,17,1st,PR,Danny Bautista,Diamondbacks,150,7,R,B,0
// 3.8,0.027,128,9,2000,32,1st,PR,Bobby Bonilla,Braves,140,8,S,C,0
// 3.8,0.021,152,9,2000,38,1st,PR,Brian Jordan,Braves,180,7,R,B,0
// 3.8,0.017,321,9,2000,81,1st,PR,Jacque Jones,Twins,220,7,L,B,0
// 3.8,0.014,561,9,2000,141,1st,PR,Gabe Kapler,Rangers,270,7,R,A,0
// 3.8,0.017,578,9,2000,145,1st,PR,Darryl Hamilton,Mets,220,9,L,B,0
// 3.8,0.021,633,9,2000,161,1st,PR,Juan Encarnacion,Tigers,180,7,R,A,0
// 3.8,0.018,641,9,2000,164,1st,PR,Bobby Higginson,Tigers,210,8,L,B,0
// 3.8,0.019,716,9,2001,196,1st,TD,Richard Hidalgo,Astros,200,7,R,B,0
// 3.8,0.022,827,9,2001,251,1st,TD,Jacque Jones,Twins,170,7,L,B,0
// 3.8,0.019,927,9,2001,301,1st,TD,Paul O'Neill,Yankees,200,8,L,B,0
// 3.8,0.021,1461,9,2002,28,P,,Damian Jackson,Red Sox,180,10,R,20,0
// 3.8,0.018,2153,9,2003,53,UL,,Michael Tucker,Royals,210,9,L,15,0
// 3.8,0.022,3334,9,2005,221,UL,,Tsuyoshi Shinjo,Mets,170,9,R,13,0
// 3.8,0.032,3535,9,2005,270,UL,,Ruben Sierra,Mariners,120,9,S,10,0
// 3.7,0.028,138,2,2000,35,1st,PR,Sandy Alomar Jr.,White Sox,130,7,R,C,0
// 3.7,0.016,395,2,2000,99,1st,PR,Brook Fordyce,White Sox,230,8,R,B,0
// 3.7,0.041,1719,2,2002,14,UL,,Brian Schneider,Expos,90,9,L,10,0
// 3.7,0.046,1784,2,2002,20,UL,,Brandon Inge,Tigers,80,9,R,10,0
// 3.7,0.074,3759,2,2005,329,UL,,Rod Barajas,Rangers,50,9,R,8,0
// 3.7,0.028,921,3,2001,298,1st,TD,Tino Martinez,Yankees,130,7,L,B,0
// 3.7,0.028,2653,3,2003,99,UL,,Casey Blake,Indians,130,9,R,12,0
// 3.7,0.046,3342,3,2005,223,UL,,Todd Zeile,Mets,80,11,R,11,0
// 3.7,0.014,671,4,2001,174,1st,PR,Dave Berg,Marlins,260,8,R,B,0
// 3.7,0.023,1033,4,2001,354,1st,TD,Bret Boone,Padres,160,7,R,B,0
// 3.7,0.015,1043,4,2001,359,1st,TD,Damian Jackson,Padres,250,8,R,A,0
// 3.7,0.017,1098,4,2001,387,1st,TD,David Bell,Mariners,220,7,R,B,0
// 3.7,0.013,1222,4,2001,449,1st,TD,Homer Bush,Blue Jays,290,8,R,A,0
// 3.7,0.018,1735,4,2002,15,UL,,Craig Counsell,Diamondbacks,210,11,L,16,0
// 3.7,0.037,3182,4,2004,184,UL,,Mark Loretta,Brewers,100,11,R,13,0
// 3.7,0.025,3653,4,2005,298,UL,,Mike Young,Rangers,150,9,R,11,0
// 3.7,0.025,3657,4,2005,299,UL,,Dave Berg,Blue Jays,150,9,R,8,0
// 3.7,0.021,282,5,2000,71,1st,PR,Russ Davis,Giants,180,7,R,B,0
// 3.7,0.017,305,5,2000,77,1st,PR,Jose Hernandez,Brewers,220,7,R,B,0
// 3.7,0.014,671,5,2001,174,1st,PR,Dave Berg,Marlins,260,8,R,B,0
// 3.7,0.017,1086,5,2001,381,1st,TD,Bill Mueller,Giants,220,9,S,B,0
// 3.7,0.093,1988,5,2002,38,UL,,Hank Blalock,Rangers,40,9,L,14,0
// 3.7,0.037,2115,5,2003,50,UL,,Shea Hillenbrand,Red Sox,100,8,R,14,0
// 3.7,0.062,2468,5,2003,81,UL,,Juan Castro,Reds,60,9,R,9,0
// 3.7,0.022,2499,5,2003,84,UL,,Aaron Boone,Reds,170,9,R,19,0
// 3.7,0.028,2653,5,2003,99,UL,,Casey Blake,Indians,130,9,R,12,0
// 3.7,0.053,2988,5,2004,142,UL,,Juan Castro,Twins,70,9,R,10,0
// 3.7,0.037,3182,5,2004,184,UL,,Mark Loretta,Brewers,100,11,R,13,0
// 3.7,0.370,3239,5,2004,197,UL,,Wes Helms,Brewers,10,9,R,8,0
// 3.7,0.019,79,6,2000,20,1st,PR,Andy Fox,Diamondbacks,190,7,L,B,0
// 3.7,0.017,224,6,2000,56,1st,PR,Melvin Mora,Orioles,220,8,R,A,0
// 3.7,0.015,552,6,2000,138,1st,PR,Omar Vizquel,Indians,250,9,S,A,0
// 3.7,0.014,671,6,2001,174,1st,PR,Dave Berg,Marlins,260,8,R,B,0
// 3.7,0.017,982,6,2001,329,1st,TD,Alex Arias,Phillies,220,8,R,B,0
// 3.7,0.015,1043,6,2001,359,1st,TD,Damian Jackson,Padres,250,8,R,A,0
// 3.7,0.026,1464,6,2002,30,P,,Barry Larkin,Reds,140,9,R,13,0
// 3.7,0.023,1602,6,2002,2,UL,,David Eckstein,Angels,160,11,R,18,0
// 3.7,0.018,1735,6,2002,15,UL,,Craig Counsell,Diamondbacks,210,11,L,16,0
// 3.7,0.041,2959,6,2004,137,UL,,Alex Gonzalez,Marlins,90,8,R,12,0
// 3.7,0.025,3595,6,2005,284,UL,,Chris Gomez,Devil Rays,150,9,R,9,0
// 3.7,0.053,3818,6,2005,348,UL,,Chris Woodward,Blue Jays,70,9,R,12,0
// 3.7,0.031,150,7,2000,38,1st,PR,Roosevelt Brown,Cubs,120,7,L,B,0
// 3.7,0.017,422,7,2000,106,1st,PR,Ruben Mateo,Rangers,220,7,R,A,0
// 3.7,0.017,578,7,2000,145,1st,PR,Darryl Hamilton,Mets,220,9,L,B,0
// 3.7,0.018,765,7,2001,220,1st,TD,Tom Goodwin,Dodgers,210,8,L,A,0
// 3.7,0.015,820,7,2001,248,1st,TD,Chad Allen,Twins,240,7,R,A,0
// 3.7,0.014,888,7,2001,282,1st,TD,Shawon Dunston,Mets,270,7,R,A,0
// 3.7,0.018,1012,7,2001,344,1st,TD,Adrian Brown,Pirates,210,8,S,B,0
// 3.7,0.046,1681,7,2002,10,UL,,Carl Everett,Expos,80,9,S,13,0
// 3.7,0.026,1927,7,2002,33,UL,,Michael Cuddyer,Twins,140,9,R,12,0
// 3.7,0.014,549,8,2000,138,1st,PR,Gerald Williams,Devil Rays,260,7,R,A,0
// 3.7,0.014,561,8,2000,141,1st,PR,Gabe Kapler,Rangers,270,7,R,A,0
// 3.7,0.018,765,8,2001,220,1st,TD,Tom Goodwin,Dodgers,210,8,L,A,0
// 3.7,0.014,888,8,2001,282,1st,TD,Shawon Dunston,Mets,270,7,R,A,0
// 3.7,0.018,1012,8,2001,344,1st,TD,Adrian Brown,Pirates,210,8,S,B,0
// 3.7,0.093,1463,8,2002,29,P,,Darren Bragg,Braves,40,9,L,11,0
// 3.7,0.017,407,9,2000,102,1st,PR,Carlos Lee,White Sox,220,7,R,B,0
// 3.7,0.014,549,9,2000,138,1st,PR,Gerald Williams,Devil Rays,260,7,R,A,0
// 3.7,0.018,765,9,2001,220,1st,TD,Tom Goodwin,Dodgers,210,8,L,A,0
// 3.7,0.015,820,9,2001,248,1st,TD,Chad Allen,Twins,240,7,R,A,0
// 3.7,0.014,888,9,2001,282,1st,TD,Shawon Dunston,Mets,270,7,R,A,0
// 3.7,0.018,1012,9,2001,344,1st,TD,Adrian Brown,Pirates,210,8,S,B,0
// 3.7,0.046,1681,9,2002,10,UL,,Carl Everett,Expos,80,9,S,13,0
// 3.7,0.026,1927,9,2002,33,UL,,Michael Cuddyer,Twins,140,9,R,12,0
// 3.7,0.370,3040,9,2004,152,UL,,Roger Cedeno,Cardinals,10,9,S,11,0
// 3.7,0.074,3097,9,2004,164,UL,,Brian Jordan,Braves,50,9,R,10,0
// 3.6,0.020,585,0,2000,147,1st,PR,Brad Fullmer,Blue Jays,180,6,L,B,0
// 3.6,0.019,389,2,2000,98,1st,PR,Ramon Hernandez,Athletics,190,7,R,C,0
// 3.6,0.017,477,2,2000,120,1st,PR,Doug Mirabelli,Giants,210,7,R,B,0
// 3.6,0.018,692,2,2001,184,1st,PR,Mike Redmond,Marlins,200,9,R,C,0
// 3.6,0.021,852,2,2001,264,1st,TD,Michael Barrett,Expos,170,7,R,C,0
// 3.6,0.033,1865,2,2002,27,UL,,Vance Wilson,Mets,110,9,R,10,0
// 3.6,0.072,1874,2,2002,28,UL,,Sandy Alomar Jr.,Rangers,50,9,R,10,0
// 3.6,0.072,1970,2,2002,36,UL,,Brook Fordyce,Orioles,50,9,R,9,0
// 3.6,0.033,2700,2,2003,104,UL,,Einar Diaz,Indians,110,10,R,12,0
// 3.6,0.051,2929,2,2004,132,UL,,Charles Johnson,Marlins,70,9,R,8,0
// 3.6,0.045,2933,2,2004,133,UL,,Brian Schneider,Nationals,80,9,L,12,0
// 3.6,0.020,856,3,2001,266,1st,TD,Brad Fullmer,Expos,180,6,L,B,0
// 3.6,0.060,1671,3,2002,9,UL,,Adam LaRoche,Braves,60,9,L,12,0
// 3.6,0.026,2903,3,2004,128,UL,,Carlos Pena,Tigers,140,9,L,10,0
// 3.6,0.019,127,4,2000,32,1st,PR,Bret Boone,Braves,190,6,R,B,0
// 3.6,0.026,815,4,2001,245,1st,TD,Jay Canizaro,Twins,140,7,R,B,0
// 3.6,0.016,846,4,2001,261,1st,TD,Todd Walker,Twins,220,7,L,A,0
// 3.6,0.023,1996,4,2002,39,UL,,John Mcdonald,Indians,160,9,R,12,0
// 3.6,0.020,2031,4,2002,42,UL,,Neifi Perez,Giants,180,9,S,13,0
// 3.6,0.016,2261,4,2003,63,UL,,Chone Figgins,Angels,220,9,S,20,0
// 3.6,0.033,3244,4,2004,199,UL,,Luis Rivas,Twins,110,10,R,21,0
// 3.6,0.015,443,5,2000,111,1st,PR,Aaron Boone,Reds,240,7,R,A,0
// 3.6,0.021,852,5,2001,264,1st,TD,Michael Barrett,Expos,170,7,R,C,0
// 3.6,0.045,1455,5,2002,25,P,,Tony Batista,Orioles,80,9,R,10,0
// 3.6,0.045,1936,5,2002,33,UL,,Tony Batista,Orioles,80,9,R,10,0
// 3.6,0.015,2901,5,2004,128,UL,,Jose Macias,Tigers,240,9,S,20,0
// 3.6,0.060,3598,5,2005,285,UL,,Pedro Feliz,Giants,60,7,R,14,0
// 3.6,0.016,1147,6,2001,411,1st,TD,Placido Polanco,Cardinals,220,8,R,B,0
// 3.6,0.026,2585,6,2003,92,UL,,Barry Larkin,Reds,140,9,R,13,0
// 3.6,0.024,2754,6,2004,110,UL,,Omar Vizquel,Indians,150,10,S,19,0
// 3.6,0.036,2955,6,2004,136,UL,,Alex Gonzalez,Marlins,100,9,R,8,0
// 3.6,0.021,3724,6,2005,318,UL,,Edgar Renteria,Cardinals,170,9,R,18,0
// 3.6,0.026,3753,6,2005,327,UL,,Julio Lugo,Devil Rays,140,10,R,18,0
// 3.6,0.016,407,7,2000,102,1st,PR,Carlos Lee,White Sox,220,7,R,B,0
// 3.6,0.016,425,7,2000,107,1st,PR,Wil Cordero,Pirates,230,7,R,B,0
// 3.6,0.014,549,7,2000,138,1st,PR,Gerald Williams,Devil Rays,260,7,R,A,0
// 3.6,0.021,550,7,2000,138,1st,PR,Melvin Mora,Orioles,170,8,R,A,0
// 3.6,0.026,1053,7,2001,364,1st,TD,Ruben Rivera,Padres,140,6,R,B,0
// 3.6,0.090,1463,7,2002,29,P,,Darren Bragg,Braves,40,9,L,11,0
// 3.6,0.028,1828,7,2002,24,UL,,Willie Bloomquist,Mariners,130,9,R,15,0
// 3.6,0.040,2692,7,2003,103,UL,,Coco Crisp,Indians,90,9,S,17,0
// 3.6,0.360,2865,7,2004,123,UL,,Bobby Higginson,Tigers,10,9,L,12,0
// 3.6,0.015,2901,7,2004,128,UL,,Jose Macias,Tigers,240,9,S,20,0
// 3.6,0.360,3040,7,2004,152,UL,,Roger Cedeno,Cardinals,10,9,S,11,0
// 3.6,0.072,3097,7,2004,164,UL,,Brian Jordan,Braves,50,9,R,10,0
// 3.6,0.033,3124,7,2004,170,UL,,Marquis Grissom,Dodgers,110,7,R,15,0
// 3.6,0.016,422,8,2000,106,1st,PR,Ruben Mateo,Rangers,220,7,R,A,0
// 3.6,0.026,1053,8,2001,364,1st,TD,Ruben Rivera,Padres,140,6,R,B,0
// 3.6,0.040,2692,8,2003,103,UL,,Coco Crisp,Indians,90,9,S,17,0
// 3.6,0.015,2901,8,2004,128,UL,,Jose Macias,Tigers,240,9,S,20,0
// 3.6,0.033,3124,8,2004,170,UL,,Marquis Grissom,Dodgers,110,7,R,15,0
// 3.6,0.030,150,9,2000,38,1st,PR,Roosevelt Brown,Cubs,120,7,L,B,0
// 3.6,0.016,422,9,2000,106,1st,PR,Ruben Mateo,Rangers,220,7,R,A,0
// 3.6,0.016,425,9,2000,107,1st,PR,Wil Cordero,Pirates,230,7,R,B,0
// 3.6,0.021,550,9,2000,138,1st,PR,Melvin Mora,Orioles,170,8,R,A,0
// 3.6,0.026,1053,9,2001,364,1st,TD,Ruben Rivera,Padres,140,6,R,B,0
// 3.6,0.090,1463,9,2002,29,P,,Darren Bragg,Braves,40,9,L,11,0
// 3.6,0.024,1762,9,2002,18,UL,,Carl Crawford,Devil Rays,150,9,L,16,0
// 3.6,0.028,1804,9,2002,22,UL,,Chuck Knoblauch,Royals,130,10,R,19,0
// 3.6,0.028,1828,9,2002,24,UL,,Willie Bloomquist,Mariners,130,9,R,15,0
// 3.6,0.040,2692,9,2003,103,UL,,Coco Crisp,Indians,90,9,S,17,0
// 3.6,0.360,2865,9,2004,123,UL,,Bobby Higginson,Tigers,10,9,L,12,0
// 3.5,0.032,222,2,2000,56,1st,PR,Gary Bennett,Phillies,110,7,R,C,0
// 3.5,0.023,308,2,2000,77,1st,PR,Jason Varitek,Red Sox,150,8,S,C,0
// 3.5,0.027,596,2,2000,149,1st,PR,Brent Mayne,Rockies,130,8,L,C,0
// 3.5,0.022,940,2,2001,308,1st,TD,Jorge Posada,Yankees,160,7,S,C,0
// 3.5,0.025,1456,2,2002,26,P,,Benito Santiago,Giants,140,9,R,10,0
// 3.5,0.044,1687,2,2002,11,UL,,Victor Martinez,Indians,80,10,S,14,0
// 3.5,0.070,3213,2,2004,191,UL,,Eddie Perez,Brewers,50,9,R,8,0
// 3.5,0.025,3482,2,2005,257,UL,,Benito Santiago,Giants,140,9,R,10,0
// 3.5,0.035,156,3,2000,39,1st,PR,Wally Joyner,Braves,100,8,L,C,0
// 3.5,0.027,240,3,2000,60,1st,PR,Chris Richard,Orioles,130,7,L,B,0
// 3.5,0.018,301,3,2000,76,1st,PR,Kevin Barker,Brewers,190,7,L,B,0
// 3.5,0.018,822,3,2001,249,1st,TD,Ron Coomer,Twins,200,6,R,B,0
// 3.5,0.025,1029,3,2001,352,1st,TD,Kevin Young,Pirates,140,7,R,B,0
// 3.5,0.025,1050,3,2001,363,1st,TD,Wally Joyner,Padres,140,8,L,C,0
// 3.5,0.032,2003,3,2002,39,UL,,Jeff Conine,Orioles,110,9,R,12,0
// 3.5,0.029,2221,3,2003,59,UL,,Jose Offerman,Red Sox,120,10,S,16,0
// 3.5,0.044,3429,3,2005,244,UL,,Kevin Young,Pirates,80,9,R,10,0
// 3.5,0.016,567,4,2000,142,1st,PR,Kurt Abbott,Rockies,220,7,R,B,0
// 3.5,0.018,919,4,2001,297,1st,TD,Chuck Knoblauch,Yankees,200,9,R,A,0
// 3.5,0.018,969,4,2001,322,1st,TD,Randy Velarde,Athletics,190,8,R,B,0
// 3.5,0.016,1147,4,2001,411,1st,TD,Placido Polanco,Cardinals,220,8,R,B,0
// 3.5,0.023,1460,4,2002,28,P,,Fernando Vina,Cardinals,150,9,L,14,0
// 3.5,0.023,1610,4,2002,3,UL,,Carlos Febles,Royals,150,9,R,20,0
// 3.5,0.021,2191,4,2003,57,UL,,Carlos Febles,Royals,170,8,R,19,0
// 3.5,0.029,2221,4,2003,59,UL,,Jose Offerman,Red Sox,120,10,S,16,0
// 3.5,0.023,2766,4,2004,111,UL,,Aaron Miles,Rockies,150,10,S,13,0
// 3.5,0.050,3056,4,2004,155,UL,,Tony Graffanino,Royals,70,9,R,13,0
// 3.5,0.027,3409,4,2005,239,UL,,Pokey Reese,Pirates,130,9,R,13,0
// 3.5,0.088,3487,4,2005,258,UL,,Tomas Perez,Phillies,40,9,S,8,0
// 3.5,0.044,3514,4,2005,265,UL,,Warren Morris,Pirates,80,8,L,11,0
// 3.5,0.023,3582,4,2005,281,UL,,Fernando Vina,Cardinals,150,9,L,14,0
// 3.5,0.018,822,5,2001,249,1st,TD,Ron Coomer,Twins,200,6,R,B,0
// 3.5,0.018,804,6,2001,240,1st,TD,Mark Loretta,Brewers,190,8,R,B,0
// 3.5,0.017,1868,6,2002,27,UL,,Rafael Furcal,Braves,210,9,S,17,0
// 3.5,0.088,3017,6,2004,147,UL,,Cristian Guzman,Nationals,40,9,S,12,0
// 3.5,0.027,3206,6,2004,189,UL,,Cristian Guzman,Twins,130,9,S,13,0
// 3.5,0.088,3487,6,2005,258,UL,,Tomas Perez,Phillies,40,9,S,8,0
// 3.5,0.050,3544,6,2005,272,UL,,Jack Wilson,Pirates,70,9,R,11,0
// 3.5,0.023,470,7,2000,118,1st,PR,Timoniel Perez,Mets,150,7,L,A,0
// 3.5,0.022,1187,7,2001,431,1st,TD,Gerald Williams,Devil Rays,160,7,R,B,0
// 3.5,0.023,1762,7,2002,18,UL,,Carl Crawford,Devil Rays,150,9,L,16,0
// 3.5,0.027,1804,7,2002,22,UL,,Chuck Knoblauch,Royals,130,10,R,19,0
// 3.5,0.019,66,8,2000,17,1st,PR,Juan Pierre,Rockies,180,8,L,A,0
// 3.5,0.021,550,8,2000,138,1st,PR,Melvin Mora,Orioles,170,8,R,A,0
// 3.5,0.022,1187,8,2001,431,1st,TD,Gerald Williams,Devil Rays,160,7,R,B,0
// 3.5,0.017,2171,8,2003,55,UL,,Juan Pierre,Marlins,210,10,L,25,0
// 3.5,0.058,2634,8,2003,97,UL,,Milton Bradley,Indians,60,9,S,11,0
// 3.5,0.027,3335,8,2005,221,UL,,Terrance Long,Athletics,130,8,L,10,0
// 3.5,0.023,470,9,2000,118,1st,PR,Timoniel Perez,Mets,150,7,L,A,0
// 3.5,0.022,1187,9,2001,431,1st,TD,Gerald Williams,Devil Rays,160,7,R,B,0
// 3.5,0.117,1742,9,2002,16,UL,,Terrmel Sledge,Nationals,30,9,L,13,0
// 3.5,0.015,2901,9,2004,128,UL,,Jose Macias,Tigers,240,9,S,20,0
// 3.5,0.032,3124,9,2004,170,UL,,Marquis Grissom,Dodgers,110,7,R,15,0
// 3.4,0.018,125,2,2000,32,1st,PR,Mark L. Johnson,White Sox,190,8,L,B,0
// 3.4,0.016,1168,2,2001,422,1st,TD,John Flaherty,Devil Rays,210,7,R,C,0
// 3.4,0.026,1616,2,2002,4,UL,,Sandy Alomar Jr.,White Sox,130,9,R,10,0
// 3.4,0.340,3177,2,2004,182,UL,,Chad Moeller,Brewers,10,9,R,8,0
// 3.4,0.049,3744,2,2005,324,UL,,Toby Hall,Devil Rays,70,9,R,8,0
// 3.4,0.017,99,3,2000,25,1st,PR,Travis Lee,Diamondbacks,200,7,L,A,0
// 3.4,0.018,804,3,2001,240,1st,TD,Mark Loretta,Brewers,190,8,R,B,0
// 3.4,0.023,987,3,2001,331,1st,TD,Travis Lee,Phillies,150,8,L,B,0
// 3.4,0.170,1638,3,2002,6,UL,,Carlos Rivera,Pirates,20,9,L,13,0
// 3.4,0.085,3487,3,2005,258,UL,,Tomas Perez,Phillies,40,9,S,8,0
// 3.4,0.017,189,4,2000,48,1st,PR,Mike Lansing,Rockies,200,7,R,B,0
// 3.4,0.016,472,4,2000,118,1st,PR,Pokey Reese,Reds,210,7,R,A,0
// 3.4,0.057,1657,4,2002,8,UL,,Roberto Alomar,Diamondbacks,60,9,S,13,0
// 3.4,0.024,2203,4,2003,58,UL,,Luis Rivas,Twins,140,9,R,21,0
// 3.4,0.043,3161,4,2004,178,UL,,Bill Hall,Brewers,80,9,R,13,0
// 3.4,0.023,670,5,2001,174,1st,PR,Carlos Guillen,Mariners,150,7,S,B,0
// 3.4,0.026,865,5,2001,270,1st,TD,Mike Mordecai,Expos,130,7,R,B,0
// 3.4,0.018,914,5,2001,295,1st,TD,Scott Brosius,Yankees,190,6,R,B,0
// 3.4,0.020,1079,5,2001,377,1st,TD,Bill Mueller,Giants,170,8,S,B,0
// 3.4,0.034,1518,5,2002,346,P,,Aramis Ramirez,Pirates,100,7,R,C,0
// 3.4,0.085,3487,5,2005,258,UL,,Tomas Perez,Phillies,40,9,S,8,0
// 3.4,0.068,3807,5,2005,344,UL,,Eric Hinske,Blue Jays,50,9,L,13,0
// 3.4,0.026,627,6,2000,159,1st,PR,Deivi Cruz,Tigers,130,7,R,C,0
// 3.4,0.023,670,6,2001,174,1st,PR,Carlos Guillen,Mariners,150,7,S,B,0
// 3.4,0.018,680,6,2001,178,1st,PR,Alex Gonzalez,Marlins,190,6,R,B,0
// 3.4,0.023,1962,6,2002,36,UL,,Mike Bordick,Blue Jays,150,9,R,12,0
// 3.4,0.031,1992,6,2002,38,UL,,Mike Bordick,Orioles,110,9,R,12,0
// 3.4,0.028,2085,6,2003,47,UL,,Orlando Cabrera,Angels,120,9,R,15,0
// 3.4,0.028,3050,6,2004,154,UL,,Jose Vizcaino,Astros,120,10,S,19,0
// 3.4,0.019,66,7,2000,17,1st,PR,Juan Pierre,Rockies,180,8,L,A,0
// 3.4,0.031,304,7,2000,76,1st,PR,Troy OLeary,Red Sox,110,7,L,C,0
// 3.4,0.013,798,7,2001,237,1st,TD,Marquis Grissom,Brewers,260,7,R,A,0
// 3.4,0.015,1014,7,2001,345,1st,TD,Brant Brown,Pirates,220,5,L,B,0
// 3.4,0.024,1209,7,2001,442,1st,TD,Ricky Ledee,Rangers,140,7,L,A,0
// 3.4,0.113,1742,7,2002,16,UL,,Terrmel Sledge,Nationals,30,9,L,13,0
// 3.4,0.043,1942,7,2002,34,UL,,Geoff Jenkins,Brewers,80,8,L,14,0
// 3.4,0.021,490,8,2000,123,1st,PR,Mike Darr,Padres,160,7,L,A,0
// 3.4,0.013,798,8,2001,237,1st,TD,Marquis Grissom,Brewers,260,7,R,A,0
// 3.4,0.015,1014,8,2001,345,1st,TD,Brant Brown,Pirates,220,5,L,B,0
// 3.4,0.021,1612,8,2002,3,UL,,Darin Erstad,Angels,160,10,L,16,0
// 3.4,0.020,1838,8,2002,25,UL,,Johnny Damon,Red Sox,170,10,L,19,0
// 3.4,0.019,66,9,2000,17,1st,PR,Juan Pierre,Rockies,180,8,L,A,0
// 3.4,0.031,304,9,2000,76,1st,PR,Troy OLeary,Red Sox,110,7,L,C,0
// 3.4,0.013,798,9,2001,237,1st,TD,Marquis Grissom,Brewers,260,7,R,A,0
// 3.4,0.023,987,9,2001,331,1st,TD,Travis Lee,Phillies,150,8,L,B,0
// 3.4,0.015,1014,9,2001,345,1st,TD,Brant Brown,Pirates,220,5,L,B,0
// 3.4,0.024,1209,9,2001,442,1st,TD,Ricky Ledee,Rangers,140,7,L,A,0
// 3.4,0.043,1942,9,2002,34,UL,,Geoff Jenkins,Brewers,80,8,L,14,0
// 3.4,0.024,3731,9,2005,320,UL,,Carl Crawford,Devil Rays,140,9,L,24,0
// 3.3,0.024,32,2,2000,8,1st,PR,Ben Molina,Angels,140,7,R,C,0
// 3.3,0.028,504,2,2000,126,1st,PR,Sandy Alomar Jr.,Indians,120,7,R,B,0
// 3.3,0.025,566,2,2000,142,1st,PR,Robert Fick,Tigers,130,7,L,A,0
// 3.3,0.022,773,2,2001,224,1st,TD,Todd Hundley,Dodgers,150,7,S,B,0
// 3.3,0.330,2697,2,2003,104,UL,,Paul Bako,Dodgers,10,9,L,10,0
// 3.3,0.330,2744,2,2004,109,UL,,Mike Redmond,Twins,10,9,R,10,0
// 3.3,0.330,2967,2,2004,138,UL,,Brad Ausmus,Astros,10,9,R,10,0
// 3.3,0.028,3622,2,2005,291,UL,,Benito Santiago,Giants,120,8,R,15,0
// 3.3,0.025,817,3,2001,246,1st,TD,Ron Coomer,Twins,130,7,R,B,0
// 3.3,0.017,1112,3,2001,394,1st,TD,Raul Ibanez,Mariners,190,6,L,B,0
// 3.3,0.330,1451,3,2002,23,P,,Geoff Blum,Devil Rays,10,9,S,10,0
// 3.3,0.016,721,4,2001,198,1st,TD,Bill Spiers,Astros,210,9,L,B,0
// 3.3,0.024,1097,4,2001,386,1st,TD,David Bell,Mariners,140,7,R,B,0
// 3.3,0.330,1451,4,2002,23,P,,Geoff Blum,Devil Rays,10,9,S,10,0
// 3.3,0.041,2848,4,2004,121,UL,,Damian Jackson,Tigers,80,9,R,13,0
// 3.3,0.028,3050,4,2004,154,UL,,Jose Vizcaino,Astros,120,10,S,19,0
// 3.3,0.037,3152,4,2004,176,UL,,Alex Cora,Dodgers,90,9,L,15,0
// 3.3,0.017,3560,4,2005,276,UL,,Damian Jackson,Padres,190,9,R,22,0
// 3.3,0.019,3736,4,2005,322,UL,,Brent Abernathy,Devil Rays,170,10,R,16,0
// 3.3,0.019,458,5,2000,115,1st,PR,Bill Mueller,Cubs,170,8,S,B,0
// 3.3,0.019,461,5,2000,116,1st,PR,Dave Magadan,Padres,170,9,L,C,0
// 3.3,0.016,721,5,2001,198,1st,TD,Bill Spiers,Astros,210,9,L,B,0
// 3.3,0.033,1017,5,2001,346,1st,TD,Aramis Ramirez,Pirates,100,7,R,C,0
// 3.3,0.024,1097,5,2001,386,1st,TD,David Bell,Mariners,140,7,R,B,0
// 3.3,0.330,1397,5,2002,2,P,,Mark Derosa,Braves,10,9,R,9,0
// 3.3,0.330,1451,5,2002,23,P,,Geoff Blum,Devil Rays,10,9,S,10,0
// 3.3,0.330,1628,5,2002,5,UL,,Todd Zeile,Mets,10,9,R,9,0
// 3.3,0.330,2093,5,2003,48,UL,,Travis Fryman,Indians,10,10,R,10,0
// 3.3,0.330,2406,5,2003,76,UL,,Geoff Blum,Padres,10,9,S,10,0
// 3.3,0.330,2516,5,2003,86,UL,,Mark DeRosa,Rangers,10,9,R,10,0
// 3.3,0.047,3537,5,2005,270,UL,,Sean Burroughs,Padres,70,10,L,11,0
// 3.3,0.330,3667,5,2005,301,UL,,Scott Spiezio,Mariners,10,9,S,10,0
// 3.3,0.017,207,6,2000,52,1st,PR,Mike Bordick,Orioles,190,7,R,B,0
// 3.3,0.330,1394,6,2001,1,P,,Barry Larkin,Reds,10,10,R,9,0
// 3.3,0.330,1451,6,2002,23,P,,Geoff Blum,Devil Rays,10,9,S,10,0
// 3.3,0.330,1600,6,2002,2,UL,,Bobby Crosby,Athletics,10,9,R,13,0
// 3.3,0.017,1669,6,2002,9,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.083,1775,6,2002,19,UL,,Wilson Valdez,Mariners,40,9,R,13,0
// 3.3,0.024,1966,6,2002,36,UL,,Felipe Lopez,Reds,140,9,S,17,0
// 3.3,0.017,2078,6,2003,46,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.330,2586,6,2003,92,UL,,Barry Larkin,Reds,10,10,R,9,0
// 3.3,0.028,3179,6,2004,183,UL,,Orlando Cabrera,Expos,120,9,R,16,0
// 3.3,0.330,3193,6,2004,186,UL,,Royce Clayton,Brewers,10,9,R,16,0
// 3.3,0.030,3238,6,2004,197,UL,,Cristian Guzman,Twins,110,9,S,16,0
// 3.3,0.021,490,7,2000,123,1st,PR,Mike Darr,Padres,160,7,L,A,0
// 3.3,0.030,562,7,2000,141,1st,PR,Dave Martinez,Braves,110,8,L,B,0
// 3.3,0.015,635,7,2000,162,1st,PR,Juan Encarnacion,Tigers,220,6,R,A,0
// 3.3,0.017,638,7,2000,163,1st,PR,Karim Garcia,Tigers,200,5,L,B,0
// 3.3,0.021,825,7,2001,250,1st,TD,Torii Hunter,Twins,160,7,R,B,0
// 3.3,0.022,987,7,2001,331,1st,TD,Travis Lee,Phillies,150,8,L,B,0
// 3.3,0.017,1112,7,2001,394,1st,TD,Raul Ibanez,Mariners,190,6,L,B,0
// 3.3,0.021,1612,7,2002,3,UL,,Darin Erstad,Angels,160,10,L,16,0
// 3.3,0.330,1639,7,2002,6,UL,,Quinton McCracken,Diamondbacks,10,9,S,10,0
// 3.3,0.017,1669,7,2002,9,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.019,1838,7,2002,25,UL,,Johnny Damon,Red Sox,170,10,L,19,0
// 3.3,0.017,2078,7,2003,46,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.021,3404,7,2005,238,UL,,Johnny Damon,Athletics,160,10,L,19,0
// 3.3,0.024,3731,7,2005,320,UL,,Carl Crawford,Devil Rays,140,9,L,24,0
// 3.3,0.021,825,8,2001,250,1st,TD,Torii Hunter,Twins,160,7,R,B,0
// 3.3,0.018,1049,8,2001,362,1st,TD,Eric Owens,Padres,180,8,R,A,0
// 3.3,0.047,1667,8,2002,9,UL,,Doug Glanville,Phillies,70,9,R,15,0
// 3.3,0.017,2078,8,2003,46,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.021,3404,8,2005,238,UL,,Johnny Damon,Athletics,160,10,L,19,0
// 3.3,0.041,3508,8,2005,263,UL,,Tike Redman,Pirates,80,9,L,16,0
// 3.3,0.021,490,9,2000,123,1st,PR,Mike Darr,Padres,160,7,L,A,0
// 3.3,0.030,562,9,2000,141,1st,PR,Dave Martinez,Braves,110,8,L,B,0
// 3.3,0.015,635,9,2000,162,1st,PR,Juan Encarnacion,Tigers,220,6,R,A,0
// 3.3,0.017,638,9,2000,163,1st,PR,Karim Garcia,Tigers,200,5,L,B,0
// 3.3,0.017,1112,9,2001,394,1st,TD,Raul Ibanez,Mariners,190,6,L,B,0
// 3.3,0.018,1519,9,2002,362,P,,Eric Owens,Padres,180,8,R,A,0
// 3.3,0.021,1612,9,2002,3,UL,,Darin Erstad,Angels,160,10,L,16,0
// 3.3,0.330,1639,9,2002,6,UL,,Quinton McCracken,Diamondbacks,10,9,S,10,0
// 3.3,0.017,1669,9,2002,9,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.019,1838,9,2002,25,UL,,Johnny Damon,Red Sox,170,10,L,19,0
// 3.3,0.017,2078,9,2003,46,UL,,Melvin Mora,Orioles,190,10,R,14,0
// 3.3,0.021,3404,9,2005,238,UL,,Johnny Damon,Athletics,160,10,L,19,0
// 3.2,0.032,484,2,2000,121,1st,PR,Eddie Taubensee,Reds,100,7,L,C,0
// 3.2,0.017,583,2,2000,146,1st,PR,Henry Blanco,Rockies,190,7,R,B,0
// 3.2,0.019,710,2,2001,193,1st,TD,Tony Eusebio,Astros,170,8,R,C,0
// 3.2,0.029,833,2,2001,254,1st,TD,Matt LeCroy,Twins,110,6,R,C,0
// 3.2,0.320,2968,2,2004,138,UL,,Brad Ausmus,Astros,10,9,R,10,0
// 3.2,0.032,298,3,2000,75,1st,PR,Rico Brogna,Braves,100,7,L,B,0
// 3.2,0.019,461,3,2000,116,1st,PR,Dave Magadan,Padres,170,9,L,C,0
// 3.2,0.025,566,3,2000,142,1st,PR,Robert Fick,Tigers,130,7,L,A,0
// 3.2,0.036,799,3,2001,237,1st,TD,Charlie Hayes,Brewers,90,7,R,C,0
// 3.2,0.064,1410,3,2002,8,P,,Chris Richard,Orioles,50,8,L,8,0
// 3.2,0.320,3667,3,2005,301,UL,,Scott Spiezio,Mariners,10,9,S,10,0
// 3.2,0.013,467,4,2000,117,1st,PR,Pokey Reese,Reds,240,7,R,A,0
// 3.2,0.018,616,4,2000,156,1st,PR,Luis Lopez,Brewers,180,7,S,B,0
// 3.2,0.018,619,4,2000,157,1st,PR,Luis Sojo,Yankees,180,7,R,B,0
// 3.2,0.021,769,4,2001,222,1st,TD,Mark Grudzielanek,Dodgers,150,8,R,B,0
// 3.2,0.012,788,4,2001,232,1st,TD,Eric Young,Dodgers,270,9,R,A,0
// 3.2,0.021,994,4,2001,335,1st,TD,Kevin Jordan,Phillies,150,7,R,C,0
// 3.2,0.160,1459,4,2002,27,P,,Carlos Febles,Royals,20,12,R,21,0
// 3.2,0.021,1631,4,2002,5,UL,,Luis Rivas,Twins,150,9,R,18,0
// 3.2,0.023,1905,4,2002,31,UL,,Mark Grudzielanek,Cubs,140,9,R,10,0
// 3.2,0.320,2158,4,2003,53,UL,,Pokey Reese,Red Sox,10,9,R,15,0
// 3.2,0.032,3069,4,2004,158,UL,,Mark Grudzielanek,Dodgers,100,9,R,9,0
// 3.2,0.036,799,5,2001,237,1st,TD,Charlie Hayes,Brewers,90,7,R,C,0
// 3.2,0.021,994,5,2001,335,1st,TD,Kevin Jordan,Phillies,150,7,R,C,0
// 3.2,0.027,1145,5,2001,410,1st,TD,Craig Paquette,Cardinals,120,6,R,B,0
// 3.2,0.040,3745,5,2005,325,UL,,Aubrey Huff,Devil Rays,80,8,L,12,0
// 3.2,0.015,41,6,2000,11,1st,PR,Tony Womack,Diamondbacks,220,7,L,A,0
// 3.2,0.016,600,6,2000,150,1st,PR,Neifi Perez,Rockies,200,7,S,B,0
// 3.2,0.018,616,6,2000,156,1st,PR,Luis Lopez,Brewers,180,7,S,B,0
// 3.2,0.021,628,6,2000,160,1st,PR,Royce Clayton,White Sox,150,7,R,B,0
// 3.2,0.015,721,6,2001,198,1st,TD,Bill Spiers,Astros,210,9,L,B,0
// 3.2,0.021,809,6,2001,242,1st,TD,Mark Loretta,Brewers,150,7,R,C,0
// 3.2,0.015,1154,6,2001,415,1st,TD,Edgar Renteria,Cardinals,210,7,R,A,0
// 3.2,0.011,1178,6,2001,427,1st,TD,Kevin Stocker,Devil Rays,300,9,S,A,0
// 3.2,0.025,1233,6,2001,454,1st,TD,Alex S. Gonzalez,Blue Jays,130,7,R,B,0
// 3.2,0.015,1312,6,2001,43,ASG,,Jimmy Rollins,Phillies,220,9,S,23,0
// 3.2,0.320,2158,6,2003,53,UL,,Pokey Reese,Red Sox,10,9,R,15,0
// 3.2,0.021,35,7,2000,9,1st,PR,Orlando Palmeiro,Angels,150,8,L,B,0
// 3.2,0.015,123,7,2000,31,1st,PR,Tony Womack,Diamondbacks,210,7,L,A,0
// 3.2,0.017,725,7,2001,200,1st,TD,Carlos Beltran,Royals,190,7,R,A,0
// 3.2,0.015,832,7,2001,254,1st,TD,Matt Lawton,Twins,220,8,L,A,0
// 3.2,0.018,1049,7,2001,362,1st,TD,Eric Owens,Padres,180,8,R,A,0
// 3.2,0.015,1056,7,2001,366,1st,TD,Ruben Rivera,Padres,210,6,R,A,0
// 3.2,0.027,1145,7,2001,410,1st,TD,Craig Paquette,Cardinals,120,6,R,B,0
// 3.2,0.020,1242,7,2001,459,1st,TD,Brian Mcrae,Blue Jays,160,7,S,B,0
// 3.2,0.018,1519,7,2002,362,P,,Eric Owens,Padres,180,8,R,A,0
// 3.2,0.020,2159,7,2003,54,UL,,Doug Glanville,Phillies,160,8,R,19,0
// 3.2,0.027,2314,7,2003,68,UL,,Milton Bradley,Indians,120,8,S,18,0
// 3.2,0.320,3450,7,2005,249,UL,,Chris Singleton,Athletics,10,9,L,12,0
// 3.2,0.032,316,8,2000,79,1st,PR,Damon Buford,Cubs,100,7,R,B,0
// 3.2,0.017,725,8,2001,200,1st,TD,Carlos Beltran,Royals,190,7,R,A,0
// 3.2,0.015,1056,8,2001,366,1st,TD,Ruben Rivera,Padres,210,6,R,A,0
// 3.2,0.018,1519,8,2002,362,P,,Eric Owens,Padres,180,8,R,A,0
// 3.2,0.020,2159,8,2003,54,UL,,Doug Glanville,Phillies,160,8,R,19,0
// 3.2,0.027,2314,8,2003,68,UL,,Milton Bradley,Indians,120,8,S,18,0
// 3.2,0.021,35,9,2000,9,1st,PR,Orlando Palmeiro,Angels,150,8,L,B,0
// 3.2,0.015,123,9,2000,31,1st,PR,Tony Womack,Diamondbacks,210,7,L,A,0
// 3.2,0.032,316,9,2000,79,1st,PR,Damon Buford,Cubs,100,7,R,B,0
// 3.2,0.017,725,9,2001,200,1st,TD,Carlos Beltran,Royals,190,7,R,A,0
// 3.2,0.020,825,9,2001,250,1st,TD,Torii Hunter,Twins,160,7,R,B,0
// 3.2,0.015,832,9,2001,254,1st,TD,Matt Lawton,Twins,220,8,L,A,0
// 3.2,0.018,1049,9,2001,362,1st,TD,Eric Owens,Padres,180,8,R,A,0
// 3.2,0.015,1056,9,2001,366,1st,TD,Ruben Rivera,Padres,210,6,R,A,0
// 3.2,0.027,1145,9,2001,410,1st,TD,Craig Paquette,Cardinals,120,6,R,B,0
// 3.2,0.020,1242,9,2001,459,1st,TD,Brian Mcrae,Blue Jays,160,7,S,B,0
// 3.2,0.107,1405,9,2002,6,P,,Brandon Berger,Royals,30,8,R,11,0
// 3.2,0.020,2159,9,2003,54,UL,,Doug Glanville,Phillies,160,8,R,19,0
// 3.2,0.027,2314,9,2003,68,UL,,Milton Bradley,Indians,120,8,S,18,0
// 3.1,0.024,238,2,2000,60,1st,PR,A.J. Pierzynski,Twins,130,7,L,B,0
// 3.1,0.031,1077,2,2001,376,1st,TD,Doug Mirabelli,Giants,100,7,R,B,0
// 3.1,0.044,1923,2,2002,32,UL,,Javy Lopez,Braves,70,8,R,8,0
// 3.1,0.310,2873,2,2004,124,UL,,Brandon Inge,Tigers,10,9,R,10,0
// 3.1,0.062,3252,2,2004,201,UL,,Michael Barrett,Expos,50,8,R,12,0
// 3.1,0.103,1759,3,2002,17,UL,,Mark Grace,Diamondbacks,30,9,L,9,0
// 3.1,0.018,1986,3,2002,38,UL,,Howie Clark,Blue Jays,170,11,L,10,0
// 3.1,0.103,2428,3,2003,78,UL,,Craig Counsell,Diamondbacks,30,9,L,15,0
// 3.1,0.103,3370,3,2005,229,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 3.1,0.017,489,4,2000,123,1st,PR,Mark McLemore,Mariners,180,8,S,B,0
// 3.1,0.016,1144,4,2001,410,1st,TD,Joe Mcewing,Cardinals,190,7,R,B,0
// 3.1,0.026,1419,4,2002,12,P,,Denny Hocking,Twins,120,9,S,10,0
// 3.1,0.024,1633,4,2002,5,UL,,Adam Kennedy,Angels,130,9,L,16,0
// 3.1,0.015,1783,4,2002,20,UL,,Cesar Izturis,Dodgers,210,8,S,19,0
// 3.1,0.026,1898,4,2002,30,UL,,Juan Castro,Reds,120,9,R,12,0
// 3.1,0.018,1986,4,2002,38,UL,,Howie Clark,Blue Jays,170,11,L,10,0
// 3.1,0.016,2056,4,2002,44,UL,,Jerry Hairston Jr.,Orioles,190,9,R,20,0
// 3.1,0.103,2428,4,2003,78,UL,,Craig Counsell,Diamondbacks,30,9,L,15,0
// 3.1,0.155,2910,4,2004,129,UL,,Ramon Santiago,Tigers,20,9,S,12,0
// 3.1,0.103,3370,4,2005,229,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 3.1,0.078,3488,4,2005,258,UL,,Jose Castillo,Pirates,40,9,R,12,0
// 3.1,0.026,116,5,2000,29,1st,PR,Matt Williams,Diamondbacks,120,7,R,C,0
// 3.1,0.022,311,5,2000,78,1st,PR,John Valentin,Red Sox,140,6,R,C,0
// 3.1,0.017,619,5,2000,157,1st,PR,Luis Sojo,Yankees,180,7,R,B,0
// 3.1,0.024,646,5,2000,166,1st,PR,Pedro Feliz,Giants,130,5,R,C,0
// 3.1,0.022,850,5,2001,263,1st,TD,Shane Andrews,Expos,140,6,R,C,0
// 3.1,0.018,1986,5,2002,38,UL,,Howie Clark,Blue Jays,170,11,L,10,0
// 3.1,0.103,2428,5,2003,78,UL,,Craig Counsell,Diamondbacks,30,9,L,15,0
// 3.1,0.103,3370,5,2005,229,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 3.1,0.078,3666,5,2005,301,UL,,Mark McLemore,Mariners,40,9,S,11,0
// 3.1,0.019,819,6,2001,247,1st,TD,Cristian Guzman,Twins,160,7,S,A,0
// 3.1,0.031,1013,6,2001,344,1st,TD,Pat Meares,Pirates,100,6,R,C,0
// 3.1,0.015,1048,6,2001,362,1st,TD,Damian Jackson,Padres,210,7,R,A,0
// 3.1,0.026,1419,6,2002,12,P,,Denny Hocking,Twins,120,9,S,10,0
// 3.1,0.052,1727,6,2002,14,UL,,Alex Cintron,Diamondbacks,60,9,S,14,0
// 3.1,0.015,1783,6,2002,20,UL,,Cesar Izturis,Dodgers,210,8,S,19,0
// 3.1,0.052,1947,6,2002,34,UL,,Deivi Cruz,Orioles,60,9,R,9,0
// 3.1,0.310,1964,6,2002,36,UL,,Neifi Perez,Cubs,10,9,S,10,0
// 3.1,0.018,1986,6,2002,38,UL,,Howie Clark,Blue Jays,170,11,L,10,0
// 3.1,0.155,2910,6,2004,129,UL,,Ramon Santiago,Tigers,20,9,S,12,0
// 3.1,0.052,2923,6,2004,131,UL,,Alex Gonzalez,Marlins,60,8,R,10,0
// 3.1,0.026,3005,6,2004,145,UL,,Denny Hocking,Twins,120,9,S,16,0
// 3.1,0.310,3153,6,2004,176,UL,,Craig Counsell,Brewers,10,9,L,16,0
// 3.1,0.103,3370,6,2005,229,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 3.1,0.078,3666,6,2005,301,UL,,Mark McLemore,Mariners,40,9,S,11,0
// 3.1,0.017,27,7,2000,7,1st,PR,Todd Greene,Angels,180,5,R,B,0
// 3.1,0.014,195,7,2000,49,1st,PR,Rich Amaral,Orioles,220,8,R,A,0
// 3.1,0.031,316,7,2000,79,1st,PR,Damon Buford,Cubs,100,7,R,B,0
// 3.1,0.015,1054,7,2001,365,1st,TD,Eric Owens,Padres,210,7,R,A,0
// 3.1,0.016,1144,7,2001,410,1st,TD,Joe Mcewing,Cardinals,190,7,R,B,0
// 3.1,0.026,1401,7,2002,4,P,,Armando Rios,Pirates,120,9,L,15,0
// 3.1,0.103,1405,7,2002,6,P,,Brandon Berger,Royals,30,8,R,11,0
// 3.1,0.078,3708,7,2005,313,UL,,Orlando Palmeiro,Cardinals,40,9,L,12,0
// 3.1,0.018,3754,7,2005,328,UL,,Jason Tyner,Devil Rays,170,9,L,23,0
// 3.1,0.014,195,8,2000,49,1st,PR,Rich Amaral,Orioles,220,8,R,A,0
// 3.1,0.015,1054,8,2001,365,1st,TD,Eric Owens,Padres,210,7,R,A,0
// 3.1,0.016,1144,8,2001,410,1st,TD,Joe Mcewing,Cardinals,190,7,R,B,0
// 3.1,0.019,1242,8,2001,459,1st,TD,Brian Mcrae,Blue Jays,160,7,S,B,0
// 3.1,0.062,3283,8,2004,208,UL,,Endy Chavez,Expos,50,9,L,16,0
// 3.1,0.052,3372,8,2005,230,UL,,Doug Glanville,Phillies,60,8,R,14,0
// 3.1,0.310,3450,8,2005,249,UL,,Chris Singleton,Athletics,10,9,L,12,0
// 3.1,0.039,3486,8,2005,258,UL,,Tsuyoshi Shinjo,Giants,80,8,R,11,0
// 3.1,0.018,3754,8,2005,328,UL,,Jason Tyner,Devil Rays,170,9,L,23,0
// 3.1,0.017,27,9,2000,7,1st,PR,Todd Greene,Angels,180,5,R,B,0
// 3.1,0.014,195,9,2000,49,1st,PR,Rich Amaral,Orioles,220,8,R,A,0
// 3.1,0.019,420,9,2000,105,1st,PR,Chris Singleton,White Sox,160,7,L,A,0
// 3.1,0.017,489,9,2000,123,1st,PR,Mark McLemore,Mariners,180,8,S,B,0
// 3.1,0.015,1054,9,2001,365,1st,TD,Eric Owens,Padres,210,7,R,A,0
// 3.1,0.016,1144,9,2001,410,1st,TD,Joe Mcewing,Cardinals,190,7,R,B,0
// 3.1,0.044,1393,9,2001,1,P,,Aaron Guiel,Royals,70,8,L,13,0
// 3.1,0.026,1401,9,2002,4,P,,Armando Rios,Pirates,120,9,L,15,0
// 3.1,0.028,2954,9,2004,136,UL,,Eric Owens,Marlins,110,9,R,18,0
// 3.1,0.310,3450,9,2005,249,UL,,Chris Singleton,Athletics,10,9,L,12,0
// 3.1,0.018,3754,9,2005,328,UL,,Jason Tyner,Devil Rays,170,9,L,23,0
// 3,0.019,789,2,2001,232,1st,TD,Henry Blanco,Brewers,160,7,R,C,0
// 3,0.027,953,2,2001,314,1st,TD,Ramon Hernandez,Athletics,110,7,R,C,0
// 3,0.033,1718,2,2002,14,UL,,Einar Diaz,Rangers,90,9,R,10,0
// 3,0.300,1841,2,2002,25,UL,,Henry Blanco,Cubs,10,9,R,10,0
// 3,0.025,2049,2,2002,44,UL,,Brent Mayne,Royals,120,10,L,12,0
// 3,0.300,2778,2,2004,113,UL,,Einar Diaz,Cardinals,10,9,R,10,0
// 3,0.300,3194,2,2004,186,UL,,Henry Blanco,Twins,10,9,R,8,0
// 3,0.100,3472,2,2005,255,UL,,Johnny Estrada,Phillies,30,7,S,9,0
// 3,0.043,3505,2,2005,263,UL,,Jason Kendall,Pirates,70,10,R,15,0
// 3,0.150,3817,2,2005,348,UL,,Darrin Fletcher,Blue Jays,20,7,L,9,0
// 3,0.075,3666,3,2005,301,UL,,Mark McLemore,Mariners,40,9,S,11,0
// 3,0.014,117,4,2000,30,1st,PR,Eric Young,Cubs,210,8,R,A,0
// 3,0.020,414,4,2000,104,1st,PR,Marcus Giles,Braves,150,7,R,A,0
// 3,0.015,664,4,2001,172,1st,PR,Chris Woodward,Blue Jays,200,7,R,A,0
// 3,0.033,1740,4,2002,16,UL,,Rey Sanchez,Mets,90,10,R,16,0
// 3,0.050,2234,4,2003,60,UL,,Rey Sanchez,Red Sox,60,10,R,9,0
// 3,0.038,2661,4,2003,100,UL,,Ricky Gutierrez,Indians,80,9,R,9,0
// 3,0.075,3666,4,2005,301,UL,,Mark McLemore,Mariners,40,9,S,11,0
// 3,0.020,418,5,2000,105,1st,PR,Craig Counsell,Diamondbacks,150,8,L,B,0
// 3,0.020,523,5,2000,131,1st,PR,Travis Fryman,Indians,150,6,R,B,0
// 3,0.018,533,5,2000,134,1st,PR,Vinny Castilla,Devil Rays,170,6,R,B,0
// 3,0.030,652,5,2000,168,1st,PR,Albert Pujols,Cardinals,100,6,R,B,0
// 3,0.021,803,5,2001,239,1st,TD,Jose Hernandez,Brewers,140,7,R,B,0
// 3,0.030,907,5,2001,291,1st,TD,Scott Brosius,Yankees,100,6,R,C,0
// 3,0.100,2857,5,2004,122,UL,,Shane Halter,Tigers,30,9,R,9,0
// 3,0.021,90,6,2000,23,1st,PR,Enrique Wilson,Pirates,140,7,S,B,0
// 3,0.018,130,6,2000,33,1st,PR,Jimmy Rollins,Phillies,170,7,S,A,0
// 3,0.020,418,6,2000,105,1st,PR,Craig Counsell,Diamondbacks,150,8,L,B,0
// 3,0.017,608,6,2000,153,1st,PR,Neifi Perez,Rockies,180,6,S,B,0
// 3,0.015,664,6,2001,172,1st,PR,Chris Woodward,Blue Jays,200,7,R,A,0
// 3,0.021,803,6,2001,239,1st,TD,Jose Hernandez,Brewers,140,7,R,B,0
// 3,0.018,1051,6,2001,363,1st,TD,Desi Relaford,Padres,170,8,S,A,0
// 3,0.019,1195,6,2001,435,1st,TD,Royce Clayton,Rangers,160,7,R,A,0
// 3,0.025,1835,6,2002,24,UL,,Tony Womack,Diamondbacks,120,9,L,19,0
// 3,0.020,1856,6,2002,26,UL,,Tony Womack,Diamondbacks,150,9,L,22,0
// 3,0.025,1972,6,2002,37,UL,,Rafael Furcal,Braves,120,9,S,16,0
// 3,0.016,1980,6,2002,37,UL,,Rey Sanchez,Braves,190,9,R,20,0
// 3,0.021,2060,6,2002,45,UL,,Neifi Perez,Royals,140,9,S,20,0
// 3,0.100,2428,6,2003,78,UL,,Craig Counsell,Diamondbacks,30,9,L,15,0
// 3,0.023,3033,6,2004,150,UL,,Julio Lugo,Astros,130,10,R,18,0
// 3,0.019,3147,6,2004,175,UL,,Cristian Guzman,Twins,160,8,S,13,0
// 3,0.300,3583,6,2005,281,UL,,Ramon Vazquez,Padres,10,10,L,12,0
// 3,0.016,345,7,2000,87,1st,PR,Derek Bell,Mets,190,7,R,A,0
// 3,0.019,420,7,2000,105,1st,PR,Chris Singleton,White Sox,160,7,L,A,0
// 3,0.014,433,7,2000,109,1st,PR,Chad Hermansen,Pirates,210,5,R,A,0
// 3,0.017,489,7,2000,123,1st,PR,Mark McLemore,Mariners,180,8,S,B,0
// 3,0.030,652,7,2000,168,1st,PR,Albert Pujols,Cardinals,100,6,R,B,0
// 3,0.020,682,7,2001,179,1st,PR,Mark Kotsay,Marlins,150,6,L,B,0
// 3,0.019,828,7,2001,252,1st,TD,Torii Hunter,Twins,160,6,R,B,0
// 3,0.027,849,7,2001,262,1st,TD,Milton Bradley,Expos,110,7,S,B,0
// 3,0.018,1105,7,2001,390,1st,TD,Rickey Henderson,Mariners,170,9,R,A,0
// 3,0.043,1393,7,2001,1,P,,Aaron Guiel,Royals,70,8,L,13,0
// 3,0.100,2290,7,2003,65,UL,,Roosevelt Brown,Cubs,30,8,L,9,0
// 3,0.027,2954,7,2004,136,UL,,Eric Owens,Marlins,110,9,R,18,0
// 3,0.019,420,8,2000,105,1st,PR,Chris Singleton,White Sox,160,7,L,A,0
// 3,0.014,433,8,2000,109,1st,PR,Chad Hermansen,Pirates,210,5,R,A,0
// 3,0.019,828,8,2001,252,1st,TD,Torii Hunter,Twins,160,6,R,B,0
// 3,0.027,849,8,2001,262,1st,TD,Milton Bradley,Expos,110,7,S,B,0
// 3,0.038,2561,8,2003,90,UL,,Tsuyoshi Shinjo,Giants,80,8,R,11,0
// 3,0.027,2954,8,2004,136,UL,,Eric Owens,Marlins,110,9,R,18,0
// 3,0.016,345,9,2000,87,1st,PR,Derek Bell,Mets,190,7,R,A,0
// 3,0.014,433,9,2000,109,1st,PR,Chad Hermansen,Pirates,210,5,R,A,0
// 3,0.030,652,9,2000,168,1st,PR,Albert Pujols,Cardinals,100,6,R,B,0
// 3,0.020,682,9,2001,179,1st,PR,Mark Kotsay,Marlins,150,6,L,B,0
// 3,0.019,828,9,2001,252,1st,TD,Torii Hunter,Twins,160,6,R,B,0
// 3,0.027,849,9,2001,262,1st,TD,Milton Bradley,Expos,110,7,S,B,0
// 3,0.100,2290,9,2003,65,UL,,Roosevelt Brown,Cubs,30,8,L,9,0
// 3,0.075,3708,9,2005,313,UL,,Orlando Palmeiro,Cardinals,40,9,L,12,0
// 2.9,0.097,979,0,2001,327,1st,TD,Rob Ducey,Phillies,30,7,R,B,0
// 2.9,0.017,1126,2,2001,401,1st,TD,Dan Wilson,Mariners,170,7,R,B,0
// 2.9,0.036,1689,2,2002,11,UL,,Einar Diaz,Indians,80,9,R,12,0
// 2.9,0.073,1875,2,2002,28,UL,,Sandy Alomar Jr.,White Sox,40,8,R,13,0
// 2.9,0.026,2225,2,2003,60,UL,,Mike Lieberthal,Phillies,110,9,R,12,0
// 2.9,0.097,2857,3,2004,122,UL,,Shane Halter,Tigers,30,9,R,9,0
// 2.9,0.013,215,4,2000,54,1st,PR,Delino Deshields,Orioles,230,8,L,A,0
// 2.9,0.019,418,4,2000,105,1st,PR,Craig Counsell,Diamondbacks,150,8,L,B,0
// 2.9,0.017,1111,4,2001,393,1st,TD,Mark McLemore,Mariners,170,8,S,A,0
// 2.9,0.012,1164,4,2001,420,1st,TD,Miguel Cairo,Devil Rays,240,8,R,A,0
// 2.9,0.097,2857,4,2004,122,UL,,Shane Halter,Tigers,30,9,R,9,0
// 2.9,0.048,3316,4,2005,216,UL,,Jose Reyes,Mets,60,9,S,17,0
// 2.9,0.021,90,5,2000,23,1st,PR,Enrique Wilson,Pirates,140,7,S,B,0
// 2.9,0.018,704,6,2001,190,1st,TD,Tim Bogar,Astros,160,7,R,B,0
// 2.9,0.097,2857,6,2004,122,UL,,Shane Halter,Tigers,30,9,R,9,0
// 2.9,0.016,343,7,2000,86,1st,PR,Lance Johnson,Cubs,180,7,L,A,0
// 2.9,0.097,2363,7,2003,72,UL,,Kevin Mench,Rangers,30,8,R,14,0
// 2.9,0.290,2615,7,2003,95,UL,,Reggie Taylor,Reds,10,9,L,12,0
// 2.9,0.058,3029,7,2004,149,UL,,Chuck Knoblauch,Royals,50,8,R,15,0
// 2.9,0.290,2615,8,2003,95,UL,,Reggie Taylor,Reds,10,9,L,12,0
// 2.9,0.017,1105,9,2001,390,1st,TD,Rickey Henderson,Mariners,170,9,R,A,0
// 2.9,0.097,2363,9,2003,72,UL,,Kevin Mench,Rangers,30,8,R,14,0
// 2.9,0.290,2615,9,2003,95,UL,,Reggie Taylor,Reds,10,9,L,12,0
// 2.9,0.058,3029,9,2004,149,UL,,Chuck Knoblauch,Royals,50,8,R,15,0
// 2.8,0.016,453,2,2000,114,1st,PR,Carlos Hernandez,Padres,170,6,R,B,0
// 2.8,0.018,519,2,2000,130,1st,PR,Einar Diaz,Indians,160,7,R,B,0
// 2.8,0.040,2035,2,2002,42,UL,,Geronimo Gil,Orioles,70,8,R,9,0
// 2.8,0.018,221,3,2000,56,1st,PR,Brant Brown,Marlins,160,5,L,B,0
// 2.8,0.093,3406,3,2005,238,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 2.8,0.016,77,4,2000,20,1st,PR,Manny Alexander,Red Sox,180,7,R,B,0
// 2.8,0.023,430,4,2000,108,1st,PR,Marlon Anderson,Phillies,120,7,L,A,0
// 2.8,0.019,860,4,2001,268,1st,TD,Wilton Guerrero,Expos,150,7,S,B,0
// 2.8,0.280,1435,4,2002,17,P,,Joe McEwing,Mets,10,9,R,10,0
// 2.8,0.023,1893,4,2002,30,UL,,Pokey Reese,Pirates,120,8,R,19,0
// 2.8,0.070,1912,4,2002,31,UL,,Keith Lockhart,Braves,40,8,L,9,0
// 2.8,0.023,2602,4,2003,94,UL,,Pokey Reese,Reds,120,8,R,19,0
// 2.8,0.056,2782,4,2004,113,UL,,Jose Ortiz,Rockies,50,9,R,9,0
// 2.8,0.280,3234,4,2004,196,UL,,Chris Gomez,Twins,10,9,R,9,0
// 2.8,0.093,3406,4,2005,238,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 2.8,0.016,77,5,2000,20,1st,PR,Manny Alexander,Red Sox,180,7,R,B,0
// 2.8,0.047,1207,5,2001,441,1st,TD,Mike Lamb,Rangers,60,7,L,C,0
// 2.8,0.040,1696,5,2002,12,UL,,Sean Burroughs,Padres,70,9,L,14,0
// 2.8,0.056,1846,5,2002,25,UL,,Vinny Castilla,Braves,50,8,R,10,0
// 2.8,0.040,2141,5,2003,52,UL,,Sean Burroughs,Padres,70,8,L,16,0
// 2.8,0.093,3406,5,2005,238,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 2.8,0.016,77,6,2000,20,1st,PR,Manny Alexander,Red Sox,180,7,R,B,0
// 2.8,0.022,454,6,2000,114,1st,PR,Benji Gil,Angels,130,7,R,A,0
// 2.8,0.023,1893,6,2002,30,UL,,Pokey Reese,Pirates,120,8,R,19,0
// 2.8,0.023,2602,6,2003,94,UL,,Pokey Reese,Reds,120,8,R,19,0
// 2.8,0.140,2871,6,2004,124,UL,,Deivi Cruz,Tigers,20,8,R,13,0
// 2.8,0.093,3406,6,2005,238,UL,,Enrique Wilson,Yankees,30,9,S,12,0
// 2.8,0.015,181,7,2000,46,1st,PR,Tom Goodwin,Rockies,190,7,L,A,0
// 2.8,0.018,221,7,2000,56,1st,PR,Brant Brown,Marlins,160,5,L,B,0
// 2.8,0.022,406,7,2000,102,1st,PR,Tsuyoshi Shinjo,Mets,130,6,R,A,0
// 2.8,0.028,637,7,2000,163,1st,PR,Dee Brown,Royals,100,6,L,A,0
// 2.8,0.056,3063,7,2004,157,UL,,Dee Brown,Royals,50,8,L,13,0
// 2.8,0.056,3306,7,2004,214,UL,,Rondell White,Yankees,50,8,R,9,0
// 2.8,0.015,181,8,2000,46,1st,PR,Tom Goodwin,Rockies,190,7,L,A,0
// 2.8,0.016,343,8,2000,86,1st,PR,Lance Johnson,Cubs,180,7,L,A,0
// 2.8,0.022,406,8,2000,102,1st,PR,Tsuyoshi Shinjo,Mets,130,6,R,A,0
// 2.8,0.020,981,8,2001,328,1st,TD,Doug Glanville,Phillies,140,7,R,A,0
// 2.8,0.040,1452,8,2002,24,P,,Wendell Magee,Tigers,70,8,R,18,0
// 2.8,0.040,2344,8,2003,70,UL,,Corey Patterson,Cubs,70,8,L,18,0
// 2.8,0.031,2378,8,2003,73,UL,,Corey Patterson,Cubs,90,8,L,15,0
// 2.8,0.022,2791,8,2004,114,UL,,Juan Pierre,Rockies,130,9,L,23,0
// 2.8,0.015,181,9,2000,46,1st,PR,Tom Goodwin,Rockies,190,7,L,A,0
// 2.8,0.018,221,9,2000,56,1st,PR,Brant Brown,Marlins,160,5,L,B,0
// 2.8,0.016,343,9,2000,86,1st,PR,Lance Johnson,Cubs,180,7,L,A,0
// 2.8,0.022,406,9,2000,102,1st,PR,Tsuyoshi Shinjo,Mets,130,6,R,A,0
// 2.8,0.028,637,9,2000,163,1st,PR,Dee Brown,Royals,100,6,L,A,0
// 2.8,0.020,981,9,2001,328,1st,TD,Doug Glanville,Phillies,140,7,R,A,0
// 2.8,0.047,2002,9,2002,39,UL,,Brady Anderson,Orioles,60,9,L,19,0
// 2.8,0.040,2344,9,2003,70,UL,,Corey Patterson,Cubs,70,8,L,18,0
// 2.8,0.056,3063,9,2004,157,UL,,Dee Brown,Royals,50,8,L,13,0
// 2.8,0.056,3306,9,2004,214,UL,,Rondell White,Yankees,50,8,R,9,0
// 2.7,0.045,885,0,2001,280,1st,TD,Lenny Harris,Mets,60,7,L,A,0
// 2.7,0.270,1705,0,2002,12,UL,,Tim Salmon,Angels,10,9,R,9,0
// 2.7,0.023,13,2,2000,4,1st,PR,Ben Molina,Angels,120,6,R,C,0
// 2.7,0.025,157,2,2000,40,1st,PR,Sandy Alomar Jr.,Indians,110,6,R,C,0
// 2.7,0.025,242,2,2000,61,1st,PR,Ben Davis,Padres,110,7,S,B,0
// 2.7,0.054,344,2,2000,86,1st,PR,Jeff Reed,Cubs,50,7,L,C,0
// 2.7,0.019,371,2,2000,93,1st,PR,Benito Santiago,Cubs,140,6,R,B,0
// 2.7,0.027,392,2,2000,98,1st,PR,Mark L. Johnson,White Sox,100,7,L,B,0
// 2.7,0.023,469,2,2000,118,1st,PR,Bobby Estalella,Giants,120,6,R,B,0
// 2.7,0.025,1353,2,2001,40,DS,,Sandy Alomar Jr.,Indians,110,6,R,C,0
// 2.7,0.270,2970,2,2004,139,UL,,Dan Wilson,Mariners,10,9,R,10,0
// 2.7,0.023,3001,2,2004,144,UL,,Brad Ausmus,Astros,120,8,R,16,0
// 2.7,0.027,3158,2,2004,178,UL,,Henry Blanco,Brewers,100,8,R,16,0
// 2.7,0.270,3548,2,2005,273,UL,,Gary Bennett,Padres,10,9,R,10,0
// 2.7,0.270,3675,2,2005,303,UL,,Dan Wilson,Mariners,10,9,R,8,0
// 2.7,0.014,3696,2,2005,309,UL,,Mike Matheny,Cardinals,200,9,R,8,0
// 2.7,0.019,15,3,2000,4,1st,PR,Darin Erstad,Angels,140,6,L,B,0
// 2.7,0.045,334,3,2000,84,1st,PR,Wes Helms,Braves,60,6,R,C,0
// 2.7,0.030,836,3,2001,256,1st,TD,Doug Mientkiewicz,Twins,90,7,L,C,0
// 2.7,0.025,24,4,2000,6,1st,PR,Adam Kennedy,Angels,110,6,L,A,0
// 2.7,0.023,1015,4,2001,345,1st,TD,Warren Morris,Pirates,120,8,L,B,0
// 2.7,0.014,2042,4,2002,43,UL,,Craig Counsell,Diamondbacks,200,10,L,17,0
// 2.7,0.270,3324,4,2005,218,UL,,Joe McEwing,Mets,10,9,R,14,0
// 2.7,0.025,328,5,2000,82,1st,PR,Willie Greene,Cubs,110,6,L,B,0
// 2.7,0.045,334,5,2000,84,1st,PR,Wes Helms,Braves,60,6,R,C,0
// 2.7,0.090,1446,5,2002,22,P,,Pedro Feliz,Giants,30,8,R,8,0
// 2.7,0.016,589,6,2000,148,1st,PR,Alex Gonzalez,Blue Jays,170,6,R,A,0
// 2.7,0.019,629,6,2000,160,1st,PR,Deivi Cruz,Tigers,140,6,R,C,0
// 2.7,0.027,643,6,2000,165,1st,PR,Jack Wilson,Pirates,100,7,R,B,0
// 2.7,0.023,851,6,2001,263,1st,TD,Orlando Cabrera,Expos,120,6,R,B,0
// 2.7,0.030,1395,6,2002,2,P,,Abraham Nunez,Pirates,90,9,S,16,0
// 2.7,0.027,1773,6,2002,19,UL,,Rey Ordonez,Devil Rays,100,9,R,15,0
// 2.7,0.270,3164,6,2004,179,UL,,Cesar Izturis,Dodgers,10,9,S,12,0
// 2.7,0.270,3324,6,2005,218,UL,,Joe McEwing,Mets,10,9,R,14,0
// 2.7,0.030,3425,6,2005,243,UL,,Jack Wilson,Pirates,90,9,R,10,0
// 2.7,0.019,15,7,2000,4,1st,PR,Darin Erstad,Angels,140,6,L,B,0
// 2.7,0.019,981,7,2001,328,1st,TD,Doug Glanville,Phillies,140,7,R,A,0
// 2.7,0.021,1081,7,2001,378,1st,TD,Calvin Murray,Giants,130,8,R,A,0
// 2.7,0.045,1882,7,2002,29,UL,,Brady Anderson,Indians,60,9,L,19,0
// 2.7,0.045,2002,7,2002,39,UL,,Brady Anderson,Orioles,60,9,L,19,0
// 2.7,0.039,2344,7,2003,70,UL,,Corey Patterson,Cubs,70,8,L,18,0
// 2.7,0.270,3328,7,2005,219,UL,,Timo Perez,Mets,10,9,L,11,0
// 2.7,0.021,1081,8,2001,378,1st,TD,Calvin Murray,Giants,130,8,R,A,0
// 2.7,0.270,3328,8,2005,219,UL,,Timo Perez,Mets,10,9,L,11,0
// 2.7,0.019,15,9,2000,4,1st,PR,Darin Erstad,Angels,140,6,L,B,0
// 2.7,0.021,1081,9,2001,378,1st,TD,Calvin Murray,Giants,130,8,R,A,0
// 2.7,0.045,1882,9,2002,29,UL,,Brady Anderson,Indians,60,9,L,19,0
// 2.7,0.270,3328,9,2005,219,UL,,Timo Perez,Mets,10,9,L,11,0
// 2.6,0.033,320,2,2000,80,1st,PR,Joe Girardi,Cubs,80,7,R,C,0
// 2.6,0.033,450,2,2000,113,1st,PR,Jason LaRue,Reds,80,5,R,B,0
// 2.6,0.026,518,2,2000,130,1st,PR,Paul Lo Duca,Dodgers,100,7,R,B,0
// 2.6,0.014,962,2,2001,319,1st,TD,A. J. Hinch,Athletics,180,5,R,A,0
// 2.6,0.017,1040,2,2001,358,1st,TD,Ben Davis,Padres,150,6,S,B,0
// 2.6,0.037,1169,2,2001,422,1st,TD,John Flaherty,Devil Rays,70,6,R,C,0
// 2.6,0.024,326,4,2000,82,1st,PR,Alfonso Soriano,Yankees,110,6,R,A,0
// 2.6,0.029,394,4,2000,99,1st,PR,DAngelo Jiminez,Yankees,90,7,S,B,0
// 2.6,0.024,506,4,2000,127,1st,PR,Luis Rivas,Twins,110,7,R,A,0
// 2.6,0.013,826,4,2001,251,1st,TD,Denny Hocking,Twins,200,6,S,A,0
// 2.6,0.029,639,5,2000,163,1st,PR,Shane Halter,Tigers,90,7,R,B,0
// 2.6,0.017,101,6,2000,26,1st,PR,Ricky Gutierrez,Cubs,150,8,R,B,0
// 2.6,0.029,394,6,2000,99,1st,PR,DAngelo Jiminez,Yankees,90,7,S,B,0
// 2.6,0.052,761,6,2001,218,1st,TD,Alex Cora,Dodgers,50,6,L,B,0
// 2.6,0.017,854,6,2001,265,1st,TD,Orlando Cabrera,Expos,150,6,R,B,0
// 2.6,0.260,3112,6,2004,167,UL,,Alex Cora,Dodgers,10,8,L,13,0
// 2.6,0.006,105,7,2000,27,1st,PR,Glenallen Hill,Cubs,440,5,R,B,0
// 2.6,0.007,385,7,2000,97,1st,PR,Rich Becker,Athletics,360,7,L,B,0
// 2.6,0.026,586,7,2000,147,1st,PR,Vernon Wells,Blue Jays,100,6,R,A,0
// 2.6,0.019,700,7,2001,188,1st,TD,Derek Bell,Astros,140,6,R,A,0
// 2.6,0.013,826,7,2001,251,1st,TD,Denny Hocking,Twins,200,6,S,A,0
// 2.6,0.037,847,7,2001,261,1st,TD,Peter Bergeron,Expos,70,7,L,B,0
// 2.6,0.015,1194,7,2001,435,1st,TD,Tom Goodwin,Rangers,170,7,L,A,0
// 2.6,0.037,1513,7,2002,261,P,,Peter Bergeron,Expos,70,7,L,B,0
// 2.6,0.026,226,8,2000,57,1st,PR,Corey Patterson,Cubs,100,5,R,A,0
// 2.6,0.007,385,8,2000,97,1st,PR,Rich Becker,Athletics,360,7,L,B,0
// 2.6,0.026,586,8,2000,147,1st,PR,Vernon Wells,Blue Jays,100,6,R,A,0
// 2.6,0.013,826,8,2001,251,1st,TD,Denny Hocking,Twins,200,6,S,A,0
// 2.6,0.037,847,8,2001,261,1st,TD,Peter Bergeron,Expos,70,7,L,B,0
// 2.6,0.015,1194,8,2001,435,1st,TD,Tom Goodwin,Rangers,170,7,L,A,0
// 2.6,0.037,1513,8,2002,261,P,,Peter Bergeron,Expos,70,7,L,B,0
// 2.6,0.260,2917,8,2004,130,UL,,Andres Torres,Tigers,10,9,S,11,0
// 2.6,0.007,385,9,2000,97,1st,PR,Rich Becker,Athletics,360,7,L,B,0
// 2.6,0.019,700,9,2001,188,1st,TD,Derek Bell,Astros,140,6,R,A,0
// 2.6,0.013,826,9,2001,251,1st,TD,Denny Hocking,Twins,200,6,S,A,0
// 2.6,0.037,847,9,2001,261,1st,TD,Peter Bergeron,Expos,70,7,L,B,0
// 2.6,0.015,1194,9,2001,435,1st,TD,Tom Goodwin,Rangers,170,7,L,A,0
// 2.6,0.037,1513,9,2002,261,P,,Peter Bergeron,Expos,70,7,L,B,0
// 2.5,0.019,1136,2,2001,406,1st,TD,Alberto Castillo,Cardinals,130,7,R,C,0
// 2.5,0.023,1141,2,2001,408,1st,TD,Mike Matheny,Cardinals,110,7,R,C,0
// 2.5,0.083,1643,2,2002,6,UL,,Ben Molina,Angels,30,9,R,10,0
// 2.5,0.125,3707,2,2005,313,UL,,Mike Matheny,Cardinals,20,7,R,10,0
// 2.5,0.028,639,3,2000,163,1st,PR,Shane Halter,Tigers,90,7,R,B,0
// 2.5,0.016,193,4,2000,49,1st,PR,Aaron Ledesma,Rockies,160,7,R,B,0
// 2.5,0.063,276,4,2000,69,1st,PR,Mike Lansing,Red Sox,40,6,R,B,0
// 2.5,0.028,1175,4,2001,425,1st,TD,Russ Johnson,Devil Rays,90,7,R,B,0
// 2.5,0.031,1243,4,2001,459,1st,TD,Mickey Morandini,Blue Jays,80,7,L,B,0
// 2.5,0.016,193,5,2000,49,1st,PR,Aaron Ledesma,Rockies,160,7,R,B,0
// 2.5,0.028,1175,5,2001,425,1st,TD,Russ Johnson,Devil Rays,90,7,R,B,0
// 2.5,0.023,120,6,2000,30,1st,PR,Tony Womack,Diamondbacks,110,7,L,A,0
// 2.5,0.016,193,6,2000,49,1st,PR,Aaron Ledesma,Rockies,160,7,R,B,0
// 2.5,0.025,417,6,2000,105,1st,PR,Desi Relaford,Phillies,100,6,S,B,0
// 2.5,0.017,748,6,2001,212,1st,TD,Rey Sanchez,Royals,150,7,R,B,0
// 2.5,0.013,826,6,2001,251,1st,TD,Denny Hocking,Twins,200,6,S,A,0
// 2.5,0.250,1607,6,2002,3,UL,,Rey Sanchez,Devil Rays,10,9,R,16,0
// 2.5,0.023,2241,6,2003,61,UL,,Rey Ordonez,Mets,110,8,R,14,0
// 2.5,0.023,3322,6,2005,218,UL,,Rey Ordonez,Mets,110,8,R,14,0
// 2.5,0.025,226,7,2000,57,1st,PR,Corey Patterson,Cubs,100,5,R,A,0
// 2.5,0.017,259,7,2000,65,1st,PR,Damon Buford,Red Sox,150,6,R,A,0
// 2.5,0.013,718,7,2001,197,1st,TD,Stan Javier,Astros,200,8,S,A,0
// 2.5,0.028,797,7,2001,236,1st,TD,Marquis Grissom,Brewers,90,6,R,A,0
// 2.5,0.063,2977,7,2004,140,UL,,Eric Owens,Marlins,40,8,R,15,0
// 2.5,0.023,3116,7,2004,168,UL,,Tom Goodwin,Dodgers,110,8,L,24,0
// 2.5,0.017,259,8,2000,65,1st,PR,Damon Buford,Red Sox,150,6,R,A,0
// 2.5,0.028,797,8,2001,236,1st,TD,Marquis Grissom,Brewers,90,6,R,A,0
// 2.5,0.023,3116,8,2004,168,UL,,Tom Goodwin,Dodgers,110,8,L,24,0
// 2.5,0.006,105,9,2000,27,1st,PR,Glenallen Hill,Cubs,440,5,R,B,0
// 2.5,0.025,226,9,2000,57,1st,PR,Corey Patterson,Cubs,100,5,R,A,0
// 2.5,0.017,259,9,2000,65,1st,PR,Damon Buford,Red Sox,150,6,R,A,0
// 2.5,0.025,586,9,2000,147,1st,PR,Vernon Wells,Blue Jays,100,6,R,A,0
// 2.5,0.013,718,9,2001,197,1st,TD,Stan Javier,Astros,200,8,S,A,0
// 2.5,0.028,797,9,2001,236,1st,TD,Marquis Grissom,Brewers,90,6,R,A,0
// 2.5,0.063,2977,9,2004,140,UL,,Eric Owens,Marlins,40,8,R,15,0
// 2.5,0.023,3116,9,2004,168,UL,,Tom Goodwin,Dodgers,110,8,L,24,0
// 2.4,0.048,108,2,2000,27,1st,PR,Kelly Stinnett,Diamondbacks,50,6,R,C,0
// 2.4,0.022,171,2,2000,43,1st,PR,Eddie Perez,Braves,110,6,R,C,0
// 2.4,0.040,845,2,2001,260,1st,TD,Michael Barrett,Expos,60,7,R,C,0
// 2.4,0.048,1039,2,2001,357,1st,TD,Wiki Gonzalez,Padres,50,6,R,B,0
// 2.4,0.034,1125,2,2001,400,1st,TD,Dan Wilson,Mariners,70,6,R,B,0
// 2.4,0.240,3682,2,2005,305,UL,,Dan Wilson,Mariners,10,9,R,9,0
// 2.4,0.240,2731,3,2004,107,UL,,John McDonald,Indians,10,9,R,10,0
// 2.4,0.018,563,4,2000,141,1st,PR,Enrique Wilson,Indians,130,7,S,B,0
// 2.4,0.016,980,4,2001,328,1st,TD,Marlon Anderson,Phillies,150,6,L,A,0
// 2.4,0.240,2439,4,2003,79,UL,,Rey Sanchez,Yankees,10,9,R,10,0
// 2.4,0.240,2731,4,2004,107,UL,,John McDonald,Indians,10,9,R,10,0
// 2.4,0.048,3586,4,2005,282,UL,,Brent Abernathy,Devil Rays,50,8,R,12,0
// 2.4,0.024,439,5,2000,110,1st,PR,Craig Wilson,White Sox,100,6,R,B,0
// 2.4,0.018,563,5,2000,141,1st,PR,Enrique Wilson,Indians,130,7,S,B,0
// 2.4,0.040,845,5,2001,260,1st,TD,Michael Barrett,Expos,60,7,R,C,0
// 2.4,0.022,1003,5,2001,339,1st,TD,Mike Benjamin,Pirates,110,6,R,A,0
// 2.4,0.030,187,6,2000,47,1st,PR,Walt Weiss,Braves,80,6,S,B,0
// 2.4,0.022,437,6,2000,110,1st,PR,Pat Meares,Pirates,110,6,R,B,0
// 2.4,0.022,1003,6,2001,339,1st,TD,Mike Benjamin,Pirates,110,6,R,A,0
// 2.4,0.240,2731,6,2004,107,UL,,John McDonald,Indians,10,9,R,10,0
// 2.4,0.027,2801,6,2004,115,UL,,Juan Uribe,Rockies,90,8,R,12,0
// 2.4,0.040,691,7,2001,183,1st,PR,Mark Smith,Marlins,60,7,R,B,0
// 2.4,0.017,1184,7,2001,430,1st,TD,Randy Winn,Devil Rays,140,6,S,A,0
// 2.4,0.240,3520,8,2005,266,UL,,Adam Hyzdu,Pirates,10,9,R,10,0
// 2.4,0.040,691,9,2001,183,1st,PR,Mark Smith,Marlins,60,7,R,B,0
// 2.4,0.030,2495,9,2003,84,UL,,Corey Patterson,Cubs,80,8,L,20,0
// 2.3,0.026,740,2,2001,208,1st,TD,Chad Kreuter,Royals,90,6,S,C,0
// 2.3,0.019,159,4,2000,40,1st,PR,Keith Lockhart,Braves,120,7,L,B,0
// 2.3,0.033,160,4,2000,40,1st,PR,Keith Lockhart,Braves,70,7,L,B,0
// 2.3,0.021,351,4,2000,88,1st,PR,Mickey Morandini,Cubs,110,7,L,B,0
// 2.3,0.026,733,4,2001,204,1st,TD,Carlos Febles,Royals,90,7,R,A,0
// 2.3,0.021,1003,4,2001,339,1st,TD,Mike Benjamin,Pirates,110,6,R,A,0
// 2.3,0.026,1161,4,2001,418,1st,TD,Miguel Cairo,Devil Rays,90,7,R,A,0
// 2.3,0.230,2731,5,2004,107,UL,,John McDonald,Indians,10,9,R,10,0
// 2.3,0.018,563,6,2000,141,1st,PR,Enrique Wilson,Indians,130,7,S,B,0
// 2.3,0.026,1179,6,2001,427,1st,TD,Felix Martinez,Devil Rays,90,6,S,A,0
// 2.3,0.230,1427,6,2002,15,P,,Joe McEwing,Mets,10,8,R,13,0
// 2.3,0.230,2952,6,2004,136,UL,,Jose Vizcaino,Astros,10,9,S,10,0
// 2.3,0.058,3237,6,2004,197,UL,,Rey Ordonez,Mets,40,8,R,9,0
// 2.3,0.023,280,7,2000,70,1st,PR,Darren Lewis,Red Sox,100,7,R,A,0
// 2.3,0.230,1427,7,2002,15,P,,Joe McEwing,Mets,10,8,R,13,0
// 2.3,0.029,2495,7,2003,84,UL,,Corey Patterson,Cubs,80,8,L,20,0
// 2.3,0.115,2681,7,2003,102,UL,,Chris Magruder,Indians,20,8,S,9,0
// 2.3,0.058,3257,7,2004,202,UL,,Peter Bergeron,Expos,40,7,L,21,0
// 2.3,0.023,280,8,2000,70,1st,PR,Darren Lewis,Red Sox,100,7,R,A,0
// 2.3,0.016,1184,8,2001,430,1st,TD,Randy Winn,Devil Rays,140,6,S,A,0
// 2.3,0.038,1722,8,2002,14,UL,,Marlon Byrd,Phillies,60,9,R,17,0
// 2.3,0.029,2495,8,2003,84,UL,,Corey Patterson,Cubs,80,8,L,20,0
// 2.3,0.115,2681,8,2003,102,UL,,Chris Magruder,Indians,20,8,S,9,0
// 2.3,0.023,280,9,2000,70,1st,PR,Darren Lewis,Red Sox,100,7,R,A,0
// 2.3,0.016,1184,9,2001,430,1st,TD,Randy Winn,Devil Rays,140,6,S,A,0
// 2.3,0.230,1427,9,2002,15,P,,Joe McEwing,Mets,10,8,R,13,0
// 2.3,0.115,2681,9,2003,102,UL,,Chris Magruder,Indians,20,8,S,9,0
// 2.2,0.073,1653,2,2002,7,UL,,Bengie Molina,Angels,30,8,R,8,0
// 2.2,0.022,684,3,2001,180,1st,PR,Derrek Lee,Marlins,100,5,R,B,0
// 2.2,0.024,409,4,2000,103,1st,PR,Mickey Morandini,Phillies,90,6,L,B,0
// 2.2,0.022,335,5,2000,84,1st,PR,Gary Gaetti,Cubs,100,5,R,C,0
// 2.2,0.055,3257,8,2004,202,UL,,Peter Bergeron,Expos,40,7,L,21,0
// 2.2,0.220,3393,8,2005,235,UL,,Adrian Brown,Pirates,10,8,S,12,0
// 2.2,0.220,1792,9,2002,20,UL,,Quinton McCracken,Diamondbacks,10,9,S,11,0
// 2.2,0.055,3257,9,2004,202,UL,,Peter Bergeron,Expos,40,7,L,21,0
// 2.1,0.021,59,2,2000,15,1st,PR,Matt Walbeck,Angels,100,6,S,B,0
// 2.1,0.026,97,2,2000,25,1st,PR,Joe Girardi,Cubs,80,5,R,B,0
// 2.1,0.070,685,2,2001,180,1st,PR,Mike Redmond,Marlins,30,7,R,C,0
// 2.1,0.042,1733,2,2002,15,UL,,Toby Hall,Devil Rays,50,9,R,10,0
// 2.1,0.210,2652,2,2003,99,UL,,Einar Diaz,Indians,10,8,R,8,0
// 2.1,0.019,54,4,2000,14,1st,PR,Homer Bush,Blue Jays,110,7,R,A,0
// 2.1,0.210,1596,4,2002,2,UL,,Pokey Reese,Red Sox,10,9,R,14,0
// 2.1,0.070,1163,5,2001,419,1st,TD,Vinny Castilla,Devil Rays,30,5,R,B,0
// 2.1,0.210,2856,5,2004,122,UL,,Craig Paquette,Tigers,10,8,R,9,0
// 2.1,0.030,355,6,2000,89,1st,PR,Jose Nieves,Cubs,70,6,R,C,0
// 2.1,0.016,743,6,2001,209,1st,TD,Rey Sanchez,Royals,130,7,R,B,0
// 2.1,0.035,1686,6,2002,11,UL,,Angel Berroa,Royals,60,9,R,15,0
// 2.1,0.015,275,7,2000,69,1st,PR,Darren Lewis,Red Sox,140,7,R,A,0
// 2.1,0.210,1792,7,2002,20,UL,,Quinton McCracken,Diamondbacks,10,9,S,11,0
// 2.1,0.015,275,8,2000,69,1st,PR,Darren Lewis,Red Sox,140,7,R,A,0
// 2.1,0.015,275,9,2000,69,1st,PR,Darren Lewis,Red Sox,140,7,R,A,0
// 2,0.200,2311,2,2003,67,UL,,Joe Girardi,Cubs,10,8,R,9,0
// 2,0.018,1008,6,2001,342,1st,TD,Mike Benjamin,Pirates,110,5,R,A,0
// 2,0.033,855,7,2001,265,1st,TD,Wilton Guerrero,Expos,60,7,S,A,0
// 2,0.029,952,8,2001,314,1st,TD,Ryan Christenson,Athletics,70,6,R,B,0
// 2,0.033,855,9,2001,265,1st,TD,Wilton Guerrero,Expos,60,7,S,A,0
// 2,0.029,952,9,2001,314,1st,TD,Ryan Christenson,Athletics,70,6,R,B,0
// 1.9,0.190,2134,3,2003,51,UL,,Tony Clark,Red Sox,10,8,S,8,0
// 1.9,0.024,935,4,2001,305,1st,TD,Jose Vizcaino,Yankees,80,7,S,B,0
// 1.9,0.038,1406,5,2002,6,P,,Fernando Tatis,Expos,50,9,R,11,0
// 1.9,0.038,3295,5,2004,211,UL,,Fernando Tatis,Expos,50,9,R,11,0
// 1.9,0.038,3038,6,2004,151,UL,,Neifi Perez,Royals,50,8,S,12,0
// 1.9,0.021,866,7,2001,271,1st,TD,Manny Martinez,Expos,90,5,R,A,0
// 1.9,0.027,952,7,2001,314,1st,TD,Ryan Christenson,Athletics,70,6,R,B,0
// 1.8,0.180,2071,0,2002,46,UL,,Lenny Harris,Brewers,10,8,L,17,0
// 1.8,0.011,31,4,2000,8,1st,PR,Jeff Huson,Angels,160,7,L,A,0
// 1.8,0.023,239,4,2000,60,1st,PR,Jeff Reboulet,Orioles,80,7,R,B,0
// 1.8,0.023,239,5,2000,60,1st,PR,Jeff Reboulet,Orioles,80,7,R,B,0
// 1.8,0.011,31,6,2000,8,1st,PR,Jeff Huson,Angels,160,7,L,A,0
// 1.8,0.180,590,6,2000,148,1st,PR,Rey Ordonez,Mets,10,6,R,B,0
// 1.8,0.090,703,6,2001,189,1st,TD,Tim Bogar,Astros,20,5,R,B,0
// 1.8,0.020,902,6,2001,289,1st,TD,Rey Ordonez,Mets,90,6,R,B,0
// 1.8,0.180,3530,6,2005,269,UL,,Jack Wilson,Pirates,10,7,R,13,0
// 1.8,0.030,216,7,2000,54,1st,PR,Luis Matos,Orioles,60,6,R,A,0
// 1.8,0.090,997,7,2001,336,1st,TD,Kevin Sefcik,Phillies,20,6,R,A,0
// 1.8,0.020,1110,7,2001,393,1st,TD,Brian L. Hunter,Mariners,90,5,R,A,0
// 1.8,0.180,1585,7,2002,1,UL,,So Taguchi,Cardinals,10,9,R,11,0
// 1.8,0.030,216,8,2000,54,1st,PR,Luis Matos,Orioles,60,6,R,A,0
// 1.8,0.020,866,8,2001,271,1st,TD,Manny Martinez,Expos,90,5,R,A,0
// 1.8,0.090,997,8,2001,336,1st,TD,Kevin Sefcik,Phillies,20,6,R,A,0
// 1.8,0.045,1620,8,2002,4,UL,,Tom Goodwin,Cubs,40,9,L,23,0
// 1.8,0.030,216,9,2000,54,1st,PR,Luis Matos,Orioles,60,6,R,A,0
// 1.8,0.020,866,9,2001,271,1st,TD,Manny Martinez,Expos,90,5,R,A,0
// 1.8,0.090,997,9,2001,336,1st,TD,Kevin Sefcik,Phillies,20,6,R,A,0
// 1.8,0.180,1585,9,2002,1,UL,,So Taguchi,Cardinals,10,9,R,11,0
// 1.7,0.170,985,4,2001,330,1st,TD,Kevin Jordan,Phillies,10,5,R,C,0
// 1.7,0.170,985,5,2001,330,1st,TD,Kevin Jordan,Phillies,10,5,R,C,0
// 1.7,0.170,3079,6,2004,160,UL,,Cesar Izturis,Dodgers,10,8,S,12,0
// 1.7,0.085,859,7,2001,267,1st,TD,Terry Jones,Expos,20,6,S,A,0
// 1.7,0.085,859,8,2001,267,1st,TD,Terry Jones,Expos,20,6,S,A,0
// 1.7,0.085,859,9,2001,267,1st,TD,Terry Jones,Expos,20,6,S,A,0
// 1.7,0.019,1110,9,2001,393,1st,TD,Brian L. Hunter,Mariners,90,5,R,A,0
// 1.6,0.011,2272,2,2003,64,UL,,Ken Huckaby,Blue Jays,150,9,R,10,0
// 1.6,0.053,792,3,2001,234,1st,TD,Sean Berry,Brewers,30,5,R,C,0
// 1.6,0.020,784,4,2001,230,1st,TD,Jose Vizcaino,Dodgers,80,6,S,B,0
// 1.6,0.020,784,6,2001,230,1st,TD,Jose Vizcaino,Dodgers,80,6,S,B,0
// 1.6,0.160,2129,7,2003,51,UL,,Lenny Harris,Marlins,10,9,L,10,0
// 1.6,0.160,2129,9,2003,51,UL,,Lenny Harris,Marlins,10,9,L,10,0
// 1.4,0.014,521,2,2000,131,1st,PR,Eli Marrero,Cardinals,100,4,R,A,0
// 1.4,0.028,387,6,2000,97,1st,PR,Mike Caruso,White Sox,50,5,L,B,0
// 1.4,0.028,1146,7,2001,411,1st,TD,Willie Mcgee,Cardinals,50,6,S,B,0
// 1.4,0.028,1146,8,2001,411,1st,TD,Willie Mcgee,Cardinals,50,6,S,B,0
// 1.4,0.028,1146,9,2001,411,1st,TD,Willie Mcgee,Cardinals,50,6,S,B,0
// 1.2,0.030,11,6,2000,3,1st,PR,Gary DiSarcina,Angels,40,5,R,B,0
// 1.2,0.120,672,6,2001,174,1st,PR,Alex Gonzalez,Marlins,10,4,R,A,0
// 1.2,0.060,824,6,2001,250,1st,TD,Cristian Guzman,Twins,20,5,S,B,0

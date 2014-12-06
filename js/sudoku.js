var problems = [[9,8,0,1,6,0,0,0,0,2,0,6,0,0,0,0,3,0,0,0,0,8,0,4,0,9,0,1,0,0,0,0,5,3,0,7,0,0,8,0,0,0,9,0,0,3,0,7,2,0,0,0,0,1,0,2,0,9,0,8,0,0,0,0,1,0,0,0,0,8,0,9,0,0,0,0,7,1,0,6,5],
[3,0,6,0,0,9,8,0,1,0,0,0,8,4,6,0,0,0,0,0,2,0,0,5,0,4,0,5,0,3,0,6,0,0,2,0,0,0,8,0,0,0,6,0,0,0,9,0,0,2,0,4,0,5,0,6,0,9,0,0,3,0,0,0,0,0,7,5,3,0,0,0,7,0,9,6,0,0,5,0,2],
[3,4,0,2,0,0,0,5,0,0,0,7,8,4,0,0,9,0,0,0,2,0,3,5,0,0,6,0,7,0,4,6,0,0,0,9,0,0,0,0,9,0,0,0,0,6,0,0,0,2,7,0,8,0,8,0,0,9,1,0,3,0,0,0,1,0,0,5,3,9,0,0,0,3,0,0,0,4,0,1,2],
[3,0,6,0,0,9,8,5,0,0,0,7,0,4,0,2,0,0,0,0,0,0,0,5,0,0,6,5,7,0,4,6,0,0,2,9,4,0,8,0,9,0,6,0,7,6,9,0,0,2,7,0,8,5,8,0,0,9,0,0,0,0,0,0,0,4,0,5,0,9,0,0,0,3,9,6,0,0,5,0,2],
[2,1,0,9,3,0,6,0,0,0,0,0,8,0,0,1,0,2,0,0,0,0,1,0,3,9,0,0,0,0,5,0,3,0,0,8,7,2,0,0,0,0,0,6,3,8,0,0,2,0,6,0,0,0,0,9,3,0,6,0,0,0,0,6,0,8,0,0,9,0,0,0,0,0,2,0,8,1,0,3,6],
[7,0,0,0,2,0,5,3,0,0,0,8,7,5,6,4,0,0,0,1,9,0,0,0,0,7,0,2,0,0,0,3,0,0,6,0,6,0,5,0,0,0,9,0,2,0,9,0,0,6,0,0,0,3,0,5,0,0,0,0,8,2,0,0,0,2,5,9,8,3,0,0,0,8,3,0,7,0,0,0,9],
[6,0,2,0,0,1,0,0,3,1,4,0,7,0,6,0,0,5,0,5,0,2,0,0,0,1,0,0,9,0,3,0,0,0,0,0,4,0,0,0,0,0,0,0,6,0,0,0,0,0,8,0,3,0,0,7,0,0,0,3,0,6,0,5,0,0,9,0,2,0,8,1,3,0,0,4,0,0,9,0,7],
[6,0,2,7,0,0,0,0,8,0,4,0,0,9,8,6,0,2,0,9,0,2,6,0,0,4,3,0,6,0,0,0,0,0,7,1,0,0,0,0,0,0,0,0,0,4,1,0,0,0,0,0,6,0,8,2,0,0,4,7,0,1,0,1,0,4,5,3,0,0,8,0,9,0,0,0,0,2,4,0,7],
[0,0,6,4,7,0,0,0,2,8,4,5,0,0,9,0,0,0,0,0,7,0,0,0,8,0,0,0,0,0,8,0,0,9,0,3,0,1,0,9,0,2,0,8,0,4,0,9,0,0,1,0,0,0,0,0,1,0,0,0,6,0,0,0,0,0,6,0,0,3,9,1,5,0,0,0,9,3,4,0,0],
[5,0,3,0,8,0,6,0,9,4,7,0,9,6,0,0,5,3,6,0,0,0,0,1,2,0,0,8,4,0,0,9,0,0,0,0,0,0,7,0,0,0,1,0,0,0,0,0,0,2,0,0,6,4,0,0,4,6,0,0,0,0,2,9,6,0,0,4,3,0,7,1,7,0,2,0,1,0,4,0,6],
[2,0,8,5,0,0,0,0,9,0,4,3,0,0,8,0,2,0,5,0,0,4,0,2,8,0,0,0,0,4,0,5,0,0,0,2,9,0,0,2,0,3,0,0,4,6,0,0,0,4,0,9,0,0,0,0,1,3,0,9,0,0,5,0,3,0,1,0,0,6,9,0,7,0,0,0,0,4,2,0,1],
[0,4,0,0,0,0,0,5,0,8,0,1,0,0,0,0,0,0,0,5,0,8,0,6,1,0,0,0,0,0,2,0,7,9,6,4,0,3,4,6,0,1,5,8,0,9,6,2,5,0,4,0,0,0,0,0,3,4,0,8,0,2,0,0,0,0,0,0,0,3,0,7,0,7,0,0,0,0,0,4,0],
[0,0,0,0,0,0,0,0,0,0,0,4,3,9,0,7,0,1,0,5,1,6,0,8,0,0,0,9,0,8,5,0,0,0,7,3,0,4,5,0,0,0,9,6,0,1,7,0,0,0,6,5,0,8,0,0,0,1,0,7,3,5,0,5,0,7,0,2,3,8,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,6,0,0,2,0,0,7,9,5,4,8,0,0,0,0,0,6,8,0,3,0,0,0,0,0,5,7,1,4,0,0,2,0,0,0,6,0,2,0,4,0,0,0,8,0,0,6,7,3,5,0,0,0,0,0,1,0,7,9,0,0,0,0,0,9,8,6,1,2,0,0,9,0,0,6,0,0,0],
[0,0,7,0,0,4,6,9,0,0,8,0,0,0,9,0,2,0,6,0,1,5,0,0,4,0,3,0,0,0,6,5,0,8,0,0,0,6,2,0,0,0,5,4,0,0,0,5,0,2,7,0,0,0,2,0,8,0,0,6,3,0,4,0,3,0,2,0,0,0,1,0,0,5,9,7,0,0,2,0,0],
[0,1,0,2,8,0,0,0,9,7,0,0,6,0,0,0,1,8,0,0,0,0,0,0,5,0,0,3,5,0,8,6,0,4,9,0,8,0,0,1,0,5,0,0,7,0,2,6,0,4,9,0,5,3,0,0,5,0,0,0,0,0,0,4,6,0,0,0,8,0,0,5,9,0,0,0,7,6,0,2,0],
[0,0,0,0,8,0,6,0,9,0,9,2,6,0,4,3,1,0,0,0,4,0,0,1,0,0,0,3,5,0,0,0,2,4,0,0,0,4,0,0,0,0,0,6,0,0,0,6,7,0,0,0,5,3,0,0,0,4,0,0,9,0,0,0,6,1,9,0,8,7,3,0,9,0,8,0,7,0,0,0,0],
[0,0,0,8,0,0,0,9,4,0,0,0,0,1,0,7,6,0,0,0,5,6,3,0,0,0,8,0,5,6,0,0,0,9,0,2,3,7,0,0,9,0,0,4,6,1,0,9,0,0,0,5,8,0,5,0,0,0,2,8,6,0,0,0,8,1,0,7,0,0,0,0,9,6,0,0,0,3,0,0,0],
[9,0,0,0,0,0,3,0,0,0,0,8,0,1,3,0,6,0,0,1,5,4,0,0,0,8,0,0,8,3,2,0,7,0,0,0,0,2,1,3,0,4,6,7,0,0,0,0,8,0,1,2,5,0,0,5,0,0,0,9,1,4,0,0,3,0,7,4,0,5,0,0,0,0,4,0,0,0,0,0,6],
[0,0,0,0,3,9,1,0,0,0,0,0,0,0,0,0,6,5,6,2,0,1,0,0,0,3,0,4,6,1,7,8,0,0,0,9,0,0,0,4,0,3,0,0,0,3,0,0,0,1,6,2,4,7,0,1,0,0,0,7,0,9,2,2,4,0,0,0,0,0,0,0,0,0,8,2,5,0,0,0,0],
[8,0,0,6,3,0,1,0,0,1,9,0,8,0,4,0,6,5,6,0,0,0,0,0,9,0,0,0,0,1,0,0,0,0,0,0,7,5,2,0,0,0,6,8,1,0,0,0,0,0,0,2,0,0,0,0,6,0,0,0,0,0,2,2,4,0,9,0,8,0,1,3,0,0,8,0,5,1,0,0,6],
[0,0,0,0,0,9,1,2,0,0,0,0,0,2,0,0,0,0,6,0,4,1,0,0,0,3,0,4,0,1,7,0,2,3,0,9,0,0,2,4,0,3,6,0,0,3,0,9,5,0,6,2,0,7,0,1,0,0,0,7,8,0,2,0,0,0,0,6,0,0,0,0,0,3,8,2,0,0,0,0,0],
[0,8,9,0,0,6,2,3,0,0,0,0,0,2,0,5,9,8,0,2,0,4,0,0,1,0,0,3,0,1,0,9,0,4,0,0,0,0,0,3,0,1,0,0,0,0,0,6,0,4,0,8,0,3,0,0,5,0,0,2,0,4,0,9,7,2,0,5,0,0,0,0,0,3,4,9,0,0,7,2,0],
[0,1,0,9,0,0,0,2,0,7,0,0,3,0,0,9,0,0,3,9,0,0,2,4,0,0,7,0,0,0,0,7,0,0,8,4,0,0,7,1,0,8,6,0,0,6,8,0,0,5,0,0,0,0,1,0,0,4,3,0,0,7,9,0,0,3,0,0,1,0,0,6,0,5,0,0,0,6,0,1,0],
[0,8,7,6,0,3,0,0,4,0,1,0,0,0,0,0,0,7,0,0,9,0,4,5,1,8,0,0,5,0,4,0,0,3,0,0,0,0,6,0,0,0,2,0,0,0,0,1,0,0,2,0,4,0,0,4,2,5,6,0,8,0,0,1,0,0,0,0,0,0,6,0,8,0,0,3,0,4,7,1,0],
[5,0,0,0,0,3,9,2,0,0,1,0,9,0,0,6,0,7,6,0,9,0,0,0,1,8,3,0,0,0,4,0,0,3,0,0,0,0,6,1,5,9,2,0,0,0,0,1,0,0,2,0,0,0,7,4,2,0,0,0,8,0,9,1,0,3,0,0,7,0,6,0,0,6,5,3,0,0,0,0,2],
[0,0,1,4,0,0,0,9,0,0,3,0,0,6,0,2,0,0,2,0,0,0,0,3,0,8,0,0,5,7,0,0,4,0,0,9,8,0,0,0,3,0,0,0,6,3,0,0,6,0,0,7,2,0,0,6,0,8,0,0,0,0,2,0,0,5,0,2,0,0,4,0,0,8,0,0,0,5,9,0,0],
[0,0,1,4,0,0,0,0,0,9,0,0,0,6,0,2,5,0,0,4,6,9,5,0,1,0,7,6,0,0,0,0,4,0,0,9,0,2,0,5,0,7,0,1,0,3,0,0,6,0,0,0,0,5,1,0,3,0,4,9,5,7,0,0,9,5,0,2,0,0,0,8,0,0,0,0,0,5,9,0,0],
[7,0,3,0,0,2,0,6,0,0,0,0,0,4,0,0,0,9,2,8,0,0,0,0,0,4,3,0,0,7,0,1,4,0,0,0,0,5,0,6,0,9,0,3,0,0,0,0,7,3,0,6,0,0,5,9,0,0,0,0,0,7,2,3,0,0,0,6,0,0,0,0,0,7,0,3,0,0,1,0,6],
[5,0,0,0,0,9,1,0,0,0,0,4,0,8,0,5,0,7,9,1,7,6,5,0,8,0,0,0,7,6,8,0,0,3,5,0,4,0,0,0,0,0,0,0,1,0,5,1,0,0,7,6,4,0,0,0,2,0,7,5,9,1,3,7,0,5,0,3,0,2,0,0,0,0,3,2,0,0,0,0,5],
[0,0,0,0,0,0,0,0,1,0,7,0,2,0,5,4,8,0,0,4,8,1,3,0,6,0,5,0,5,7,0,0,0,0,0,6,0,0,9,6,0,8,5,0,0,4,0,0,0,0,0,1,3,0,8,0,5,0,2,4,9,1,0,0,3,4,5,0,9,0,6,0,7,0,0,0,0,0,0,0,0],
[0,0,0,9,5,0,0,0,0,8,0,4,0,0,0,3,0,0,0,0,1,3,0,0,6,2,0,0,0,0,4,8,0,0,0,3,5,8,0,2,0,7,0,4,1,4,0,0,0,9,3,0,0,0,0,2,7,0,0,9,5,0,0,0,0,5,0,0,0,1,0,4,0,0,0,0,1,6,0,0,0],
[4,0,0,0,0,5,9,0,0,0,5,0,0,0,3,1,2,0,0,7,2,0,4,1,0,0,0,2,4,0,8,0,0,0,0,5,0,8,0,0,0,0,0,3,0,7,0,0,0,0,2,0,4,9,0,0,0,6,7,0,3,5,0,0,3,7,1,0,0,0,6,0,0,0,6,3,0,0,0,0,1],
[0,0,8,0,0,0,9,1,0,0,0,0,0,8,0,0,0,0,0,0,9,2,5,1,0,0,3,8,0,3,9,0,0,6,0,4,0,0,0,8,0,6,0,0,0,2,0,7,0,0,4,1,0,8,5,0,0,4,9,8,3,0,0,0,0,0,0,7,0,0,0,0,0,3,2,0,0,0,7,0,0],
[6,0,1,0,0,0,0,0,0,0,9,2,3,8,0,0,0,0,0,0,0,0,1,2,0,8,5,0,0,0,1,2,7,0,0,3,0,0,5,0,0,0,2,0,0,3,0,0,5,9,6,0,0,0,7,1,0,2,3,0,0,0,0,0,0,0,0,7,1,5,3,0,0,0,0,0,0,0,4,0,7],
[0,8,0,7,0,9,0,0,4,5,0,0,0,0,0,1,7,0,0,3,7,0,0,0,0,0,5,0,0,6,1,2,0,8,0,0,1,0,0,8,0,3,0,0,9,0,0,8,0,9,6,7,0,0,7,0,0,0,0,0,6,9,0,0,6,9,0,0,0,0,0,2,2,0,0,9,0,8,0,1,0],
[5,0,4,6,0,0,0,0,2,2,0,1,0,3,5,0,0,9,7,6,0,0,0,0,0,0,0,0,1,0,0,2,6,4,0,0,0,0,5,0,8,0,2,0,0,0,0,8,1,4,0,0,6,0,0,0,0,0,0,0,0,2,4,8,0,0,4,5,0,9,0,7,4,0,0,0,0,1,8,0,6],
[0,0,5,0,2,8,0,1,0,3,0,0,1,0,7,0,0,0,0,1,0,0,9,0,8,0,0,0,0,0,6,5,0,2,4,1,0,0,4,7,0,2,9,0,0,1,6,2,0,8,4,0,0,0,0,0,8,0,6,0,0,9,0,0,0,0,2,0,9,0,0,7,0,9,0,8,7,0,6,0,0],
[0,8,2,0,0,0,5,7,0,6,0,0,0,7,8,0,0,3,9,3,7,5,1,0,0,0,2,0,0,0,7,9,5,0,0,0,0,0,5,0,0,0,2,0,0,0,0,0,8,2,1,0,0,0,5,0,0,0,6,7,3,2,8,2,0,0,1,8,0,0,0,5,0,7,3,0,0,0,1,6,0],
[0,1,0,7,3,2,0,0,6,3,0,9,0,0,5,0,0,0,7,0,0,0,0,0,0,8,0,0,0,3,2,4,8,1,0,0,0,0,0,5,0,3,0,0,0,0,0,2,1,6,9,3,0,0,0,3,0,0,0,0,0,0,1,0,0,0,4,0,0,9,0,7,5,0,0,3,9,7,0,6,0],
[9,0,0,0,7,0,0,0,3,0,5,0,3,0,0,8,0,0,0,6,0,0,0,4,1,0,9,0,2,0,0,8,9,0,0,1,0,0,0,1,0,3,0,0,0,1,0,0,7,5,0,0,6,0,5,0,6,9,0,0,0,4,0,0,0,3,0,0,7,0,1,0,7,0,0,0,1,0,0,0,6],
[1,3,6,7,0,0,0,8,9,9,0,0,6,8,3,0,0,0,2,0,7,0,0,1,0,0,0,0,0,0,0,7,0,0,0,5,0,9,0,5,0,8,0,3,0,7,0,0,0,4,0,0,0,0,0,0,0,1,0,0,2,0,8,0,0,0,2,6,9,0,0,3,5,2,0,0,0,7,9,6,1],
[1,3,0,0,0,5,0,8,0,9,0,0,0,8,3,0,0,0,0,8,7,4,0,0,0,0,6,0,0,0,0,7,2,6,9,5,6,9,2,0,1,0,7,3,4,7,5,3,9,4,0,0,0,0,3,0,0,0,0,4,2,7,0,0,0,0,2,6,0,0,0,3,0,2,0,8,0,0,0,6,1],
[0,9,0,6,0,0,0,1,0,0,2,0,0,1,9,0,5,0,0,0,0,0,2,8,9,0,0,0,0,0,0,0,3,4,0,2,2,0,3,7,0,1,6,0,5,9,0,7,2,0,0,0,0,0,0,0,9,1,4,0,0,0,0,0,1,0,8,3,0,0,6,0,0,7,0,0,0,6,0,3,0],
[0,0,0,0,9,0,0,1,0,0,0,0,2,5,0,4,0,8,0,0,0,7,0,0,9,3,5,0,5,0,0,3,1,0,0,2,8,0,1,0,0,0,6,0,3,9,0,0,6,8,0,0,4,0,4,9,3,0,0,8,0,0,0,5,0,2,0,4,7,0,0,0,0,1,0,0,2,0,0,0,0],
[0,0,5,0,0,0,2,1,6,1,0,9,2,0,0,4,7,0,2,0,0,0,0,6,0,3,0,0,5,0,0,0,0,0,8,2,0,0,0,4,0,5,0,0,0,9,3,0,0,0,0,0,4,0,0,9,0,5,0,0,0,0,7,0,8,2,0,0,7,3,0,9,7,1,6,0,0,0,8,0,0],
[4,1,0,0,0,5,0,0,0,3,0,2,0,1,9,0,0,4,0,0,8,6,4,0,1,0,0,1,9,4,2,0,0,0,0,0,0,0,3,4,0,7,2,0,0,0,0,0,0,0,1,6,4,5,0,0,5,0,7,4,9,0,0,7,0,0,9,2,0,4,0,6,0,0,0,5,0,0,0,1,7],
[4,0,0,0,3,0,8,0,0,0,7,0,0,0,0,0,6,0,0,5,0,6,4,0,1,0,3,1,0,0,0,5,6,7,0,0,0,0,3,4,0,7,2,0,0,0,0,7,3,9,0,0,0,5,6,0,5,0,7,4,0,8,0,0,8,0,0,0,0,0,5,0,0,0,9,0,6,0,0,0,7],
[0,0,0,0,0,5,0,0,0,0,0,2,0,1,9,0,6,0,0,5,0,0,0,2,0,0,3,0,9,0,0,5,6,0,3,8,5,6,3,0,0,0,2,9,1,8,2,0,3,9,0,0,4,0,6,0,0,1,0,0,0,8,0,0,8,0,9,2,0,4,0,0,0,0,0,5,0,0,0,0,0],
[4,0,0,0,3,0,0,2,0,0,0,0,0,1,9,5,6,0,0,0,0,0,0,2,0,7,0,1,0,0,0,0,6,0,3,8,0,6,0,4,0,7,0,9,0,8,2,0,3,0,0,0,0,5,0,3,0,1,0,0,0,0,0,0,8,1,9,2,0,0,0,0,0,4,0,0,6,0,0,0,7],
[0,0,0,0,0,0,0,5,4,0,4,6,8,0,0,0,0,0,7,5,0,0,9,2,8,3,0,0,2,3,0,0,8,5,6,0,0,8,0,6,0,9,0,1,0,0,6,9,3,0,0,4,8,0,0,7,4,2,8,0,0,9,5,0,0,0,0,0,4,7,2,0,9,3,0,0,0,0,0,0,0],
[3,6,0,0,1,0,4,0,0,0,4,0,6,3,7,0,2,9,8,9,0,0,0,0,0,0,6,0,7,0,0,0,1,9,0,0,0,0,0,5,0,9,0,0,0,0,0,9,7,0,0,0,8,0,2,0,0,0,0,0,0,4,8,9,3,0,8,7,6,0,5,0,0,0,8,0,4,0,0,9,3],
[0,9,0,0,3,0,0,0,0,5,0,8,2,0,6,0,0,0,0,0,2,0,7,0,8,9,1,9,0,0,5,0,0,0,8,0,0,4,1,0,6,0,9,7,0,0,5,0,0,0,9,0,0,3,1,8,5,0,2,0,3,0,0,0,0,0,6,0,4,2,0,8,0,0,0,0,5,0,0,1,0],
[0,0,6,0,5,4,9,3,7,0,0,0,2,9,0,1,0,0,0,9,5,7,1,0,0,0,4,6,0,8,0,0,0,0,7,9,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,6,0,3,9,0,0,0,3,2,7,5,0,0,0,1,0,6,9,0,0,0,5,6,2,4,7,0,3,0,0],
[9,0,0,2,0,0,5,0,0,3,0,5,0,0,9,0,4,8,0,1,8,3,0,0,0,0,2,6,0,0,0,0,7,0,0,0,0,0,3,0,0,0,4,0,0,0,0,0,8,0,0,0,0,7,8,0,0,0,0,3,7,2,0,2,4,0,5,0,0,8,0,3,0,0,9,0,0,2,0,0,5],
[0,0,0,0,0,0,5,6,0,0,0,2,4,5,0,9,0,0,0,0,0,0,0,3,0,2,1,6,0,7,9,0,0,0,0,0,3,2,0,0,4,0,0,7,9,0,0,0,0,0,2,8,0,4,2,1,0,3,0,0,0,0,0,0,0,9,0,7,5,1,0,0,0,5,6,0,0,0,0,0,0],
[8,0,7,0,5,9,1,0,2,0,0,1,0,0,0,8,0,0,0,6,0,8,0,0,0,5,0,0,0,0,7,0,8,0,4,3,0,7,0,0,9,0,0,2,0,1,5,0,2,0,4,0,0,0,0,8,0,0,0,2,0,1,0,0,0,5,0,0,0,4,0,0,7,0,9,3,4,0,2,0,8],
[0,0,8,0,0,0,5,0,4,6,0,0,0,0,1,0,0,9,0,9,0,6,4,0,0,0,8,0,0,6,4,5,3,0,9,0,0,5,0,1,0,2,0,8,0,0,3,0,8,6,7,4,0,0,8,0,0,0,3,4,0,7,0,5,0,0,2,0,0,0,0,1,7,0,3,0,0,0,8,0,0],
[0,7,8,0,0,9,0,0,0,0,0,5,0,8,0,0,2,0,3,9,2,6,4,0,0,0,8,0,8,0,0,0,0,0,0,7,0,0,0,1,0,2,0,0,0,9,0,0,0,0,0,0,5,0,8,0,0,0,3,4,2,7,6,0,6,0,0,7,0,9,0,0,0,0,0,9,0,0,8,4,0],
[1,0,0,0,0,0,0,0,5,0,0,8,9,4,5,0,1,0,0,7,5,0,0,3,4,0,0,0,9,0,0,5,6,1,0,0,4,0,0,0,9,0,0,0,7,0,0,6,3,7,0,0,4,0,0,0,7,1,0,0,8,2,0,0,6,0,7,2,8,5,0,0,8,0,0,0,0,0,0,0,6],
[2,3,0,0,6,9,0,5,4,0,0,0,0,0,3,8,0,0,0,0,0,1,7,0,0,0,3,6,0,0,0,0,0,0,1,0,0,9,4,3,1,6,5,2,0,0,1,0,0,0,0,0,0,9,3,0,0,0,8,2,0,0,0,0,0,5,6,0,0,0,0,0,7,6,0,4,5,0,0,3,2],
[3,0,9,5,1,0,7,6,0,0,7,0,8,0,0,0,5,0,0,8,0,0,0,0,3,0,0,0,1,0,0,8,0,6,0,3,0,0,0,2,0,6,0,0,0,9,0,6,0,3,0,0,7,0,0,0,4,0,0,0,0,1,0,0,6,0,0,0,7,0,8,0,0,9,8,0,6,5,4,0,7],
[8,0,7,3,0,5,0,0,2,0,0,0,0,0,8,0,6,0,0,0,0,7,4,0,3,0,0,1,4,9,2,0,3,8,0,0,0,0,8,0,0,0,2,0,0,0,0,5,4,0,7,9,1,6,0,0,3,0,9,2,0,0,0,0,9,0,5,0,0,0,0,0,4,0,0,6,0,1,5,0,9],
[5,0,0,7,0,0,0,1,3,3,0,0,0,0,0,4,0,0,0,8,0,0,0,6,5,7,2,7,4,2,6,0,5,0,0,0,9,0,0,2,0,8,0,0,4,0,0,0,3,0,4,2,5,7,2,7,5,8,0,0,0,4,0,0,0,9,0,0,0,0,0,5,4,3,0,0,0,7,0,0,9],
[0,0,0,9,0,0,0,3,0,4,0,0,0,0,8,0,9,0,0,0,0,0,0,0,5,0,2,0,1,6,4,3,0,0,2,5,8,0,2,6,0,5,9,0,3,3,5,0,0,9,2,7,6,0,1,0,5,0,0,0,0,0,0,0,6,0,3,0,0,0,0,8,0,8,0,0,0,9,0,0,0],
[0,0,9,5,0,0,0,0,8,2,0,0,0,3,0,7,0,0,0,8,5,7,0,9,0,6,0,5,1,0,0,0,0,2,0,0,4,2,0,0,0,0,0,9,6,0,0,3,0,0,0,0,8,1,0,5,0,1,0,7,9,4,0,0,0,6,0,4,0,0,0,7,9,0,0,0,0,3,6,0,0],
[0,0,0,0,0,0,9,5,0,0,0,6,9,4,3,0,7,2,2,4,0,0,7,0,6,0,0,7,0,0,5,3,0,4,0,1,0,0,2,4,0,1,5,0,0,4,0,5,0,6,7,0,0,9,0,0,1,0,5,0,0,4,6,6,5,0,7,1,4,2,0,0,0,7,4,0,0,0,0,0,0],
[0,0,3,0,7,8,0,0,0,7,6,8,1,5,2,0,0,3,0,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,9,0,9,6,7,0,3,1,2,0,8,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,3,0,9,0,0,8,3,5,7,6,4,0,0,0,6,4,0,2,0,0],
[1,3,0,0,0,4,0,0,2,6,0,2,0,0,0,5,0,3,0,0,7,0,0,6,0,0,0,0,0,0,5,1,0,9,0,0,3,7,0,0,2,0,0,1,5,0,0,1,0,9,3,0,0,0,0,0,0,8,0,0,2,0,0,9,0,5,0,0,0,3,0,8,2,0,0,3,0,0,0,5,6],
[0,0,1,0,9,0,0,6,0,0,0,0,0,0,2,0,0,7,8,5,0,1,0,4,0,2,0,0,0,0,5,1,7,0,3,2,0,1,0,0,0,0,0,8,0,2,9,0,4,3,8,0,0,0,0,7,0,9,0,3,0,4,6,6,0,0,7,0,0,0,0,0,0,4,0,0,8,0,7,0,0],
[0,3,8,7,0,4,5,0,0,2,0,0,6,0,0,7,9,0,0,0,0,0,9,0,1,0,8,0,5,0,8,0,0,0,4,0,0,0,3,1,0,9,6,0,0,0,9,0,0,0,5,0,1,0,5,0,4,0,6,0,0,0,0,0,7,2,0,0,8,0,0,1,0,0,9,3,0,7,4,8,0],
[0,5,4,0,6,0,0,0,2,1,0,0,8,2,0,5,6,0,0,0,8,9,0,0,7,0,0,6,0,3,0,8,0,0,2,0,0,0,0,0,0,0,0,0,0,0,7,0,0,5,0,1,0,8,0,0,1,0,0,3,2,0,0,0,4,2,0,1,8,0,0,9,7,0,0,0,9,0,8,5,0],
[1,0,9,8,0,0,0,7,2,0,0,0,0,4,9,8,0,0,2,4,8,0,0,1,0,0,3,3,0,0,9,0,8,0,6,0,0,0,0,0,1,0,0,0,0,0,1,0,5,0,7,0,0,4,4,0,0,1,0,0,3,8,5,0,0,1,3,8,0,0,0,0,6,8,0,0,0,4,1,0,9],
[0,0,7,0,5,0,3,9,0,0,0,0,0,4,2,0,7,0,5,2,0,9,0,0,0,0,1,9,0,2,0,0,0,0,6,0,0,1,5,6,2,4,9,3,0,0,6,0,0,0,0,1,0,7,1,0,0,0,0,5,0,8,3,0,3,0,4,1,0,0,0,0,0,5,9,0,3,0,2,0,0],
[2,0,0,5,3,0,9,0,0,0,0,0,0,0,9,0,0,0,9,5,6,0,0,0,1,2,0,4,0,0,9,5,3,0,0,0,3,6,0,0,0,0,0,4,9,0,0,0,4,6,8,0,0,1,0,1,4,0,0,0,3,9,6,0,0,0,7,0,0,0,0,0,0,0,5,0,9,4,0,0,7],
[6,3,8,9,2,1,0,0,0,1,4,0,6,0,0,0,0,2,0,2,0,0,3,0,0,0,0,9,0,4,0,0,0,0,1,8,0,0,0,8,0,3,0,0,0,8,1,0,0,0,0,2,0,7,0,0,0,0,8,0,0,6,0,3,0,0,0,0,5,0,2,9,0,0,0,2,9,6,1,7,3],
[0,7,0,0,0,5,0,0,0,1,0,0,0,0,0,7,0,0,8,4,0,0,9,0,0,5,3,9,3,4,1,0,7,5,0,2,0,0,0,9,0,2,0,0,0,5,0,8,4,0,3,9,1,7,7,5,0,0,3,0,0,4,1,0,0,3,0,0,0,0,0,6,0,0,0,2,0,0,0,9,0],
[0,0,9,0,0,5,0,8,4,1,0,0,0,0,8,7,2,9,0,0,0,7,0,0,6,0,0,0,0,4,1,0,0,0,6,0,6,0,0,9,0,2,0,0,8,0,2,0,0,0,3,9,0,0,0,0,6,0,0,9,0,0,0,2,9,3,5,0,0,0,0,6,4,8,0,2,0,0,3,0,0],
[5,2,7,0,9,0,8,0,4,0,0,0,0,0,0,0,2,5,0,8,0,4,0,0,0,7,6,0,0,5,1,8,0,6,0,0,0,0,0,7,0,6,0,0,0,0,0,2,0,5,3,4,0,0,1,5,0,0,0,4,0,6,0,2,9,0,0,0,0,0,0,0,6,0,4,0,1,0,3,5,8],
[0,0,0,0,3,0,5,0,0,0,0,0,4,0,0,8,0,2,0,0,3,0,0,6,1,4,0,0,0,0,3,0,2,0,1,7,0,2,7,0,0,0,4,5,0,3,1,0,6,0,7,0,0,0,0,3,6,5,0,0,9,0,0,9,0,4,0,0,3,0,0,0,0,0,2,0,1,0,0,0,0],
[0,0,8,0,1,0,0,4,0,6,0,0,0,7,0,0,9,0,0,0,0,4,2,0,0,0,3,0,9,0,7,0,0,1,3,0,8,0,0,1,0,3,0,0,7,0,1,3,0,0,9,0,8,0,3,0,0,0,4,7,0,0,0,0,8,0,0,9,0,0,0,4,0,7,0,0,3,0,8,0,0],
[2,0,8,0,0,0,7,4,0,0,0,0,0,0,5,0,0,0,0,5,0,0,2,8,6,0,0,0,0,6,0,8,0,0,3,0,8,0,0,1,6,3,0,0,7,0,1,0,0,5,0,4,0,0,0,0,9,8,4,0,0,2,0,0,0,0,6,0,0,0,0,0,0,7,2,0,0,0,8,0,9],
[0,1,7,9,0,0,0,3,0,0,0,8,0,3,0,0,0,0,2,0,9,0,7,5,1,0,0,0,4,0,0,0,9,0,6,3,0,0,2,1,0,3,8,0,0,9,8,0,6,0,0,0,2,0,0,0,6,5,1,0,9,0,8,0,0,0,0,9,0,3,0,0,0,9,0,0,0,2,6,5,0],
[0,6,9,0,0,3,0,0,0,0,0,0,8,0,0,4,0,3,0,0,0,0,9,7,2,8,6,0,0,2,0,5,0,0,1,8,0,0,1,0,0,0,3,0,0,9,4,0,0,3,0,7,0,0,3,8,4,5,7,0,0,0,0,2,0,5,0,0,8,0,0,0,0,0,0,3,0,0,8,5,0],
[0,5,0,4,3,6,8,9,0,0,3,0,0,0,0,0,5,0,0,8,0,0,0,5,3,1,4,9,0,0,6,0,0,0,0,0,0,7,0,0,9,0,0,8,0,0,0,0,0,0,1,0,0,3,7,4,1,2,0,0,0,3,0,0,9,0,0,0,0,0,2,0,0,2,8,7,5,4,0,6,0],
[0,0,5,8,3,0,6,1,0,0,6,0,0,0,1,8,0,9,0,1,0,0,0,0,0,0,0,5,9,0,1,8,0,0,3,0,0,0,0,5,0,2,0,0,0,0,7,0,0,6,3,0,8,5,0,0,0,0,0,0,0,9,0,1,0,9,7,0,0,0,4,0,0,5,3,0,4,8,2,0,0],
[6,0,8,7,0,0,0,0,0,0,7,1,0,0,6,2,3,8,0,0,5,8,0,2,6,0,0,7,0,0,0,0,0,0,4,0,0,0,0,6,7,9,0,0,0,0,9,0,0,0,0,0,0,6,0,0,7,1,0,8,5,0,0,8,5,2,4,0,0,1,7,0,0,0,0,0,0,7,8,0,3],
[2,7,0,9,0,8,0,0,5,3,0,0,0,4,0,9,0,0,8,0,6,5,0,0,7,0,0,0,2,7,6,0,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,0,4,2,9,0,0,0,8,0,0,1,5,0,7,0,0,1,0,2,0,0,0,9,7,0,0,8,0,6,0,1,3],
[0,7,0,0,6,0,0,0,5,3,0,0,0,0,0,9,6,8,0,0,0,5,0,0,7,4,0,0,0,0,6,8,0,3,5,0,6,0,0,3,5,2,0,0,1,0,8,3,0,7,4,0,0,0,0,6,8,0,0,1,0,0,0,4,3,1,0,0,0,0,0,9,7,0,0,0,9,0,0,1,0],
[0,2,0,7,3,0,8,0,0,0,0,6,5,1,0,0,0,7,7,9,0,0,0,0,0,0,1,9,0,0,1,8,2,0,7,0,0,0,8,4,0,5,2,0,0,0,6,0,9,7,3,0,0,8,6,0,0,0,0,0,0,4,2,8,0,0,0,4,7,1,0,0,0,0,2,0,5,1,0,8,0],
[0,3,0,0,5,0,0,0,6,8,0,6,0,7,9,0,0,2,0,0,2,3,0,6,7,0,5,0,0,0,1,0,7,9,5,0,0,4,0,0,0,0,0,7,0,0,7,8,5,0,3,0,0,0,6,0,4,9,0,5,2,0,0,5,0,0,6,3,0,1,0,9,3,0,0,0,2,0,0,6,0],
[0,0,1,0,0,0,3,5,6,0,0,0,9,0,0,0,0,0,0,0,7,1,6,0,4,0,9,1,5,4,0,0,0,0,0,7,0,3,0,7,0,6,0,4,0,6,0,0,0,0,0,1,3,2,3,0,9,0,5,2,8,0,0,0,0,0,0,0,7,0,0,0,7,4,5,0,0,0,2,0,0],
[0,9,0,8,0,5,0,0,0,1,0,8,0,9,0,0,5,0,0,0,4,6,2,0,0,0,8,4,1,0,2,3,0,8,0,5,0,8,0,0,0,0,0,2,0,7,0,2,0,8,9,0,6,1,8,0,0,0,6,2,9,0,0,0,7,0,0,5,0,6,0,2,0,0,0,9,0,1,0,8,0],
[6,0,0,8,1,5,0,3,4,0,2,0,0,9,0,7,0,6,0,0,4,6,0,0,0,9,0,0,0,0,0,0,0,0,7,5,5,8,0,0,0,0,0,2,9,7,3,0,0,0,0,0,0,0,0,4,0,0,0,2,9,0,0,9,0,1,0,5,0,0,4,0,2,6,0,9,4,1,0,0,7]];
var problem = [3,0,6,0,0,9,8,0,1,0,0,0,8,4,6,0,0,0,0,0,2,0,0,5,0,4,0,5,0,3,0,6,0,0,2,0,0,0,8,0,0,0,6,0,0,0,9,0,0,2,0,4,0,5,0,6,0,9,0,0,3,0,0,0,0,0,7,5,3,0,0,0,7,0,9,6,0,0,5,0,2];
var rowSet = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{}};
var colSet = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{}};
var boxSet = {0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{}};
var allVals = [1,2,3,4,5,6,7,8,9];
var unsolved = 0;

function reset(cell) {
  $('#'+cell.id).removeClass("wrong-cell");
  $('#'+cell.id).removeClass("right-cell");
  $('#'+cell.id).removeClass("maybe-cell");
  $("#game-message").html = "<br>";
}

function refresh() {
  location.reload();
}

function hint() {
  for(var i=0; i<81;i++) {
    if(problem[i] == '') {
      var posVals = posValuesForCell(i);
      if(posVals.length == 1)
      {
        animateCellHint(i); break;
      }
      else if((ans = doSearchByBox(i)) != -1)
      {
        animateCellHint(i); break;
      }
      else if((ans = doSearchByRow(i)) != -1)
      {
        animateCellHint(i); break;
      }
      else if((ans = doSearchByCol(i)) != -1)
      {
        animateCellHint(i); break;
      }
    }
  }
}

function findFirstEmptyCell() {
  for(var i=0; i<81;i++) {
    if(problem[i] == '') {
      animateCell(i);
      return i;
    }
  }
}

function checkVal(cell) {
  var cellid = cell.id;
  var message = $("#game-message");
  $('#scoreval').text(unsolved);
  if(cell.value != "")
  {
    message.html("<br>");
  }
  if(unsolved == 0)
    message.text("You won! Bravo!");
  /* Sanity check */
  if (isNaN(cell.value) || cell.value == 0) {
    cell.value = "";
    $('#'+cellid).removeClass("wrong-cell");
    $('#'+cellid).removeClass("maybe-cell");
    return;
  }
  if ($('#'+cellid).hasClass('readOnly') || $('#'+cellid).hasClass('right-cell'))
  {
    return;
  }

  resetElem(cellid);
  var val = cell.value;
  if (val in rowSet[celltoi(cellid)]) {
    message.text("Look along this row!");
    $('#'+cellid).addClass("wrong-cell");
    for(k=0;k<9;k++)
    {
      animateCell(ijtocell(celltoi(cellid),k), "#bbada0", 1);
    }
  }
  else if(val in colSet[celltoj(cellid)]) {
    message.text("Look down this column!");
    $('#'+cellid).addClass("wrong-cell");
    for(k=0;k<9;k++)
    {
      animateCell(ijtocell(k,celltoj(cellid)), "#bbada0", 1);
    }
  }
  else if(val in boxSet[celltobox(cellid)]) {
    message.text("Look in this 3x3 box!");
    $('#'+cellid).addClass("wrong-cell");
    boxnum = celltobox(cellid);
    var jStart = (boxnum % 3) * 3;
    var iStart = Math.floor(boxnum / 3) * 3;
    for(var i = iStart; i < iStart + 3; i++) {
      for(var j = jStart; j < jStart + 3; j++) {
        animateCell(ijtocell(i,j), "#bbada0", 1);
      }
    }
  }
  else
  {
    /* Doing a naive search first */
    var posVals = posValuesForCell(cellid);
    if(posVals.length == 1)
    {
      message.text("Easy peasy!");
      setElem(val, cellid);
    }
    else if(val !='')
    {
      message.text("Come back here later!");
      $('#'+cellid).addClass("maybe-cell");
    }
    var ans = doSearchByBox(cellid);
    if(ans != -1 && ans == val) {
      message.text("That's good.");
      setElem(val, cellid);
    }
    var ans = doSearchByRow(cellid);
    if(ans != -1 && ans == val) {
      message.text("That's great.");
      setElem(val, cellid);
    }
    var ans = doSearchByCol(cellid);
    if(ans != -1 && ans == val) {
      message.text("Yaay, that's wonderful.");
      setElem(val, cellid);
    }
  }
  $('#scoreval').text(unsolved);
}

function animateCell(id, color, times) {
  for(var i = 0; i < times; i++) {
  $('#'+id).animate({backgroundColor: color});
  $('#'+id).animate({backgroundColor: "#edcf72"});
}
}

function animateCellHint(id) {
  $("#game-message").text("I would look here..");
  animateCell(id, "#3D9970", 3);
}

function doSearchByBox(cellid) {
  var boxnum = celltobox(cellid);
  var thisboxset = posValuesForCell(cellid);
  var allElems = [];
  jStart = (boxnum % 3) * 3;
  iStart = Math.floor(boxnum / 3) * 3;
  for(var i = iStart; i < iStart + 3; i++) {
    for(var j = jStart; j < jStart + 3; j++) {
      var cellid1 = ijtocell(i, j);
      if(problem[cellid1] == '') {
        allElems.push.apply(allElems, posValuesForCell(cellid1));
      }
    }
  }
  return findSingular(allElems, thisboxset);
}

function findSingular(allElems, thisset) {
  result = {};
  for (i = 0; i < allElems.length; i++) {
    if (!result[allElems[i]])
      result[allElems[i]] = 0;
    result[allElems[i]]++;
  }

  for(i = 0; i < thisset.length; i++)
    if (result[thisset[i]] == 1 || !(thisset[i] in result) )
      return thisset[i];

  return -1;
}

function doSearchByRow(cellid) {
  var rownum = celltobox(cellid);
  var thisrowset = posValuesForCell(cellid);
  var allElems = [];
  var i = celltoi(cellid);
  for (j = 0; j < 9; j++) {
    var cellid1 = ijtocell(i, j);
    if(problem[cellid1] == '') {
      allElems.push.apply(allElems, posValuesForCell(cellid1));
    }
  }
  return findSingular(allElems, thisrowset);
}

function doSearchByCol(cellid) {
  var colnum = celltobox(cellid);
  var thiscolset = posValuesForCell(cellid);
  var allElems = [];
  var j = celltoj(cellid);
  for (i = 0; i < 9; i++) {
    var cellid1 = ijtocell(i, j);
    if(problem[cellid1] == '') {
      allElems.push.apply(allElems, posValuesForCell(cellid1));
    }
  }
  return findSingular(allElems, thiscolset);
}

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

function posValuesForCell(cellid)
{
  var posVals = allVals.diff(getRowSet(celltoi(cellid)));
  posVals = posVals.diff(getColSet(celltoj(cellid)));
  posVals = posVals.diff(getBoxSet(celltobox(cellid)));
  return posVals;
}

function getBoxSet(boxnum) {
  return Object.keys(boxSet[boxnum]).map(Number);
}

function getRowSet(rownum) {
  return Object.keys(rowSet[rownum]).map(Number);
}

function getColSet(colnum) {
  return Object.keys(colSet[colnum]).map(Number);
}
function SudokuCreator() {
  problem = problems[Math.floor(Math.random() * (94 - 1) + 1)];
  for (var i = 0; i < 9; i++)
  {
    for(var j = 0; j < 9; j++)
    {
      var cellid = ijtocell(i, j);
      var cellip = document.getElementById(cellid);
      if (problem[cellid])
      {
        cellip.value = problem[cellid];
        cellip.readOnly = true;
        $('#'+cellid).addClass("readOnly");
        rowSet[i][problem[cellid]] = true;
        colSet[j][problem[cellid]] = true;
        boxSet[ijtobox(i,j)][problem[cellid]] = true;
      }
      else
      {
        unsolved = unsolved + 1;
      }
    }
  }
  $('#scoreval').text(unsolved);
}

function setElem(val, cellid) {
  rowSet[celltoi(cellid)][val] = true;
  colSet[celltoj(cellid)][val] = true;
  boxSet[celltobox(cellid)][val] = true;
  problem[cellid] = val;
  $('#'+cellid).addClass("right-cell");
  unsolved = unsolved - 1;
  $('#'+cellid).blur();
  animateCell('scoreval', "#bbada0", 1);
  if(unsolved == 0) {
    $('#game-message').text("You won! New game?");
    $('#startnew').animate({backgroundColor: "#d9534f"});
  }
}

function resetElem(cellid) {
  var val = problem[cellid];
  if($('#'+cellid).val() == val) {
    unsolved = unsolved + 1;
  }
  delete rowSet[celltoi(cellid)][val];
  delete colSet[celltoj(cellid)][val];
  delete boxSet[celltobox(cellid)][val];
  problem[cellid] = 0;
}

function ijtocell(i, j) {
  return i*9+j;
}

function ijtobox(i, j) {
  return Math.floor(i/3)*3 + Math.floor(j/3);
}

function celltoi(cellid) {
  return Math.floor(cellid/9);
}

function celltoj(cellid) {
  return cellid % 9;
}

function celltobox(cellid) {
  return ijtobox(celltoi(cellid), celltoj(cellid));
}

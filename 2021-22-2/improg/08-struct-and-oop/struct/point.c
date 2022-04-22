#include "point.h"
#include <stdio.h>

//think of this function as a constructor
struct Point read_a_point(){
    struct Point p;
    p.x = 1;
    p.y = 2;
    printf("Give the x coordinate of the new point: ");
    scanf("%d", &p.x);
    printf("Give the y coordinate of the new point: ");
    scanf("%d", &p.y);

    return p;
}


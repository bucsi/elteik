#include "point.h"
#include "point_pair.h"
#include <stdio.h>

int main(){
    struct Point A = read_a_point();
    printf("/n");
    struct Point B = read_a_point();

    struct PointPair AB = create_pair(A,B);
    printf("The distance between points is %f\n", AB.distance);

    return 0;
}
#ifndef POINT_PAIR_H
#define POINT_PAIR_H

#include "point.h"

struct PointPair{
    struct Point a;
    struct Point b;

    double distance;
};

struct PointPair create_pair(struct Point a, struct Point b);


#endif
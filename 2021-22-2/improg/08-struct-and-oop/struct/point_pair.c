#include "point_pair.h"

#include <math.h> /* When using math, we need to link the
math binary to our program. To do this, we use the switch -l
(meaning link a dynamic library) and the name of the math library is m

-c gives us the object (.o) file
gcc -c point_pair.c -o point_pair.o
gcc -c main.c -o main.o
gcc -c point.c -o point.o

gcc point_pair.o point.o main.o -lm -o point_exec

*/

struct PointPair create_pair(struct Point a, struct Point b){
    struct PointPair pp;

    pp.a = a;
    pp.b = b;

    //  √( (a.x - b.x)^2 + (a.y - b.y)^2 )
    //  √( (    xD   )^2 + (    yD   )^2 )
    //  √(      xD       +      yD       )
    // a.x here means the same as pp.a.x
    double xD = (pp.a.x - pp.b.x);
    double yD = (pp.a.y - pp.b.y);
    xD = pow(xD, 2);
    yD = pow(yD, 2);
    pp.distance = sqrt(xD + yD);

    return pp;
}
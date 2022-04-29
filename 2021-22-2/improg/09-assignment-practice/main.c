#include <stdio.h>
#include "reverse.h"

// char** argv == char* argv[] == char argv[][] 
int main(int argc, char** argv){
    if(argc < 2){
        printf("please give at least one file name!\n");
        return -1;
    }

    // starting loop from 1, since argv[0] is the name of this program
    for(int i=1; i<argc; i++){
        FILE* fp = fopen(argv[i], "r");

        if(fp == NULL){
            printf("Cannot read file %s, skipping...\n", argv[i]);
            continue;
        }

        reverse(fp, argv[i]);
    }

    return 0;
}
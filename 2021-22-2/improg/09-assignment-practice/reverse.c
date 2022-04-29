#include "reverse.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void reverse(FILE* fp, char* filename){
    int line_count = 5; //magic number, let's assume a typical file has 5 lines | ALSO CALLED: capacity
    int lines_already_read = 0;

    char** lines_of_file = (char**) malloc(line_count * sizeof(char*));

    char buffer[1000];
    while(fgets(buffer, sizeof(buffer), fp) != NULL){
        // if the lines_of_file array has filled up, we need to create new spaces in it
        if(lines_already_read >= line_count){
            line_count = 2*line_count;
            lines_of_file = (char**) realloc(lines_of_file, line_count * sizeof(char*));
        }

        int length_of_line = strlen(buffer);
        if(buffer[length_of_line-1] == '\n'){
            buffer[length_of_line-1] = '\0';
        }

        lines_of_file[lines_already_read] = (char*) malloc(length_of_line+1 * sizeof(char));

        strcpy(lines_of_file[lines_already_read], buffer);

        lines_already_read++;
    }

    printf("%s contents:\n", filename);
    for(int i=lines_already_read-1; i>=0; i--){
        printf("%d ", i+1);
        for(int j=strlen(lines_of_file[i])-1; j>=0; j--){
            printf("%c", lines_of_file[i][j]);
        }
        free(lines_of_file[i]);
        printf("\n");
    }
    free(lines_of_file);
    
}
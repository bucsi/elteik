#include "list.h"
#include <stdio.h>
#include <stdlib.h>

ListItem new_list(int value){
    ListItem new;

    new.value = value;
    new.next = NULL;

    return new;
}

void append(ListItem* first, int value){
    ListItem* new = (ListItem*) malloc(sizeof(ListItem));
    new -> value = value;

    ListItem* current = first;
    while(current->next != NULL){
        printf("%d -> ", current->value);
        current = current -> next;
    }
    printf("%d -> End of list, appending %d here\n",current->value, value);
    current->next = new;
   
}


void print_list(ListItem* first){
    ListItem* current = first;
    int i=1;
    while(current != NULL){
        printf("%dth element:\n", i);
        printf("--------------\n");
        printf("memory address: %p\n", current);
        printf("value: %d\n", current->value);
        printf("next*: %p\n", current->next);
        printf("\n");
        current = current -> next;
        i++;
    }
}
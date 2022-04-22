#include <stdio.h>
#include "list.h"

int main(){

    ListItem my_list = new_list(1);
    //printf("First list item (value: %d, next*: %p)\n", my_list.value, my_list.next);
    append(&my_list, 2);
    append(&my_list, 3);
    append(&my_list, 4);
    //printf("After appending:\n");
    //printf("First list item (value: %d, next*: %p)\n", my_list.value, my_list.next);
    printf("\n");
    printf("Fourth list item (value: %d, next*: %p)\n", my_list.next->next->next->value, my_list.next->next->next->next);
    //print_list(&my_list);


    return 0;
}
#ifndef LIST_H
#define LIST_H

/* generally, structs can be named with typedef in one step:

typedef struct{
    ...data of struct...
} Name;

*/

struct Item{
    int value;
    struct Item* next;
};

typedef struct Item ListItem;


ListItem new_list(int value);

void append(ListItem* first, int value);
void print_list(ListItem* first);

#endif
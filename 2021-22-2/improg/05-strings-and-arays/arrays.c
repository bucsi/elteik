#include <stdio.h>


int main(){
    int arr [10] = {99, 99, 99, 99, 99, 99, 99, 99, 99, 99};

    printf("sizeof(int): %lu, sizeof(arr)/sizeof(arr[0]): %lu\n", sizeof(int), sizeof(arr)/sizeof(arr[0]));
    for(size_t i=0; i<sizeof(arr)/sizeof(arr[0]); i++){
        printf("%d, ", arr[i]);
    }

    //homework: get
    //  - sum of elements
    //  - max element
    //  - min element
    //  - second min element

    return 0;
}
#include <stdio.h>
#include <stdlib.h> // malloc
#include <string.h>

int main(int argc, char **argv) {
  /*printf("%d is the total number of params\n", argc);
  for(int i=0; i<argc; i++){
    printf("%dth param: %s\n",i, argv[i]);
  }*/

  if (argc < 2) {
    printf("ERROR: usage of program is ./average safe|unsafe\n");
    return -1;
  }

  if (strcmp("unsafe", argv[1]) == 0) {
    printf("unsafe program\n");

    int num_of_elements;
    printf("How many numbers do you want to average?: ");
    scanf(" %d", &num_of_elements);
    if(num_of_elements < 1){
      printf("Array size cannot be negative or 0, even in a VLA!\n");
        return -1;
    }
    int arr[num_of_elements]; // VLA
    // Variable Lenght Array
    // C89 - ANSI C
    // C90 - ISO C
    // Length of an array has to be a constant
    // NOTE 1: C++ does allow this as an extension
    // NOTE 2: C99 also allows this
    for (int i = 0; i < num_of_elements; i++) {
      printf("Give me the %dth value of the array: ", i);
      scanf("%d", &arr[i]);
    }

    double sum = 0;
    for (int i = 0; i < num_of_elements; i++) {
      sum += arr[i];
    }

    printf("Average is: %lf\n", sum / num_of_elements);

    return 0;
  }

  if (strcmp("safe", argv[1]) == 0) {
    printf("safe program\n");
    int num_of_elements;
    printf("How many numbers do you want to average?: ");
    scanf(" %d", &num_of_elements);
    if(num_of_elements < 1){
      printf("Array size cannot be negative or 0, because that is UB!\n");
      return -1;
    }

    
    // instead of the VLA, we take up memory in the heap:
    int *arr = (int *)malloc(num_of_elements * sizeof(int));
    // if the allocation was unsuccessful (too big number was used), we get a NULL pointer.
    if(!arr){ // means the same as if(arr == NULL)
      printf("ERROR: Cannot allocate this much memory.\n");
      free(arr);
      return -1;
    }

    // read in values into our array on the heap
    for (int i = 0; i < num_of_elements; i++) {
      printf("Give me the %dth value of the array: ", i);
      scanf("%d", &arr[i]);
    }
    
    double sum = 0;
    for (int i = 0; i < num_of_elements; i++) {
      sum += arr[i];
    }

    printf("Average is: %lf\n", sum / num_of_elements);
    free(arr);
    return 0;
  }

  printf("ERROR: usage of program is ./average safe|unsafe\n");
  return -1;
}
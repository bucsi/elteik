#include <stdio.h>
#include <stdlib.h>
// this is the correct way to do this, with malloc()
int* make_array_of_five_zeroes(){
  int* arr = (int*) malloc(5 * sizeof(int));

  for(int i=0; i<5; i++){
    arr[i] = 0;
  }
  
  return arr;
}


int main(){
  int* arr = make_array_of_five_zeroes();

  for(int i=0; i<5; i++){
    printf("%dth value of array: %d\n", i, arr[i]);
  }

  free(arr);
  return 0;
}
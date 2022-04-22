#include <stdio.h>
// this is the INCORRECT way to do this, on the stack
int* make_array_of_five_zeroes(){
  int var = 5;
  int arr[var] = {0,0,0,0,0};
  return arr;
}


int main(){
  int* arr = make_array_of_five_zeroes();
}
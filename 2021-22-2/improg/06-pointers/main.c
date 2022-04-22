#include <stdio.h>

int* local(){
  int local_var = 99;
  printf("[in function] %p -> %d\n", &local_var, local_var);
  return &local_var;
}

int main() {
  int var = 4;
  int *p = &var;
  printf("%p memory address contains value %d\n", p, var);

  int arr[3] = {10,20,30};
  printf("%p points to the start of the array, with value %d\n", arr, *(arr));
  // *(arr) = arr[0]

  printf("The second element of the array is %d %d\n", arr[1], *(arr+2));

  int* the_local_var = local();
  printf("%p -> %d\n", the_local_var, *(the_local_var));

  return 0;
}
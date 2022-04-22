#include <stdio.h>
// code from Anett Fekete

int sumArray(int nums[], int size){
  printf("[in function] FALSE array size: %ld\n", sizeof(nums)/sizeof(nums[0]));
  int sum = 0;
  for(int i=0; i<size; i++){
    sum += nums[i];
  }
  return sum;
} 

int sumArrayPtr(int* nums, int size){
  int sum = 0, i=0;
  while(i<size){
    sum += *(nums+i); // nums[i]
    i++;
  }
  return sum;
}

int sumArrayPtrs(int* start, int* end){
  printf("array size: %ld\n", end-start);
  int sum=0;
  int* current = start;
  while(current != end){
    sum += *(current);
    current++;
  }
}
int main() {
  // 2.
  
  int var = 10;
  int *pVar = &var;
  *(pVar) = 15;
  printf("%d\n", var);

  // 3.
  char x = 'x';
  char y = 'y';
  printf("%c %c\n", x, y);
  //swapChars(&x, &y);
  printf("%c %c\n", x, y);

  // 4.
  int **ppVar = &pVar;
  printf("pVar is %p\n", pVar);
  printf("pVar's address is %p\n", &pVar);
  printf("ppVar is %p\n", ppVar);
  printf("dereferencing ppVar gives us %p\n", *(ppVar));
  int var2 = 20;
  printf("var2's address is %p\n", &var2);
  *ppVar = &var2;
  printf("dereferencing ppVar TWICE gives us %d\n", *(*(ppVar)));
  **ppVar = 30;
  printf("%d\n", *pVar);
  printf("var2 is now %d\n", var2);

  // 5.
  int *self;
  self = &self;
  printf("%p\n", self);
  printf("%p\n", &self);
  printf("%p\n", *self);

  printf("char*: %ld\n", sizeof(char *));
  printf("short*: %ld\n", sizeof(short *));
  printf("int*: %ld\n", sizeof(int *));
  printf("long*: %ld\n", sizeof(long *));
  printf("long long*: %ld\n", sizeof(long long *));
  printf("float*: %ld\n", sizeof(float *));
  printf("double*: %ld\n", sizeof(double *));
  printf("long double*: %ld\n", sizeof(long double *));
  printf("void*: %ld\n", sizeof(void *));

  // 6.
  const int size = 5;
  int numbers[5] = {1, 2, 3, 4, 5};
  printf("[in main] array size: %ld\n", sizeof(numbers)/sizeof(numbers[0]));
  printf("Sum: %d\n", sumArray(numbers, size));
  printf("Sum: %d\n", sumArrayPtr(numbers, size));

  // 7.
  printf("Sum: %d\n", sumArrayPtrs(numbers, numbers + size));

  // 8.
  // printf("local var: %d\n", *(local()));

  // 9.
  float *nullPtr = NULL;
  // printf("NULL: %p\n", *nullPtr);

  return 0;
}


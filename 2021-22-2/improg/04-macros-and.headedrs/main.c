#include <stdio.h>
#include <string.h>
#include "to_lower.h"

int main(int argc, char **argv) {

  // argv[0] is the name of the program
  for (int i = 1; i < argc; i++) {
      to_lower(strlen(argv[i]), argv[i]);
      printf("%s ", argv[i]);
  }

  printf("\n");
  return 0;
}

/*
function to_lower(word):
  loop thru letters of word
  word[i] == 'A' -> 'a'
  word[i] == 'B' -> 'b'





*/
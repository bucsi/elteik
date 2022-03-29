#include "to_lower.h" // this is what we implement here 


#define REPLACE(U, L) if (string[i] == U) string[i] = L

void to_lower(int length, char* string){
    for(int i=0; i<length; i++){
        REPLACE('A', 'a');
        else REPLACE('B', 'b');
        else REPLACE('C', 'c');
        else REPLACE('D', 'd');
        else REPLACE('E', 'e');
        else REPLACE('F', 'f');
        else REPLACE('G', 'g');
        else REPLACE('H', 'h');
        else REPLACE('I', 'i');
        else REPLACE('J', 'j');
        else REPLACE('K', 'k');
        else REPLACE('L', 'l');
        else REPLACE('M', 'm');
        else REPLACE('N', 'n');
        else REPLACE('O', 'o');
        else REPLACE('P', 'p');
        else REPLACE('Q', 'q');
        else REPLACE('R', 'r');
        else REPLACE('S', 's');
        else REPLACE('T', 't');
        else REPLACE('U', 'u');
        else REPLACE('V', 'v');
        else REPLACE('W', 'w');
        else REPLACE('X', 'x');
        else REPLACE('Y', 'y');
        else REPLACE('Z', 'z');
    }
}


void to_lower2(int length, char* string){
    for(int i = 0; i<length; i++){
        if (string[i] == 'A') string[i] = 'a';
         else if (string[i] == 'B') string[i] = 'b';
         else if (string[i] == 'C') string[i] = 'c';
         else if (string[i] == 'D') string[i] = 'd';
         else if (string[i] == 'E') string[i] = 'e';
         else if (string[i] == 'F') string[i] = 'f';
         else if (string[i] == 'G') string[i] = 'g';
         else if (string[i] == 'H') string[i] = 'h';
         else if (string[i] == 'I') string[i] = 'i';
         else if (string[i] == 'J') string[i] = 'j';
         else if (string[i] == 'K') string[i] = 'k';
         else if (string[i] == 'L') string[i] = 'l';
         else if (string[i] == 'M') string[i] = 'm';
         else if (string[i] == 'N') string[i] = 'n';
         else if (string[i] == 'O') string[i] = 'o';
         else if (string[i] == 'P') string[i] = 'p';
         else if (string[i] == 'Q') string[i] = 'q';
         else if (string[i] == 'R') string[i] = 'r';
         else if (string[i] == 'S') string[i] = 's';
         else if (string[i] == 'T') string[i] = 't';
         else if (string[i] == 'U') string[i] = 'u';
         else if (string[i] == 'V') string[i] = 'v';
         else if (string[i] == 'W') string[i] = 'w';
         else if (string[i] == 'X') string[i] = 'x';
         else if (string[i] == 'Y') string[i] = 'y';
         else if (string[i] == 'Z') string[i] = 'z';
    }
}
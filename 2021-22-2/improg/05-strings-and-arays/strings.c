#include <stdio.h>
#include <string.h>

#define MIN(x,y) (  ((x) < (y)) ? (x) : (y)  )


int min(int this, int that){
    this=100;
    printf("%p -> %d\n", &this, this);
    return this < that ? this : that;
}


int main(){
    

    char word[20];
    scanf("%s", word);
    /* compare this with
    int a;
    scanf("%d", &a);
                ^ do not forget the ampersand with other data types,    
    it can be left out ONLY WITH ARRAYS!!!
    */

    printf("word length: %d", strlen(word));

    int counter = 0;
    char current = word[counter];
    while('\0' != current){
        printf("%c, ", current);
        current = word[++counter];
    }
    printf("{%c}", current);

    char str1[] = "Dunaharaszti";
    char str2[] = "Dunavarsány";

    size_t str1size = sizeof(str1)/sizeof(str1[0]); //sizeof(char)
    size_t str2size = sizeof(str2)/sizeof(str2[0]); //sizeof(char)

    for(int i=0; i<MIN(str1size, str2size); i++){
        if(str1[i] == str2[i]){
            //do nothing
            continue;
        }else if(str1[i] < str2[i]){
            printf("%s is ahead in the alphabetical order", str1);
            break;
        }else{
            printf("%s is ahead in the alphabetical order", str2);
            break;
        }
    }

    return 0;
}
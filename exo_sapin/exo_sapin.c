#include <stdio.h>
#include <stdlib.h>
//#include <math.h>
//#include <string.h>
#include <time.h>
#include <windows.h>

//Headers
int sapinTop (int inputUser);
int sapinBody (int inputUser);
int genStr(int *pointTable);
int sapinFoot (int inputUser);
int inputSapin();

int main ()
{
    int inputUser = inputSapin();

    sapinTop(inputUser);
    sapinBody(inputUser);
    sapinFoot (inputUser);

    return 0;
}

int inputSapin()
{
    int inputUser;
    printf("Entre nombre batard:\n");
    scanf("%d", &inputUser);

    return inputUser;
}

int sapinTop (int inputUser)
{
    printf("%.*s", inputUser+4 , "                                                                                                                        ");
    printf("+\n");
    
    printf("%.*s", inputUser+3 , "                                                                                                                        ");
    printf("/*\\\n");
    
    return 0;
}

int sapinBody (int inputUser)
{
    int compteur = 0;
    int largeur = 1;
    int espace = inputUser + 2;
    int row = 1;
    int hauteur = 0;

    int string_table[100];
    int *pointTable = &string_table;

    while(compteur<inputUser)
    {
        printf("%.*s", espace , "                                                                                                                            ");
        printf("/");
        printf("*");
            
        for (int i=0; i<largeur; i++){
            
            genStr(pointTable);
            Sleep(40);
            printf("%c", *(pointTable+i));
        }
        printf("*");
        printf("\\\n");
        compteur++;
        largeur += 2;
        espace--;
        row++;

        if (row==3)
        {
            largeur-=2;
            espace++;
            row=0;
        }
    }
    return largeur;
}
int genStr(int *pointTable)
{
    //int string_table[100];
    int i;
    int n = 50;
    time_t t;
      
    /* Intializes random number generator*/ 
    srand((unsigned) time(&t));

    /* Print 5 random numbers from 0 to 5 */
    for( i = 0 ; i < n ; i++ ) {
        int rdnNum = ("%d", rand() % 5);
        switch ( rdnNum )
        {
            case 1:
                *(pointTable+i) = 42;
                break;
            case 2:
                *(pointTable+i) = 111;
                break;
            case 3:
                *(pointTable+i) = 43;
                break;
            case 4:
                *(pointTable+i) = 42;
                break;
            default: 
                *(pointTable+i) = 42;
        }
    }
    return 0;
}

int sapinFoot (int inputUser)
{
    if (inputUser==1){
        printf("%.*s", inputUser+4 , "                                                                                                                        ");
        printf("#");
    }else if (inputUser == 2){
        printf("%.*s", inputUser+4 , "                                                                                                                        ");
        printf("#");    
    }else{
    
        for(int i=2; i<inputUser; i++)
        {
            printf("%.*s", inputUser+1 , "                                                                                                                        ");
            printf("  ###\n");

            if (i%2==0){
                i++;
            }
        }
    }
    return 0;
}
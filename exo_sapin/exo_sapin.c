#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <windows.h>

//Headers
int sapinTop (int inputUser);
int sapinBody (int inputUser);
int genStr(int *pointTable);
int sapinTrunk (int inputUser);
int inputSapin();

int main ()
    //Main is where i call my functions in the right order
{
    int inputUser = inputSapin();

    sapinTop(inputUser);
    sapinBody(inputUser);
    sapinTrunk (inputUser);

    return 0;
}

int inputSapin()
//This one is just for asking through the cmd an input from the user
{
    int inputUser;
    printf("Entre la longueur du sapin:\n");
    scanf("%d", &inputUser);

    return inputUser;
}

int sapinTop (int inputUser)
//Draw the star and the first row of the tree whit the inputUser to print it in the right place
{
    printf("%.*s", inputUser+4 , "                                                                                                                        ");
    printf("+\n");
    
    printf("%.*s", inputUser+3 , "                                                                                                                        ");
    printf("/*\\\n");
    
    return 0;
}

int sapinBody (int inputUser)
//Is used to print the body of the tree row by row
{
    int counter =1, row = 1, width = 1;     //Init of multiple counter at 1 because the 1st row is already here
    int space = inputUser + 2;

    int string_table[100];                  //init of the [] for the tree filling 
    int *pointTable = &string_table;        //init pointeur to be able to modify string_table directly in the memory

    while(counter<inputUser)
    {
        printf("%.*s", space , "                                                                                                                            ");
        printf("/");                        //multiple prints for the begining of the row    /*
        printf("*");
            
        for (int i=0; i<width; i++){        //used for fill the tree whit a rnd char each turn
            
            genStr(pointTable);             //call of the rdnGen whith the pointer init earlier
            Sleep(40);                      //whithout this memory doesn't change fast enought and the print isn't rnd
            printf("%c",*(pointTable+i));   //trad: print in a char format, the content of the adress in pointTable
        }                                   // and next turn do this for the following memory adress
                                            //the %c is important, i need 42 to be read via ASCII
        printf("*");
        printf("\\\n");
        counter++;                          //updates of the various counters 
        width += 2;
        space--;
        row++;

        if (row==3)                         //modification of the counters for a nice looking tree
        {
            width-=2;
            space++;
            row=0;
        }
    }
    return width;
}

int genStr(int *pointTable)
//Genereate the filling of the tree
{
    time_t t;                               //time stamps necessary for the rnd part
      
    srand((unsigned) time(&t));             //Intializes random number generator

    for(int i = 0 ; i < 50 ; i++ ) {        //I want 50 char for each gen in the end
        int rdnNum = ("%d", rand() % 5);    // rndNum 
        switch ( rdnNum )                   //Switch to customize the randomness
        {
            case 1:                         //if rndNum==1 
                *(pointTable+i) = 42;       //the content of the adress in pointTable in the array is 42
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
    return 0;                               //i don't need to return something bcos i modify in the memory directly
}

int sapinTrunk (int inputUser)
//to generate the trunk of the tree
{
    if (inputUser==1 || inputUser==2){              //bcos they have only one # i do them manualy
        printf("%.*s", inputUser+4 , "          "); 
        printf("#");
    }else{
    
        for(int i=2; i<inputUser; i++)              //for all the input <2
        {
            printf("%.*s", inputUser+1 , "                                                                                                                        ");
            printf("  ###\n");

            if (i%2==0){                            //i jump step in the loop to match the request of the exercices
                i++;
            }
        }
    }
    return 0;
}
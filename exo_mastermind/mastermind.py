import random

possibleColors = ["yellow","blue","red","green","white","black"] 
genList = []
booleanArray = []

def genSequence () :
    genList.append(possibleColors[ random.randint(0,5)])
    genList.append(possibleColors[ random.randint(0,5)])
    genList.append(possibleColors[ random.randint(0,5)])
    genList.append(possibleColors[ random.randint(0,5)])
    return genList             

def inputPlayer() :
    playerInput = input("Entrez une suite de quatre couleurs parmi \n" + str(possibleColors) + "\n")
    playerArray = playerInput.split()
    while len(playerArray) != 4 :
        print("Seulement 4 couleurs on à dit")
        playerInput = input("Entrez une suite de quatre couleurs parmi \n" + str(possibleColors) + "\n")
        playerArray = playerInput.split()
    return playerArray 
   
def verifInputPlayer(genList, playerArray) :
    for a in playerArray :
        for i in genList :

            if a==i :
               booleanArray.append(True)

            else :
                booleanArray.append(False)


    return booleanArray

def howManyGoodPlace(booleanArray) :
    trueTrue = 0
    
    if booleanArray[0] == True :
        trueTrue += 1
        booleanArray[0] = False
        booleanArray[1] = False        
        booleanArray[2] = False
        booleanArray[3] = False

    if booleanArray[5] == True :
        trueTrue += 1
        booleanArray[5] = False
        booleanArray[6] = False        
        booleanArray[7] = False
        booleanArray[8] = False
        
    if booleanArray[10] == True :
        trueTrue += 1
        booleanArray[10] = False
        booleanArray[11] = False        
        booleanArray[12] = False
        booleanArray[13] = False
        
    if booleanArray[15] == True :
        trueTrue += 1
        booleanArray[15] = False
        
    return trueTrue

def howManyWrongPlace(booleanArray) :
    falseTrue = 0
    falseTrue = booleanArray.count(True)
    
    return falseTrue
    
def interpretResults () :
    trueTrue = howManyGoodPlace(booleanArray)
    falseTrue = howManyWrongPlace(booleanArray)
    if trueTrue == 4 : 
        falseTrue = 0
    if falseTrue > 4 :
        falseTrue = 4
    if falseTrue + trueTrue > 4 :
        falseTrue -= trueTrue
    reponse = "Il y a "+ str(trueTrue) +" bonnes couleurs au bon endroit et "+ str(falseTrue) +" bonnes couleurs au mauvais endroit !"
    return reponse
    
    
    
    
genSequence()
print(genList)
print(verifInputPlayer(genList, inputPlayer()))
print(interpretResults())  
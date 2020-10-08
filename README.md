# LWM Hochzeitsraetsel

## The challenge

Leonie and Wolfgang need to complete a little scavenger hunt so they earn their wedding present. The "encrypted" texts, that this code provides are part of this game. The newlyweds need to use these encrypted texts together with a "well known" hinttext to decrypt a solution text, that contains the combination for a lock, that guards the present.

## Procedure
- The couple is presented with the two ciphertexts mentioned above: **cipherhinttext** and **ciphersolutiontext**. They probably don't know what to do with them just now.
- Other clues during the trip lead the couple to a "well known" text. In our case, it is a recipe from a cookbook, that is well known to the newlyweds. Lets call it **hinttext**.
- Since the two ciphertexts were produced using the same mapping, that translates plaintext to ciphertext, the couple can use their copy of the cookbook (that has the **hinttext**) to reverse engineer the mapping from the **cipherhinttext**.
- Now, that the mapping is retrieved, it can be used to decrypt the **ciphersolutiontext**


## Overview

This software takes two textfiles, "hinttext.txt" and "solutiontext.txt", primitively "encrypts" them and provides two output files: "cipherhinttext.txt" and "ciphersolutiontext.txt"

## Implementation
- the two textfiles **hinttext.txt** and **solutiontext.txt** are read as **hintText** and **solutionText**
- extract all unique characters from **hintText** and build the **plainAlphabet**
- randomly shuffle the **plainAlphabet** to generate the **chipherAlphabet**. Output the two lists side-by-side as the **mapping.txt**
- encrypt the **hintText** with the mapping and output as **cipherhinttext.txt**
- encrypt the **solutionText** with the mapping and output as **ciphersolutiontext.txt**

## building and running
- `npm install`
- `node hochzeit.js`





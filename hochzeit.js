const fs = require('fs');
const { exit } = require('process');
var seedrandom = require('seedrandom');
var rng = seedrandom('20201009');

const hintText = fs.readFileSync('hinttext.txt').toString();
const solutionText = fs.readFileSync('solutiontext.txt').toString();
const plainAlphabet = []

// read all characters from hintText into the plainAlphabet
for (let i=0;i<hintText.length;i++)
{
    const c = hintText.charAt(i);
    if (!plainAlphabet.includes(c) && c != '\n')
        plainAlphabet.push(c)
}
// Shuffle plain alphabet to lose context
plainAlphabet.sort(() => rng() - 0.5)

//generate a random cipher alphabet by copying and shuffling the plain alphabet again
const cipherAlphabet = Array.from(plainAlphabet).sort(() => rng() - 0.5)

// Assemble the Cipher -> Plaintext mapping
let solutionMapping = 'Ciphertext -> Klartext\n'
for (let i = 0; i < cipherAlphabet.length; i++) {
    const line = cipherAlphabet[i] + ' -> ' + plainAlphabet[i];
    solutionMapping += line + '\n';
}
fs.writeFileSync('mapping.txt', solutionMapping);


// Assemble the empty mapping, so it can be filled out easily on a piece of paper
let solutionMappingEmpty = 'Ciphertext -> Klartext\n'
for (let i = 0; i < cipherAlphabet.length; i++) {
    const line = cipherAlphabet[i] + ' -> __';
    solutionMappingEmpty += line + '\n';
}
fs.writeFileSync('mappingEmpty.txt', solutionMappingEmpty);


// now, encrypt both texts with the mapping
let ciphersolutionText = encrypt(solutionText);
let cipherhintText = encrypt(hintText);

fs.writeFileSync('ciphersolutiontext.txt', ciphersolutionText);
fs.writeFileSync('cipherhinttext.txt', cipherhintText);

function encrypt(plaintext)
{
    let cipherText = '';
    for (let i = 0; i < plaintext.length; i++) {
        const c = plaintext[i];
        if (c=='\n')
        {
            cipherText += c;
            continue;
        }

        const index = plainAlphabet.indexOf(c);

        if (index != -1)
        {
            cipherText += cipherAlphabet[index];
        }
        else
        {
            console.error('Error: no mapping for character \'' + c + '\'');
            exit(-1);
        }
    }
    return cipherText;
}




== DECLARATIVE LANGS ==
Example 1: Prolog

```prolog
isFather(Homer Simpson, Bart Simpson).
isHusband(Homer Simpson, Marge Simpson).

isMother(X,Y) :- isFather(Z, Y), isHusband(Z,X)
isMother(Marge,Bart) :- isFather(Z,Bart), isHusband(Z, Marge)
```

Example 2: SQL (Sequel) for databases
SELECT name FROM wifes WHERE wifes.husband = "Homer" AND husbands.son = "Bart"

== IMPERATIVE, OBJECT-ORIENTED EXAMPLE ==
let homer = {
	son: Bart
	wife: Marge
}

let people = [homer, ..., ...]

loop over all people:
    let x be one person in the loop:
    	if (x.wife == marge and x.son == bart)
    		we found the mother of Bart

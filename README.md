# ORACLE Poem Reader

## Introduction

This program reads a text file, with the ORACLE poem in it.
It reads the poem line number that the user has inputted.

## How to Run

Open terminal and run the following:

### Command
```
node trypoem.js 
```

### Prompt

Follow the instructions below
```
Welcome to Poem Line Reader!
TITLE  : ORACLE
AUTHOR : DURIEL E. HARRIS

Enter the line number (or "q" to quit): 
```

| Params | Description |
| -------- | ------- |
| number | any digits [0..9]|
| q | to quit |
| | |


If the user inputs any character other than `[0..9]` or `q`, below is a sample error message:

```
Line Number is Empty, please try again.
```
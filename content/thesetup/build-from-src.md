+++
draft = false
title = 'Build From Source'
weight = 1
summary = """\
Tools you will need. \
"""
[params]
  author = 'iansmith'
+++

# README
If you want to build from source, this is probably some info you will need.

### tailwind
The node modules for tailwind and daisyui are not checked in.  You need to 
install yourself in the directory `tailwind`.
```bash
cd tailwind
npm i tailwindcss
npm i @tailwindcss/typography
npm i daisyui
```
or just:
```bash
cd tailwind
npm i
```
Ugh, 124 packages installed.

### gitignore

You may want to check `.gitignore` to see what is being excluded to avoid nasty
surprises.

### enable script
I put this is the _parent_ of the .git directory, so something like
`$HOME/foo/enable-foo` with the source code in `$HOME/foo/src` and 
`$HOME/foo/src/.git`.

```bash
export PATH=$HOME/dsbook/bin:\
/usr/bin:\
/bin:\
/usr/sbin:\
/sbin

## specify things from /usr/local/bin, don't put it in the path
alias code=/usr/local/bin/code


## In the bin dir are symlinks to
# golang 1.23.2
# hugo 0.136.4+extended
# npm 10.8.3
# node 22.9.0
# task 3.39.2

```

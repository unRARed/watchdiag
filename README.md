watchdiag
=========

Simple script for compiling `blockdiag` diagrams like this one:

```blockdiag
blockdiag {
  this -> an_example [label = "is"];
}
```

![blockdiag example](https://raw.githubusercontent.com/unRARed/watchdiag/main/example.png)

Installation
------------

You need `python` and `nodejs`. I realize I could have done it
all in `python`. Oh well... Submit a PR?

- `pip3 install blockdiag`
- `pip3 install --force-reinstall -v "pillow==9.5"`
- `yarn install`

Usage
-----

Create your source files in `./source/*` (name them as `*.diag`) 
and then run: `bin/dev`.

![blockdiag example](https://raw.githubusercontent.com/unRARed/watchdiag/main/watchdiag-console.png)

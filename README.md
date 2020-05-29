# GitTracker

use this tool to track your git stats

*Under Development*


## How to use

- Follow the instructions in create git hooks to todo section in order to manually install a global hook (script coming soon)
- run `npm link` inside root of this project to use the `gittracker` command

## TODO
### Create an install script
For pointing the git stat output to a specified url (and whatever other config info we need)


### Create command to audit entire project

This would be awesome so that you can get all the stats for a project and save it in your db

### Create Git Hooks
write a script to do this automatically:

Enable git templates:
```shell script
git config --global init.templatedir '~/.git-templates'
```

This tells git to copy everything in ~/.git-templates to your per-project .git/ directory when you run git init

Create a directory to hold the global hooks:
```shell script
mkdir -p ~/.git-templates/hooks
```

3. Write your hooks in ~/.git-templates/hooks.
For example, here's a post-commit hook (located in ~/.git-templates/hooks/post-commit):

```
#!/bin/sh

# Your scripts here
```

Make sure the hook is executable.
```shell script
chmod a+x ~/.git-templates/hooks/post-commit
```

5. Re-initialize git in each existing repo you'd like to use this in:
```shell script
git init
```


## Contributions


Would love to have as much community input as possible

Please submit a PR or open an issue.

*Code quality insurance is coming soon



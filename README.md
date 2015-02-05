# Pom
Pom is a simple and configurable pomodoro timer.

[![NPM version](https://badge.fury.io/js/pom.png)](http://badge.fury.io/js/pom)

## Install
```
npm install -g pom
pom -h
```

## Configuration
The first time you will run `pom`, it will copy the standard configuration file in `~/.pom.yml`:

```yml
duration:
    pomodoro: 1
    break: 1
commands:
    pomodoro:
        start:
            - terminal-notifier -message "Inizio pomodoro"
            - osascript -e 'tell application "Spotify" to play';
        end:
            - terminal-notifier -message "Fine pomodoro"
            - osascript -e 'tell application "Spotify" to pause';
    break:
        start:
            - terminal-notifier -message "Inizio pausa :)"
        end:
            - terminal-notifier -message "Fine pausaaaaaa"
```

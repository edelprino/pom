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
    pomodoro: 25
    break: 5
commands:
    pomodoro:
        start:
            - terminal-notifier -message "Pomodoro started!"
            - osascript -e 'tell application "Spotify" to play';
        stop:
            - osascript -e 'tell application "Spotify" to pause';
        end:
            - terminal-notifier -message "Pomodoro ended!"
            - osascript -e 'tell application "Spotify" to pause';
    break:
        start:
            - terminal-notifier -message "Break started!"
        end:
            - terminal-notifier -message "Break ended!"
```

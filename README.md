# Pom
Pom is a simple and configurable pomodoro timer.

[![NPM version](https://badge.fury.io/js/pom.png)](http://badge.fury.io/js/pom)
[![Build Status](https://travis-ci.org/edelprino/pom.svg?branch=master)](https://travis-ci.org/edelprino/pom)

## Install
```
npm install -g pom
pom -h
```

## Configuration
The first time you will run `pom`, it will copy the standard configuration file in `~/.pom.yml`:

```yml
default:
    duration: 25
    start:
        - terminal-notifier -message "Pomodoro started!"
        - osascript -e 'tell application "Spotify" to play';
    stop:
        - terminal-notifier -message "Pomodoro stoped!"
        - osascript -e 'tell application "Spotify" to pause';
    end:
        - terminal-notifier -message "Pomodoro ended!"
        - osascript -e 'tell application "Spotify" to pause';

short:
    duration: 5
    start:
        - terminal-notifier -message "Short break started!"
    stop:
        - terminal-notifier -message "Short break stoped!"
    end:
        - terminal-notifier -message "Short break ended!"

long:
    duration: 15
    start:
        - terminal-notifier -message "Long break started!"
    stop:
        - terminal-notifier -message "Long break stoped!"
    end:
        - terminal-notifier -message "Long break ended!"
```

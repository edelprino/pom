# Pom
Pom is a simple and configurable pomodoro timer.

## Install
    npm install -g pom

## Configuraion
```yml
duration:
    pomodoro: 1
    break: 1
event:
    pomodoro:
        start:
            - terminal-notifier -message "Inizio pomodoro"
            - osascript -e 'tell application "Spotify" to play'
        end:
            - terminal-notifier -message "Fine pomodoro"
            - osascript -e 'tell application "Spotify" to pause'
    break:
        start:
            - terminal-notifier -message "Inizio pausa :)"
        end:
            - terminal-notifier -message "Fine pausaaaaaa"
```
